import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { REAL_GAMES } from "../data";
import { ArrowLeft, Clock, Calendar, Users, Trophy, Star } from "lucide-react";

export default function GameDetails() {
  const { id } = useParams();
  const game = REAL_GAMES.find(g => g.id === id);

  if (!game) {
    return (
      <div className="pt-32 pb-24 container mx-auto px-6 text-center">
        <h1 className="text-4xl font-display font-bold">Game not found</h1>
        <Link to="/games" className="text-brand-cyan mt-4 inline-block hover:underline">Back to games</Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="container mx-auto px-6">
        <Link to="/games" className="flex items-center gap-2 text-white/40 hover:text-brand-cyan transition-colors mb-8 font-bold text-sm">
          <ArrowLeft size={16} /> BACK TO GAMES
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl"
          >
            <img src={game.image} alt={game.title} className="w-full aspect-video md:aspect-[4/5] object-cover" />
          </motion.div>
          
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-brand-cyan/20 text-brand-cyan px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{game.category}</span>
                <div className="flex items-center gap-1 text-xs font-bold">
                  <Star size={14} className="text-brand-cyan fill-brand-cyan" /> {game.rating}
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">{game.title.toUpperCase()}</h1>
              <p className="text-xl text-white/60 leading-relaxed max-w-xl">{game.description}</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="glass p-4 rounded-2xl">
                <p className="text-[10px] font-bold text-white/40 uppercase mb-1">Developer</p>
                <p className="font-bold text-sm">{game.developer}</p>
              </div>
              <div className="glass p-4 rounded-2xl">
                <p className="text-[10px] font-bold text-white/40 uppercase mb-1">Release Date</p>
                <p className="font-bold text-sm">{game.releaseDate}</p>
              </div>
              <div className="glass p-4 rounded-2xl">
                <p className="text-[10px] font-bold text-white/40 uppercase mb-1">Status</p>
                <p className="font-bold text-sm text-brand-cyan">Available</p>
              </div>
              <div className="glass p-4 rounded-2xl">
                <p className="text-[10px] font-bold text-white/40 uppercase mb-1">Price</p>
                <p className="font-bold text-sm">{game.price}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest">Game Features</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm font-medium opacity-60 bg-white/5 px-4 py-2 rounded-xl">
                  <Users size={16} /> Online Multiplayer
                </div>
                <div className="flex items-center gap-2 text-sm font-medium opacity-60 bg-white/5 px-4 py-2 rounded-xl">
                  <Trophy size={16} /> Global Leaderboards
                </div>
                <div className="flex items-center gap-2 text-sm font-medium opacity-60 bg-white/5 px-4 py-2 rounded-xl">
                  <Clock size={16} /> 100+ Hours Gameplay
                </div>
                <div className="flex items-center gap-2 text-sm font-medium opacity-60 bg-white/5 px-4 py-2 rounded-xl">
                  <Calendar size={16} /> Seasonal Events
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 pt-8">
              <button className="bg-white text-black px-10 py-5 rounded-2xl font-bold text-sm hover:bg-brand-cyan hover:scale-105 transition-all shadow-xl">
                PURCHASE NOW
              </button>
              <button className="glass px-10 py-5 rounded-2xl font-bold text-sm hover:bg-white/10 transition-all">
                ADD TO WISHLIST
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
