
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Shield } from "lucide-react";
import { 
  BarChart3, 
  Target, 
  FileText, 
  AlertCircle, 
  Settings, 
  Users, 
  LogOut, 
  Search, 
  Code,
  Bot,
  Database
} from "lucide-react";
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";

interface DashboardSidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onSignOut: () => void;
}

export const DashboardSidebar = ({ open, setOpen, onSignOut }: DashboardSidebarProps) => {
  const location = useLocation();

  // Define navigation items for reuse
  const mainNavItems = [
    { title: "Dashboard", path: "/dashboard", icon: BarChart3 },
    { title: "Penetration Tests", path: "/dashboard/scans", icon: Target },
    { title: "Reports", path: "/dashboard/reports", icon: FileText },
    { title: "Threat Analysis", path: "/dashboard/threats", icon: AlertCircle },
  ];

  const toolsNavItems = [
    { title: "Automated Scanning", path: "/dashboard/automated-scan", icon: Search },
    { title: "Manual Testing", path: "/dashboard/manual-testing", icon: Code },
    { title: "Social Engineering", path: "/dashboard/social-engineering", icon: Users },
    { title: "Compliance Audits", path: "/dashboard/compliance", icon: Database },
    { title: "AI Assistant", path: "/dashboard/assistant", icon: Bot },
  ];

  const settingsNavItems = [
    { title: "Settings", path: "/dashboard/settings", icon: Settings },
    { title: "Sign Out", action: onSignOut, icon: LogOut },
  ];

  // Check if a navigation item is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="hidden md:block">
      <Sidebar collapsible="icon">
        <SidebarContent>
          <div className={`p-4 flex items-center ${!open ? "justify-center" : "justify-between"}`}>
            <div className={`flex items-center gap-2 ${!open ? "hidden" : "flex"}`}>
              <div className="w-8 h-8 bg-emerald-500 rounded-md flex items-center justify-center">
                <Shield className="text-black w-5 h-5" />
              </div>
              <span className="font-bold text-lg">Hacker Mind</span>
            </div>
            <div className={!open ? "flex justify-center w-full" : ""}>
              <Shield className={`text-emerald-500 w-6 h-6 ${!open ? "block" : "hidden"}`} />
            </div>
          </div>

          <SidebarGroup>
            <SidebarGroupLabel className={!open ? "hidden" : "block"}>
              Main
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {mainNavItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive(item.path)}>
                      <Link to={item.path} className="flex items-center">
                        <item.icon className="h-5 w-5 mr-2" />
                        <span className={!open ? "hidden" : "block"}>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className={!open ? "hidden" : "block"}>
              Tools
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {toolsNavItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive(item.path)}>
                      <Link to={item.path} className="flex items-center">
                        <item.icon className="h-5 w-5 mr-2" />
                        <span className={!open ? "hidden" : "block"}>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className={!open ? "hidden" : "block"}>
              Settings
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {settingsNavItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    {item.action ? (
                      <SidebarMenuButton asChild>
                        <button onClick={item.action} className="flex items-center w-full text-left">
                          <item.icon className="h-5 w-5 mr-2" />
                          <span className={!open ? "hidden" : "block"}>{item.title}</span>
                        </button>
                      </SidebarMenuButton>
                    ) : (
                      <SidebarMenuButton asChild isActive={isActive(item.path)}>
                        <Link to={item.path} className="flex items-center">
                          <item.icon className="h-5 w-5 mr-2" />
                          <span className={!open ? "hidden" : "block"}>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
};
