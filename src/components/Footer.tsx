
import React from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-emerald-500 rounded-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                  <path d="M3 15a2 2 0 0 1 2-2h16v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Z" />
                  <path d="M14 12V5" />
                </svg>
              </div>
              <span className="text-xl font-bold">Hacker Mind AI</span>
            </div>
            <p className="text-zinc-400 mb-6 max-w-md">Autonomous penetration testing and ethical hacking system designed to revolutionize cybersecurity through AI-driven attack simulations.</p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full w-10 h-10 p-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-10 h-10 p-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-10 h-10 p-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">Features</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">Technology Stack</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">Workflow</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">Security</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-zinc-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>info@hackermindai.com</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>123 Security St, Cyber City, 94103</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h3>
              <div className="flex gap-2">
                <input type="email" placeholder="Enter your email" className="bg-zinc-800 border-zinc-700 rounded px-3 py-2 text-sm flex-1" />
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-black">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm mb-4 md:mb-0">© 2023 Hacker Mind AI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-zinc-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-zinc-500 hover:text-zinc-300 text-sm">Terms of Service</a>
            <a href="#" className="text-zinc-500 hover:text-zinc-300 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
