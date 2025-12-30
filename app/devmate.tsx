'use client';

import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Cpu, 
  Layers, 
  MessageSquare, 
  ShieldCheck, 
  Terminal, 
  Workflow,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';

// --- Data Structure for the Report ---
const reportData = [
  {
    id: 'abstract',
    title: 'Abstract',
    icon: <BookOpen className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <p>
          Devmate is a comprehensive AI solution developed and managed by BGSV, integrated into the Bosch ecosystem and implementation-ready for all business units. Because it is managed directly by BGSV, the system ensures trust and availability.
        </p>
        <p>
          Unlike rigid alternatives, Devmate is built upon a flexible architecture that supports multiple closed-source LLMs, such as Gemini 3 and ChatGPT 5.2. This design allows us to choose the model that best fits specific business needs today while ensuring full adaptability to future AI releases.
        </p>
        <p>
          In this report, we evaluate Devmate’s core functionalities using a holistic methodology and standardized grading metrics. We assessed the current release, version 0.12.7 (December 15, 2025), which recently underwent a major infrastructure migration to guarantee global availability. Currently, Devmate operates as an internal service approved for data up to CS2 compliance.
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-sm text-yellow-800">
            <strong>Critical Note:</strong> With a commercial-wide release on the horizon, we recommend a controlled pilot phase to validate its competitive advantage. Critically, the operating costs of Devmate have not been transparently disclosed. Early adoption without clear financial visibility risks creating a dependency on a platform with potentially unsustainable future pricing models.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'core-capabilities',
    title: 'Core Capabilities',
    icon: <Cpu className="w-5 h-5" />,
    content: (
      <div className="space-y-8">
        <p>
          Devmate is already integrated with Bosch's ecosystem, providing SSO authentication and access to SharePoint, Outlook, MS Teams, and more. <em>Note: Documents classified above CS3 are strictly prohibited.</em>
        </p>
        
        

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-blue-600"/> Chat Mode
            </h3>
            <p className="text-sm text-gray-600">
              Interactive interface using models like Gemini 3 or ChatGPT 5.2. Supports multi-agent integration for leveraging greater capabilities than standard sessions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-blue-600"/> Studio Mode
            </h3>
            <p className="text-sm text-gray-600">
              Environment for technical users to build Knowledge Bases, Tools, and Agents with Private, Shared, or Community access classifications.
            </p>
          </div>
        </div>

        <div className="space-y-6 mt-6">
          <section>
            <h3 className="font-bold text-gray-900 text-lg">Knowledge Bases</h3>
            <p className="mt-2 text-gray-700">
              Supports ingestion of txt, xlsx, cpp, zip, and internal Bosch sources (SharePoint, Confluence). Unlike NotebookLLM, Devmate allows <strong>RAG parameter tuning</strong> (confidence thresholds) and includes evaluation functions to monitor retrieval performance. API endpoints and MCP connectors are available for fast integration.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-gray-900 text-lg">Tools</h3>
            <p className="mt-2 text-gray-700">
              Deterministic functions interacting with services like Excel, Azure DevOps, or models like Nano Banana 2. Allows for tasks ranging from document search to CI/CD management.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-gray-900 text-lg">Agents</h3>
            <p className="mt-2 text-gray-700">
              "Digital workers" composed of a Brain (LLM), Knowledge Base, and Tools. They follow the <strong>ReAct pattern</strong> to interpret commands into actions.
            </p>
            
          </section>

          <section>
            <h3 className="font-bold text-gray-900 text-lg">Workflows & MCP</h3>
            <p className="mt-2 text-gray-700">
              <strong>Workflows:</strong> Comparable to n8n but secure within Bosch. Enables multi-agent orchestration where agents pass outputs to one another.
              <br/>
              <strong>MCP Connectors:</strong> (Model Context Protocol) A standard to connect cloud-based agents to local machines or servers, creating a unified network for automation.
            </p>
            
          </section>
        </div>
      </div>
    )
  },
  {
    id: 'implementations',
    title: 'Implementations',
    icon: <Layers className="w-5 h-5" />,
    subSections: [
      {
        title: "Knowledge Base: Logistics Domain",
        desc: "Building and validating a logistics knowledge source using generic web pages, books, and open access publications.",
        embedPlaceholder: "https://devmate.bosch.com/knowledge/69533dec80687b99b88ed5b6", 
        details: (
          <div className="space-y-2 mt-4">
            <p><strong>Methodology:</strong> Crawled data from external logistics sources and SAP S/4HANA guidebooks.</p>
            <p><strong>Validation:</strong> Used AI-to-AI validation (Gemini 3 Pro) with 20 test cases.</p>
            <p><strong>Results:</strong> Mean score 98.15. High retrieval parameters successfully forced the model to reject low-confidence matches (20/20 'cannot retrieve'), proving hallucination control.</p>
            <p><strong>Verdict:</strong> 4/5 score. Great engineering experience but requires strong AI lifecycle skills.</p>
          </div>
        )
      },
      {
        title: "Agent: Logistics & Office Assistant",
        desc: "An agent composed of the Logistics Knowledge Base, MS Teams, and MS Outlook tools.",
        embedPlaceholder: "https://devmate.bosch.com/agent/6953727a80687b99b8929de7",
        details: (
          <div className="space-y-2 mt-4">
            <p><strong>Capabilities:</strong> Successfully identified teams in MS Teams and sent messages. Checked emails in Outlook to identify urgent unread items.</p>
            <p><strong>Limitations:</strong> Unable to send emails due to current 'Unauthorized Access' error (connection interval limits).</p>
          </div>
        )
      },
      {
        title: "MCP Connector: Local Control",
        desc: "Using Model Context Protocol to control a local machine directly from the chat view.",
        embedPlaceholder: "EMBED_LINK_MCP_DEMO",
        details: (
          <div className="space-y-2 mt-4">
            <p><strong>Scenario:</strong> Ordered the agent to open local Outlook, draft a 'HI' email, and send it.</p>
            <p><strong>Performance:</strong> Latency between command and local action was nearly unrecognizable.</p>
            <p className="text-red-600 text-sm"><strong>Risk Note:</strong> Giving direct control over local environments requires strict governance to prevent unintended actions.</p>
          </div>
        )
      }
    ]
  },
  {
    id: 'discussions',
    title: 'Discussions',
    icon: <MessageSquare className="w-5 h-5" />,
    content: (
      <div className="space-y-8 divide-y divide-gray-200">
        <div className="pt-4">
          <h3 className="font-bold text-gray-900 text-lg mb-2">Does this solution offer technological advancements compared to the global market?</h3>
          <p className="text-gray-700">
            Technically, no. Components like Knowledge Bases, Agents, and Workflows have global equivalents (NotebookLLM, Copilot, n8n). However, Devmate's value lies in <strong>Ecosystem Integration</strong> (Bosch-native), <strong>Reliability</strong> (BGSV managed), <strong>Future-Proofing</strong> (adaptable LLMs), and its <strong>All-in-One Architecture</strong>.
          </p>
        </div>

        <div className="pt-8">
          <h3 className="font-bold text-gray-900 text-lg mb-2">How will Logistics adopt this?</h3>
          <p className="text-gray-700">
            Adoption should focus on <strong>augmentation rather than replacement</strong>. Current AI lacks the accountability required for logistics planning. It serves best for data retrieval and routine checks, while humans retain final decision-making authority to mitigate hallucination risks.
          </p>
        </div>

        <div className="pt-8">
          <h3 className="font-bold text-gray-900 text-lg mb-2">Cost & Skills</h3>
          <p className="text-gray-700 mb-2">
            <strong>Cost:</strong> Subscription-based (pay-as-you-go). Minimal initial investment, but beware of long-term vendor lock-in risks.
          </p>
          <p className="text-gray-700">
            <strong>Skills:</strong> Technical users need "AI Engineering" skills (RAG optimization, Orchestration). End users require "AI Literacy" to prompt effectively and verify outputs.
          </p>
        </div>

        <div className="pt-8">
          <h3 className="font-bold text-gray-900 text-lg mb-2">Security & Data Sovereignty</h3>
          <p className="text-gray-700">
            Devmate is architected for <strong>CS2 Compliance</strong>. Unlike external tools, data remains within the secure perimeter, preventing leakage or training of public models on proprietary Bosch IP.
          </p>
        </div>
      </div>
    )
  }
];

// --- Components ---

const PlaceholderEmbed = ({ label }: { label: string }) => (
  <div className="w-full h-64 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center relative overflow-hidden group hover:border-blue-400 transition-colors">
    <div className="bg-white p-4 rounded-full shadow-sm mb-3 group-hover:scale-110 transition-transform">
      <ExternalLink className="w-6 h-6 text-blue-600" />
    </div>
    <span className="text-gray-500 font-medium text-sm">Interactive Demo Embed</span>
    <span className="text-gray-400 text-xs mt-1">{label}</span>
    <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
  </div>
);

const Section = ({ data }: { data: any }) => {
  return (
    <div id={data.id} className="scroll-mt-24 mb-16 animate-in fade-in duration-700">
      <div className="flex items-center gap-3 mb-6 border-b pb-4 border-gray-200">
        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
          {data.icon}
        </div>
        <h2 className="text-3xl font-bold text-gray-900">{data.title}</h2>
      </div>
      
      {data.content && (
        <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed">
          {data.content}
        </div>
      )}

      {/* Handling Implementation Subsections with Embeds */}
      {data.subSections && (
        <div className="space-y-12">
          {data.subSections.map((sub: any, idx: number) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">{sub.title}</h3>
                <p className="text-gray-600 mt-2">{sub.desc}</p>
              </div>
              
              <div className="p-6 bg-gray-50">
                <PlaceholderEmbed label={sub.embedPlaceholder} />
              </div>
              
              <div className="p-6 text-sm text-gray-700 bg-white">
                {sub.details}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function DevmateReview() {
  const [activeSection, setActiveSection] = useState('abstract');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = reportData.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + 150; // Offset

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 text-slate-800 font-sans">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b z-50 px-4 py-3 flex justify-between items-center shadow-sm">
        <span className="font-bold text-xl text-blue-700">Digi Team</span>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Use full-width layout so content expands across the viewport */}
      <div className="w-full flex flex-col lg:flex-row min-h-screen">
        
        {/* Sidebar Navigation */}
        <aside className={` 
          fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-screen lg:sticky lg:top-0
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="p-6">
            <div className="mb-8">
              <h1 className="text-2xl font-extrabold text-blue-700 tracking-tight">Devmate</h1>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-1">Platform Review</p>
              <p className="text-xs text-gray-500 mt-2">v0.12.7 • Dec 2025</p>
            </div>

            <nav className="space-y-1">
              {reportData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200
                    ${activeSection === item.id 
                      ? 'bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-100' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                  `}
                >
                  {item.icon}
                  {item.title}
                </button>
              ))}
            </nav>

            <div className="mt-10 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <ShieldCheck className="w-4 h-4" />
                <span>BGSV Internal • CS2 Approved</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 px-4 pt-20 lg:pt-12 pb-24 lg:px-12">
          {/* Allow main content to span full width */}
          <div className="w-full">
            {/* Header */}
            <header className="mb-12">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                Devmate: Bosch Agentic AI Platform
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">Review Report</span>
                <span>By Digi Team</span>
                <span>•</span>
                <span>December 30, 2025</span>
              </div>
            </header>

            {/* Sections */}
            {reportData.map((section) => (
              <Section key={section.id} data={section} />
            ))}
            
            {/* Footer */}
            <footer className="mt-20 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
              <p>© 2025 Digi Team Review. Internal Distribution Only.</p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}