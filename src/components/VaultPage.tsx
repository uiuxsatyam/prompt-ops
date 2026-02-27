import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Terminal,
  Bot,
  ArrowRight,
  ArrowLeft,
  Zap,
  Star,
  Code2,
  Pencil,
  Database,
  Activity,
  Layers,
  LayoutTemplate,
  MonitorOff,
  ServerCog,
  Cpu,
  BrainCircuit,
  Rocket,
  Search,
  Briefcase,
  Megaphone,
  PieChart,
  Bug,
  FileCheck2,
  Settings2,
  Cloud,
  Lock,
  LineChart
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Skill {
  name: string;
  category: string;
  desc: string;
  price: string;
  icon: React.ElementType;
  isFree?: boolean;
  path?: string;
}

const skills: Skill[] = [
  // Free Skills
  { name: "Clean Coder Lite", category: "Engineering", desc: "Essential protocols for writing clean, maintainable code.", price: "Free", icon: Code2, isFree: true, path: "/skill/coder-lite" },
  { name: "Component Spec Lite", category: "Design & UX", desc: "Basic documentation framework for UI components.", price: "Free", icon: LayoutTemplate, isFree: true },
  { name: "Data Scraper v1", category: "Data & Marketing", desc: "Simple web scraping and data extraction logic.", price: "Free", icon: Database, isFree: true },
  { name: "Audit Log Lite", category: "Audit & Monitoring", desc: "Basic system event logging and monitoring architecture.", price: "Free", icon: Activity, isFree: true },

  // Premium Skills
  { name: "Design System Architect", category: "Design & UX", desc: "Build scalable design systems from scratch.", price: "$24.99", icon: Layers },
  { name: "UX Researcher Pro", category: "Design & UX", desc: "Deep behavioral analysis and insight synthesis.", price: "$24.99", icon: Search },
  { name: "Figma-to-Code Sentinel", category: "Design & UX", desc: "Deterministic conversion of design to production code.", price: "$24.99", icon: MonitorOff },
  { name: "Full-Stack Sprint Master", category: "Engineering", desc: "Accelerate full-stack feature development.", price: "$24.99", icon: Rocket },
  { name: "Backend Engine v3", category: "Engineering", desc: "Robust API and database architecture logic.", price: "$24.99", icon: ServerCog },
  { name: "Frontend Component Factory", category: "Engineering", desc: "Atomic component generation at scale.", price: "$24.99", icon: Cpu },
  { name: "The Intelligence Hub", category: "Data & Marketing", desc: "Market sentiment and data analysis frameworks.", price: "$24.99", icon: BrainCircuit },
  { name: "Marketing Pulse Monitor", category: "Data & Marketing", desc: "Autonomous campaign performance tracking.", price: "$24.99", icon: Megaphone },
  { name: "SQL Synthesis Protocol", category: "Data & Marketing", desc: "Natural language to complex SQL query logic.", price: "$24.99", icon: Briefcase },
  { name: "QA Sentinel Pro", category: "Testing & QA", desc: "Automated end-to-end testing protocols.", price: "$24.99", icon: FileCheck2 },
  { name: "Edge Case Architect", category: "Testing & QA", desc: "Discover critical edge cases before deployment.", price: "$24.99", icon: Bug },
  { name: "Test Suite Generator", category: "Testing & QA", desc: "Comprehensive unit and integration test suites.", price: "$24.99", icon: Settings2 },
  { name: "DevOps Engine Pro", category: "Deployment & Ops", desc: "CI/CD and infrastructure orchestration.", price: "$24.99", icon: Cloud },
  { name: "Infra Architect", category: "Deployment & Ops", desc: "Cloud infrastructure-as-code synthesis.", price: "$24.99", icon: Terminal },
  { name: "Scaling Protocol", category: "Deployment & Ops", desc: "Logic for scaling distributed systems.", price: "$24.99", icon: LineChart },
  { name: "Security Sentinel", category: "Audit & Monitoring", desc: "Continuous security and vulnerability auditing.", price: "$24.99", icon: Lock },
  { name: "Performance Architect", category: "Audit & Monitoring", desc: "System performance and latency optimization.", price: "$24.99", icon: Zap },
  { name: "Compliance Engine", category: "Audit & Monitoring", desc: "Regulatory and compliance check protocols.", price: "$24.99", icon: ShieldCheck },
];

export const VaultPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30 selection:text-emerald-500">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between relative">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">Back</span>
          </button>
          <div className="flex items-center gap-1 sm:gap-2 absolute left-1/2 -translate-x-1/2 sm:static sm:translate-x-0">
            <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />
            <span className="font-display font-bold text-sm sm:text-xl tracking-tighter uppercase text-white whitespace-nowrap">
              Vault
            </span>
          </div>
          <button
            onClick={() => navigate('/auth')}
            className="text-xs sm:text-sm font-bold bg-white text-black px-4 py-2 sm:px-6 sm:py-2.5 rounded-xl hover:bg-zinc-200 transition-all whitespace-nowrap"
          >
            Sign In
          </button>
        </div>
      </nav>

      <main className="pt-28 pb-4 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                <Zap className="w-3 h-3" />
                Production-Grade Architectures
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] mb-6">
                The Specialist <span className="text-emerald-500">Vault.</span>
              </h1>
              <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                Unlock production-grade system prompts for every role. Deploy autonomous role-specific architectures in seconds.
              </p>
            </motion.div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-8 rounded-[2rem] bg-zinc-900/20 border border-white/5 hover:border-emerald-500/30 transition-all group flex flex-col relative overflow-hidden"
              >
                {skill.isFree && (
                  <div className="absolute top-0 right-0 p-4">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500 text-black text-[10px] font-bold uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                      <Star className="w-3 h-3 fill-current" />
                      Free
                    </div>
                  </div>
                )}

                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center border border-white/5 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  {!skill.isFree && (
                    <div className="text-[11px] font-bold uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                      {skill.price}
                    </div>
                  )}
                </div>

                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2">{skill.category}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-500 transition-colors">{skill.name}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-8 flex-grow">{skill.desc}</p>

                <button
                  onClick={() => {
                    if (skill.path) {
                      navigate(skill.path);
                    }
                  }}
                  className={`w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group/btn ${skill.isFree
                    ? 'bg-zinc-800 text-white hover:bg-zinc-700 border border-white/5'
                    : 'bg-emerald-500 text-black hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                    }`}
                >
                  {skill.isFree ? 'Get Architecture' : 'Unlock Pro Skills'}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Trust Footer */}
          <div className="mt-20 pt-12 px-12 pb-6 rounded-[3rem] bg-zinc-900/20 border border-white/5 text-center">
            <div className="flex justify-center gap-12 mb-8">
              <div className="flex items-center gap-2 text-zinc-500">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium">Secure Checkout</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500">
                <Zap className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium">Instant Access</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500">
                <Star className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium">Lifetime Updates</span>
              </div>
            </div>
            <p className="text-zinc-600 text-xs">
              &copy; 2026 Prompt Ops Vault. Made with ❤️ by <a href="https://www.uiuxsatyam.com" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-400 font-medium transition-colors">Satyam Anand</a>. Built for the autonomous future.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
