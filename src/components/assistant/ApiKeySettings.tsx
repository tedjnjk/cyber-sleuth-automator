
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Cog, Check, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ApiKeySettingsProps {
  apiKey: string;
  onApiKeyChange: (key: string) => void;
}

export const ApiKeySettings = ({ apiKey, onApiKeyChange }: ApiKeySettingsProps) => {
  const [tempApiKey, setTempApiKey] = useState(apiKey);
  const [isOpen, setIsOpen] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const { toast } = useToast();

  const validateApiKey = (key: string) => {
    const trimmedKey = key.trim();
    // Basic validation: checking if it starts with 'sk-proj-' for ProjectID tokens
    const isValid = trimmedKey.startsWith('sk-proj-') || trimmedKey.startsWith('sk-');
    setIsValid(isValid);
    return isValid;
  };

  const handleSave = () => {
    if (validateApiKey(tempApiKey)) {
      onApiKeyChange(tempApiKey);
      setIsOpen(false);
      toast({
        title: "API Key Saved",
        description: "Your API key has been saved successfully.",
        variant: "default",
      });
    } else {
      toast({
        title: "Invalid API Key",
        description: "Please enter a valid OpenAI API key.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
            <div className="relative">
              <Input
                id="apiKey"
                placeholder="sk-proj-..."
                value={tempApiKey}
                onChange={(e) => {
                  setTempApiKey(e.target.value);
                  validateApiKey(e.target.value);
                }}
                type="password"
                className={!isValid ? "border-red-400 pr-10" : "pr-10"}
              />
              {!isValid && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500">
                  <AlertCircle className="h-4 w-4" />
                </div>
              )}
            </div>
            {!isValid && (
              <p className="text-xs text-red-500">
                Invalid API key format. It should start with 'sk-proj-' or 'sk-'.
              </p>
            )}
            <p className="text-xs text-muted-foreground">
              Your API key is stored locally in your browser and never sent to our servers.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button onClick={handleSave} disabled={!isValid}>Save API Key</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
