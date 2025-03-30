
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import DashboardPage from "./dashboard/DashboardPage";
import SecurityOverview from "@/components/dashboard/SecurityOverview";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, FileText, AlertCircle, Bot } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      title: "Start Penetration Test",
      description: "Launch an automated security scan",
      icon: Target,
      color: "bg-blue-500",
      action: () => navigate("/dashboard/scans")
    },
    {
      title: "View Recent Reports",
      description: "Access security assessment reports",
      icon: FileText,
      color: "bg-emerald-500",
      action: () => navigate("/dashboard/reports")
    },
    {
      title: "Threat Analysis",
      description: "Review detected security threats",
      icon: AlertCircle,
      color: "bg-amber-500",
      action: () => navigate("/dashboard/threats")
    },
    {
      title: "AI Assistant",
      description: "Get help from our security AI",
      icon: Bot,
      color: "bg-purple-500",
      action: () => navigate("/dashboard/assistant")
    }
  ];

  return (
    <DashboardPage>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Security Dashboard</h1>
          <p className="text-muted-foreground">Welcome to Hacker Mind AI security platform</p>
        </div>
        
        <div className="space-y-6">
          <SecurityOverview />
          
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className={`w-10 h-10 rounded-md flex items-center justify-center ${action.color} mb-2`}>
                      <action.icon className="text-white w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                    <CardDescription>{action.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={action.action}
                    >
                      Launch
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardPage>
  );
};

export default Dashboard;
