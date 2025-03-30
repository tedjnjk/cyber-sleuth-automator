
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FeatureSection = () => {
  const features = [
    {
      title: "AI Attack Engine",
      description: "Implements rule-based and AI-driven attack simulations to discover vulnerabilities in web applications and networks.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
          <path d="M3 15a2 2 0 0 1 2-2h16v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Z" />
          <path d="M14 12V5" />
        </svg>
      )
    },
    {
      title: "Exploit & Mitigation",
      description: "Uses predefined exploits and AI-generated payloads to assess system weaknesses and generate remediation plans.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
          <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
        </svg>
      )
    },
    {
      title: "Auto-Patching",
      description: "Suggests or applies temporary security patches and retests vulnerabilities to verify effectiveness.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
          <path d="M6 10V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6" />
          <path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" />
          <path d="M6 16.5A4.5 4.5 0 1 0 10.5 12" />
          <path d="M2 20a5 5 0 0 0 5 5" />
        </svg>
      )
    },
    {
      title: "Social Engineering Simulator",
      description: "Conducts phishing and other social engineering attack simulations to test human security factors.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
          <path d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4Z" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      )
    },
    {
      title: "Reporting & Dashboard",
      description: "Provides interactive reports, attack flow visualizations, and mitigation recommendations for security teams.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
          <path d="M8 7H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3" />
          <path d="M8 7V3.5a2.5 2.5 0 0 1 5 0V7" />
          <path d="M11 7V3.5" />
          <path d="M16 15v-2" />
          <path d="M8 15v-2" />
          <path d="M12 15v-2" />
          <path d="M4 11h16" />
        </svg>
      )
    },
    {
      title: "CI/CD Integration",
      description: "Runs security tests in development workflows to catch vulnerabilities before deployment.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
          <path d="M12 3v9" />
          <path d="m8 11 4 4 4-4" />
          <rect width="16" height="6" x="4" y="15" rx="2" />
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Core Modules & Key Features</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Our intelligent system integrates AI-driven components to deliver comprehensive security assessments and automated remediation.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 hover:border-emerald-900 transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <CardHeader>
                <div className="w-12 h-12 rounded-md bg-emerald-900/20 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-zinc-400">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
