
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
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
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
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
  Code,
  Bot
} from "lucide-react";

interface DashboardLayoutProps {
  user: User;
  children: React.ReactNode;
}

const DashboardLayout = ({ user, children }: DashboardLayoutProps) => {
  const [open, setOpen] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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

  // Get the current page title
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === "/dashboard") return "Dashboard";
    if (path === "/dashboard/scans") return "Penetration Tests";
    if (path === "/dashboard/reports") return "Reports";
    if (path === "/dashboard/threats") return "Threat Analysis";
    if (path === "/dashboard/automated-scan") return "Automated Scanning";
    if (path === "/dashboard/manual-testing") return "Manual Testing";
    if (path === "/dashboard/social-engineering") return "Social Engineering";
    if (path === "/dashboard/compliance") return "Compliance Audits";
    if (path === "/dashboard/settings") return "Settings";
    if (path === "/dashboard/assistant") return "AI Assistant";
    return "Dashboard";
  };

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
    { title: "Sign Out", action: handleSignOut, icon: LogOut },
  ];

  // Check if a navigation item is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <SidebarProvider defaultOpen={open} open={open} onOpenChange={setOpen}>
      <div className="flex h-screen bg-background">
        {/* Desktop Sidebar */}
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

        {/* Main content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top navigation */}
          <header className="bg-background border-b p-4 flex justify-between items-center">
            <div className="flex items-center">
              {/* Mobile menu button */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden mr-2">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-[85%] sm:w-[380px]">
                  <div className="h-full flex flex-col bg-sidebar text-sidebar-foreground">
                    <div className="p-4 flex items-center border-b border-sidebar-border">
                      <div className="w-8 h-8 bg-emerald-500 rounded-md flex items-center justify-center mr-2">
                        <Shield className="text-black w-5 h-5" />
                      </div>
                      <span className="font-bold text-lg">Hacker Mind</span>
                    </div>
                    
                    <div className="flex-1 overflow-auto p-2">
                      <div className="mb-6">
                        <h3 className="text-xs uppercase font-medium mb-2 text-sidebar-foreground/70 px-3">Main</h3>
                        <div className="space-y-1">
                          {mainNavItems.map((item) => (
                            <Button
                              key={item.title}
                              variant={isActive(item.path) ? "secondary" : "ghost"}
                              className="w-full justify-start"
                              onClick={() => {
                                navigate(item.path);
                                setMobileMenuOpen(false);
                              }}
                            >
                              <item.icon className="h-5 w-5 mr-2" />
                              {item.title}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-xs uppercase font-medium mb-2 text-sidebar-foreground/70 px-3">Tools</h3>
                        <div className="space-y-1">
                          {toolsNavItems.map((item) => (
                            <Button
                              key={item.title}
                              variant={isActive(item.path) ? "secondary" : "ghost"}
                              className="w-full justify-start"
                              onClick={() => {
                                navigate(item.path);
                                setMobileMenuOpen(false);
                              }}
                            >
                              <item.icon className="h-5 w-5 mr-2" />
                              {item.title}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xs uppercase font-medium mb-2 text-sidebar-foreground/70 px-3">Settings</h3>
                        <div className="space-y-1">
                          {settingsNavItems.map((item) => (
                            <Button
                              key={item.title}
                              variant={item.path && isActive(item.path) ? "secondary" : "ghost"}
                              className="w-full justify-start"
                              onClick={() => {
                                if (item.action) {
                                  item.action();
                                } else if (item.path) {
                                  navigate(item.path);
                                }
                                setMobileMenuOpen(false);
                              }}
                            >
                              <item.icon className="h-5 w-5 mr-2" />
                              {item.title}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              <h1 className="text-xl font-bold">{getPageTitle()}</h1>
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
    </SidebarProvider>
  );
};

export default DashboardLayout;
