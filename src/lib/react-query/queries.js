import { useQuery, useMutation } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/lib/react-query/keys";

import { createUserAccount } from "../appwrite/create-user";
import { signInAccount } from "../appwrite/login-user";
import { signOutAccount } from "../appwrite/sign-out";
import { getCurrentUser } from "../appwrite/get-current-user";

// ============================================================
// AUTH QUERIES
// ============================================================

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user) => createUserAccount(user),
  });
};

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user) => signInAccount(user),
  });
};

export const useSignOutAccount = () => {
  return useMutation({
    mutationFn: signOutAccount,
  });
};

// ============================================================
// USER QUERIES
// ============================================================

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_CURRENT_USER],
    queryFn: getCurrentUser,
  });
};
