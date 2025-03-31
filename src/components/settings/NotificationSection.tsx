
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export const NotificationSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>
          Configure how you receive notifications
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="email-notifications">Email Notifications</Label>
            <p className="text-sm text-muted-foreground">Receive email notifications for security events</p>
          </div>
          <Switch id="email-notifications" defaultChecked />
        </div>
        
        <Separator />
        
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="security-alerts">Security Alerts</Label>
            <p className="text-sm text-muted-foreground">Get notified about critical security issues</p>
          </div>
          <Switch id="security-alerts" defaultChecked />
        </div>
        
        <Separator />
        
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="report-notifications">Report Notifications</Label>
            <p className="text-sm text-muted-foreground">Receive notifications when reports are generated</p>
          </div>
          <Switch id="report-notifications" defaultChecked />
        </div>
      </CardContent>
    </Card>
  );
};
