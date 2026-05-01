import { motion } from "motion/react";
import { Trophy, Users, Calendar, Radio, ArrowRight, Zap } from "lucide-react";
import { LEGENDARY_PLAYERS } from "../data";

export default function Esports() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-52 pb-24 container mx-auto px-6 relative"
    >
      {/* Background HUD Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-cyan/5 blur-[150px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-x-1/2 w-[600px] h-[600px] bg-brand-purple/5 blur-[120px] -z-10 rounded-full pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-16 relative z-10">
        <div className="lg:col-span-2 space-y-20 flex-1">
          {/* Main Stage: Featured Live Match */}
          <div className="relative group overflow-visible">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-[40px] blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative rounded-[40px] overflow-hidden glass border-white/10">
               {/* Background visual */}
               <div className="absolute inset-0 grayscale opacity-40 brightness-50">
                  <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" />
               </div>
               
               <div className="relative p-12 text-center">
                  <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="inline-flex items-center gap-3 mb-12 glass-cyan px-6 py-2 rounded-full text-brand-cyan border-brand-cyan/20"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-cyan animate-ping"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Live Transmission • Global Stage</span>
                  </motion.div>
                  
                  <div className="flex items-center justify-center gap-8 md:gap-20 mb-12">
                    {/* Team Left */}
                    <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="flex-1 max-w-[200px]">
                      <div className="aspect-square rounded-[32px] glass mb-6 flex items-center justify-center border-white/5 relative group-hover:border-brand-cyan/30 transition-all">
                        <div className="text-6xl font-display font-black italic text-brand-cyan text-glow-cyan">A1</div>
                        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-brand-cyan" />
                      </div>
                      <h3 className="font-display font-black text-2xl italic tracking-tighter mb-2">APEX ALPHA</h3>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "65%" }}
                          className="h-full bg-brand-cyan"
                        />
                      </div>
                    </motion.div>
                    
                    <div className="text-center">
                      <div className="text-6xl font-display font-black italic mb-4 text-white/10">VS</div>
                      <div className="glass px-6 py-3 rounded-2xl border-white/5">
                        <span className="text-5xl font-display font-black italic leading-none">2 : 1</span>
                      </div>
                    </div>

                    {/* Team Right */}
                    <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="flex-1 max-w-[200px]">
                      <div className="aspect-square rounded-[32px] glass mb-6 flex items-center justify-center border-white/5 relative group-hover:border-brand-purple/30 transition-all">
                        <div className="text-6xl font-display font-black italic text-brand-purple text-glow-purple">S9</div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-brand-purple" />
                      </div>
                      <h3 className="font-display font-black text-2xl italic tracking-tighter mb-2">SECTOR 9</h3>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                         <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "45%" }}
                          className="h-full bg-brand-purple"
                        />
                      </div>
                    </motion.div>
                  </div>
                  
                  <p className="text-white/20 font-black uppercase tracking-[0.5em] text-xs mb-10">Cyber Zenith Major • Grand Finals</p>
                  
                  <button className="button-gaming bg-white text-black px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-cyan shadow-xl flex items-center gap-3 mx-auto">
                    <Radio size={18} className="animate-pulse" /> ACCESS FEED
                  </button>
               </div>
            </div>
            
            {/* HUD side elements */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-1.5 h-12 glass rounded-full opacity-20" />
              ))}
            </div>
          </div>

          {/* Tournament List */}
          <div className="space-y-10">
            <div className="flex items-center justify-between ml-4">
              <div>
                <span className="text-[10px] font-black text-brand-cyan uppercase tracking-[0.4em] block mb-2">CALENDAR</span>
                <h2 className="text-4xl font-display font-black italic tracking-tighter">UPCOMING OPS</h2>
              </div>
              <button className="group glass p-4 rounded-2xl hover:bg-white/5 transition-all flex items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-widest hidden sm:block">Full Schedule</span>
                <Calendar size={18} className="group-hover:text-brand-cyan" />
              </button>
            </div>

            <div className="grid gap-6">
              {[
                { title: "Protocol X", date: "MAY 14", venue: "Neo Tokyo Arena", prize: "$500K", icon: <Zap size={20} className="text-brand-cyan" /> },
                { title: "Zenith Invitational", date: "MAY 28", venue: "Nexus Virtual", prize: "$250K", icon: <Trophy size={20} className="text-brand-purple" /> },
                { title: "World Cup Qualifiers", date: "JUN 12", venue: "Night City Stadium", prize: "$1M", icon: <Trophy size={20} className="text-brand-magenta" /> }
              ].map((tourney, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="button-gaming glass p-10 rounded-[32px] border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-10 hover:border-brand-cyan/20 cursor-pointer"
                >
                  <div className="flex items-center gap-8">
                     <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center border-white/5 shadow-inner">
                        {tourney.icon}
                     </div>
                     <div>
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest block mb-1">{tourney.date} // {tourney.venue}</span>
                        <h4 className="text-2xl font-display font-black italic tracking-tight">{tourney.title}</h4>
                     </div>
                  </div>
                  
                  <div className="flex items-center gap-12">
                     <div className="text-right">
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest block mb-1">TOTAL STAKES</span>
                        <span className="text-xl font-display font-black text-brand-cyan text-glow-cyan">{tourney.prize}</span>
                     </div>
                     <button className="w-14 h-14 rounded-2xl glass border-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                        <ArrowRight size={20} />
                     </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-[400px] space-y-12">
          {/* Power Rankings */}
          <div className="glass p-10 rounded-[40px] border-white/5 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-cyan/5 blur-[50px] -z-10" />
            <h3 className="text-sm font-black uppercase tracking-[0.4em] text-brand-cyan mb-10 flex items-center gap-3">
               <Trophy size={16} /> POWER RANKINGS
            </h3>
            <div className="space-y-8">
              {[
                { name: "Apex Alpha", wins: 142, rating: 2840, logo: "A" },
                { name: "Sector 9", wins: 128, rating: 2715, logo: "S" },
                { name: "Zenith Prime", wins: 115, rating: 2690, logo: "Z" },
                { name: "Shadow Legion", wins: 109, rating: 2540, logo: "L" },
                { name: "Neon Wraiths", wins: 98, rating: 2410, logo: "W" },
              ].map((team, i) => (
                <div key={i} className="flex items-center gap-5 group cursor-pointer">
                  <span className="text-[10px] font-black text-white/10 w-4">{i + 1}</span>
                  <div className="w-12 h-12 rounded-2xl glass border-white/5 flex items-center justify-center font-display font-black text-xl italic group-hover:text-brand-cyan transition-all">
                    {team.logo}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-black text-white group-hover:text-glow-cyan transition-all">{team.name.toUpperCase()}</p>
                    <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{team.wins} TOURNAMENT WINS</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black text-brand-cyan">{team.rating}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-5 rounded-2xl glass border-white/5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white/5 transition-all">
               Deep Stats Database
            </button>
          </div>

          {/* Hall of Fame */}
          <div className="glass p-10 rounded-[40px] border-brand-purple/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 blur-[60px] -z-10" />
            <h3 className="text-sm font-black uppercase tracking-[0.4em] text-brand-purple mb-10 flex items-center gap-3">
               <Users size={16} /> HALL OF FAME
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {LEGENDARY_PLAYERS.map(player => (
                <div key={player.id} className="group cursor-pointer">
                   <div className="relative mb-6">
                      <div className="aspect-square rounded-3xl glass border-white/5 p-1 group-hover:border-brand-purple/50 transition-all overflow-hidden relative">
                         <img src={player.image} alt={player.handle} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                         <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-brand-purple text-white flex items-center justify-center text-[10px] font-black italic shadow-[0_0_20px_rgba(112,0,255,0.5)]">PRO</div>
                   </div>
                   <p className="text-xs font-black text-white mb-1 group-hover:text-glow-purple transition-all truncate tracking-tight">{player.handle.toUpperCase()}</p>
                   <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest truncate">{player.game}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </motion.div>
  );
}

