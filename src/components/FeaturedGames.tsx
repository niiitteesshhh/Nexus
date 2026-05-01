import { motion } from "motion/react";
import { Star, Trophy, Gamepad2, ChevronRight } from "lucide-react";
import { REAL_GAMES } from "../data";
import { Link } from "react-router-dom";

export function FeaturedGames() {
  const featured = REAL_GAMES.slice(0, 4);

  return (
    <section className="py-32 container mx-auto px-6 relative" id="games">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 w-[500px] h-[500px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/4 w-[500px] h-[500px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 relative z-10">
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-brand-cyan mb-4"
          >
            <Trophy size={14} className="text-glow-cyan" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] font-display">Elite Selection</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase leading-none">
            Trending <span className="text-white/20 italic">Games</span>
          </h2>
        </div>
        <Link to="/games" className="group flex items-center gap-4 py-4 px-8 glass rounded-2xl hover:bg-white/5 transition-all">
          <span className="text-[10px] font-black uppercase tracking-widest">Explore All Database</span>
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-black transition-all">
            <ChevronRight size={16} />
          </div>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {featured.map((game, index) => (
          <motion.div 
            key={game.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer relative"
          >
            <div className="relative rounded-[40px] overflow-hidden mb-6 bg-brand-gray border border-white/5 transition-all duration-500 group-hover:border-brand-cyan/40 group-hover:translate-y-[-8px] shadow-2xl">
              <div className="relative aspect-[3/4.5] overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                
                {/* HUD Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="flex justify-between items-start">
                    <div className="w-8 h-8 border-t-2 border-l-2 border-brand-cyan" />
                    <div className="w-8 h-8 border-t-2 border-r-2 border-brand-cyan" />
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="w-8 h-8 border-b-2 border-l-2 border-brand-cyan" />
                    <div className="w-8 h-8 border-b-2 border-r-2 border-brand-cyan" />
                  </div>
                </div>

                <div className="absolute top-6 left-6 z-10">
                   <span className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-brand-cyan border border-brand-cyan/20">
                     {game.category}
                   </span>
                </div>
                
                <div className="absolute top-6 right-6 z-10 glass-cyan px-3 py-1.5 rounded-full flex items-center gap-1.5 text-[10px] font-black text-brand-cyan">
                  <Star size={12} className="fill-brand-cyan" />
                  {game.rating}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent">
                  <Link 
                    to={`/games/${game.id}`}
                    className="w-full button-gaming bg-white text-black py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 group-hover:bg-brand-cyan transition-all"
                  >
                    DEPLOY INTERFACE <Gamepad2 size={14} />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="px-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-2xl font-display font-black leading-tight group-hover:text-glow-cyan group-hover:text-brand-cyan transition-all">{game.title.toUpperCase()}</h4>
              </div>
              <div className="flex items-center justify-between text-xs font-bold text-white/30 uppercase tracking-widest">
                 <span>{game.developer}</span>
                 <span className="text-brand-cyan text-glow-cyan">{game.price}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
