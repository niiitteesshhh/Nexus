import { Twitter, Instagram, Github, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="pt-24 pb-12 border-t border-white/5 relative overflow-hidden" id="footer">
      {/* Decorative pulse blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[500px] bg-brand-cyan/5 blur-[120px] -z-10 rounded-full"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-cyan rounded-lg transform rotate-45 flex items-center justify-center">
                <div className="transform -rotate-45 font-display font-bold text-black text-lg">N</div>
              </div>
              <span className="font-display font-bold text-xl tracking-tighter">NEXUS</span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed mb-8">
              The world's leading community platform for modern gamers. Discover thousands of games, 
              join competitive tournaments, and connect with players globally.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Github, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="p-2 glass rounded-lg hover:bg-brand-cyan hover:text-black transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="font-display font-bold uppercase tracking-widest text-sm mb-6">Platform</h5>
            <ul className="space-y-4 text-sm text-white/40 font-medium">
              <li><Link to="/games" className="hover:text-brand-cyan transition-colors">Browse Games</Link></li>
              <li><Link to="/community" className="hover:text-brand-cyan transition-colors">Community Hub</Link></li>
              <li><Link to="/esports" className="hover:text-brand-cyan transition-colors">Tournament Portal</Link></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Nexus Pass</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-display font-bold uppercase tracking-widest text-sm mb-6">Resources</h5>
            <ul className="space-y-4 text-sm text-white/40 font-medium">
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Developer API</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Brand Assets</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Safety Center</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Knowledge Base</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-display font-bold uppercase tracking-widest text-sm mb-6">Newsletter</h5>
            <p className="text-sm text-white/40 mb-6">Get the latest game releases and community updates.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm flex-1 outline-none focus:border-brand-cyan transition-colors"
              />
              <button className="bg-brand-cyan text-black px-6 py-3 rounded-xl font-bold text-xs uppercase hover:scale-105 transition-all">
                JOIN
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/20 uppercase tracking-widest font-bold">
            © 2024 Nexus Arena. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-white/20 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white/40 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/40 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/40 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
