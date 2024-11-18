"use client";

import Logo from "../../assets/logo";
import {
  Briefcase,
  Home,
  LucideLogOut,
  MessageSquareText,
  MonitorCog,
  Moon,
  PanelLeftClose,
  Settings,
  Sparkle,
  Sun,
  User,
  GraduationCap,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";
import Image from "next/image";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
  {
    title: "Profile",
    url: "#",
    icon: User,
  },
  {
    title: "Job Postings",
    url: "/jobs",
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
  {
    title: "Student Corner",
    url: "#",
    icon: GraduationCap,
  },
];

export function AppSidebar({ data, handleSignOut }) {
  const { theme, setTheme } = useTheme();

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
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
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
                  {data.name === "" ? (
                    <Skeleton className="w-full h-12" />
                  ) : (
                    <>
                      <Image
                        src={data?.imageUrl}
                        alt=""
                        width={32}
                        height={32}
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
                    <DropdownMenuItem
                      onClick={(e) => handleSignOut(e)}
                      className="text-red-500 cursor-pointer"
                    >
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

export function SidebarCustomTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className="p-2 h-auto self-start bg-white/5 absolute top-2 left-2 ml-2 backdrop-blur-lg font-semibold flex items-center gap-2 lg:hidden rounded-md hover:bg-white/15"
    >
      <PanelLeftClose /> Open Sidebar
    </button>
  );
}
