
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-500">AI-Driven</span> Autonomous Penetration Testing
            </h1>
            <p className="text-xl text-zinc-300 mb-8 max-w-xl">
              Hacker Mind AI integrates AI attack simulations, exploit mitigation, and security reporting to automate penetration testing and vulnerability management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-black text-lg py-6 px-8">Get Started</Button>
              <Button variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-950 text-lg py-6 px-8">View Demo</Button>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border-2 border-black">
                  <span className="text-xs">OWASP</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border-2 border-black">
                  <span className="text-xs">MSF</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border-2 border-black">
                  <span className="text-xs">NMAP</span>
                </div>
              </div>
              <p className="text-zinc-400 text-sm">Integrates with industry-standard security frameworks</p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-full h-[400px] bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-transparent"></div>
                <div className="grid grid-cols-2 gap-3 w-full h-full p-6">
                  <div className="bg-black/60 backdrop-blur-sm rounded border border-zinc-800 p-3 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                      <span className="text-xs font-mono">AI Attack Engine</span>
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <pre className="text-xs text-emerald-400 font-mono overflow-hidden">{`> Initializing attack simulation...
> Scanning target: example.com
> Vulnerabilities detected: 3
> Generating exploits...`}</pre>
                    </div>
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm rounded border border-zinc-800 p-3 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span className="text-xs font-mono">Exploit Module</span>
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <pre className="text-xs text-red-400 font-mono overflow-hidden">{`> CVE-2023-1234 detected
> SQL Injection vulnerability
> Path: /api/users
> Risk: High
> Generating POC...`}</pre>
                    </div>
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm rounded border border-zinc-800 p-3 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-xs font-mono">Auto-Patching</span>
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <pre className="text-xs text-blue-400 font-mono overflow-hidden">{`> Analyzing vulnerability
> Generating patch
> Patch applied
> Verifying fix...
> Success: 100%`}</pre>
                    </div>
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm rounded border border-zinc-800 p-3 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <span className="text-xs font-mono">Reporting</span>
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <pre className="text-xs text-purple-400 font-mono overflow-hidden">{`> Generating report
> Vulnerability count: 7
> Critical: 1
> High: 2
> Medium: 3
> Low: 1`}</pre>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0,rgba(0,0,0,0)_60%)]"></div>
    </section>
  );
};

export default HeroSection;
