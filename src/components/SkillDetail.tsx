import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ShieldCheck,
  Zap,
  Search,
  Users,
  BarChart3,
  MessageSquare,
  Settings2,
  CheckCircle2,
  Lock,
  Terminal,
  FileCode2,
  Copy,
  Check,
  Download
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SkillDetail = () => {
  const navigate = useNavigate();
  const [promptCopied, setPromptCopied] = React.useState(false);
  const [outputCopied, setOutputCopied] = React.useState(false);

  const rawPrompt = `# ROLE: MASTER_UX_RESEARCHER
You are a senior UX Strategist and Behavioral Analyst. Your objective is to audit flows, identify cognitive friction, and synthesize actionable, data-driven design recommendations.

# OBJECTIVE: BEHAVIORAL_SYNTHESIS
To ensure the interface serves the user's intent with minimal friction, adhering strictly to global usability standards and accessibility mandates (WCAG 2.1 AA+).

# PROTOCOLS & STANDARDS:

[1. HEURISTIC EVALUATION]
- Nielsen's 10: Audit interfaces strictly against Nielsen's 10 Usability Heuristics. 
- Severity Tracking: Assign a severity scale (0 = None to 4 = Usability Catastrophe) to every identified friction point.

[2. COGNITIVE LOAD & FRICTION]
- Intrinsic vs Extraneous Load: Identify elements that force the user to think or remember information unnecessarily.
- Fitts's & Hick's Law: Evaluate target sizing, spacing, and the paradox of choice in navigational flows.

[3. EMPATHY & ACCESSIBILITY BIAS]
- Universal Design: Assume a neurodivergent, visually impaired, or motor-impaired user base.
- Semantic HTML & ARIA: Ensure focus states, screen reader contexts, and color contrast ratios are explicitly addressed.

[4. DATA SYNTHESIS]
- Pattern Recognition: When analyzing user quotes or transcripts, categorize them into thematic clusters.
- Persona Drift: Flag when a solution benefits the business but actively hurts the primary user persona.

# OUTPUT FORMAT:
Provide the output as a \`Structured_Insight_Map\` (JSON or Markdown) with actionable \`[FIX_RECOMMENDATIONS]\` and \`[SEVERITY]\` tags.

[CONFIG]
STRICTNESS_LEVEL: 1.0
EMPATHY_BIAS: 0.95
OUTPUT_FORMAT: "structured_insight_map"

# INSTRUCTIONS:
Analyze the provided user flow, wireframe description, or interview transcript. Return a rigorous UX audit with actionable steps to resolve cognitive friction.`;

  const rawExpectedOutput = `# UX AUDIT: Checkout Flow IA
**Date:** 2024-10-24 | **Evaluator:** MASTER_UX_RESEARCHER | **Focus:** Conversion Friction & Accessibility

## Executive Summary
The analyzed checkout flow suffers from heavy extraneous cognitive load during the "Shipping Details" phase and fails WCAG 2.1 AA text contrast on primary error states. 

## Insight Map (Heuristic Violations)

### 1. [Violation: Error Prevention & Recovery]
- **Friction Point:** Zip code field lacks auto-formatting and rejects input with spaces without inline validation.
- **Severity:** [4 - Catastrophe] (Directly blocks conversion for users on mobile keyboards).
- **[FIX_RECOMMENDATION]:** Implement immediate inline validation on \`onBlur\`. Use a numeric keyboard type (\`inputmode="numeric"\`) and strip whitespace automatically.

### 2. [Violation: Accessibility / Contrast]
- **Friction Point:** The inline error message "Invalid Zip" uses #FF7777 on a #FFFFFF background (Ratio: 2.1:1).
- **Severity:** [3 - Major] (Fails WCAG AA minimum of 4.5:1).
- **[FIX_RECOMMENDATION]:** Deepen the error red to #D32F2F and accompany the color change with an aria-live region and an error icon (Semantic HTML).

### 3. [Violation: Flexibility & Efficiency]
- **Friction Point:** "Billing matches shipping" is defaulted to unchecked, forcing 85% of users to re-enter data.
- **Severity:** [2 - Minor / Friction]
- **[FIX_RECOMMENDATION]:** Default the checkbox to checked. Use a progressive disclosure pattern to reveal the billing address form only if unchecked.

## Empathy Assessment
*The current flow assumes high digital literacy and high patience. Users relying on screen readers will be completely blocked at Step 1 due to the lack of \`aria-invalid\` attributes on the failing fields.*`;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(rawPrompt);
    setPromptCopied(true);
    setTimeout(() => setPromptCopied(false), 2000);
  };

  const handleCopyOutput = () => {
    navigator.clipboard.writeText(rawExpectedOutput);
    setOutputCopied(true);
    setTimeout(() => setOutputCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([rawPrompt], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ux_researcher_pro.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-400 selection:bg-emerald-500/30 selection:text-emerald-500">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-emerald-500" />
            <span className="font-display font-bold text-lg tracking-tighter uppercase text-white">Prompt Ops</span>
          </div>
          <button
            onClick={() => navigate('/vault')}
            className="text-sm font-bold bg-emerald-500 text-black px-6 py-2.5 rounded-xl hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]"
          >
            Unlock Pro Skills
          </button>
        </div>
      </nav>

      <main className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
                <ShieldCheck className="w-3 h-3" />
                Verified Architecture V2.4
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] mb-8 text-white">
                UX Researcher <span className="text-emerald-500">Pro.</span>
              </h1>
              <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
                The industry standard for autonomous user research and behavioral analysis. Inject this skill to turn any LLM into a senior-level UX strategist capable of auditing complex flows and synthesizing deep user insights.
              </p>
              <div className="flex items-center gap-6 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-500" />
                  Instant Injection
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-500" />
                  Lifetime Access
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card p-8 border-emerald-500/10 relative z-10">
                <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/20" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/20" />
                  <span className="text-[10px] font-mono text-zinc-600 ml-2 uppercase tracking-widest">ux_researcher_pro.md</span>
                </div>
                <div className="space-y-4 font-mono text-xs leading-relaxed">
                  <p className="text-emerald-500/70"># ROLE: SENIOR_UX_STRATEGIST</p>
                  <p className="text-zinc-500"># OBJECTIVE: BEHAVIORAL_SYNTHESIS</p>
                  <p className="text-zinc-300">
                    {"{"} <br />
                    &nbsp;&nbsp;"protocols": ["heuristic_eval", "cognitive_walkthrough"],<br />
                    &nbsp;&nbsp;"output_format": "structured_insight_map",<br />
                    &nbsp;&nbsp;"empathy_bias": 0.85<br />
                    {"}"}
                  </p>
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-zinc-600 italic">// Initializing multi-phase logic...</p>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-full -z-10" />
            </motion.div>
          </div>

          {/* Capabilities */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white">Core Capabilities.</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Search className="w-6 h-6" />,
                  title: "Heuristic Evaluation",
                  desc: "Systematic audit of your interface against Nielsen's 10 usability heuristics with severity ratings."
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Persona Synthesis",
                  desc: "Generate data-driven user personas with deep psychological profiles and pain-point mapping."
                },
                {
                  icon: <BarChart3 className="w-6 h-6" />,
                  title: "Behavioral Analysis",
                  desc: "Analyze user session logs or interview transcripts to identify hidden friction points."
                }
              ].map((cap, i) => (
                <div key={i} className="p-8 rounded-3xl bg-zinc-900/20 border border-white/5 hover:border-emerald-500/30 transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center mb-6 border border-white/5 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                    {cap.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{cap.title}</h3>
                  <p className="text-zinc-500 leading-relaxed text-sm">{cap.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-16">
            <div className="glass-card p-10 border-white/5">
              <h2 className="text-3xl font-bold mb-8 text-white">Production Use Cases.</h2>
              <div className="space-y-12">
                {[
                  {
                    title: "Checkout Flow Audit",
                    scenario: "Your conversion rate dropped by 12% after the last update.",
                    action: "Inject UX Researcher Pro and provide the checkout URL or screenshots. It will identify specific friction points in the 'Information Architecture' phase."
                  },
                  {
                    title: "Interview Synthesis",
                    scenario: "You have 10 hours of user interview transcripts and no time to read them.",
                    action: "Feed the transcripts to the agent. It will use the 'Pattern Recognition' protocol to extract top 5 pain points and 3 unexpected feature requests."
                  }
                ].map((use, i) => (
                  <div key={i} className="grid md:grid-cols-3 gap-8 items-start">
                    <div className="text-xl font-bold text-emerald-500">{use.title}</div>
                    <div className="text-sm text-zinc-400 italic">"{use.scenario}"</div>
                    <div className="text-sm text-zinc-300 leading-relaxed">{use.action}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Architecture Display */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8 cursor-default">
              <h2 className="text-3xl font-bold text-white">The Architecture.</h2>
              <div className="flex gap-4">
                <button
                  onClick={handleCopyPrompt}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-white/10 text-white font-bold hover:bg-zinc-800 transition-all text-sm"
                >
                  {promptCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  {promptCopied ? 'Copied!' : 'Copy Prompt'}
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-all text-sm shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                >
                  <Download className="w-4 h-4" />
                  Download .md
                </button>
              </div>
            </div>
            <div className="p-8 bg-[#0a0a0a] rounded-3xl border border-white/5 relative group">
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                <button onClick={handleCopyPrompt} className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition-colors">
                  {promptCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <pre className="font-mono text-sm text-zinc-300 overflow-x-auto leading-relaxed">
                <code>{rawPrompt}</code>
              </pre>
            </div>
          </section>

          {/* Expected Output Display */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8 cursor-default">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Expected Output.</h2>
                <p className="text-zinc-500 text-sm">Example response generated by an LLM strictly following the architecture prompt.</p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handleCopyOutput}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold hover:bg-emerald-500/20 transition-all text-sm"
                >
                  {outputCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  {outputCopied ? 'Copied!' : 'Copy Example'}
                </button>
              </div>
            </div>
            <div className="p-8 bg-[#0a0a0a] rounded-3xl border border-emerald-500/10 relative group shadow-[0_0_40px_rgba(16,185,129,0.05)]">
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                <button onClick={handleCopyOutput} className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition-colors">
                  {outputCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <pre className="font-mono text-xs md:text-sm text-zinc-300 overflow-x-auto leading-relaxed">
                <code className="language-markdown">{rawExpectedOutput}</code>
              </pre>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center py-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
              Available in Premium Vault
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Ready to automate your research?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/vault')}
                className="px-10 py-5 bg-emerald-500 text-black rounded-2xl font-bold hover:bg-emerald-400 transition-all shadow-[0_0_40px_rgba(16,185,129,0.2)]"
              >
                Unlock Pro Skills
              </button>
              <button
                onClick={() => navigate('/vault')}
                className="px-10 py-5 bg-zinc-900 text-white rounded-2xl font-bold hover:bg-zinc-800 transition-all border border-white/5"
              >
                View Full Vault
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 pt-12 pb-6 text-center text-xs text-zinc-600">
        &copy; 2026 Prompt Ops. Made with ❤️ by <a href="https://www.uiuxsatyam.com" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-400 font-medium transition-colors">Satyam Anand</a>.
      </footer>
    </div>
  );
};

export default SkillDetail;
