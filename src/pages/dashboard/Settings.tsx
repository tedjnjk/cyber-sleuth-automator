
import React, { useState, useEffect } from "react";
import DashboardPage from "./DashboardPage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { ProfileSection } from "@/components/settings/ProfileSection";
import { NotificationSection } from "@/components/settings/NotificationSection";
import { SecuritySection } from "@/components/settings/SecuritySection";
import { APIKeysSection } from "@/components/settings/APIKeysSection";

const Settings = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setUser(data.user);
      }
    };
    
    getUser();
  }, []);

  return (
    <DashboardPage>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>
        
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="api">API Keys</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="mt-4 space-y-6">
            <ProfileSection user={user} />
            <NotificationSection />
          </TabsContent>
          
          <TabsContent value="security" className="mt-4 space-y-6">
            <SecuritySection />
          </TabsContent>
          
          <TabsContent value="api" className="mt-4">
            <APIKeysSection />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardPage>
  );
};

export default Settings;
