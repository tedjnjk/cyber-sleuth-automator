
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
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

interface DashboardMobileNavProps {
  user: User;
  setMobileMenuOpen: (open: boolean) => void;
}

export const DashboardMobileNav = ({ 
  user, 
  setMobileMenuOpen 
}: DashboardMobileNavProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if a navigation item is active
  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
    setMobileMenuOpen(false);
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

  return (
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
  );
};
