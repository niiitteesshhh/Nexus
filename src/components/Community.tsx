import { motion } from "motion/react";
import { MessageSquare, Users, Award, Zap } from "lucide-react";

const stats = [
  { label: "Active Members", value: "2.4M+", icon: Users },
  { label: "Daily Matches", value: "850K+", icon: Zap },
  { label: "Prize Pool", value: "$4.2M+", icon: Award },
  { label: "Threads", value: "125K+", icon: MessageSquare },
];

export function Community() {
  return (
    <section className="py-24 relative overflow-hidden" id="community">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-purple/5 blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-display font-bold text-brand-cyan tracking-[0.3em] uppercase mb-2">Nexus Hub</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">JOIN THE COLLECTIVE</h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl text-center flex flex-col items-center gap-4 group hover:border-brand-purple/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-brand-purple/20 transition-all group-hover:scale-110">
                <stat.icon className="text-brand-purple" size={24} />
              </div>
              <div>
                <p className="text-4xl font-display font-bold mb-1">{stat.value}</p>
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-center bg-gradient-to-br from-brand-purple/10 to-transparent">
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-white/10 shrink-0">
               <img 
                 src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop" 
                 alt="Gaming forum" 
                 className="w-full aspect-square object-cover"
                 referrerPolicy="no-referrer"
               />
            </div>
            <div>
              <h4 className="text-2xl font-display font-bold mb-4 leading-tight">THE WEEKLY<br />TOURNAMENT IS HERE</h4>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                Register your squad for the Galactic Clash. Over $50,000 in prizes up for grabs this season.
              </p>
              <button className="bg-brand-purple px-6 py-3 rounded-xl font-bold text-xs uppercase hover:bg-brand-purple/80 transition-all">
                REGISTER TEAM
              </button>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-xl font-display font-bold uppercase tracking-tight">Active Discussions</h4>
              <button className="text-xs font-bold text-brand-cyan hover:underline">VIEW ALL</button>
            </div>
            <div className="space-y-4">
              {[
                { user: "Phantom42", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" },
                { user: "NeonViper", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop" },
                { user: "VoidQueen", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 shrink-0 overflow-hidden border border-white/10">
                    <img src={item.avatar} className="w-full h-full object-cover" alt={item.user} />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-sm font-bold group-hover:text-brand-cyan transition-colors line-clamp-1">Best strategies for Shadow Protocol Rank Core?</h5>
                    <div className="flex items-center gap-3 mt-1 opacity-40 text-[10px] font-medium">
                      <span>By {item.user}</span>
                      <span>•</span>
                      <span>24m ago</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center opacity-40">
                    <MessageSquare size={14} />
                    <span className="text-[10px] font-bold">12</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
