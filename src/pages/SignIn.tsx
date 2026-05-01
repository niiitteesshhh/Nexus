import { motion } from "motion/react";
import { User, Lock, ArrowRight, Github, Chrome } from "lucide-react";

export default function SignIn() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-cyan/5 blur-[120px] -z-10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-purple/5 blur-[120px] -z-10 rounded-full animate-pulse delay-1000"></div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-md glass p-10 rounded-[40px] border-white/10 shadow-2xl relative"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-brand-cyan rounded-2xl transform rotate-12 flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(0,242,255,0.4)]">
             <div className="transform -rotate-12 font-display font-bold text-black text-3xl">N</div>
          </div>
          <h2 className="text-3xl font-display font-bold mb-2 uppercase tracking-tight">Welcome Back</h2>
          <p className="text-white/40 text-sm font-medium">Re-enter the Nexus Arena to continue your journey.</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest ml-1">Email Address</label>
            <div className="relative group">
              <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-brand-cyan transition-colors" />
              <input 
                type="email" 
                placeholder="commander@nexus.io"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand-cyan focus:bg-white/10 transition-all text-sm font-medium"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Password</label>
              <button className="text-[10px] font-bold text-white/40 hover:text-white uppercase tracking-widest transition-colors">Forgot?</button>
            </div>
            <div className="relative group">
              <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-brand-cyan transition-colors" />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand-cyan focus:bg-white/10 transition-all text-sm font-medium"
              />
            </div>
          </div>

          <button className="w-full bg-white text-black py-4 rounded-2xl font-bold text-sm tracking-wide hover:bg-brand-cyan hover:scale-[1.02] transition-all flex items-center justify-center gap-3 group mt-8">
            SIGN INTO NEXUS <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-10 pt-10 border-t border-white/5">
          <p className="text-center text-[10px] font-bold text-white/20 uppercase tracking-widest mb-6">Or continue with</p>
          <div className="grid grid-cols-2 gap-4">
             <button className="glass py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all group">
               <Chrome size={18} className="text-white/40 group-hover:text-brand-cyan transition-colors" />
               <span className="text-xs font-bold">GOOGLE</span>
             </button>
             <button className="glass py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all group">
               <Github size={18} className="text-white/40 group-hover:text-white transition-colors" />
               <span className="text-xs font-bold">GITHUB</span>
             </button>
          </div>
        </div>

        <p className="text-center mt-10 text-xs font-medium text-white/40">
          New to the arena? <button className="text-brand-cyan font-bold hover:underline">Create Account</button>
        </p>
      </motion.div>
    </motion.div>
  );
}
