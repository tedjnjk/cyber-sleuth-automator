
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import ThemeToggle from "@/components/ThemeToggle";
import { 
  BarChart3, 
  Shield, 
  Target, 
  FileText, 
  AlertCircle, 
  Settings, 
  Users, 
  LogOut, 
  Menu, 
  Database, 
  Search, 
  Code
} from "lucide-react";

interface DashboardLayoutProps {
  user: User;
  children: React.ReactNode;
}

const DashboardLayout = ({ user, children }: DashboardLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const getUserInitial = (email: string) => {
    return email ? email[0].toUpperCase() : "U";
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast({
        title: "Signed out successfully",
        description: "You have been logged out of your account.",
      });
      
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Error signing out",
        description: error.message || "An error occurred while signing out",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar for desktop */}
      <div className="hidden md:block">
        <Sidebar defaultCollapsed={collapsed} collapsible onCollapsedChange={setCollapsed}>
          <SidebarContent>
            <div className={`p-4 flex items-center ${collapsed ? "justify-center" : "justify-between"}`}>
              <div className={`flex items-center gap-2 ${collapsed ? "hidden" : "flex"}`}>
                <div className="w-8 h-8 bg-emerald-500 rounded-md flex items-center justify-center">
                  <Shield className="text-black w-5 h-5" />
                </div>
                <span className="font-bold text-lg">Hacker Mind</span>
              </div>
              <div className={collapsed ? "flex justify-center w-full" : ""}>
                <Shield className={`text-emerald-500 w-6 h-6 ${collapsed ? "block" : "hidden"}`} />
              </div>
            </div>

            <SidebarGroup>
              <SidebarGroupLabel className={collapsed ? "hidden" : "block"}>
                Main
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/dashboard" className="flex items-center">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        <span className={collapsed ? "hidden" : "block"}>Dashboard</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/dashboard/scans" className="flex items-center">
                        <Target className="h-5 w-5 mr-2" />
                        <span className={collapsed ? "hidden" : "block"}>Penetration Tests</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/dashboard/reports" className="flex items-center">
                        <FileText className="h-5 w-5 mr-2" />
                        <span className={collapsed ? "hidden" : "block"}>Reports</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/dashboard/threats" className="flex items-center">
                        <AlertCircle className="h-5 w-5 mr-2" />
                        <span className={collapsed ? "hidden" : "block"}>Threat Analysis</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className={collapsed ? "hidden" : "block"}>
                Tools
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/dashboard/automated-scan" className="flex items-center">
                        <Search className="h-5 w-5 mr-2" />
                        <span className={collapsed ? "hidden" : "block"}>Automated Scanning</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/dashboard/manual-testing" className="flex items-center">
                        <Code className="h-5 w-5 mr-2" />
                        <span className={collapsed ? "hidden" : "block"}>Manual Testing</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/dashboard/social-engineering" className="flex items-center">
                        <Users className="h-5 w-5 mr-2" />
                        <span className={collapsed ? "hidden" : "block"}>Social Engineering</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/dashboard/compliance" className="flex items-center">
                        <Database className="h-5 w-5 mr-2" />
                        <span className={collapsed ? "hidden" : "block"}>Compliance Audits</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className={collapsed ? "hidden" : "block"}>
                Settings
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/dashboard/settings" className="flex items-center">
                        <Settings className="h-5 w-5 mr-2" />
                        <span className={collapsed ? "hidden" : "block"}>Settings</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <button onClick={handleSignOut} className="flex items-center w-full text-left">
                        <LogOut className="h-5 w-5 mr-2" />
                        <span className={collapsed ? "hidden" : "block"}>Sign Out</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navigation */}
        <header className="bg-background border-b p-4 flex justify-between items-center">
          <div className="flex items-center">
            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden mr-2">
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar>
                    <AvatarFallback className="bg-emerald-500 text-black">
                      {getUserInitial(user?.email || "")}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  <div className="flex flex-col">
                    <span>My Account</span>
                    <span className="text-xs text-muted-foreground">{user?.email}</span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/dashboard/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="text-red-500">
                  <LogOut className="h-4 w-4 mr-2" />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        
        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-background">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
