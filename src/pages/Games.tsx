import { motion } from "motion/react";
import { Search, Filter, Gamepad2, Trophy, Clock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { REAL_GAMES } from "../data";

export default function Games() {
  const [selectedCategory, setSelectedCategory] = useState("All Games");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGames = REAL_GAMES.filter(game => {
    const matchesCategory = selectedCategory === "All Games" || game.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ["All Games", "Action RPG", "RPG", "Shooter", "Adventure"];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-48 pb-24 container mx-auto px-6"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
        <div>
          <h1 className="text-5xl font-display font-bold mb-4 tracking-tighter">EXPLORE GAMES</h1>
          <p className="text-white/60 max-w-2xl leading-relaxed">
            Browse the most advanced library of interactive entertainment. From AAA blockbusters to innovative indie gems.
          </p>
        </div>
        <div className="relative w-full md:w-80 group">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-brand-cyan transition-colors" />
          <input 
            type="text" 
            placeholder="Search titles..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand-cyan focus:bg-white/10 transition-all text-sm"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-64 space-y-8">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-cyan mb-6 flex items-center gap-2">
              <Filter size={14} /> CATEGORY
            </h3>
            <div className="space-y-2">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setSelectedCategory(cat)}
                  className={`block text-sm font-medium w-full text-left px-4 py-3 rounded-xl transition-all ${selectedCategory === cat ? "bg-brand-cyan text-black" : "text-white/40 hover:bg-white/5 hover:text-white"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div className="glass p-6 rounded-3xl bg-gradient-to-br from-brand-purple/10 to-transparent">
             <h4 className="text-sm font-bold uppercase tracking-widest mb-4">NEXUS PASS</h4>
             <p className="text-[10px] text-white/60 leading-relaxed mb-6">
               Get access to 200+ games including all new releases for one low monthly price.
             </p>
             <button className="w-full bg-brand-purple py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-lg">Upgrade Now</button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-white/40 uppercase tracking-widest">{filteredGames.length} GAMES FOUND</span>
            </div>
          </div>

          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredGames.map((game, index) => (
                <motion.div 
                  key={game.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="glass rounded-[32px] overflow-hidden group cursor-pointer border-white/5 hover:border-brand-cyan/20 transition-all duration-500 shadow-xl"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img 
                      src={game.image} 
                      alt={game.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/60 backdrop-blur-md text-brand-cyan text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                        {game.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-display font-bold text-2xl group-hover:text-brand-cyan transition-colors leading-tight">{game.title}</h4>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] font-bold text-white/30 mb-8 uppercase tracking-widest">
                      <span className="flex items-center gap-1.5"><Gamepad2 size={12} className="text-brand-cyan" /> 5-Star Rating</span>
                      <span className="flex items-center gap-1.5"><Trophy size={12} className="text-brand-cyan" /> Pro Tier</span>
                    </div>
                    <div className="flex items-center justify-between">
                       <span className="text-2xl font-display font-bold text-brand-cyan">{game.price}</span>
                       <Link 
                        to={`/games/${game.id}`}
                        className="bg-white/5 border border-white/10 hover:bg-brand-cyan hover:text-black hover:border-brand-cyan px-6 py-3 rounded-2xl font-bold text-[10px] uppercase tracking-widest transition-all"
                       >
                         View Details
                       </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 glass rounded-[32px]">
              <p className="text-white/40 font-bold uppercase tracking-widest">No games found matches your search...</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

