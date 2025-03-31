
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { createPhishingCampaign, createInitialResults } from "@/services/social-engineering-service";

export const PhishingCampaignForm = ({ onCampaignCreated }: { onCampaignCreated: () => void }) => {
  const [emails, setEmails] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [templateId, setTemplateId] = useState("password-reset");
  const [name, setName] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

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
      
      // Notify parent component
      onCampaignCreated();
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
  );
};
