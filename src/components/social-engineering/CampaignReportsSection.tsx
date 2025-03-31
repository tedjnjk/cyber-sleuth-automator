
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { List, FileBadge } from "lucide-react";
import { PhishingCampaign } from "@/services/social-engineering-service";

interface CampaignReportsSectionProps {
  campaigns: PhishingCampaign[];
}

export const CampaignReportsSection = ({ campaigns }: CampaignReportsSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-foreground">Campaign Reports</CardTitle>
        <CardDescription>
          View results and metrics from your social engineering campaigns
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-md border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">Opened Emails</p>
              <p className="text-2xl font-bold text-foreground">76%</p>
              <p className="text-xs text-muted-foreground">182/240 recipients</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">Clicked Links</p>
              <p className="text-2xl font-bold text-amber-500">43%</p>
              <p className="text-xs text-muted-foreground">104/240 recipients</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">Entered Credentials</p>
              <p className="text-2xl font-bold text-red-500">22%</p>
              <p className="text-xs text-muted-foreground">53/240 recipients</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">Reported Phishing</p>
              <p className="text-2xl font-bold text-green-500">31%</p>
              <p className="text-xs text-muted-foreground">75/240 recipients</p>
            </div>
          </div>
        </div>
        
        <div className="rounded-md border p-4">
          <h3 className="text-lg font-medium text-foreground mb-4">Recent Campaigns</h3>
          <div className="space-y-4">
            {campaigns.length > 0 ? (
              campaigns.slice(0, 3).map((campaign) => (
                <div key={campaign.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b">
                  <div>
                    <p className="font-medium text-foreground">{campaign.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(campaign.created_at!).toLocaleDateString()} · {campaign.target_emails.length} recipients
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <List className="h-4 w-4 mr-2" />
                      Details
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileBadge className="h-4 w-4 mr-2" />
                      Report
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center p-4">
                <p className="text-muted-foreground">No campaigns yet. Create your first phishing campaign.</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
