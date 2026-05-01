import { motion } from "motion/react";
import { ShoppingCart, ShoppingBag, CreditCard, ChevronRight, Zap, Target, Layers, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Product } from "../types";

const PRODUCTS: Product[] = [
  { id: "v-gpu", name: "Void-X GPU", price: 749.00, image: "https://images.unsplash.com/photo-1587202376732-f2e2b51dedff?q=80&w=2070&auto=format&fit=crop", category: "Hardware" },
  { id: "n-kb", name: "Neon Keycap Set", price: 45.00, image: "https://images.unsplash.com/photo-1544652478-665caee97504?q=80&w=2070&auto=format&fit=crop", category: "Accessories" },
  { id: "p-hs", name: "Pro Headset V2", price: 129.00, image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2070&auto=format&fit=crop", category: "Audio" },
  { id: "s-m", name: "Stealth Mouse Z", price: 89.00, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=2028&auto=format&fit=crop", category: "Hardware" },
  { id: "n-dm", name: "Nexus Desk Mat", price: 35.00, image: "https://images.unsplash.com/photo-1616440810475-6e6a147e4eb1?q=80&w=2071&auto=format&fit=crop", category: "Accessories" },
  { id: "g-cp", name: "Gaming Chair Prime", price: 349.00, image: "https://images.unsplash.com/photo-1598550476439-6847785fce66?q=80&w=2070&auto=format&fit=crop", category: "Hardware" },
];

export default function Store() {
  const { cart, addToCart, removeFromCart } = useCart();
  
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-52 pb-24 container mx-auto px-6 relative"
    >
      {/* HUD Accents */}
      <div className="absolute top-0 left-0 w-px h-64 bg-gradient-to-b from-brand-cyan to-transparent opacity-20" />
      <div className="absolute top-0 left-0 w-64 h-px bg-gradient-to-r from-brand-cyan to-transparent opacity-20" />

      {/* Hero Promo Section */}
      <div className="grid lg:grid-cols-2 gap-10 mb-24">
        {[
          {
            title: "NEXUS ELITE V4",
            subtitle: "PREMIUM GEAR",
            desc: "The world's fastest ultra-lightweight gaming mouse with precision-tuned optics.",
            price: "$149.99",
            image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=2070&auto=format&fit=crop",
            color: "brand-cyan"
          },
          {
            title: "PASS // SEASON 04",
            subtitle: "DATABASE ACCESS",
            desc: "Unlock the full legendary database, exclusive cosmetics, and priority server routing.",
            price: "$19.99/mo",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2071&auto=format&fit=crop",
            color: "brand-purple"
          }
        ].map((promo, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -8 }}
            className={`relative h-[450px] rounded-[40px] overflow-hidden glass border-${promo.color}/20 group cursor-pointer shadow-2xl transition-all`}
          >
            <div className="absolute inset-0 grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000 group-hover:scale-105">
              <img src={promo.image} className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
            <div className="relative p-12 h-full flex flex-col justify-end">
              <span className={`text-${promo.color} text-glow-${promo.color === "brand-cyan" ? "cyan" : "purple"} font-black text-[10px] uppercase tracking-[0.4em] mb-4`}>{promo.subtitle}</span>
              <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter mb-6 leading-none italic uppercase">{promo.title}</h2>
              <p className="text-white/40 mb-10 text-sm leading-relaxed max-w-sm font-medium">
                {promo.desc}
              </p>
              <div className="flex items-center gap-6">
                <button className={`button-gaming bg-white text-black px-10 py-5 rounded-[22px] font-black text-xs uppercase tracking-widest hover:bg-${promo.color} transition-all shadow-xl`}>
                   Initialize Order
                </button>
                <span className="text-2xl font-display font-black text-white italic">{promo.price}</span>
              </div>
            </div>
            {/* Corner Bracket */}
            <div className={`absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-${promo.color}/40 rounded-tr-3xl`} />
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Marketplace Hub */}
        <aside className="w-full lg:w-72 space-y-12 order-2 lg:order-1">
           <div className="space-y-10">
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-8 ml-2">NAV_DATABASE</h3>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                   {[
                     { label: "Hardware", icon: Zap, color: "brand-cyan", image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=200&auto=format&fit=crop" },
                     { label: "Digital Ops", icon: ShoppingBag, color: "white", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=200&auto=format&fit=crop" },
                     { label: "Augments", icon: Layers, color: "brand-purple", image: "https://images.unsplash.com/photo-1550745679-3351d53366fa?q=80&w=200&auto=format&fit=crop" },
                     { label: "Currency", icon: CreditCard, color: "brand-magenta", image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=200&auto=format&fit=crop" },
                     { label: "Keycards", icon: Target, color: "white", image: "https://images.unsplash.com/photo-1601300816889-7fdfb1ec074d?q=80&w=200&auto=format&fit=crop" },
                   ].map(cat => (
                     <button key={cat.label} className="w-full group relative">
                       <div className="flex items-center justify-between p-4 lg:p-5 rounded-2xl glass border-white/5 hover:bg-white/5 transition-all">
                          <div className="flex items-center gap-4 relative z-10">
                            <div className={`w-8 h-8 rounded-lg bg-white/5 overflow-hidden flex items-center justify-center group-hover:text-${cat.color} transition-colors`}>
                               <img src={cat.image} className="w-full h-full object-cover opacity-20 group-hover:opacity-40" alt={cat.label} />
                               <cat.icon size={16} className="absolute z-10" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest group-hover:text-white transition-colors">{cat.label}</span>
                          </div>
                          <ChevronRight size={14} className="hidden lg:block opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-cyan" />
                       </div>
                       <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-8 bg-brand-cyan transition-all rounded-full" />
                     </button>
                   ))}
                </div>
              </div>
              
              {/* Tactical Cart */}
              <div className="glass p-10 rounded-[40px] border-brand-cyan/10 lg:sticky top-32 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 blur-[50px] -z-10" />
                 <div className="flex items-center justify-between mb-10">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                       <ShoppingCart size={16} className="text-brand-cyan text-glow-cyan" /> SYSLOG_CART
                    </h4>
                    <span className="bg-brand-cyan/10 text-brand-cyan px-2 py-1 rounded text-[8px] font-black">{cart.length} ITEMS</span>
                 </div>

                 <div className="space-y-6 mb-10 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                   {cart.length > 0 ? (
                     cart.map((item, idx) => (
                       <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} key={`${item.id}-${idx}`} className="flex items-center justify-between group py-2 border-b border-white/5">
                         <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl glass border-white/5 overflow-hidden p-1">
                               <img src={item.image} className="w-full h-full object-cover rounded-lg" />
                            </div>
                            <div>
                               <p className="text-[10px] font-black text-white uppercase tracking-tight truncate w-24 group-hover:text-brand-cyan transition-colors">{item.name}</p>
                               <p className="text-[10px] font-black text-brand-cyan text-glow-cyan">${item.price}</p>
                            </div>
                         </div>
                         <button onClick={() => removeFromCart(item.id)} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-red-500/10 hover:text-red-500 transition-all text-white/10 group-hover:text-white/40">
                           <Trash2 size={14} />
                         </button>
                       </motion.div>
                     ))
                   ) : (
                     <div className="py-12 flex flex-col items-center gap-4 text-white/10 italic">
                        <ShoppingBag size={32} strokeWidth={1} />
                        <p className="text-[10px] font-black uppercase tracking-[0.3em]">Vault Empty</p>
                     </div>
                   )}
                 </div>
                 
                 <div className="space-y-6">
                   <div className="flex items-center justify-between px-2">
                     <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">NET PAYABLE</span>
                     <span className="text-2xl font-display font-black italic text-glow-cyan text-brand-cyan leading-none">${totalPrice.toFixed(2)}</span>
                   </div>
                   <button 
                     disabled={cart.length === 0}
                     className={`w-full button-gaming py-5 rounded-[22px] font-black text-[10px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 ${cart.length > 0 ? "bg-white text-black hover:bg-brand-cyan shadow-xl" : "bg-white/5 text-white/10 cursor-not-allowed"}`}
                   >
                     Initiate Checkout <CreditCard size={16} />
                   </button>
                 </div>
              </div>
           </div>
        </aside>

        {/* Global Marketplace */}
        <div className="flex-1 space-y-12">
          <div className="flex items-end justify-between border-b border-white/5 pb-8 relative">
             <div>
                <span className="text-[10px] font-black text-brand-cyan uppercase tracking-[0.4em] block mb-2">OPERATIVE DEPOT</span>
                <h3 className="text-5xl font-display font-black italic tracking-tighter uppercase leading-none">Global <span className="text-white/20">Marketplace</span></h3>
             </div>
             <div className="absolute bottom-0 right-0 w-32 h-0.5 bg-brand-cyan text-glow-cyan" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {PRODUCTS.map((prod, index) => (
              <motion.div 
                key={prod.id} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative"
              >
                <div className="bg-brand-gray rounded-[40px] overflow-hidden border border-white/5 hover:border-brand-cyan/30 transition-all duration-500 shadow-2xl relative">
                   <div className="relative aspect-square overflow-hidden bg-zinc-900/50">
                     <img 
                        src={prod.image} 
                        alt={prod.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
                        referrerPolicy="no-referrer"
                     />
                     <div className="absolute top-6 left-6 z-10">
                       <span className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-brand-cyan border border-brand-cyan/20">
                         {prod.category}
                       </span>
                     </div>
                     
                     {/* Corner Decoration */}
                     <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity">
                        <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-brand-cyan" />
                     </div>
                   </div>
                   
                   <div className="p-10 relative">
                     <h4 className="font-display font-black text-2xl italic mb-2 group-hover:text-glow-cyan group-hover:text-brand-cyan transition-all uppercase leading-tight">{prod.name}</h4>
                     <p className="text-brand-cyan text-glow-cyan font-black mb-10 text-3xl italic tracking-tighter">${prod.price.toFixed(2)}</p>
                     
                     <button 
                      onClick={() => addToCart(prod)}
                      className="w-full button-gaming bg-white/5 border border-white/10 hover:bg-white hover:text-black py-5 rounded-[22px] font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 relative overflow-hidden group/btn"
                     >
                       <ShoppingCart size={16} className="group-hover/btn:scale-110 transition-transform" /> 
                       Deploy to Cart
                     </button>
                   </div>

                   {/* Background pulse on hover */}
                   <div className="absolute -inset-1 bg-brand-cyan opacity-0 group-hover:opacity-5 blur-2xl transition-opacity pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

