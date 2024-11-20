"use client";

import { createContext, useState, useEffect, useCallback } from "react";
import { ID } from "appwrite";
import {
  account,
  client,
  databases,
  appwriteConfig,
  avatars,
} from "@/lib/appwrite/config";

export const AuthsContext = createContext();

export const AuthsProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch additional user data from the database
  const fetchUserData = useCallback(async (accountId) => {
    try {
      const userDocument = await databases.getDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        accountId
      );
      return userDocument;
    } catch (error) {
      if (error.code === 404) {
        console.warn("User document not found:", error);
      } else {
        console.error("Error fetching user data:", error);
      }
      return null;
    }
  }, []);

  // Fetch the current authenticated user and merge additional data
  const fetchCurrentUser = useCallback(async () => {
    try {
      const user = await account.get();
      console.warn(user.$id);
      const userData = await fetchUserData(user.$id);

      setCurrentUser({
        ...user,
        data: userData,
      });
    } catch (error) {
      if (error.code === 401) {
        // Unauthorized or no session
        setCurrentUser(null);
      } else {
        console.error("Error fetching user:", error);
      }
    } finally {
      setLoading(false);
    }
  }, [fetchUserData]);

  useEffect(() => {
    // Fetch current user on initial load
    fetchCurrentUser();

    // Listen for session changes
    const unsubscribe = client.subscribe("account", async (event) => {
      if (
        event.events.includes("users.sessions.create") ||
        event.events.includes("users.sessions.delete")
      ) {
        await fetchCurrentUser();
      }
    });

    return () => unsubscribe();
  }, [fetchCurrentUser]);

  const login = async (email, password) => {
    try {
      await account.createEmailPasswordSession(email, password);
      await fetchCurrentUser();
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession("current");
      setCurrentUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  const register = async (email, password, name, username) => {
    try {
      const userId = ID.unique();
      console.log("Generated userId:", userId);

      const res = await account.create(userId, email, password, name);
      await account.createEmailPasswordSession(email, password);

      const avatarUrl = avatars.getInitials(res.name);

      await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        userId,
        {
          accountId: res.$id,
          name,
          email,
          username,
          isAlumni: false,
          imageUrl: avatarUrl,
        }
      );

      await fetchCurrentUser();
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  };

  return (
    <AuthsContext.Provider
      value={{ currentUser, loading, login, logout, register }}
    >
      {!loading && children}
    </AuthsContext.Provider>
  );
};
