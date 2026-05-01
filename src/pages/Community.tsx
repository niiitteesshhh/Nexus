import { motion } from "motion/react";
import { MessageSquare, Users, TrendingUp, Hash, Heart, Share2, Globe, ShieldCheck, PenSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function Community() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-48 pb-24 container mx-auto px-6"
    >
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
        <div>
          <h1 className="text-5xl font-display font-bold mb-4">NEXUS COMMUNITY</h1>
          <p className="text-white/60 max-w-2xl">
            Where players become legends. Share moments, join squads, and govern the future of the platform.
          </p>
        </div>
        <div className="flex gap-4">
          <Link 
            to="/community/create" 
            className="bg-brand-cyan text-black px-8 py-3 rounded-xl font-bold text-xs uppercase hover:scale-105 transition-all flex items-center gap-2"
          >
            <PenSquare size={16} /> Create Post
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Stats & Trends Side */}
        <div className="hidden lg:block space-y-8">
          <div className="glass p-6 rounded-3xl">
            <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-6 flex items-center gap-2">
              <TrendingUp size={14} className="text-brand-cyan" /> TRENDING NOW
            </h3>
            <div className="space-y-4">
              {["#CyberMajorFinals", "#NexusArenaS4", "#GamerLife", "#GameSetup", "#ProShorts"].map(tag => (
                <div key={tag} className="flex items-center justify-between group cursor-pointer">
                   <div className="flex items-center gap-2">
                     <Hash size={14} className="opacity-20" />
                     <span className="text-sm font-medium group-hover:text-brand-cyan transition-colors">{tag.slice(1)}</span>
                   </div>
                   <span className="text-[10px] font-bold opacity-30">24.5K</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-6 rounded-3xl text-center flex flex-col items-center">
             <div className="w-16 h-16 rounded-2xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-4">
               <Globe size={32} />
             </div>
             <h4 className="text-xl font-display font-bold mb-2">NETWORK REACH</h4>
             <p className="text-xs text-white/40 mb-6">You are connected to servers in North America, Europe, and Asia.</p>
             <div className="w-full bg-white/5 rounded-full h-1.5 mb-2">
               <div className="bg-brand-cyan w-[92%] h-full rounded-full shadow-[0_0_10px_rgba(0,242,255,0.5)]"></div>
             </div>
             <p className="text-[10px] font-bold uppercase tracking-widest text-brand-cyan">Latency: 24ms</p>
          </div>
        </div>

        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-8">
          {[
            { id: 1, user: "CYBER_WARRIOR", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop", postImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" },
            { id: 2, user: "NIGHT_HAWK", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop", postImage: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?q=80&w=2070&auto=format&fit=crop" },
            { id: 3, user: "VOID_WALKER", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop", postImage: "https://images.unsplash.com/photo-1550745679-3351d53366fa?q=80&w=2070&auto=format&fit=crop" }
          ].map(post => (
            <div key={post.id} className="glass p-8 rounded-3xl border-white/5">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full border border-white/10 overflow-hidden">
                      <img src={post.avatar} className="w-full h-full object-cover" alt={post.user} />
                   </div>
                   <div>
                     <div className="flex items-center gap-2">
                       <span className="font-bold text-sm">{post.user}</span>
                       <ShieldCheck size={14} className="text-brand-cyan" />
                     </div>
                     <span className="text-[10px] font-bold opacity-30 uppercase tracking-widest">Master Sentinel • 2h ago</span>
                   </div>
                </div>
                <button className="text-white/20 hover:text-white transition-colors">
                  <Share2 size={18} />
                </button>
              </div>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                Just hit rank Diamond in Shadow Protocol! The new season mechanics are insane. 
                What are your thoughts on the updated tactical map? I feel like the verticality 
                really changes the mid-game meta. <span className="text-brand-cyan cursor-pointer">#ShadowProtocol #Season4 #Gaming</span>
              </p>
              
              <div className="rounded-2xl overflow-hidden mb-6 border border-white/10">
                <img 
                   src={post.postImage} 
                   alt="Gameplay" 
                   className="w-full aspect-video object-cover"
                   referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex items-center gap-8 border-t border-white/5 pt-6">
                <button className="flex items-center gap-2 text-white/40 hover:text-brand-cyan transition-colors text-sm font-bold">
                  <Heart size={18} /> 1.2K
                </button>
                <button className="flex items-center gap-2 text-white/40 hover:text-brand-cyan transition-colors text-sm font-bold">
                  <MessageSquare size={18} /> 245
                </button>
                <div className="flex-1"></div>
                <div className="flex -space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
                  ].map((img, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-dark bg-zinc-800 overflow-hidden">
                       <img src={img} className="w-full h-full object-cover" alt="User" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-brand-dark bg-brand-cyan/20 flex items-center justify-center text-[10px] font-bold text-brand-cyan">
                    +42
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Side */}
        <div className="space-y-8">
          <div className="glass p-8 rounded-3xl">
             <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
               <Users className="text-brand-purple" size={20} /> TOP SQUADS
             </h3>
             <div className="space-y-6">
                {[
                  { name: "Phantom Vanguard", level: 124, members: 42, color: "text-brand-purple", avatar: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=100&auto=format&fit=crop" },
                  { name: "Cyber Knights", level: 98, members: 86, color: "text-brand-cyan", avatar: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?q=80&w=100&auto=format&fit=crop" },
                  { name: "Void Walkers", level: 85, members: 24, color: "text-white", avatar: "https://images.unsplash.com/photo-1550745679-3351d53366fa?q=80&w=100&auto=format&fit=crop" },
                  { name: "Neon Spirits", level: 72, members: 56, color: "text-brand-cyan", avatar: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=100&auto=format&fit=crop" },
                ].map((squad, i) => (
                  <div key={i} className="flex justify-between items-center group cursor-pointer">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-xl overflow-hidden glass border-white/5">
                          <img src={squad.avatar} className="w-full h-full object-cover" alt={squad.name} />
                       </div>
                       <div>
                         <p className={`font-bold text-sm group-hover:underline ${squad.color}`}>{squad.name}</p>
                         <p className="text-[10px] font-bold opacity-30 uppercase">{squad.members} Warriors</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <span className="text-xs font-bold text-white/40">LVL</span>
                       <p className="text-sm font-display font-bold">{squad.level}</p>
                    </div>
                  </div>
                ))}
             </div>
             <button className="w-full bg-white/5 border border-white/5 hover:bg-brand-purple hover:text-white transition-all py-3 rounded-xl mt-8 text-xs font-bold uppercase">
               Join a Squad
             </button>
          </div>

          <div className="glass p-8 rounded-3xl bg-gradient-to-br from-brand-cyan/10 to-transparent">
             <h3 className="text-lg font-display font-bold mb-4">PLATFORM TIP</h3>
             <p className="text-xs text-white/60 leading-relaxed mb-6">
               Did you know that using the Nexus Companion app gives you real-time inventory management 
               for all supported RPG games? Download now to stay ahead.
             </p>
             <div className="flex gap-2">
               <div className="flex-1 h-10 rounded-lg bg-black flex items-center justify-center font-bold text-[10px] hover:bg-zinc-900 cursor-pointer transition-colors uppercase">App Store</div>
               <div className="flex-1 h-10 rounded-lg bg-black flex items-center justify-center font-bold text-[10px] hover:bg-zinc-900 cursor-pointer transition-colors uppercase">Play Store</div>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
