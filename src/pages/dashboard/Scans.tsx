
import React from "react";
import DashboardPage from "./DashboardPage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Play } from "lucide-react";

const Scans = () => {
  return (
    <DashboardPage>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Penetration Tests</h1>
            <p className="text-muted-foreground">Launch and manage security penetration tests</p>
          </div>
          <Button className="w-full sm:w-auto">
            <Plus className="mr-2 h-4 w-4" />
            New Scan
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Web Application Scan</CardTitle>
              <CardDescription>API and web interface vulnerability testing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Last scan</span>
                    <span className="font-medium">2 days ago</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Status</span>
                    <span className="font-medium text-green-500">Completed</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Vulnerabilities</span>
                    <span className="font-medium">3 Critical, 7 Medium</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  <Play className="mr-2 h-4 w-4" />
                  Run Scan
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Network Infrastructure</CardTitle>
              <CardDescription>Port scanning and network vulnerability assessment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Last scan</span>
                    <span className="font-medium">5 days ago</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Status</span>
                    <span className="font-medium text-amber-500">In Progress</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Completion</span>
                    <span className="font-medium">76%</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline" disabled>
                  Running...
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>API Security</CardTitle>
              <CardDescription>API endpoint testing and authentication checks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Last scan</span>
                    <span className="font-medium">Never</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Status</span>
                    <span className="font-medium text-gray-500">Not Started</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Schedule</span>
                    <span className="font-medium">Not Scheduled</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  <Play className="mr-2 h-4 w-4" />
                  Run Scan
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardPage>
  );
};

export default Scans;
