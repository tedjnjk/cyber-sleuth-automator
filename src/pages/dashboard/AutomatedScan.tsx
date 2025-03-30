
import React, { useState } from "react";
import DashboardPage from "./DashboardPage";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Target, Shield, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AutomatedScan = () => {
  const [targetUrl, setTargetUrl] = useState("");
  const [scanType, setScanType] = useState("quick");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleStartScan = () => {
    if (!targetUrl) {
      toast({
        title: "Error",
        description: "Please enter a target URL or IP address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate starting a scan
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Scan Started",
        description: `${scanType.charAt(0).toUpperCase() + scanType.slice(1)} scan started for ${targetUrl}`,
      });
    }, 2000);
  };

  return (
    <DashboardPage>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Automated Security Scanning</h1>
          <p className="text-muted-foreground">Configure and run automated security scans</p>
        </div>
        
        <Tabs defaultValue="web">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="web">Web Application</TabsTrigger>
            <TabsTrigger value="network">Network</TabsTrigger>
            <TabsTrigger value="api">API Endpoints</TabsTrigger>
          </TabsList>
          
          <TabsContent value="web" className="mt-6 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Web Application Scan</CardTitle>
                <CardDescription>
                  Test for OWASP Top 10 vulnerabilities, XSS, SQL injection, and more
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="target-url">Target URL</Label>
                  <Input 
                    id="target-url" 
                    placeholder="https://example.com" 
                    value={targetUrl}
                    onChange={(e) => setTargetUrl(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Scan Type</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div 
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${scanType === 'quick' ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20' : ''}`}
                      onClick={() => setScanType('quick')}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Zap className="h-5 w-5 text-emerald-500" />
                        <Checkbox checked={scanType === 'quick'} />
                      </div>
                      <h3 className="font-medium">Quick Scan</h3>
                      <p className="text-xs text-muted-foreground mt-1">Fast scan with basic checks. ~5 minutes.</p>
                    </div>
                    
                    <div 
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${scanType === 'standard' ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20' : ''}`}
                      onClick={() => setScanType('standard')}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Target className="h-5 w-5 text-emerald-500" />
                        <Checkbox checked={scanType === 'standard'} />
                      </div>
                      <h3 className="font-medium">Standard Scan</h3>
                      <p className="text-xs text-muted-foreground mt-1">Thorough scan with moderate depth. ~20 minutes.</p>
                    </div>
                    
                    <div 
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${scanType === 'comprehensive' ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20' : ''}`}
                      onClick={() => setScanType('comprehensive')}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Shield className="h-5 w-5 text-emerald-500" />
                        <Checkbox checked={scanType === 'comprehensive'} />
                      </div>
                      <h3 className="font-medium">Comprehensive</h3>
                      <p className="text-xs text-muted-foreground mt-1">Deep scan with all security checks. ~60 minutes.</p>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label>Advanced Options</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="authenticated" />
                        <Label htmlFor="authenticated">Authenticated Scan</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="bruteforce" />
                        <Label htmlFor="bruteforce">Enable Brute Force Testing</Label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="framework">Framework Detection</Label>
                      <Select defaultValue="auto">
                        <SelectTrigger id="framework">
                          <SelectValue placeholder="Select detection mode" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="auto">Automatic Detection</SelectItem>
                          <SelectItem value="wordpress">WordPress</SelectItem>
                          <SelectItem value="drupal">Drupal</SelectItem>
                          <SelectItem value="joomla">Joomla</SelectItem>
                          <SelectItem value="laravel">Laravel</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  onClick={handleStartScan}
                  disabled={isLoading}
                >
                  {isLoading ? "Starting Scan..." : "Start Scan"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="network" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Network Security Scan</CardTitle>
                <CardDescription>
                  Scan for open ports, services, and network vulnerabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="target-ip">Target IP or Range</Label>
                    <Input id="target-ip" placeholder="192.168.1.1 or 192.168.1.0/24" />
                  </div>
                  
                  {/* Additional network scan configuration options would go here */}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start Network Scan</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="api" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>API Security Scan</CardTitle>
                <CardDescription>
                  Test API endpoints for security vulnerabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="api-endpoint">API Base URL</Label>
                    <Input id="api-endpoint" placeholder="https://api.example.com/v1" />
                  </div>
                  
                  {/* Additional API scan configuration options would go here */}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start API Scan</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardPage>
  );
};

export default AutomatedScan;
