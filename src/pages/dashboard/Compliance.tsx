
import React, { useState } from "react";
import DashboardPage from "./DashboardPage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, Download, FileCheck, FileBarChart, FileText, Check, X } from "lucide-react";

const Compliance = () => {
  const [openSection, setOpenSection] = useState<string | null>("authentication");

  return (
    <DashboardPage>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Compliance & Security Audits</h1>
          <p className="text-muted-foreground">Track compliance with security standards and regulations</p>
        </div>
        
        <Tabs defaultValue="gdpr">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="gdpr">GDPR</TabsTrigger>
            <TabsTrigger value="iso27001">ISO 27001</TabsTrigger>
            <TabsTrigger value="pci">PCI DSS</TabsTrigger>
            <TabsTrigger value="nist">NIST</TabsTrigger>
          </TabsList>
          
          <TabsContent value="gdpr" className="mt-6 space-y-4">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle>GDPR Compliance Status</CardTitle>
                    <CardDescription>
                      General Data Protection Regulation compliance assessment
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button variant="outline" size="sm">
                      <FileBarChart className="mr-2 h-4 w-4" />
                      Export Report
                    </Button>
                    <Button size="sm">
                      <FileCheck className="mr-2 h-4 w-4" />
                      Start Audit
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="text-sm font-medium">Overall Compliance</span>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold">78%</span>
                          <Badge className="bg-amber-500">Partial</Badge>
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        <span className="text-sm font-medium">Last Audit</span>
                        <p className="text-sm text-muted-foreground">April 15, 2023</p>
                      </div>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  
                  <div className="space-y-4">
                    <Collapsible
                      open={openSection === "dataprocessing"}
                      onOpenChange={() => setOpenSection(openSection === "dataprocessing" ? null : "dataprocessing")}
                      className="border rounded-md"
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center">
                            <Check className="h-4 w-4 text-green-500" />
                          </div>
                          <span className="font-medium">Data Processing</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-green-500">Compliant</Badge>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="border-t p-4 space-y-2">
                        <p className="text-sm">All data processing activities are documented and lawful bases established.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                          <div className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5" />
                            <span className="text-sm">Processing activities documented</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5" />
                            <span className="text-sm">Lawful basis for processing established</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5" />
                            <span className="text-sm">Data minimization principles applied</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5" />
                            <span className="text-sm">Data retention periods defined</span>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                    
                    <Collapsible
                      open={openSection === "rights"}
                      onOpenChange={() => setOpenSection(openSection === "rights" ? null : "rights")}
                      className="border rounded-md"
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center">
                            <Check className="h-4 w-4 text-green-500" />
                          </div>
                          <span className="font-medium">Data Subject Rights</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-green-500">Compliant</Badge>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="border-t p-4">
                        <p className="text-sm">Processes in place to handle data subject rights requests.</p>
                      </CollapsibleContent>
                    </Collapsible>
                    
                    <Collapsible
                      open={openSection === "consent"}
                      onOpenChange={() => setOpenSection(openSection === "consent" ? null : "consent")}
                      className="border rounded-md"
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-amber-500/20 flex items-center justify-center">
                            <ChevronDown className="h-4 w-4 text-amber-500" />
                          </div>
                          <span className="font-medium">Consent Management</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-amber-500">Partial</Badge>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="border-t p-4">
                        <p className="text-sm">Some consent management processes need improvement.</p>
                      </CollapsibleContent>
                    </Collapsible>
                    
                    <Collapsible
                      open={openSection === "breach"}
                      onOpenChange={() => setOpenSection(openSection === "breach" ? null : "breach")}
                      className="border rounded-md"
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center">
                            <X className="h-4 w-4 text-red-500" />
                          </div>
                          <span className="font-medium">Breach Notification</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="destructive">Non-Compliant</Badge>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="border-t p-4">
                        <p className="text-sm">Data breach notification procedures not established.</p>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="iso27001" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>ISO 27001 Compliance</CardTitle>
                <CardDescription>
                  Information Security Management System standard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Overall Compliance</span>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  
                  {/* ISO 27001 specific content would go here */}
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

export default Compliance;
