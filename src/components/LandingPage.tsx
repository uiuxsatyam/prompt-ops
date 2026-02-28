import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import {
  Terminal,
  Cpu,
  Zap,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe,
  Bot,
  Database,
  FileCheck2,
  ServerCog,
  Layers,
  ChevronDown
} from 'lucide-react';

const Navbar = ({ onUnlock, onAuth }: { onUnlock: () => void, onAuth: () => void }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020205]/80 backdrop-blur-md border-b border-white/5">
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        <span className="font-display font-bold text-base sm:text-lg tracking-tighter text-white">Prompt Ops</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-[#A0A0AB]">
        <a href="#problem" className="hover:text-white transition-colors">Features</a>
        <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
        <a href="#comparison" className="hover:text-white transition-colors">Why Us</a>
        <a href="#platforms" className="hover:text-white transition-colors">Skills Vault</a>
      </div>
      <div className="flex items-center gap-4 sm:gap-6">
        <button
          onClick={onAuth}
          className="text-[13px] font-semibold text-[#A0A0AB] hover:text-white transition-colors"
        >
          Sign in
        </button>
        <button
          onClick={onUnlock}
          className="text-[13px] font-semibold bg-[#10B981] hover:bg-[#059669] text-black px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg transition-all"
        >
          Unlock Pro
        </button>
      </div>
    </div>
  </nav>
);

const PurchaseModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-zinc-900 border border-white/10 rounded-3xl p-8 relative shadow-[0_0_40px_rgba(16,185,129,0.1)]"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-6 border border-emerald-500/20">
                Lifetime Access
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">The Vault Pass.</h2>
              <p className="text-zinc-400 text-sm">One-time payment. Infinite ROI for your autonomous agents.</p>
            </div>

            <div className="mb-8 p-6 rounded-2xl bg-black border border-white/5 space-y-4">
              <div className="flex items-end gap-2 mb-6">
                <span className="text-4xl font-bold text-white">$249</span>
                <span className="text-zinc-500 text-sm mb-1 uppercase tracking-wider font-bold">/ once</span>
              </div>
              {[
                "All 9 Premium Specialist Systems",
                "Advanced .cursorrules automation",
                "Weekly logic architecture updates",
                "Private Discord community access",
                "Priority email support"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-sm text-zinc-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button
              className="w-full py-4 rounded-xl bg-emerald-500 text-black font-bold text-lg hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              Checkout via Stripe
            </button>
            <p className="text-center text-xs text-zinc-500 mt-4 uppercase tracking-wider font-bold">
              Secure payment encryption
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Hero = ({ onUnlock }: { onUnlock: () => void }) => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 flex flex-col justify-center items-center overflow-hidden bg-[#020205]">
      {/* Background Central Glow */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[80vw] sm:w-[60vw] h-[60vh] bg-[#10B981]/10 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover scale-[1.4] sm:scale-[1.3] opacity-40 mix-blend-screen"
        >
          <source src="/generated_video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#020205] opacity-50" />
        {/* Gradient overlay to blend edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-transparent to-[#020205] opacity-80" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 mt-12 sm:mt-16 flex flex-col items-center flex-grow justify-center">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-8"
        >
          <Terminal className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          <span className="font-display text-xl sm:text-2xl font-bold tracking-tighter text-white">Prompt Ops</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white text-center tracking-[-0.03em] mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1] max-w-5xl mx-auto flex flex-col items-center"
        >
          <span>Supercharge your</span>
          <span>AI Agents</span>
          <span className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-5 mt-3 sm:mt-2">
            <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#676879] font-medium tracking-tight italic">with</span>
            <span
              className="text-[#10B981] whitespace-nowrap text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ textShadow: "0 0 40px rgba(16,185,129,0.6), 0 0 15px rgba(16,185,129,0.4)" }}
            >
              [System Prompts]
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-xl md:text-[22px] text-[#A0A0AB] text-center mb-10 sm:mb-12 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-medium px-4"
        >
          Crafting production-grade architectures and killer system prompts to make your AI workforce completely autonomous.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full max-w-[560px] mx-auto mb-6 px-4"
        >
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Your work e-mail"
              className="w-full bg-[#1A1A24]/60 border border-white/10 rounded-[14px] px-5 sm:px-6 py-3.5 sm:py-4 text-white placeholder:text-[#676879] focus:outline-none focus:ring-2 focus:ring-[#10B981]/60 transition-all font-medium backdrop-blur-md shadow-inner text-sm sm:text-base"
            />
          </div>
          <button onClick={onUnlock} className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-[#10B981] hover:bg-[#059669] text-black font-semibold rounded-[14px] transition-all shadow-[0_4px_20px_rgba(16,185,129,0.4)] whitespace-nowrap text-sm sm:text-base">
            Unlock Pro
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[15px] font-medium text-[#676879] mb-auto"
        >
          Start exploring for free or <button onClick={() => navigate('/vault')} className="text-[#A0A0AB] hover:text-white underline underline-offset-4 decoration-[#676879] hover:decoration-white transition-all">explore vaults</button>
        </motion.div>
      </div>

      {/* Customer / Specialties Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="w-full max-w-5xl mx-auto px-6 mt-16 opacity-50 hover:opacity-100 transition-opacity duration-700 relative z-20"
      >
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[#676879]">
          <span className="flex items-center gap-2"><Layers className="w-4 h-4 text-[#434453]" /> Design</span>
          <span className="flex items-center gap-2"><Code2 className="w-4 h-4 text-[#434453]" /> Engineering</span>
          <span className="flex items-center gap-2"><Database className="w-4 h-4 text-[#434453]" /> Data</span>
          <span className="flex items-center gap-2"><ServerCog className="w-4 h-4 text-[#434453]" /> Ops</span>
          <span className="flex items-center gap-2"><FileCheck2 className="w-4 h-4 text-[#434453]" /> Testing</span>
          <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#434453]" /> Security</span>
        </div>
      </motion.div>
    </section>
  );
};

const WhatAreSkills = () => (
  <section id="what-are-skills" className="border-t border-white/5 bg-[#050505]">
    <div className="section-container">
      <div className="text-center mb-20 px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6">
          <Layers className="w-3 h-3" />
          The Anatomy of a Skill
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">What are <span className="text-emerald-500">Skills?</span></h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed mix-blend-plus-lighter">
          It's not just a prompt. It's a deterministic logic protocol delivered as a Markdown (.md) file. Paste it into your AI workspace, and it instantly transforms into a specialized engineer, designer, or researcher.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-emerald-500/5 blur-[100px] rounded-full -z-10 pointer-events-none" />
        {[
          {
            icon: Code2,
            title: "Strict Constraints",
            desc: "Every skill locks the LLM into a rigid architecture, forcing it to adhere to your specific tech stack, design system, and compliance rules."
          },
          {
            icon: ShieldCheck,
            title: "Zero Hallucinations",
            desc: "By providing explicit decision trees and expected output formats, .md skills eliminate the guesswork and drastically reduce error rates."
          },
          {
            icon: Zap,
            title: "Workflow Supercharger",
            desc: "Turn a 2-hour debugging session into a 10-second generation. Equip your entire team with the exact same high-performing logic."
          }
        ].map((feature, i) => (
          <div key={i} className="p-8 pb-10 rounded-[2rem] bg-zinc-900/30 border border-white/5 hover:border-emerald-500/30 transition-all group relative overflow-hidden flex flex-col items-start backdrop-blur-sm">
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
              <feature.icon className="w-32 h-32 text-emerald-500" />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center border border-white/5 mb-8 group-hover:bg-emerald-500 group-hover:text-black transition-all">
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Problem = () => (
  <section id="problem" className="border-t border-white/5">
    <div className="section-container">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            The "Agent Loop" of Death.
          </h2>
          <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
            Most developers treat system prompts like a simple list of rules. This is why your agents hallucinate, lose context, and fail to complete complex tasks.
          </p>
          <div className="space-y-6">
            {[
              "Agents getting stuck in infinite correction loops.",
              "Lack of structured output leading to broken codebases.",
              "Inability to handle multi-step monetization logic.",
              "Context window bloat from inefficient instructions."
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                <p className="text-zinc-300 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-red-500/20 transition-all group">
            <div className="text-red-500 font-display font-bold text-4xl mb-2 group-hover:scale-110 transition-transform origin-left">84%</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4">Failure Rate</div>
            <p className="text-xs text-zinc-400 leading-relaxed">Agents fail complex tasks due to non-structured system instructions.</p>
          </div>
          <div className="p-8 rounded-3xl bg-zinc-900/40 border border-white/5 mt-12 hover:border-white/20 transition-all group">
            <div className="text-white font-display font-bold text-4xl mb-2 group-hover:scale-110 transition-transform origin-left">12h+</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4">Wasted Time</div>
            <p className="text-xs text-zinc-400 leading-relaxed">Average time spent debugging prompts that lack phase-logic.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BeforeAfter = () => (
  <section id="comparison" className="border-t border-white/5">
    <div className="section-container">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Before & After PromptOps.</h2>
        <p className="text-zinc-500 max-w-2xl mx-auto">The difference between a "chat" and a "system architect."</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-[2.5rem] bg-zinc-900/30 border border-red-500/10">
          <div className="inline-flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            Standard Prompting
          </div>
          <div className="space-y-6">
            <div className="p-4 bg-black/40 rounded-xl border border-white/5 font-mono text-xs text-zinc-500">
              "Write a React component for a login form with validation."
            </div>
            <ul className="space-y-3">
              {[
                "Hallucinates non-existent libraries.",
                "Ignores accessibility standards.",
                "Inconsistent code style across turns.",
                "Fails on complex state logic."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-zinc-500">
                  <div className="w-1 h-1 rounded-full bg-zinc-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="p-8 rounded-[2.5rem] bg-emerald-500/5 border border-emerald-500/20">
          <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            PromptOps .md Skill
          </div>
          <div className="space-y-6">
            <div className="p-4 bg-black/40 rounded-xl border border-emerald-500/10 font-mono text-xs text-emerald-400">
              "Initialize [AUTH_ARCHITECT_V2] skill. Objective: Secure Login Flow."
            </div>
            <ul className="space-y-3">
              {[
                "Strict adherence to production standards.",
                "Multi-phase verification of every line.",
                "Built-in security and edge-case handling.",
                "Deterministic, high-quality output every time."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HowToUse = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      step: "01",
      title: "Copy the .md Architecture",
      desc: "Open any skill from the vault and copy the entire structured Markdown content."
    },
    {
      step: "02",
      title: "Inject into System Context",
      desc: "Paste it into the 'System Instructions' or '.cursorrules' file of your favorite AI tool."
    },
    {
      step: "03",
      title: "Activate the Specialist",
      desc: "Your AI now operates with the full knowledge and constraints of a senior-level specialist."
    }
  ];

  return (
    <section id="how-it-works" className="bg-zinc-900/20 border-y border-white/5">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">How to use .md Skills.</h2>
            <p className="text-lg text-zinc-400 mb-12">
              Our prompts are delivered as structured Markdown files (.md). These aren't just text; they are "Skills" that you inject into your AI's system context.
            </p>
            <div className="space-y-8">
              {steps.map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-6 transition-all duration-500 cursor-pointer ${activeStep === i ? 'opacity-100 translate-x-2' : 'opacity-40 hover:opacity-60'}`}
                  onClick={() => setActiveStep(i)}
                >
                  <div className={`text-2xl font-display font-bold transition-colors duration-500 ${activeStep === i ? 'text-emerald-500' : 'text-zinc-700'}`}>
                    {item.step}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-500 ${activeStep === i ? 'text-white' : 'text-zinc-400'}`}>
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="glass-card p-8 border-emerald-500/10 min-h-[400px] flex flex-col">
              <div className="flex items-center gap-2 mb-8 border-b border-white/5 pb-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                </div>
                <span className="text-[10px] font-mono text-zinc-600 ml-2 uppercase tracking-widest">
                  {activeStep === 0 && "Vault Interface"}
                  {activeStep === 1 && "System Configuration"}
                  {activeStep === 2 && "Active Session"}
                </span>
              </div>

              <div className="flex-grow relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {activeStep === 0 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      <div className="p-4 bg-zinc-900/50 rounded-xl border border-emerald-500/20 relative overflow-hidden group">
                        <div className="flex justify-between items-center mb-3">
                          <div className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">ux_researcher_pro.md</div>
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="px-2 py-1 bg-emerald-500 text-black text-[9px] font-bold rounded"
                          >
                            COPY
                          </motion.div>
                        </div>
                        <div className="space-y-2 font-mono text-[10px] text-zinc-400">
                          <div className="h-2 w-3/4 bg-zinc-800 rounded animate-pulse" />
                          <div className="h-2 w-full bg-zinc-800 rounded animate-pulse" />
                          <div className="h-2 w-1/2 bg-zinc-800 rounded animate-pulse" />
                          <div className="h-2 w-2/3 bg-zinc-800 rounded animate-pulse" />
                        </div>
                        <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-[11px] text-zinc-500 italic text-center">Clicking 'Copy' stores the architecture in your clipboard.</p>
                    </motion.div>
                  )}

                  {activeStep === 1 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      <div className="p-4 bg-zinc-900/80 rounded-xl border border-white/10">
                        <div className="text-[10px] text-zinc-500 uppercase mb-3 font-bold">System Instructions</div>
                        <div className="p-3 bg-black/40 rounded-lg border border-emerald-500/30 font-mono text-[10px] text-emerald-400/80 leading-relaxed">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5 }}
                            className="overflow-hidden whitespace-nowrap border-r-2 border-emerald-500"
                          >
                            # ROLE: SENIOR_UX_STRATEGIST...
                          </motion.div>
                          <div className="mt-1 opacity-50"># OBJECTIVE: BEHAVIORAL_SYNTHESIS...</div>
                          <div className="mt-1 opacity-30"># PROTOCOLS: [HEURISTIC_EVAL]...</div>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="px-4 py-1.5 bg-zinc-800 rounded-full text-[10px] text-zinc-400 border border-white/5">
                          Saving Configuration...
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeStep === 2 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      <div className="space-y-3">
                        <div className="flex justify-end">
                          <div className="bg-zinc-800 p-3 rounded-2xl rounded-tr-none text-[11px] text-zinc-300 max-w-[80%]">
                            Audit my checkout flow for friction points.
                          </div>
                        </div>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                          className="flex gap-3"
                        >
                          <div className="w-6 h-6 rounded-lg bg-emerald-500 flex items-center justify-center shrink-0">
                            <Bot className="w-4 h-4 text-black" />
                          </div>
                          <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-2xl rounded-tl-none text-[11px] text-emerald-100 max-w-[80%] shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                            <span className="font-bold text-emerald-400 block mb-1">[UX_STRATEGIST_V2.4 INITIALIZED]</span>
                            I have identified 3 critical friction points in your IA. Severity: High.
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full transition-all duration-500 ${activeStep === i ? 'w-8 bg-emerald-500' : 'w-2 bg-zinc-800'}`}
                    />
                  ))}
                </div>
                <div className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
                  Step {activeStep + 1} of 3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Platforms = () => {
  const navigate = useNavigate();
  return (
    <section id="platforms" className="border-t border-white/5">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">The Specialist Vaults.</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">9 specialized vaults covering the entire product lifecycle. One-time access to everything.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Design & UX",
              desc: "Architectures for UI/UX Designers and Design System Leads.",
              useCases: ["Design System Spec Generation", "Accessibility Audit Protocols", "User Flow Mapping"],
              free: "Component Spec Lite",
              premium: ["Design System Architect", "UX Researcher Pro", "Figma-to-Code Sentinel"],
              icon: Layers
            },
            {
              name: "Engineering",
              desc: "Deep-logic prompts for Frontend, Backend, and Full-Stack Developers.",
              useCases: ["API Schema Synthesis", "Legacy Code Refactoring", "Database Migration Logic"],
              free: "Clean Coder Lite",
              premium: ["Full-Stack Sprint Master", "Backend Engine v3", "Frontend Component Factory"],
              icon: Code2
            },
            {
              name: "Data & Marketing",
              desc: "Specialized frameworks for Data Analysts and Marketing Teams.",
              useCases: ["Market Sentiment Analysis", "SQL Query Synthesis", "Campaign Copy Architect"],
              free: "Data Scraper v1",
              premium: ["The Intelligence Hub", "Marketing Pulse Monitor", "SQL Synthesis Protocol"],
              icon: Database
            },
            {
              name: "Testing & QA",
              desc: "Rigorous protocols for automated testing and quality assurance.",
              useCases: ["Edge Case Discovery", "Unit Test Generation", "End-to-End Flow Validation"],
              free: "Bug Hunter Lite",
              premium: ["QA Sentinel Pro", "Edge Case Architect", "Test Suite Generator"],
              icon: FileCheck2
            },
            {
              name: "Deployment & Ops",
              desc: "Infrastructure-as-code and deployment automation architectures.",
              useCases: ["CI/CD Pipeline Synthesis", "Docker/K8s Orchestration", "Cloud Infrastructure Audit"],
              free: "Deploy Script v1",
              premium: ["DevOps Engine Pro", "Infra Architect", "Scaling Protocol"],
              icon: ServerCog
            },
            {
              name: "Audit & Monitoring",
              desc: "Continuous monitoring and security auditing frameworks.",
              useCases: ["Security Vulnerability Audit", "Performance Monitoring Log", "Compliance Check Protocol"],
              free: "Audit Log Lite",
              premium: ["Security Sentinel", "Performance Architect", "Compliance Engine"],
              icon: ShieldCheck
            }
          ].map((platform, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-zinc-900/20 border border-white/5 hover:border-emerald-500/30 transition-all group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center border border-white/5 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                  <platform.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">{platform.name}</h3>
              </div>
              <p className="text-zinc-500 mb-8 leading-relaxed text-sm">{platform.desc}</p>
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-3">Core Use Cases</h4>
                  <div className="flex flex-wrap gap-2">
                    {platform.useCases.map((uc, j) => (
                      <span key={j} className="px-2 py-1 bg-zinc-900/50 border border-white/5 rounded text-[10px] text-zinc-400">
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2">Basic</h4>
                    <p
                      className={`text-[11px] font-mono truncate ${platform.free === 'Clean Coder Lite' ? 'text-emerald-500 cursor-pointer hover:underline' : 'text-emerald-500/70'}`}
                      onClick={() => platform.free === 'Clean Coder Lite' && navigate('/skill/coder-lite')}
                    >
                      {platform.free}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2">Advanced</h4>
                    <ul className="space-y-1">
                      {platform.premium.slice(0, 2).map((p, j) => (
                        <li
                          key={j}
                          className={`text-[11px] font-mono truncate ${p === 'UX Researcher Pro' ? 'text-emerald-500 cursor-pointer hover:underline' : 'text-zinc-400'}`}
                          onClick={() => p === 'UX Researcher Pro' && navigate('/skill/ux-researcher-pro')}
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const testimonialsList = [
  {
    quote: "The .md skills are a game changer. Our agents now follow strict architectural patterns without any manual oversight.",
    author: "Sarah Chen",
    role: "Lead Architect @ TechFlow",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    quote: "We've reduced our prompt engineering time by 90%. The specialist vaults are worth every penny for the engineering team.",
    author: "Marcus Thorne",
    role: "CTO @ Nexus Labs",
    avatar: "https://picsum.photos/seed/marcus/100/100"
  },
  {
    quote: "Finally, a way to make AI actually useful for complex UX research. The structured output is exactly what we needed.",
    author: "Elena Rodriguez",
    role: "Design Director @ CreativePulse",
    avatar: "https://picsum.photos/seed/elena/100/100"
  },
  {
    quote: "PromptOps is a competitive advantage. The deep-logic instructions make our backend agents 10x more reliable.",
    author: "James Wilson",
    role: "VP Engineering @ DataScale",
    avatar: "https://picsum.photos/seed/james/100/100"
  }
];

const Testimonials = () => (
  <section className="border-t border-white/5 overflow-hidden">
    <div className="section-container !px-0">
      <div className="text-center mb-20 px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Trusted by the best.</h2>
        <p className="text-zinc-500 max-w-2xl mx-auto">See how PromptOps is transforming workflows for top-tier engineering and design teams.</p>
      </div>
      <div
        className="relative flex overflow-hidden w-full group"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex gap-8 w-max px-4"
        >
          {[...testimonialsList, ...testimonialsList].map((t, i) => (
            <div key={i} className="w-[400px] shrink-0 whitespace-normal p-8 rounded-[2rem] bg-zinc-900/20 border border-white/5 hover:border-emerald-500/20 transition-all">
              <p className="text-zinc-300 italic mb-8 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full border border-white/10" referrerPolicy="no-referrer" />
                <div>
                  <div className="text-white font-bold text-sm">{t.author}</div>
                  <div className="text-zinc-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

const ForDevelopers = () => (
  <section className="border-t border-white/5 bg-emerald-500/5">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Code2 className="w-3 h-3" />
            For Developers
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Install skills directly <br />
            via <span className="text-emerald-500">npm.</span>
          </h2>
          <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
            Integrate PromptOps directly into your development workflow. Install any skill as a structured .md file in your project root and start using it with Cursor, Copilot, or your custom LLM pipelines.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-zinc-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>Native .cursorrules support</span>
            </div>
            <div className="flex items-center gap-4 text-zinc-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>Version-controlled architectures</span>
            </div>
            <div className="flex items-center gap-4 text-zinc-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>CI/CD prompt validation</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="p-1 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-2xl">
            <div className="bg-black rounded-xl p-6 font-mono text-sm border border-white/5 shadow-2xl">
              <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/20" />
                <span className="text-zinc-600 text-xs ml-2">terminal</span>
              </div>
              <div className="space-y-2">
                <div className="flex gap-3">
                  <span className="text-emerald-500">$</span>
                  <span className="text-zinc-300">npm install @promptops/ux-researcher</span>
                </div>
                <div className="text-zinc-500 mt-4"># Skill installed to ./skills/ux-researcher.md</div>
                <div className="flex gap-3 mt-4">
                  <span className="text-emerald-500">$</span>
                  <span className="text-zinc-300">promptops sync</span>
                </div>
                <div className="text-emerald-400 mt-2">✓ Architecture synchronized with .cursorrules</div>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 blur-[60px] rounded-full -z-10" />
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What are .md skills?",
      a: "They are structured Markdown files that contain role-specific instructions, constraints, and logic. You copy-paste them into your AI's system context to 'teach' it a new professional skill."
    },
    {
      q: "Will they work with future models?",
      a: "Yes. Our architectures are based on fundamental LLM logic. They work with GPT-4o, Claude 3.5, Gemini 1.5, and any future models that support system instructions."
    },
    {
      q: "Do I get updates?",
      a: "Yes. We update the vault weekly with new architectures and refinements. You'll receive an email notification whenever a new skill is added to your vault."
    },
    {
      q: "Are these prompts safe for corporate data?",
      a: "Absolutely. Our architectures are designed with strict data privacy protocols. They instruct the LLM to process information locally within your secure session and explicitly prevent the leakage of PII or sensitive corporate IP into training datasets."
    },
    {
      q: "Do I need coding experience to use this?",
      a: "Not necessarily. While our 'Engineering' vault requires technical knowledge, our 'Design', 'Data', and 'Marketing' vaults are built so anyone can deploy complex logic. You simply paste the .md file into your favorite AI tool and follow the structured outputs."
    },
    {
      q: "Can I customize the skills for my specific team?",
      a: "Yes! Every skill is delivered as a raw Markdown (.md) file. This means you can easily edit the constraints, add your company's specific style guides, or tweak the logic before deploying it to your team's AI workspace."
    }
  ];

  return (
    <section id="faq" className="border-t border-white/5">
      <div className="section-container max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/5 rounded-2xl overflow-hidden bg-zinc-900/20">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-start justify-between hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-white pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform shrink-0 mt-1 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 text-zinc-500 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = ({ onUnlock }: { onUnlock: () => void }) => (
  <section className="border-t border-white/5">
    <div className="section-container pb-12">
      <div className="bg-[#0a0a0a] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_0_80px_rgba(16,185,129,0.05)] border border-emerald-500/10">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight text-white">
            Own the future of your workflow.
          </h2>
          <p className="text-xl text-zinc-400 mb-12 font-medium">
            Deploy the infrastructure once and scale your operations forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={onUnlock} className="px-10 py-5 bg-emerald-500 text-black rounded-2xl font-bold hover:bg-emerald-400 transition-all shadow-[0_0_40px_rgba(16,185,129,0.2)]">
              Unlock Pro Skills
            </button>
            <button className="px-10 py-5 bg-zinc-900 text-white border border-white/10 rounded-2xl font-bold hover:bg-zinc-800 transition-all">
              Connect with Creator
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/5 pt-20 pb-6 bg-black">
    <div className="w-full px-6 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-start gap-12">
      <div className="max-w-xs">
        <div className="flex items-center gap-2 mb-6">
          <Terminal className="w-6 h-6 text-emerald-500" />
          <span className="font-display font-bold text-xl tracking-tighter uppercase text-white">Prompt Ops</span>
        </div>
        <p className="text-sm text-zinc-500 leading-relaxed">
          The industry standard for production-grade AI system architectures. Built for the autonomous future.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
        <div>
          <h4 className="text-white font-bold text-sm mb-6">Product</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-emerald-500 transition-colors">The Vault</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition-colors">.md Skills</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition-colors">Updates</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold text-sm mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-emerald-500 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition-colors">Terms</a></li>
          </ul>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <h4 className="text-white font-bold text-sm mb-6">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/30 transition-all"><Globe className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/30 transition-all"><Code2 className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full px-6 md:px-12 lg:px-16 py-0 mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs text-zinc-600 text-center sm:text-left">
      <span>Prompt Ops 2026, made for autonomous future</span>
      <span>made with ❤️ by <a href="https://www.uiuxsatyam.com" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-400 font-medium transition-colors">satyam</a></span>
    </div>
  </footer>
);

export default function LandingPage() {
  const navigate = useNavigate();
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-emerald-500/30 selection:text-emerald-500">
      <Navbar onUnlock={() => setIsPurchaseModalOpen(true)} onAuth={() => navigate('/auth')} />
      <main>
        <Hero onUnlock={() => setIsPurchaseModalOpen(true)} />
        <WhatAreSkills />
        <Problem />
        <BeforeAfter />
        <HowToUse />
        <Platforms />
        <Testimonials />
        <ForDevelopers />
        <FAQ />
        <FinalCTA onUnlock={() => setIsPurchaseModalOpen(true)} />
      </main>
      <Footer />
      <PurchaseModal isOpen={isPurchaseModalOpen} onClose={() => setIsPurchaseModalOpen(false)} />
    </div>
  );
}
