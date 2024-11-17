"use client";

import React, { useEffect } from "react";
import Logo from "../../assets/logo";
import {
  Briefcase,
  Calendar,
  Home,
  Inbox,
  LucideLogOut,
  Menu,
  MessageSquareText,
  MonitorCog,
  Moon,
  Search,
  Settings,
  Sparkle,
  Sun,
  User,
} from "lucide-react";
import { useTheme } from "next-themes";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import ThemeToggle from "./toggle-theme";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { useUserContext } from "@/context/AuthContext";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";
import { toast } from "sonner";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Profile",
    url: "#",
    icon: User,
  },
  {
    title: "Job Postings",
    url: "#",
    icon: Briefcase,
  },
  {
    title: "Chats",
    url: "#",
    icon: MessageSquareText,
  },
  {
    title: "Community & News",
    url: "#",
    icon: Sparkle,
  },
];

export default function AppSidebar() {
  const { theme, setTheme } = useTheme();
  const { user, isAuthenticated, checkAuthUser } = useUserContext();

  const [data, setData] = React.useState(null);

  const checkAuth = async () => {
    await checkAuthUser();
  };

  useEffect(() => {
    if (!isAuthenticated) return;

    checkAuth();

    user.name === "" ? toast("You are not logged in") : setData(user);

    return () => true;
  }, [isAuthenticated]);

  return (
    <Sidebar>
      <SidebarHeader>
        <h2 className="pl-2 pt-2 flex items-center gap-2 text-lg font-bold tracking-tight">
          <Logo height={18} color={theme === "dark" ? "#ffffff" : "#000000"} />
          Alumni Jams
        </h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Alumni Jams</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="mb-2 bg-white/5 rounded-lg">
              <SidebarMenuItem className="py-0 px-2">
                <SidebarMenuButton className="h-auto">
                  {user.name === "" ? (
                    <Skeleton className="w-full h-12" />
                  ) : (
                    <>
                      <img
                        src={data?.imageUrl}
                        alt=""
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex flex-col items-start justify-center py-2">
                        <span>{data?.name}</span>
                        <span className="text-sm text-gray-400">
                          {data?.email}
                        </span>
                      </div>
                    </>
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            <Separator className="bg-white/5" />

            <SidebarMenu className="mt-2">
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        <Settings />
                        <span>Settings</span>
                      </a>
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent side="top" align="start">
                    <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => setTheme("light")}
                    >
                      <Sun /> Light
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => setTheme("dark")}
                    >
                      <Moon /> Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => setTheme("system")}
                    >
                      <MonitorCog />
                      System
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-500 cursor-pointer">
                      <LucideLogOut /> Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
