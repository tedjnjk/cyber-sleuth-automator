
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignIn) {
        // Sign In
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;
        toast.success("Successfully signed in!");
        navigate("/");
      } else {
        // Sign Up
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw error;
        toast.success("Registration successful! Check your email for confirmation.");
      }
    } catch (error: any) {
      toast.error(error.message || "An error occurred during authentication");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="flex flex-col items-center mb-8">
          <div className="w-10 h-10 bg-emerald-500 rounded-md flex items-center justify-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
              <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
              <path d="M3 15a2 2 0 0 1 2-2h16v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Z" />
              <path d="M14 12V5" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold">Hacker Mind AI</h1>
        </div>

        <Card className="border-border relative overflow-hidden">
          <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: isSignIn ? 'translateX(-50%)' : 'translateX(0)', width: '200%' }}>
            {/* Sign Up Form */}
            <div className="w-1/2">
              <CardHeader>
                <CardTitle>Create an account</CardTitle>
                <CardDescription>Enter your email below to create your account</CardDescription>
              </CardHeader>
              <form onSubmit={handleAuth}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-black" disabled={loading}>
                    {loading ? "Creating account..." : "Create account"}
                  </Button>
                  <div className="text-center text-sm">
                    Already have an account?{" "}
                    <Button variant="link" className="p-0" type="button" onClick={() => setIsSignIn(true)}>
                      Sign in
                    </Button>
                  </div>
                </CardFooter>
              </form>
            </div>

            {/* Sign In Form */}
            <div className="w-1/2">
              <CardHeader>
                <CardTitle>Welcome back</CardTitle>
                <CardDescription>Enter your credentials to sign in</CardDescription>
              </CardHeader>
              <form onSubmit={handleAuth}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-signin">Email</Label>
                    <Input
                      id="email-signin"
                      type="email"
                      placeholder="m@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-signin">Password</Label>
                    <Input
                      id="password-signin"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-black" disabled={loading}>
                    {loading ? "Signing in..." : "Sign in"}
                  </Button>
                  <div className="text-center text-sm">
                    Don't have an account?{" "}
                    <Button variant="link" className="p-0" type="button" onClick={() => setIsSignIn(false)}>
                      Create account
                    </Button>
                  </div>
                </CardFooter>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
