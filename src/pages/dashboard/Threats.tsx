
import React from "react";
import DashboardPage from "./DashboardPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, AreaChart } from "recharts";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const data = [
  { name: "Jan", value: 5 },
  { name: "Feb", value: 8 },
  { name: "Mar", value: 12 },
  { name: "Apr", value: 7 },
  { name: "May", value: 15 },
  { name: "Jun", value: 10 },
];

const Threats = () => {
  return (
    <DashboardPage>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Threat Analysis</h1>
          <p className="text-muted-foreground">Monitor and analyze security threats</p>
        </div>
        
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Critical Alert</AlertTitle>
          <AlertDescription className="text-sm sm:text-base">
            SQL Injection attempts detected on the login API endpoint from IP 198.51.100.234. Mitigation measures have been automatically applied.
          </AlertDescription>
        </Alert>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Card className="w-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg sm:text-xl">Threat Distribution</CardTitle>
                </CardHeader>
                <CardContent className="p-2 sm:p-4">
                  <div className="h-[250px] sm:h-[300px] w-full overflow-auto">
                    <BarChart
                      data={[
                        { name: "SQL Inj", value: 35 },
                        { name: "XSS", value: 27 },
                        { name: "CSRF", value: 18 },
                        { name: "Upload", value: 12 },
                        { name: "Brute", value: 43 },
                      ]}
                      margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 0,
                      }}
                    >
                      {/* Bar Chart configuration would go here */}
                    </BarChart>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="w-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg sm:text-xl">Attack Trends</CardTitle>
                </CardHeader>
                <CardContent className="p-2 sm:p-4">
                  <div className="h-[250px] sm:h-[300px] w-full overflow-auto">
                    <LineChart
                      data={data}
                      margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 0,
                      }}
                    >
                      {/* Line Chart configuration would go here */}
                    </LineChart>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="timeline" className="mt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg sm:text-xl">Attack Timeline</CardTitle>
              </CardHeader>
              <CardContent className="p-2 sm:p-4">
                <div className="h-[300px] sm:h-[400px] overflow-auto">
                  <AreaChart
                    data={[
                      { time: "00:00", attacks: 2 },
                      { time: "04:00", attacks: 3 },
                      { time: "08:00", attacks: 8 },
                      { time: "12:00", attacks: 15 },
                      { time: "16:00", attacks: 10 },
                      { time: "20:00", attacks: 5 },
                    ]}
                    margin={{
                      top: 20,
                      right: 20,
                      bottom: 20,
                      left: 0,
                    }}
                  >
                    {/* Area Chart configuration would go here */}
                  </AreaChart>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analysis" className="mt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg sm:text-xl">Threat Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 sm:p-4 border rounded-md">
                    <h3 className="font-medium text-base mb-1 sm:mb-2">Attack Pattern Analysis</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Recent attack patterns suggest a coordinated effort targeting authentication services.
                      Automated tools are being used to scan for outdated frameworks and libraries.
                    </p>
                  </div>
                  <div className="p-3 sm:p-4 border rounded-md">
                    <h3 className="font-medium text-base mb-1 sm:mb-2">Geographic Distribution</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Majority of attacks originate from IP addresses in Eastern Europe and Southeast Asia,
                      with increasing numbers from proxy and VPN services.
                    </p>
                  </div>
                  <div className="p-3 sm:p-4 border rounded-md">
                    <h3 className="font-medium text-base mb-1 sm:mb-2">Recommendations</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Implement rate limiting on authentication endpoints. Update firewall rules to
                      block suspicious IP ranges. Consider implementing CAPTCHA for login attempts.
                    </p>
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

export default Threats;
