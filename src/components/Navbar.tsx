import { motion } from "motion/react";
import { Search, Gamepad2, ShoppingCart, User, Bell, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";

export function Navbar() {
  const location = useLocation();
  const { cart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navLinks = [
    { name: "Games", path: "/games" },
    { name: "Esports", path: "/esports" },
    { name: "Community", path: "/community" },
    { name: "Store", path: "/store" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? "py-4" : "py-8"}`}
      id="navbar"
    >
      <div className="container mx-auto px-6">
        <div className={`relative rounded-3xl md:rounded-[40px] px-10 py-5 flex items-center justify-between transition-all duration-700 ${scrolled ? "bg-black/60 backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" : "bg-transparent border-transparent shadow-none"}`}>
          {/* Scroll Scanline Effect */}
          {scrolled && <div className="absolute inset-0 scanline opacity-20 pointer-events-none rounded-[40px]" />}
          
          <div className="flex items-center gap-16 relative z-10">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-700 shadow-[0_0_30px_rgba(255,255,255,0.2)] group-hover:bg-brand-cyan group-hover:shadow-brand-cyan/50">
                  <Gamepad2 className="-rotate-45 group-hover:-rotate-90 transition-transform duration-700 text-black" size={24} />
                </div>
                <div className="absolute -inset-2 border border-brand-cyan/0 group-hover:border-brand-cyan/40 rounded-2xl transition-all duration-700 scale-75 group-hover:scale-110" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-3xl tracking-tighter leading-none text-white group-hover:text-glow-cyan transition-all">NEXUS</span>
                <span className="text-[8px] font-black tracking-[0.4em] text-white/30 uppercase">Neural Network</span>
              </div>
            </Link>
            
            <div className="hidden lg:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`text-[10px] font-black tracking-[0.3em] transition-all flex flex-col items-center gap-2 group relative uppercase ${location.pathname === link.path ? "text-brand-cyan" : "text-white/30 hover:text-white"}`}
                >
                   <div className="relative h-4 overflow-hidden">
                      <div className="group-hover:-translate-y-full transition-transform duration-500 flex flex-col items-center">
                        <span className="h-4">{link.name}</span>
                        <span className="h-4 text-brand-cyan text-glow-cyan">{link.name}</span>
                      </div>
                   </div>
                   {(location.pathname === link.path) && (
                     <motion.div 
                       layoutId="activeTab"
                       className="absolute -bottom-3 w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_15px_rgba(0,242,255,1)]"
                     />
                   )}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6 relative z-10">
             <div className="hidden sm:flex items-center bg-white/5 border border-white/5 rounded-2xl px-5 py-2.5 gap-3 focus-within:border-brand-cyan/50 focus-within:bg-white/10 transition-all group shadow-inner">
                <Search size={14} className="text-white/20 group-focus-within:text-brand-cyan transition-colors" />
                <input 
                  type="text" 
                  placeholder="SEARCH DATABASE..." 
                  className="bg-transparent border-none outline-none text-[10px] font-black tracking-widest w-24 lg:w-40 placeholder:text-white/10 text-white"
                />
              </div>

            <div className="flex items-center gap-4">
              <Link to="/store" className="relative p-4 rounded-2xl glass hover:bg-white/10 transition-all border-white/5 active:scale-90 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <ShoppingCart size={20} className="relative z-10 group-hover:text-brand-cyan transition-colors" />
                {cart.length > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 right-2 w-5 h-5 bg-brand-cyan text-black text-[9px] font-black rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,242,255,1)] z-20"
                  >
                    {cart.length}
                  </motion.span>
                )}
              </Link>
              
              <Link 
                to="/signin" 
                className="button-gaming bg-white text-black hover:bg-brand-cyan px-8 py-4 rounded-2xl font-black text-[10px] tracking-widest uppercase transition-all shadow-xl active:scale-95 flex items-center gap-3"
              >
                <User size={18} />
                <span className="hidden sm:inline">User Login</span>
              </Link>
              
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-4 rounded-2xl glass hover:bg-white/10 transition-colors border-white/5"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[55] lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[400px] bg-brand-dark border-l border-white/5 z-[60] p-10 flex flex-col lg:hidden"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-display font-black text-2xl tracking-tighter">NEXUS</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl glass">
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-8 flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-2xl font-black italic tracking-tighter uppercase ${location.pathname === link.path ? "text-brand-cyan" : "text-white/40"}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="space-y-6">
                <Link 
                  to="/signin" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full button-gaming bg-white text-black py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3"
                >
                  <User size={18} /> User Login
                </Link>
                <div className="text-[8px] font-black tracking-[0.4em] text-white/20 text-center uppercase">
                  Nexus Neural Network // V4.0.2
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
