import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Mail, ArrowLeft, Github, Chrome } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AuthPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 selection:bg-emerald-500/30 selection:text-emerald-500">
      <button
        onClick={() => navigate('/')}
        className="absolute top-8 left-8 flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="flex items-center gap-2 justify-center mb-12">
          <Terminal className="w-8 h-8 text-emerald-500" />
          <span className="font-display font-bold text-2xl tracking-tighter uppercase text-white">Prompt Ops</span>
        </div>

        <div className="bg-zinc-900/40 border border-white/5 p-10 rounded-[2.5rem] backdrop-blur-xl">
          <h1 className="text-2xl font-bold mb-2 text-center">Welcome Back</h1>
          <p className="text-zinc-500 text-sm text-center mb-8">Sign in to access your specialist vault.</p>

          <div className="space-y-4">
            <button className="w-full py-4 px-6 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all">
              <Chrome className="w-5 h-5" />
              Continue with Google
            </button>
            <button className="w-full py-4 px-6 bg-zinc-800 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-zinc-700 transition-all border border-white/5">
              <Github className="w-5 h-5" />
              Continue with GitHub
            </button>
          </div>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#050505] px-4 text-zinc-600 font-bold tracking-widest">Or email</span>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full bg-black/40 border border-white/5 rounded-xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-emerald-500/50 transition-all"
                />
              </div>
            </div>
            <button className="w-full py-4 bg-emerald-500 text-black rounded-2xl font-bold hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              Sign In with Email
            </button>
          </form>

          <p className="mt-8 text-center text-xs text-zinc-600">
            By continuing, you agree to our <a href="#" className="text-zinc-400 hover:text-white underline">Terms of Service</a> and <a href="#" className="text-zinc-400 hover:text-white underline">Privacy Policy</a>.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
