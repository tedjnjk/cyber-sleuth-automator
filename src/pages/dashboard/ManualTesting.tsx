
import React, { useState } from "react";
import DashboardPage from "./DashboardPage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Code, Webhook, AlertTriangle, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ManualTesting = () => {
  const [url, setUrl] = useState("");
  const [payload, setPayload] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleTestPayload = () => {
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a target URL",
        variant: "destructive",
      });
      return;
    }

    if (!payload) {
      toast({
        title: "Error",
        description: "Please enter a payload",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setResult(null);
    
    // Simulate test execution
    setTimeout(() => {
      setIsLoading(false);
      setResult(`Executed payload on ${url}\n\nResponse: HTTP 200 OK\nContent-Type: application/json\n\n{\n  "status": "success",\n  "vulnerable": true,\n  "details": "The application appears to be vulnerable to the specified attack vector"\n}`);
      
      toast({
        title: "Test Completed",
        description: "Vulnerability test completed successfully",
      });
    }, 2000);
  };

  return (
    <DashboardPage>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Manual Testing Suite</h1>
          <p className="text-muted-foreground">Test specific security vulnerabilities and exploits</p>
        </div>
        
        <Alert className="bg-amber-50 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300 border-amber-200 dark:border-amber-800/30">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            This tool is for authorized security testing only. Do not use on systems without proper permission.
          </AlertDescription>
        </Alert>
        
        <Tabs defaultValue="sql" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-5">
            <TabsTrigger value="sql">SQL Injection</TabsTrigger>
            <TabsTrigger value="xss">XSS</TabsTrigger>
            <TabsTrigger value="csrf">CSRF</TabsTrigger>
            <TabsTrigger value="xxe">XXE</TabsTrigger>
            <TabsTrigger value="custom">Custom</TabsTrigger>
          </TabsList>
          
          <TabsContent value="sql" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>SQL Injection Testing</CardTitle>
                <CardDescription>
                  Test applications for SQL injection vulnerabilities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="target-url">Target URL</Label>
                  <Input 
                    id="target-url" 
                    placeholder="https://example.com/api/users?id=1" 
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="injection-type">Injection Type</Label>
                  <Select defaultValue="union">
                    <SelectTrigger id="injection-type">
                      <SelectValue placeholder="Select injection type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="union">UNION Based</SelectItem>
                      <SelectItem value="error">Error Based</SelectItem>
                      <SelectItem value="blind">Blind</SelectItem>
                      <SelectItem value="time">Time Based</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="payload">SQL Payload</Label>
                    <Button variant="ghost" size="sm" className="h-6 text-xs" onClick={() => setPayload("' OR 1=1 --")}>
                      Use Example
                    </Button>
                  </div>
                  <Textarea 
                    id="payload" 
                    placeholder="Enter SQL injection payload" 
                    className="font-mono"
                    rows={4}
                    value={payload}
                    onChange={(e) => setPayload(e.target.value)}
                  />
                </div>
                
                <Button 
                  onClick={handleTestPayload}
                  disabled={isLoading}
                  className="w-full mt-2"
                >
                  <Play className="mr-2 h-4 w-4" />
                  {isLoading ? "Testing..." : "Test Payload"}
                </Button>
                
                {result && (
                  <div className="mt-4">
                    <Label>Results</Label>
                    <div className="mt-2 p-4 bg-neutral-50 dark:bg-neutral-900 border rounded-md">
                      <pre className="text-xs font-mono whitespace-pre-wrap">
                        {result}
                      </pre>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="xss" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Cross-Site Scripting (XSS) Testing</CardTitle>
                <CardDescription>
                  Test applications for XSS vulnerabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Target URL</Label>
                    <Input placeholder="https://example.com/search?q=" />
                  </div>
                  
                  {/* Additional XSS testing options would go here */}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Additional tabs content would go here */}
        </Tabs>
      </div>
    </DashboardPage>
  );
};

export default ManualTesting;
