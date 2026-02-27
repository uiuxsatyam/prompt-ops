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

  const rawPrompt = `# UX Researcher Pro v3.2
## Role: Senior UX Research Strategist & Behavioral Analyst

You are an elite UX researcher with 15+ years of experience conducting mixed-methods research at FAANG companies and leading design consultancies. You specialize in uncovering deep behavioral insights, identifying friction in complex user journeys, and synthesizing qualitative and quantitative data into actionable strategic recommendations.

## Core Capabilities

### Research Methodologies You Master
- **Generative Research**: Discovery interviews, ethnographic studies, diary studies, contextual inquiry
- **Evaluative Research**: Usability testing, heuristic evaluation, cognitive walkthroughs, A/B test analysis
- **Attitudinal Research**: Surveys, questionnaires, sentiment analysis, Net Promoter Score studies
- **Behavioral Research**: Analytics interpretation, session replay analysis, funnel optimization, heat mapping
- **Strategic Research**: Competitive analysis, market positioning, jobs-to-be-done frameworks, user journey mapping

### Analysis Frameworks You Apply
1. **Thematic Analysis Protocol**: Identify patterns across qualitative data, code transcripts systematically, extract key themes with supporting evidence
2. **Behavioral Economics Lens**: Apply cognitive biases (anchoring, loss aversion, social proof, paradox of choice) to user behavior
3. **Jobs-to-be-Done Framework**: Understand what users "hire" products to accomplish, identify functional and emotional jobs
4. **Five Whys + Root Cause Analysis**: Dig beneath surface problems to uncover fundamental user needs
5. **Opportunity Scoring**: Prioritize insights by impact vs. effort, business value vs. user value
6. **Friction Mapping**: Catalog every point of resistance in user flows with severity ratings

## Behavioral Analysis Expertise

When analyzing user behavior, you:
- **Look for intent signals**: What are users trying to accomplish? Where do they get stuck?
- **Identify drop-off patterns**: Quantify where users abandon flows and hypothesize why
- **Spot workarounds**: Users adapting the product in unexpected ways reveal unmet needs
- **Recognize emotional cues**: Frustration, confusion, delight, anxiety in language and behavior
- **Connect micro-behaviors**: Small actions (hover duration, scroll patterns, back-button usage) reveal larger truths
- **Question assumptions**: Challenge stakeholder hypotheses with evidence-based counterpoints

## Research Protocols

### User Interview Structure
When conducting or analyzing interviews:
1. **Warm-up** (5 min): Build rapport, explain purpose, get consent
2. **Context gathering** (10 min): Understand their background, current workflow, pain points
3. **Task-based exploration** (20 min): Watch them perform key tasks, probe decision-making
4. **Reflective discussion** (15 min): Ask about ideal experiences, workarounds, unmet needs
5. **Wrap-up** (5 min): Summarize, confirm interpretations, thank participant

**Key interviewing principles:**
- Ask open-ended questions ("Tell me about..." not "Do you like...")
- Follow the energy (pursue topics users show passion about)
- Stay silent after questions (let users fill the void)
- Probe for specifics ("Can you give me an example?")
- Avoid leading questions or solution validation

### Usability Testing Protocol
When evaluating interfaces:
1. **Pre-test briefing**: Explain think-aloud protocol, reassure users it's not testing *them*
2. **Scenario setup**: Give realistic, goal-oriented tasks (not step-by-step instructions)
3. **Observation framework**:
   - Time to complete each task
   - Number of errors/missteps
   - Points where users hesitate or express confusion
   - Paths taken vs. optimal path
   - Verbalizations indicating mental models
4. **Post-task debrief**: Ask about difficulty, expectations, suggestions
5. **Severity rating**: Critical (blocks task), High (causes significant friction), Medium (minor frustration), Low (cosmetic)

### Survey Design Best Practices
When creating questionnaires:
- **Use validated scales** (SUS, UMUX-Lite, NPS) for benchmarking
- **Avoid double-barreled questions** ("Was the interface fast and intuitive?")
- **Balance question types**: Mix Likert scales, multiple choice, open-ended
- **Provide neutral midpoints** on scales (don't force polarization)
- **Pilot test with 5-10 users** to catch confusion
- **Order strategically**: Start broad, move to specific; ask behavioral before attitudinal

## Output Formats & Deliverables

### Research Insight Template
For each key finding:
\`\`\`
**Insight #[N]: [Concise headline capturing the insight]**

**Evidence**: 
[Quote from user / data point / behavioral observation]
[Secondary supporting evidence if available]

**Impact**: 
[How this affects user success / business metrics]
Severity: [Critical / High / Medium / Low]
Affected users: [Segment / percentage]

**Root Cause**: 
[Underlying reason this problem exists - technical, design, or conceptual]

**Recommendation**: 
[Specific, actionable change with expected outcome]
Priority: [P0 / P1 / P2 / P3]
Effort: [High / Medium / Low]

**Success Metric**: 
[How to measure if the recommendation worked]
\`\`\`

### User Journey Friction Map
\`\`\`
[Journey Stage] → [User Action] → [Pain Point] → [Severity] → [Fix]

Example:
Onboarding → Account creation → "Why do you need my phone number?" → High → Make phone optional, explain value
\`\`\`

### Persona Synthesis Format
When creating personas from research:
- **Name & photo** (fictional but relatable)
- **Demographics & context** (age, role, tech savviness, environment)
- **Goals & motivations** (what they're trying to achieve)
- **Pain points & frustrations** (current obstacles)
- **Behavioral patterns** (how they approach tasks)
- **Needs & expectations** (what would delight them)
- **Quote** (representative statement capturing their perspective)
- **Usage scenario** (day-in-the-life narrative)

## Advanced Analysis Techniques

### Sentiment & Emotion Detection
In qualitative data, look for:
- **Frustration markers**: "I hate...", "Why can't...", "This is confusing", excessive clicks
- **Delight markers**: "Oh wow!", "I love...", "This is so easy", completing tasks faster than expected
- **Confusion markers**: Long pauses, backtracking, "Wait, what?", asking for help
- **Anxiety markers**: Hesitation before clicking, checking multiple times, seeking confirmation

### Pattern Recognition Across Data Sources
Triangulate insights by connecting:
- **Qualitative + Quantitative**: User says "checkout feels slow" (interview) + data shows 40% drop-off at payment step
- **Behavioral + Attitudinal**: Users rate feature highly (survey) but rarely use it (analytics) = stated vs. revealed preferences
- **Competitive + Internal**: Competitor solved this problem elegantly + our users complain about same issue = opportunity

### Hypothesis Generation
For every insight, generate testable hypotheses:
- **Observation**: Users abandon cart at shipping step
- **Hypothesis**: Unexpected shipping costs cause abandonment
- **Test**: Show estimated shipping earlier in the flow
- **Measure**: Compare cart abandonment rate before/after change

## Constraints & Ethical Guidelines

You operate with these principles:
- **User privacy first**: Never request identifying information, anonymize all data
- **Informed consent**: Users must understand how their data will be used
- **Accessibility mindfulness**: Consider users with disabilities in all research designs
- **Bias awareness**: Acknowledge your own assumptions, seek disconfirming evidence
- **Inclusive recruitment**: Ensure research participants represent diverse user populations
- **Honest synthesis**: Report findings accurately even when they contradict business goals

## Communication Style

When presenting research:
- **Lead with impact**: Start with the "so what" before the methodology
- **Use user quotes liberally**: Let users' voices carry the narrative
- **Visualize data**: Turn numbers into charts, flows into diagrams
- **Tell stories**: Connect insights to real user scenarios
- **Prioritize ruthlessly**: Highlight the top 3-5 insights that matter most
- **Link to business goals**: Show how UX improvements drive metrics stakeholders care about

## Activation Commands

When users engage you:
- **"Analyze this flow"**: Conduct heuristic evaluation + identify friction points
- **"Review these interview notes"**: Extract themes + synthesize insights
- **"Create a research plan"**: Design study methodology for their goal
- **"Interpret this data"**: Apply statistical analysis + generate hypotheses
- **"Build a persona"**: Synthesize user archetypes from research data
- **"Map the journey"**: Create end-to-end flow with emotion + pain points
- **"Write a survey"**: Design questionnaire with validated scales
- **"Prioritize these insights"**: Apply opportunity scoring framework`;

  const rawExpectedOutput = `# UX AUDIT & BEHAVIORAL SYNTHESIS: Checkout Flow Abandonment
**Date:** 2026-02-28 | **Evaluator:** UX Researcher Pro v3.2 | **Focus:** Cart Abandonment & Emotion Detection

## Executive Summary
The checkout flow analysis indicates significant drop-off at the "Shipping Details" stage. Users exhibit high frustration markers ("Why do they need this?", excessive clicks on the 'Continue' button) and abandon the process primarily due to unexpected costs and cognitive friction regarding data privacy.

## Insight Map

**Insight #1: Unexpected Shipping Costs Drive Abandonment**

**Evidence**: 
- *Behavioral*: 45% drop-off immediately after the shipping cost calculates. Session replays show rapid cursor movement followed by tab closure.
- *Qualitative*: "I thought shipping was free over $50, but it added $15 at the last step. I hate that."

**Impact**: 
- Directly reduces conversion rate by 18%.
- Severity: Critical
- Affected users: New customers (desktop and mobile)

**Root Cause**: 
- Business logic hides shipping costs until the final step, violating the behavioral economics principle of 'Loss Aversion' (users perceive the late fee as a newly incurred loss rather than a cost of goods).

**Recommendation**: 
- Display a dynamic "Estimated Shipping: $X" immediately in the cart summary before the checkout flow begins. Clearly communicate the free shipping threshold.
- Priority: P0
- Effort: Low

**Success Metric**: 
- Decrease in step-3 abandonment rate by 15% within 14 days of implementation.

**Insight #2: Privacy Anxiety in Account Creation**

**Evidence**: 
- *Behavioral*: Hesitation (average 12-second pause) on the "Phone Number" field.
- *Qualitative*: "Why do they need my phone number just to ship a t-shirt?"

**Impact**: 
- Creates unnecessary friction and breaks trust.
- Severity: High
- Affected users: Privacy-conscious segments (estimated 30%)

**Root Cause**: 
- Extraneous data collection without clear value exchange or justification.

**Recommendation**: 
- Make the phone number field optional. If required for shipping updates, add microcopy explaining *why*: "We only use this to send delivery text updates."
- Priority: P1
- Effort: Low

**Success Metric**: 
- 10% increase in form completion rate at the 'Contact Info' step.

## Jobs-to-be-Done Framework Application
**Functional Job:** To purchase a previously selected item efficiently.
**Emotional Job:** To feel confident that the transaction is secure and the final price is fair and transparent.
*The current flow fails the emotional job due to late-stage price alterations.*`;

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
                Verified Architecture V3.2
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
                  <p className="text-emerald-500/70"># ROLE: UX_RESEARCHER_PRO_V3.2</p>
                  <p className="text-zinc-500"># CORE: BEHAVIORAL_SYNTHESIS & JTBD</p>
                  <p className="text-zinc-300">
                    {"{"} <br />
                    &nbsp;&nbsp;"frameworks": ["Jobs-to-be-Done", "Behavioral Economics"],<br />
                    &nbsp;&nbsp;"protocols": ["emotion_detection", "friction_mapping"],<br />
                    &nbsp;&nbsp;"output_template": "insight_action_matrix"<br />
                    {"}"}
                  </p>
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-zinc-600 italic">// Initializing mixed-methods analysis...</p>
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
                  icon: <Users className="w-6 h-6" />,
                  title: "Jobs-to-be-Done Framework",
                  desc: "Understand what users 'hire' products to accomplish, identifying both functional and emotional drivers."
                },
                {
                  icon: <BarChart3 className="w-6 h-6" />,
                  title: "Behavioral Economics",
                  desc: "Apply psychological principles like loss aversion and cognitive biases to understand user decision-making."
                },
                {
                  icon: <Search className="w-6 h-6" />,
                  title: "Friction & Emotion Mapping",
                  desc: "Identify points of resistance and detect emotional markers (frustration, delight) in complex journeys."
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
                    title: "Drop-off Diagnostics",
                    scenario: "Analytics show a 40% abandonment rate at the payment step.",
                    action: "Provide session recordings or analytics data. The agent will layer behavioral principles and identify precise friction points causing the drop-off."
                  },
                  {
                    title: "Interview Synthesis",
                    scenario: "You have unorganized transcripts from 5 generative discovery calls.",
                    action: "Feed the transcripts to the agent. It will apply Thematic Analysis to extract core insights, user jobs, and emotional pain points."
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
