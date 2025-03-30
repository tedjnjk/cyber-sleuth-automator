
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WorkflowSection = () => {
  const workflowSteps = [
    {
      number: "01",
      title: "Target Identification",
      description: "Users input URLs, IP ranges, or application endpoints through the intuitive dashboard interface.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
          <path d="M12 11v6" />
          <path d="M9 17h6" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Automated Reconnaissance",
      description: "System gathers intelligence on the target, mapping attack surface and identifying potential entry points.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <line x1="21.17" x2="12" y1="8" y2="8" />
          <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
          <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Attack Path Simulation",
      description: "AI predicts potential exploit paths and prioritizes attacks based on likelihood of success and impact.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Exploitation & Assessment",
      description: "Automated penetration testing is executed, with controlled exploits identifying actual vulnerabilities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <path d="M13 6h3a2 2 0 0 1 2 2v7" />
          <path d="M11 18H8a2 2 0 0 1-2-2V9" />
        </svg>
      )
    },
    {
      number: "05",
      title: "Mitigation & Auto-Patching",
      description: "Fixes are suggested or deployed automatically, with priority based on risk assessment and business impact.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
          <path d="M7.8 3H16c4 0 6 2 6 6v7c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-4 2-6 5.8-6Z" />
          <path d="m12 9 4 4" />
          <path d="m16 9-4 4" />
        </svg>
      )
    },
    {
      number: "06",
      title: "Reporting & Monitoring",
      description: "Results are presented on an interactive dashboard with detailed remediation plans and continuous monitoring.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      )
    }
  ];

  return (
    <section id="workflow" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">System Workflow</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Hacker Mind AI follows a systematic, AI-driven approach to security testing and remediation.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowSteps.map((step, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 relative overflow-hidden">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-emerald-500">{step.number}</span>
              </div>
              <CardHeader className="pt-12">
                <div className="flex items-center mb-2">
                  {step.icon}
                  <CardTitle className="ml-2">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400">{step.description}</p>
              </CardContent>
              {index < workflowSteps.length - 1 && (
                <div className="absolute -bottom-3 -right-3 w-12 h-12 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 transform rotate-45">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              )}
            </Card>
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Continuous Security Testing</h3>
              <p className="text-zinc-400 mb-4">Hacker Mind AI doesn't stop at one-time assessments. Our system continuously monitors your infrastructure for new vulnerabilities and adapts to evolving threats.</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-900/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Proactive Defense</h4>
                  <p className="text-zinc-500 text-sm">Stay ahead of attackers with continuous security validation</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8 border-t md:border-t-0 md:border-l border-zinc-800 pt-6 md:pt-0 md:pl-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-mono">01</div>
                <div className="flex-1">
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[85%]"></div>
                  </div>
                  <p className="text-sm text-zinc-500 mt-1">Initial Assessment</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-mono">02</div>
                <div className="flex-1">
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[65%]"></div>
                  </div>
                  <p className="text-sm text-zinc-500 mt-1">Remediation</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-mono">03</div>
                <div className="flex-1">
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[95%]"></div>
                  </div>
                  <p className="text-sm text-zinc-500 mt-1">Verification</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-mono">04</div>
                <div className="flex-1">
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[75%]"></div>
                  </div>
                  <p className="text-sm text-zinc-500 mt-1">Continuous Monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
