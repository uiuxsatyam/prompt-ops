import React from 'react';
import { motion } from 'motion/react';
import {
    ArrowLeft,
    ShieldCheck,
    Zap,
    Code2,
    Terminal,
    FileCode2,
    Bug,
    Cpu,
    Lock,
    Settings2,
    Copy,
    Check,
    Download
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CoderLitePage = () => {
    const navigate = useNavigate();
    const [promptCopied, setPromptCopied] = React.useState(false);
    const [outputCopied, setOutputCopied] = React.useState(false);

    const rawPrompt = `# ROLE: MASTER_SOFTWARE_ARCHITECT
You are a world-class software engineer and system architect that prioritizes highly scalable, strictly governed, and impeccably efficient code. You do not accept functional compromises.

# OBJECTIVE: ENTERPRISE_GRADE_DELIVERY
Your mandate is to output code that adheres to the absolute highest global standards of software engineering, complying seamlessly with European data privacy architectures (GDPR) and strict US application benchmarks (SOC2, OWASP Top 10, WCAG 2.1).

# PROTOCOLS & STANDARDS:

[1. ARCHITECTURE & COMPLIANCE]
- High-Level Architecture: Enforce Domain-Driven Design (DDD), strict separation of concerns, and scalable modular monoliths or microservice patterns.
- Compliance: Security headers by default, strictly sanitized inputs implicitly assuming malicious actors payloads, and end-to-end PII obfuscation in logging/storage.

[2. CLEAN CODE & SOLID]
- SOLID Framework: Code must follow Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion rules without exception.
- DRY/KISS Principles: Keep It Simple, Stupid. Write self-documenting code with descriptive naming over redundant comments. Never duplicate logic.

[3. TYPE SAFETY & DATA VALIDATION]
- Enforce strict typing (e.g., TypeScript with \`strict: true\`) rejecting any \`any\` or generic loose constraints.
- Implement immediate data validation boundaries (e.g., Zod or JSON schema) for all external inbound data.

[4. STATE FLOW & ERROR OBSERVABILITY]
- State Management: Mandate unidirectional data flow and strict immutability. Side effects must be cleanly isolated (e.g., Redux architecture, React pure hooks).
- Error Handling: No raw console logging. Implement strictly structured error bubbling, wrapping with domain-specific exceptions, and correlation IDs for observability.

[5. EFFICIENCY & PERFORMANCE BUDGETING]
- Big-O Optimization: Code must explicitly aim for O(1) or O(log n) algorithmic paths. Favor optimized query execution plans over nested map loops.
- Frontend Budgeting: Implement aggressive memoization strategies, dynamic chunk lazy-loading, and precise bundle management to minimize Main Thread blocking.

[6. TESTING & CI/CD]
- Test-Driven Approach (TDD): Provide architectural structure assuming comprehensive unit, integration, and e2e testing is the immediate next step. Keep functions pure to maximize testability.
- Git Hygiene: Output modular commits in the Conventional Commits format (e.g., \`feat(auth): JWT validation layer\`) to streamline changelog generation.

# OUTPUT FORMAT:
Provide the output as modular code blocks with a brief architectural rationale. Explain the performance and security mechanisms embedded in the decision.

[CONFIG]
STRICTNESS_LEVEL: 1.0
COMPLIANCE_MODE: "US_EU_STRICT"
OUTPUT_FORMAT: "modular_code_blocks_with_architectural_breakdown"

# INSTRUCTIONS:
Analyze the provided user request or code snippet. Return a robust, enterprise-ready, perfectly typed, and securely optimized master solution.`;

    const rawExpectedOutput = `// [ARCHITECTURE RATIONALE]
// - Implemented Strict Zod Schema validation at the boundary for absolute type safety.
// - Adopted React Server Components pattern for zero-bundle-size initial load (O(1) client overhead).
// - Centralized Error Boundary with Correlation IDs.
// - Compliant with WCAG 2.1 via aria-attributes and semantic HTML.

import { z } from "zod";
import { logError } from "@/lib/observability";

// 1. BOUNDARY VALIDATION (Strict Type Safety)
const UserProfileSchema = z.object({
  userId: z.string().uuid(),
  email: z.string().email(),
  preferences: z.object({ theme: z.enum(["dark", "light"]) })
});
type UserProfile = z.infer<typeof UserProfileSchema>;

// 2. ERROR OBSERVABILITY (Defensive Programming)
class ProfileFetchError extends Error {
  constructor(public correlationId: string, message: string) {
    super(message);
    this.name = "ProfileFetchError";
  }
}

// 3. EFFICIENT DATA FETCHING (O(1) Path where possible)
async function fetchUserProfile(userId: string): Promise<UserProfile> {
  const reqId = crypto.randomUUID();
  try {
    const res = await fetch(\`https://api.internal/v1/users/\${userId}\`);
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    
    // Strict Schema Parse: Rejects malformed or malicious unexpected PII
    return UserProfileSchema.parse(await res.json());
  } catch (error) {
    logError("Failed to fetch user profile", { reqId, error, userId });
    throw new ProfileFetchError(reqId, "Unable to load profile data.");
  }
}

// 4. ACCESSIBLE UI COMPONENT (WCAG 2.1 Compliant)
export default async function UserProfileView({ userId }: { userId: string }) {
  try {
    const profile = await fetchUserProfile(userId);
    return (
      <article aria-labelledby="profile-heading" className="p-6 border rounded-xl">
        <h1 id="profile-heading" className="text-xl font-bold">
          {profile.email} {/* Email safely rendered, PII scrubbed in logs */}
        </h1>
        <p className="text-sm text-gray-500">Theme: {profile.preferences.theme}</p>
      </article>
    );
  } catch (error) {
    if (error instanceof ProfileFetchError) {
       return <div role="alert" className="text-red-500">Error: {error.message} (Ref: {error.correlationId})</div>;
    }
    return <div role="alert">An unexpected error occurred.</div>;
  }
}`;

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
        a.download = 'clean_coder_lite.md';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="min-h-screen bg-[#050505] text-zinc-400 selection:bg-emerald-500/30 selection:text-emerald-500">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between relative">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium hover:text-white transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="hidden sm:inline">Back</span>
                    </button>
                    <div className="flex items-center gap-1 sm:gap-2 absolute left-1/2 -translate-x-1/2 sm:static sm:translate-x-0">
                        <Terminal className="w-5 h-5 text-emerald-500" />
                        <span className="font-display font-bold text-sm sm:text-lg tracking-tighter uppercase text-white whitespace-nowrap">Prompt Ops</span>
                    </div>
                    <button
                        onClick={() => navigate('/vault')}
                        className="text-xs sm:text-sm font-bold bg-emerald-500 text-black px-4 py-2 sm:px-6 sm:py-2.5 rounded-xl hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] whitespace-nowrap"
                    >
                        Get <span className="hidden sm:inline">Architecture</span>
                    </button>
                </div>
            </nav>

            <main className="pt-28 pb-8">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
                                <Code2 className="w-3 h-3" />
                                Verified Logic V1.2
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] mb-8 text-white">
                                Clean Coder <span className="text-emerald-500">Lite.</span>
                            </h1>
                            <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
                                Essential protocols for writing clean, maintainable code.
                            </p>
                            <div className="flex items-center gap-6 text-sm font-medium">
                                <div className="flex items-center gap-2 border border-white/10 px-3 py-1.5 rounded-lg bg-white/5">
                                    <Zap className="w-4 h-4 text-emerald-500" />
                                    Instant Injection
                                </div>
                                <div className="flex items-center gap-2 border border-white/10 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                                    <Lock className="w-4 h-4" />
                                    Free Tier Access
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="glass-card p-8 border-emerald-500/10 relative z-10 shadow-2xl bg-zinc-900/80 backdrop-blur-3xl">
                                <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-6">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-amber-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/20" />
                                    <span className="text-[10px] font-mono text-zinc-600 ml-2 uppercase tracking-widest">clean_coder_lite.md</span>
                                </div>
                                <div className="space-y-4 font-mono text-xs leading-relaxed">
                                    <p className="text-emerald-500/70"># ROLE: JUNIOR_ENGINEER_STRICT</p>
                                    <p className="text-zinc-500"># OBJECTIVE: MAINTAINABLE_CODE_DELIVERY</p>
                                    <p className="text-zinc-300">
                                        {"{"} <br />
                                        &nbsp;&nbsp;"protocols": ["dry_principle", "solid_basics", "type_safety"],<br />
                                        &nbsp;&nbsp;"output_format": "code_blocks_with_explanation",<br />
                                        &nbsp;&nbsp;"refactor_bias": 0.6<br />
                                        {"}"}
                                    </p>
                                    <div className="pt-4 border-t border-white/5">
                                        <p className="text-zinc-600 italic">// Awaiting first coding instruction...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -inset-4 bg-emerald-500/5 blur-3xl rounded-full -z-10" />
                        </motion.div>
                    </div>

                    {/* Capabilities */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-white">Core Capabilities.</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <FileCode2 className="w-6 h-6" />,
                                    title: "Refactoring & Cleanup",
                                    desc: "Analyzes provided messy scripts and returns perfectly structured, readable alternatives."
                                },
                                {
                                    icon: <Bug className="w-6 h-6" />,
                                    title: "Basic Bug Squashing",
                                    desc: "Locates syntax errors and logic flaws quickly with a methodical debugging approach."
                                },
                                {
                                    icon: <Cpu className="w-6 h-6" />,
                                    title: "Typed Architecting",
                                    desc: "Enforces Typescript/Static Typing rules strictly to prevent runtime errors in provided solutions."
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

                    {/* Example Use Case */}
                    <section className="mb-16">
                        <div className="glass-card p-10 border-white/5 bg-gradient-to-b from-zinc-900/50 to-transparent">
                            <h2 className="text-3xl font-bold mb-8 text-white">Production Use Cases.</h2>
                            <div className="space-y-12">
                                {[
                                    {
                                        title: "Legacy Code Refactoring",
                                        scenario: "You have a 500-line React component filled with spaghetti state.",
                                        action: "Inject Clean Coder Lite and paste the file. It will automatically modularize the component into smaller hooks and sub-components based on single-responsibility principles."
                                    },
                                    {
                                        title: "API Schema Implementation",
                                        scenario: "You have a JSON response from a backend dev to implement into a frontend type system.",
                                        action: "Provide the JSON response. Driven by its strict typing module, it generates thorough Zod schemas and TypeScript interfaces with proper error handling."
                                    }
                                ].map((use, i) => (
                                    <div key={i} className="grid md:grid-cols-3 gap-8 items-start">
                                        <div className="text-xl font-bold text-emerald-500">{use.title}</div>
                                        <div className="text-sm text-zinc-400 italic bg-black/40 p-3 rounded-lg border border-white/5">"{use.scenario}"</div>
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
                                <code className="language-typescript">{rawExpectedOutput}</code>
                            </pre>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-white/5 pt-12 pb-6 text-center text-xs text-zinc-600 bg-black">
                &copy; 2026 Prompt Ops. Made with ❤️ by <a href="https://www.uiuxsatyam.com" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-400 font-medium transition-colors">Satyam Anand</a>.
            </footer>
        </div>
    );
};

export default CoderLitePage;
