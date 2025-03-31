
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, AlertCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AssistantGuideProps {
  onExportConversation: () => void;
}

export const AssistantGuide = ({ onExportConversation }: AssistantGuideProps) => {
  return (
    <Card className="h-[calc(100vh-16rem)]">
      <CardHeader className="p-4 border-b">
        <CardTitle className="text-lg flex items-center">
          <Info className="mr-2 h-5 w-5" />
          Assistant Guide
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 overflow-y-auto space-y-4 text-sm">
        <div>
          <h3 className="font-medium mb-2">What can the assistant help with?</h3>
          <ul className="space-y-2 list-disc pl-5">
            <li>Setting up security scans</li>
            <li>Interpreting vulnerability reports</li>
            <li>Guiding through penetration testing</li>
            <li>Explaining security concepts</li>
            <li>Recommending security practices</li>
          </ul>
        </div>
        
        <div className="pt-2">
          <h3 className="font-medium mb-2">Example Commands</h3>
          <div className="space-y-2">
            <div className="p-2 bg-muted rounded-md">
              "Help me set up a scan for SQL injection vulnerabilities"
            </div>
            <div className="p-2 bg-muted rounded-md">
              "What are best practices for API security testing?"
            </div>
            <div className="p-2 bg-muted rounded-md">
              "Explain CSRF attacks and how to test for them"
            </div>
          </div>
        </div>
        
        <div className="pt-2">
          <h3 className="font-medium mb-2">Tips</h3>
          <div className="flex items-start gap-2">
            <AlertCircle className="h-4 w-4 mt-0.5 text-amber-500" />
            <p>Be specific about what type of security testing you need help with.</p>
          </div>
        </div>
        
        <div className="pt-2 mt-auto">
          <Button variant="outline" className="w-full" size="sm" onClick={onExportConversation}>
            <Download className="mr-2 h-4 w-4" />
            Export Conversation
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
