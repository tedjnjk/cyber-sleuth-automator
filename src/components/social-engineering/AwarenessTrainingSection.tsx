
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Users, ArrowRight } from "lucide-react";

export const AwarenessTrainingSection = () => {
  return (
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
  );
};
