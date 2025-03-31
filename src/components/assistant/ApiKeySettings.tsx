
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Cog } from "lucide-react";

interface ApiKeySettingsProps {
  apiKey: string;
  onApiKeyChange: (key: string) => void;
}

export const ApiKeySettings = ({ apiKey, onApiKeyChange }: ApiKeySettingsProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Cog className="h-4 w-4 mr-2" />
          API Settings
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>AI Assistant Settings</DialogTitle>
          <DialogDescription>
            Enter your OpenAI API key to enable the AI assistant.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="apiKey">OpenAI API Key</Label>
            <Input
              id="apiKey"
              placeholder="sk-proj-..."
              value={apiKey}
              onChange={(e) => onApiKeyChange(e.target.value)}
              type="password"
            />
            <p className="text-xs text-muted-foreground">
              Your API key is stored locally and never sent to our servers.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
