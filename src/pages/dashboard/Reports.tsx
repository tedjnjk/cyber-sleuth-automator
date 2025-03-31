
import React from "react";
import DashboardPage from "./DashboardPage";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Eye, Share2, Calendar, Clock, BarChart2 } from "lucide-react";

const Reports = () => {
  return (
    <DashboardPage>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Security Reports</h1>
            <p className="text-muted-foreground">View and manage your security assessment reports</p>
          </div>
          <Button className="w-full sm:w-auto">
            <FileText className="mr-2 h-4 w-4" />
            Generate New Report
          </Button>
        </div>
        
        <Tabs defaultValue="recent" className="w-full">
          <TabsList className="grid w-full grid-cols-3 sm:w-[400px]">
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>
          
          <TabsContent value="recent" className="mt-6">
            <div className="grid grid-cols-1 gap-4">
              {/* Report 1 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-lg">Web Application Security Assessment</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <Calendar className="mr-1 h-3.5 w-3.5" />
                        <span className="text-xs">May 15, 2023</span>
                        <span className="mx-2">•</span>
                        <Clock className="mr-1 h-3.5 w-3.5" />
                        <span className="text-xs">13:45</span>
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <span className="text-xs font-medium text-red-500">3 Critical</span>
                      <span className="mx-1">•</span>
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <span className="text-xs font-medium text-amber-500">7 Medium</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    Comprehensive security assessment of the web application, including API endpoints, authentication, and data validation.
                  </p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                    <Eye className="mr-2 h-4 w-4" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Report 2 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-lg">Network Vulnerability Scan</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <Calendar className="mr-1 h-3.5 w-3.5" />
                        <span className="text-xs">May 10, 2023</span>
                        <span className="mx-2">•</span>
                        <Clock className="mr-1 h-3.5 w-3.5" />
                        <span className="text-xs">09:30</span>
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <span className="text-xs font-medium text-amber-500">5 Medium</span>
                      <span className="mx-1">•</span>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-xs font-medium text-green-500">12 Low</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    Comprehensive scan of network devices, open ports, and services. Includes firewall configuration assessment.
                  </p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                    <Eye className="mr-2 h-4 w-4" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Report 3 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-lg">Social Engineering Test Results</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <Calendar className="mr-1 h-3.5 w-3.5" />
                        <span className="text-xs">May 5, 2023</span>
                        <span className="mx-2">•</span>
                        <Clock className="mr-1 h-3.5 w-3.5" />
                        <span className="text-xs">14:15</span>
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <span className="text-xs font-medium text-red-500">High Risk</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    Results from phishing simulation campaign targeting 240 employees. 22% submitted credentials.
                  </p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                    <Eye className="mr-2 h-4 w-4" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                    <BarChart2 className="mr-2 h-4 w-4" />
                    View Analytics
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="scheduled" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Scheduled Reports</CardTitle>
                <CardDescription>
                  View your automated scheduled security reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-medium">Weekly Vulnerability Scan</h3>
                      <p className="text-sm text-muted-foreground">Every Monday at 1:00 AM</p>
                    </div>
                    <Button variant="outline" size="sm">Edit Schedule</Button>
                  </div>
                  
                  <div className="p-4 border rounded-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-medium">Monthly Security Summary</h3>
                      <p className="text-sm text-muted-foreground">1st day of month at 6:00 AM</p>
                    </div>
                    <Button variant="outline" size="sm">Edit Schedule</Button>
                  </div>
                  
                  <div className="p-4 border rounded-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-medium">Quarterly Compliance Report</h3>
                      <p className="text-sm text-muted-foreground">First day of each quarter</p>
                    </div>
                    <Button variant="outline" size="sm">Edit Schedule</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="archived" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Archived Reports</CardTitle>
                <CardDescription>
                  Access your historical security reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-medium">2022 Q4 Security Analysis</h3>
                      <p className="text-sm text-muted-foreground">December 31, 2022</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                  
                  <div className="p-4 border rounded-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-medium">Annual Security Review 2022</h3>
                      <p className="text-sm text-muted-foreground">January 15, 2023</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                  
                  <div className="p-4 border rounded-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-medium">2022 Q3 Security Analysis</h3>
                      <p className="text-sm text-muted-foreground">October 5, 2022</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
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

export default Reports;
