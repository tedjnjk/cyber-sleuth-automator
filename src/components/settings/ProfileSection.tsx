
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";

interface ProfileSectionProps {
  user: User | null;
}

export const ProfileSection = ({ user }: ProfileSectionProps) => {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState(user?.email || "");
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const { toast } = useToast();

  const handleSaveProfile = () => {
    setLoading(true);
    
    // Simulate saving profile
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Profile Updated",
        description: "Your profile information has been updated successfully",
      });
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <CardDescription>
          Update your account profile information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <Avatar className="h-16 w-16 sm:h-20 sm:w-20 mx-auto sm:mx-0">
            <AvatarImage src="" />
            <AvatarFallback className="text-xl sm:text-2xl bg-emerald-500 text-black">
              {user?.email ? user.email[0].toUpperCase() : 'U'}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-medium">{fullName || user?.email || 'User'}</h3>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
            <Button variant="outline" size="sm">Change Avatar</Button>
          </div>
        </div>
        
        <Separator />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-2">
            <Label htmlFor="full-name">Full Name</Label>
            <Input 
              id="full-name" 
              placeholder="Enter your full name" 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input 
              id="company" 
              placeholder="Enter your company name" 
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="job-title">Job Title</Label>
            <Input 
              id="job-title" 
              placeholder="Enter your job title" 
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-2">
        <Button 
          onClick={handleSaveProfile}
          disabled={loading}
          className="w-full sm:w-auto"
        >
          {loading ? "Saving..." : "Save Changes"}
        </Button>
      </CardFooter>
    </Card>
  );
};
