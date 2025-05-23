
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import TechnologyStack from "@/components/TechnologyStack";
import WorkflowSection from "@/components/WorkflowSection";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <header className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-500 rounded-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
              <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
              <path d="M3 15a2 2 0 0 1 2-2h16v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Z" />
              <path d="M14 12V5" />
            </svg>
          </div>
          <span className="text-xl font-bold">Hacker Mind AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="hover:text-emerald-400 transition-colors">Features</a>
          <a href="#technology" className="hover:text-emerald-400 transition-colors">Technology</a>
          <a href="#workflow" className="hover:text-emerald-400 transition-colors">Workflow</a>
          <a href="#security" className="hover:text-emerald-400 transition-colors">Security</a>
          <ThemeToggle />
          <Link to="/auth">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-black">Get Started</Button>
          </Link>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="p-2">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-bold">Menu</span>
                  <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="flex flex-col space-y-4">
                  <a href="#features" className="py-2 hover:text-emerald-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Features</a>
                  <a href="#technology" className="py-2 hover:text-emerald-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Technology</a>
                  <a href="#workflow" className="py-2 hover:text-emerald-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Workflow</a>
                  <a href="#security" className="py-2 hover:text-emerald-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Security</a>
                </nav>
                <div className="mt-auto pt-6">
                  <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black">Get Started</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>
        <HeroSection />
        
        <FeatureSection />
        
        <TechnologyStack />
        
        <WorkflowSection />
        
        <section id="security" className="py-16 bg-zinc-900 dark:bg-zinc-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Security & Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="feature-card">
                <CardHeader>
                  <CardTitle className="feature-title flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <path d="m16 10-4 4-4-4" />
                    </svg>
                    End-to-End Encryption
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="feature-description">Ensures data integrity and confidentiality throughout all testing processes.</p>
                </CardContent>
              </Card>
              
              <Card className="feature-card">
                <CardHeader>
                  <CardTitle className="feature-title flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <path d="M8 12h8" />
                    </svg>
                    Role-Based Access
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="feature-description">Manages user permissions securely with detailed access controls.</p>
                </CardContent>
              </Card>
              
              <Card className="feature-card">
                <CardHeader>
                  <CardTitle className="feature-title flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" />
                      <path d="m12 16 4-4" />
                      <path d="m8 12 4 4" />
                      <path d="m16 8-4 4" />
                      <path d="m8 12 4-4" />
                    </svg>
                    Audit Logging
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="feature-description">Maintains records of all performed tests for compliance tracking.</p>
                </CardContent>
              </Card>
              
              <Card className="feature-card">
                <CardHeader>
                  <CardTitle className="feature-title flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <path d="M12 8v8" />
                      <path d="M8 12h8" />
                    </svg>
                    Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="feature-description">Adheres to GDPR, ISO 27001, NIST, and other international security standards.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Security Posture?</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8">Deploy Hacker Mind AI and transform your vulnerability management with AI-driven penetration testing.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/auth">
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-black w-full sm:w-auto">Request a Demo</Button>
                </Link>
                <Button variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-950 dark:hover:bg-emerald-950 w-full sm:w-auto">View Documentation</Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-transparent dark:from-emerald-900/20 dark:to-black"></div>
            <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0,rgba(0,0,0,0)_50%)]"></div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
