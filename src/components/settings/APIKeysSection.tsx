
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const APIKeysSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>API Keys</CardTitle>
        <CardDescription>
          Manage API keys for integration with other tools
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 border rounded-md">
          <div>
            <h3 className="font-medium">Production API Key</h3>
            <p className="text-sm text-muted-foreground">Last used 2 days ago</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" size="sm" className="w-full sm:w-auto">Show Key</Button>
            <Button variant="outline" size="sm" className="text-red-500 w-full sm:w-auto">Revoke</Button>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 border rounded-md">
          <div>
            <h3 className="font-medium">Development API Key</h3>
            <p className="text-sm text-muted-foreground">Last used 5 days ago</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" size="sm" className="w-full sm:w-auto">Show Key</Button>
            <Button variant="outline" size="sm" className="text-red-500 w-full sm:w-auto">Revoke</Button>
          </div>
        </div>
        
        <Button className="w-full sm:w-auto">Generate New API Key</Button>
      </CardContent>
    </Card>
  );
};
