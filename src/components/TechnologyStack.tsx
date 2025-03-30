
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TechnologyStack = () => {
  return (
    <section id="technology" className="py-16 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Built with cutting-edge technologies to deliver powerful security assessments at scale.</p>
        </div>
        
        <Tabs defaultValue="frontend" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-5 bg-zinc-900">
            <TabsTrigger value="frontend" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black">Frontend</TabsTrigger>
            <TabsTrigger value="backend" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black">Backend</TabsTrigger>
            <TabsTrigger value="ai" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black">AI & ML</TabsTrigger>
            <TabsTrigger value="infra" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black">Infrastructure</TabsTrigger>
            <TabsTrigger value="integrations" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black">Integrations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="frontend" className="bg-zinc-900 p-6 rounded-b-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">UI Framework</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>React (Dashboard & Reporting UI)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>Tailwind CSS (Styling)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>D3.js (Data Visualization)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>Three.js (3D Attack Visualization)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>Interactive Attack Path Visualization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>Real-time Vulnerability Dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>Advanced Filtering & Reporting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>Responsive Design for All Devices</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="backend" className="bg-zinc-900 p-6 rounded-b-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">Core Technologies</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>Node.js (Express) API Services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>Python (Core Security Engine)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>PostgreSQL (Structured Data)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>MongoDB (Logs & Reports)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">API Architecture</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>RESTful API Endpoints</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>GraphQL for Complex Queries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>WebSockets for Real-time Updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>JWT Authentication & OAuth</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="ai" className="bg-zinc-900 p-6 rounded-b-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">ML Technologies</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>TensorFlow/PyTorch (Core ML)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>scikit-learn (Decision Trees)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>NLP (for Pattern Recognition)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>OpenAI (Advanced Payload Generation)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">AI Capabilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>Autonomous Attack Path Discovery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>Vulnerability Prediction & Analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>Adaptive Exploit Generation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>Predictive Risk Assessment</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="infra" className="bg-zinc-900 p-6 rounded-b-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">Deployment</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>Docker & Kubernetes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>AWS/GCP Cloud Infrastructure</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>Terraform (Infrastructure as Code)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>GitLab CI/CD Pipelines</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">Scaling & Performance</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>Horizontal Pod Autoscaling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>Distributed Attack Simulations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>Redis Caching Layer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>Kafka Event Streaming</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="integrations" className="bg-zinc-900 p-6 rounded-b-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">Security Frameworks</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>Metasploit Framework</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>OWASP ZAP</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>Nmap Security Scanner</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>Burp Suite Enterprise</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">Development Integrations</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>GitHub/GitLab Workflows</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>Jenkins Pipeline Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>Jira & Confluence</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>Slack & Microsoft Teams</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TechnologyStack;
