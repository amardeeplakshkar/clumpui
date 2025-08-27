"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Command,
  Component,
  File,
  Frame,
  IdCard,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SparklesIcon,
  SquareTerminal,
  Text,
} from "lucide-react"

import { NavMain } from "@/components/ui/nav-main"
import { NavProjects } from "@/components/ui/nav-projects"
import { NavSecondary } from "@/components/ui/nav-secondary"
import { NavUser } from "@/components/ui/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LogoIcon } from "../core/Logo"
import { siteConfig } from "@/config/site"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Documentation",
      url: "#",
      isActive: true,
      icon: BookOpen,
      items: siteConfig.docs.map((component) => ({
        title: component.title,
        url: component.path,
        Icon: component.Icon && component.Icon,
        path: component.path
      })),
    },
    {
      title: "AI Components",
      url: "#",
      icon: SparklesIcon,
      items: siteConfig.aiComponents.map((component) => ({
        title: component.title,
        url: component.path,
        Icon: component.Icon && component.Icon
      })),
    },
    {
      title: "Components",
      url: "#",
      icon: Component,
      isActive: false,
      items: siteConfig.components.map((component) => ({
        title: component.title,
        url: component.path,
        Icon: component.Icon && component.Icon
      })),
    },
     {
      title: "Cards",
      url: "#",
      icon: IdCard,
      isActive: false,
      items: siteConfig.cardComponents.map((component) => ({
        title: component.title,
        url: component.path,
        Icon: component.Icon && component.Icon
      })),
    },
    {
      title: "Texts",
      url: "#",
      icon: Text,
      isActive: false,
      items: siteConfig.textComponents.map((component) => ({
        title: component.title,
        url: component.path,
        Icon: component.Icon && component.Icon
      })),
    },
    {
      title: "Buttons",
      url: "#",
      icon: Component,
      isActive: false,
      items: siteConfig.buttonComponents.map((component) => ({
        title: component.title,
        url: component.path,
        Icon: component.Icon && component.Icon
      })),
    },
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: "General",
    //       url: "#",
    //     },
    //     {
    //       title: "Team",
    //       url: "#",
    //     },
    //     {
    //       title: "Billing",
    //       url: "#",
    //     },
    //     {
    //       title: "Limits",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <LogoIcon size={24} />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">ClumpUI</span>
                  <span className="truncate text-xs">Mix. Match. Ship.</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
    </Sidebar>
  )
}
