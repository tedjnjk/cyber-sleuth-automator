
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardSidebar } from "./DashboardSidebar";

interface DashboardLayoutProps {
  user: User;
  children: React.ReactNode;
}

const DashboardLayout = ({ user, children }: DashboardLayoutProps) => {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <SidebarProvider defaultOpen={open} open={open} onOpenChange={setOpen}>
      <div className="flex h-screen bg-background">
        <DashboardSidebar 
          open={open} 
          setOpen={setOpen} 
          onSignOut={handleSignOut} 
        />

        {/* Main content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <DashboardHeader 
            user={user} 
            pageTitle={getPageTitle()} 
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
          
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
