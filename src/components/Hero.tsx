import { motion, useScroll, useTransform } from "motion/react";
import { Play, TrendingUp, ChevronRight, Zap } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[110vh] flex items-center justify-center pt-48 overflow-hidden" id="hero">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 bg-mesh opacity-60"></div>
      <div className="absolute inset-0 z-0 grid-bg opacity-30"></div>
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-brand-dark to-transparent z-10"></div>
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-brand-dark to-transparent z-10"></div>
      
      {/* Scanline Effect */}
      <div className="scanline"></div>

      <motion.div style={{ y, opacity }} className="container mx-auto px-6 relative z-20 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full text-brand-cyan mb-10 shadow-[0_0_20px_rgba(0,242,255,0.1)] group cursor-pointer"
          >
            <Zap size={14} className="animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] font-display">System Status: Optimal // Season 04</span>
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[clamp(2.5rem,10vw,8rem)] font-display font-black leading-[0.85] tracking-tighter mb-10 uppercase">
              <span className="block text-white/90">Forge Your</span>
              <span className="block italic text-glow-cyan bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-magenta animate-gradient">Legacy</span>
              <span className="block text-white/90">In Night City</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-white/50 max-w-lg mb-12 leading-relaxed font-medium"
          >
            Discover, compete, and dominate. Join the next evolution of tactical gaming and real-time multiplayer warfare.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button className="button-gaming bg-white text-black px-10 py-5 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-brand-cyan hover:shadow-[0_0_30px_rgba(0,242,255,0.5)] transition-all w-full sm:w-auto">
              Join the Arena
            </button>
            <button className="button-gaming glass px-10 py-5 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-3 w-full sm:w-auto">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shadow-inner">
                <Play size={12} fill="white" className="ml-0.5" />
              </div>
              Briefing
            </button>
          </motion.div>
        </div>
        
        <div className="relative group perspective-1000 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, rotateY: 20, rotateX: 10 }}
            animate={{ opacity: 1, rotateY: 5, rotateX: 0 }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="relative z-10"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-[40px] opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
              <motion.img 
                 src="https://images.unsplash.com/photo-1600861194942-f883de0dfe96?q=80&w=2070&auto=format&fit=crop" 
                 alt="Night Cityscape" 
                 className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-1000"
                 referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute bottom-12 left-12 right-12">
                <div className="flex items-center gap-2 text-brand-cyan mb-4">
                  <div className="w-2 h-2 rounded-full bg-brand-cyan animate-ping"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Live Matchmaking</span>
                </div>
                <h3 className="text-4xl font-display font-black text-white italic mb-2">CYBER ZENITH</h3>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Global Servers Online // 5.2ms Ping</p>
              </div>
            </div>
          </motion.div>
          
          {/* HUD Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 glass p-6 rounded-3xl border-brand-cyan/20 z-20 shadow-2xl backdrop-blur-3xl"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-8">
                <span className="text-[10px] font-black text-white/40 tracking-widest">CPU LOAD</span>
                <span className="text-[10px] font-black text-brand-cyan">14%</span>
              </div>
              <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="w-1/4 h-full bg-brand-cyan shadow-[0_0_10px_rgba(0,242,255,1)]"></div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 glass p-6 rounded-3xl border-brand-purple/20 z-20 shadow-2xl backdrop-blur-3xl"
          >
            <div className="flex items-center gap-4">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-dark bg-zinc-800" />
                  ))}
               </div>
               <div>
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Squad Status</p>
                  <p className="text-sm font-black text-white">READY</p>
               </div>
            </div>
          </motion.div>
          
          {/* Floating light particles (simulated) */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-cyan/20 blur-[100px] -z-10"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-purple/20 blur-[100px] -z-10"></div>
        </div>
      </motion.div>
    </section>
  );
}
