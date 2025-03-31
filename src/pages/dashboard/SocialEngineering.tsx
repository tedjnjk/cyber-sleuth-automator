
import React, { useState, useEffect } from "react";
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
import { createPhishingCampaign, getPhishingCampaigns, createInitialResults, PhishingCampaign } from "@/services/social-engineering-service";

const SocialEngineering = () => {
  const [emails, setEmails] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [templateId, setTemplateId] = useState("password-reset");
  const [name, setName] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState<PhishingCampaign[]>([]);
  const { toast } = useToast();

  useEffect(() => {
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

    loadCampaigns();
  }, [toast]);

  const handleCreateCampaign = async () => {
    if (!emails) {
      toast({
        title: "Error",
        description: "Please enter at least one email address",
        variant: "destructive",
      });
      return;
    }

    if (!name) {
      toast({
        title: "Error",
        description: "Please enter a campaign name",
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

    if (!senderName || !senderEmail) {
      toast({
        title: "Error",
        description: "Please enter sender name and email",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Process emails (comma or newline separated)
      const emailList = emails
        .split(/[\s,]+/)
        .map(email => email.trim())
        .filter(email => email);
      
      // Create the campaign
      const campaign = {
        name,
        template_id: templateId,
        target_emails: emailList,
        subject,
        content,
        sender_name: senderName,
        sender_email: senderEmail,
        status: 'draft'
      };
      
      const createdCampaign = await createPhishingCampaign(campaign);
      
      // Create initial result entries for each email
      if (createdCampaign?.id) {
        await createInitialResults(createdCampaign.id, emailList);
      }
      
      // Update the campaigns list
      setCampaigns(prev => [createdCampaign, ...prev]);
      
      // Reset form
      setName("");
      setEmails("");
      setSubject("");
      setContent("");
      setSenderName("");
      setSenderEmail("");
      setTemplateId("password-reset");
      
      toast({
        title: "Campaign Created",
        description: "Phishing simulation campaign has been created successfully",
      });
    } catch (error) {
      console.error("Error creating campaign:", error);
      toast({
        title: "Error",
        description: "Failed to create campaign",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">Create Phishing Campaign</CardTitle>
                <CardDescription>
                  Design a phishing simulation to test security awareness
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="campaign-name">Campaign Name</Label>
                  <Input 
                    id="campaign-name" 
                    placeholder="Enter campaign name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

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
                  <Select 
                    value={templateId} 
                    onValueChange={setTemplateId}
                  >
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
                    <Input 
                      id="sender-name" 
                      placeholder="IT Department" 
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sender-email">Sender Email</Label>
                    <Input 
                      id="sender-email" 
                      placeholder="support@company-it-dept.com" 
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                    />
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
                <CardTitle className="text-foreground">Security Awareness Training</CardTitle>
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
                      <CardTitle className="text-base text-foreground">Email Security Basics</CardTitle>
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
                      <CardTitle className="text-base text-foreground">Password Security</CardTitle>
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
          </TabsContent>
        </Tabs>
      </div>
    </DashboardPage>
  );
};

export default SocialEngineering;
