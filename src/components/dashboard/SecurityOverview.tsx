
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  CheckCircle, 
  Shield, 
  Clock, 
  Target, 
  Zap,
  FileText,
  AlertCircle,
  Activity
} from "lucide-react";

const SecurityOverview = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Security Overview</h2>
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-black">
          <Zap className="mr-2 h-4 w-4" />
          Start New Scan
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Critical Vulnerabilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
              <div className="text-2xl font-bold">3</div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+1 since last scan</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Systems Protected
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Shield className="w-6 h-6 text-emerald-500 mr-2" />
              <div className="text-2xl font-bold">12</div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">4 web apps, 8 servers</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Threats Mitigated
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-blue-500 mr-2" />
              <div className="text-2xl font-bold">27</div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">8 high, 19 medium</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Last Assessment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Clock className="w-6 h-6 text-amber-500 mr-2" />
              <div className="text-2xl font-bold">14h</div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">ago</p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="threats">Live Threats</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5 text-emerald-500" />
                  Vulnerability Summary
                </CardTitle>
                <CardDescription>
                  Security status across all systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <span className="h-3 w-3 rounded-full bg-red-500 mr-2"></span>
                      Critical
                    </span>
                    <span className="font-medium">3</span>
                  </div>
                  <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full rounded-full" style={{ width: "15%" }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <span className="h-3 w-3 rounded-full bg-amber-500 mr-2"></span>
                      High
                    </span>
                    <span className="font-medium">7</span>
                  </div>
                  <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: "35%" }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <span className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></span>
                      Medium
                    </span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                    <div className="bg-yellow-500 h-full rounded-full" style={{ width: "60%" }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <span className="h-3 w-3 rounded-full bg-blue-500 mr-2"></span>
                      Low
                    </span>
                    <span className="font-medium">18</span>
                  </div>
                  <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="mr-2 h-5 w-5 text-emerald-500" />
                  Recent Findings
                </CardTitle>
                <CardDescription>
                  Latest security issues detected
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-red-500/10 rounded-lg">
                    <AlertTriangle className="text-red-500 h-5 w-5 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-red-500">SQL Injection Vulnerability</h4>
                      <p className="text-sm">api.example.com/users - 2h ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-amber-500/10 rounded-lg">
                    <AlertTriangle className="text-amber-500 h-5 w-5 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-amber-500">XSS Vulnerability</h4>
                      <p className="text-sm">dashboard.example.com - 6h ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-yellow-500/10 rounded-lg">
                    <AlertTriangle className="text-yellow-500 h-5 w-5 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-500">Outdated SSL Certificate</h4>
                      <p className="text-sm">admin.example.com - 1d ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="threats" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Live Threat Monitoring</CardTitle>
              <CardDescription>Real-time attack simulations and active threats</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Activity className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">Live Threat Monitor</h3>
                <p className="text-muted-foreground mb-4">Visualize real-time attack patterns and detect emerging threats.</p>
                <Button>Launch Monitor</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Automated Pentesting Reports</CardTitle>
              <CardDescription>Summary of findings from latest penetration tests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">View Reports</h3>
                <p className="text-muted-foreground mb-4">Access detailed reports on security assessments and vulnerability findings.</p>
                <Button>View Reports</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="activity" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Track user actions, system alerts, and security updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Automated scan completed</p>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-yellow-500/10 p-2 rounded-full">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  </div>
                  <div>
                    <p className="font-medium">New vulnerability detected</p>
                    <p className="text-sm text-muted-foreground">6 hours ago</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-emerald-500/10 p-2 rounded-full">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                  </div>
                  <div>
                    <p className="font-medium">Vulnerability patched</p>
                    <p className="text-sm text-muted-foreground">1 day ago</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-blue-500/10 p-2 rounded-full">
                    <Activity className="h-4 w-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">System backup completed</p>
                    <p className="text-sm text-muted-foreground">2 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SecurityOverview;
