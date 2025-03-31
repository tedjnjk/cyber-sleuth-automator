
import React, { useState, useEffect } from "react";
import DashboardPage from "./DashboardPage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { PhishingCampaignForm } from "@/components/social-engineering/PhishingCampaignForm";
import { AwarenessTrainingSection } from "@/components/social-engineering/AwarenessTrainingSection";
import { CampaignReportsSection } from "@/components/social-engineering/CampaignReportsSection";
import { getPhishingCampaigns, PhishingCampaign } from "@/services/social-engineering-service";

const SocialEngineering = () => {
  const [campaigns, setCampaigns] = useState<PhishingCampaign[]>([]);
  const { toast } = useToast();

  const loadCampaigns = async () => {
    try {
      const data = await getPhishingCampaigns();
      setCampaigns(data);
    } catch (error) {
      console.error("Error loading campaigns:", error);
      toast({
        title: "Error",
        description: "Failed to load campaigns",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    loadCampaigns();
  }, [toast]);

  const handleCampaignCreated = () => {
    loadCampaigns();
  };

  return (
    <DashboardPage>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Social Engineering Simulator</h1>
          <p className="text-muted-foreground">Create and manage social engineering test campaigns</p>
        </div>
        
        <Tabs defaultValue="phishing">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="phishing">Phishing Simulation</TabsTrigger>
            <TabsTrigger value="awareness">Awareness Training</TabsTrigger>
            <TabsTrigger value="reports">Campaign Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="phishing" className="mt-6 space-y-4">
            <PhishingCampaignForm onCampaignCreated={handleCampaignCreated} />
          </TabsContent>
          
          <TabsContent value="awareness" className="mt-6 space-y-4">
            <AwarenessTrainingSection />
          </TabsContent>
          
          <TabsContent value="reports" className="mt-6 space-y-4">
            <CampaignReportsSection campaigns={campaigns} />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardPage>
  );
};

export default SocialEngineering;
