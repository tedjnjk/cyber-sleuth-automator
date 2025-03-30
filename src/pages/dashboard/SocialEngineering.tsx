
import React, { useState } from "react";
import DashboardPage from "./DashboardPage";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Mail, Send, FileBadge, Upload, List, ArrowRight, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SocialEngineering = () => {
  const [emails, setEmails] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleCreateCampaign = () => {
    if (!emails) {
      toast({
        title: "Error",
        description: "Please enter at least one email address",
        variant: "destructive",
      });
      return;
    }

    if (!subject) {
      toast({
        title: "Error",
        description: "Please enter an email subject",
        variant: "destructive",
      });
      return;
    }

    if (!content) {
      toast({
        title: "Error",
        description: "Please enter email content",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate campaign creation
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Campaign Created",
        description: "Phishing simulation campaign has been created successfully",
      });
    }, 2000);
  };

  return (
    <DashboardPage>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Social Engineering Simulator</h1>
          <p className="text-muted-foreground">Create and manage social engineering test campaigns</p>
        </div>
        
        <Tabs defaultValue="phishing">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="phishing">Phishing Simulation</TabsTrigger>
            <TabsTrigger value="awareness">Awareness Training</TabsTrigger>
            <TabsTrigger value="reports">Campaign Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="phishing" className="mt-6 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Create Phishing Campaign</CardTitle>
                <CardDescription>
                  Design a phishing simulation to test security awareness
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="target-emails">Target Email Addresses</Label>
                  <Textarea 
                    id="target-emails" 
                    placeholder="Enter email addresses (one per line or comma-separated)" 
                    value={emails}
                    onChange={(e) => setEmails(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Or <Button variant="link" className="p-0 h-auto text-xs">import from CSV</Button>
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="template">Email Template</Label>
                  <Select defaultValue="password-reset">
                    <SelectTrigger id="template">
                      <SelectValue placeholder="Select a template" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="password-reset">Password Reset</SelectItem>
                      <SelectItem value="account-verify">Account Verification</SelectItem>
                      <SelectItem value="invoice">Invoice Payment</SelectItem>
                      <SelectItem value="it-support">IT Support Request</SelectItem>
                      <SelectItem value="custom">Custom Template</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label htmlFor="email-subject">Email Subject</Label>
                  <Input 
                    id="email-subject" 
                    placeholder="Urgent: Password Reset Required" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email-content">Email Content</Label>
                  <Textarea 
                    id="email-content" 
                    placeholder="Write your email content here..." 
                    rows={8}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="sender-name">Sender Name</Label>
                    <Input id="sender-name" placeholder="IT Department" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sender-email">Sender Email</Label>
                    <Input id="sender-email" placeholder="support@company-it-dept.com" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col sm:flex-row gap-2 w-full">
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto"
                  >
                    Preview
                  </Button>
                  <Button 
                    className="w-full sm:w-auto flex-1"
                    onClick={handleCreateCampaign}
                    disabled={isLoading}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    {isLoading ? "Creating Campaign..." : "Create Campaign"}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="awareness" className="mt-6 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Security Awareness Training</CardTitle>
                <CardDescription>
                  Manage security training programs for your organization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="border-2 border-dashed flex flex-col items-center justify-center p-6 h-full">
                    <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                    <p className="text-center text-sm">Create New Training</p>
                  </Card>
                  
                  <Card className="relative overflow-hidden">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Email Security Basics</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground mb-2">15 minute course on identifying suspicious emails</p>
                      <div className="flex items-center mt-2">
                        <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-xs">127 enrolled</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" size="sm" className="w-full justify-between">
                        <span>View Details</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card className="relative overflow-hidden">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Password Security</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground mb-2">10 minute course on creating secure passwords</p>
                      <div className="flex items-center mt-2">
                        <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-xs">93 enrolled</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" size="sm" className="w-full justify-between">
                        <span>View Details</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports" className="mt-6 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Reports</CardTitle>
                <CardDescription>
                  View results and metrics from your social engineering campaigns
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Opened Emails</p>
                      <p className="text-2xl font-bold">76%</p>
                      <p className="text-xs text-muted-foreground">182/240 recipients</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Clicked Links</p>
                      <p className="text-2xl font-bold text-amber-500">43%</p>
                      <p className="text-xs text-muted-foreground">104/240 recipients</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Entered Credentials</p>
                      <p className="text-2xl font-bold text-red-500">22%</p>
                      <p className="text-xs text-muted-foreground">53/240 recipients</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Reported Phishing</p>
                      <p className="text-2xl font-bold text-green-500">31%</p>
                      <p className="text-xs text-muted-foreground">75/240 recipients</p>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-md border p-4">
                  <h3 className="text-lg font-medium mb-4">Recent Campaigns</h3>
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b">
                      <div>
                        <p className="font-medium">Password Reset Campaign</p>
                        <p className="text-sm text-muted-foreground">May 15, 2023 · 240 recipients</p>
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
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b">
                      <div>
                        <p className="font-medium">IT Support Request</p>
                        <p className="text-sm text-muted-foreground">April 28, 2023 · 183 recipients</p>
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
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <p className="font-medium">Invoice Payment</p>
                        <p className="text-sm text-muted-foreground">April 10, 2023 · 156 recipients</p>
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
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardPage>
  );
};

export default SocialEngineering;
