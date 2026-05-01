import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Image as ImageIcon, Send, X } from "lucide-react";
import React, { useState } from "react";

export default function CreatePost() {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we'd save the post here
    alert("Post created successfully!");
    navigate("/community");
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 min-h-screen flex items-center justify-center container mx-auto px-6"
    >
      <div className="w-full max-w-2xl glass p-10 rounded-[40px] border-white/10 relative mt-16">
        <Link to="/community" className="absolute -top-16 left-0 flex items-center gap-2 text-brand-cyan hover:text-white transition-colors font-bold text-[10px] tracking-widest uppercase z-20">
          <ArrowLeft size={14} /> BACK TO COMMUNITY HUB
        </Link>
        
        <div className="mb-10">
          <h1 className="text-4xl font-display font-bold uppercase tracking-tight mb-2">Create New Post</h1>
          <p className="text-white/40 text-sm font-medium">Share your thoughts, clips, or achievements with the Nexus Arena.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="group">
            <textarea 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's on your mind, Commander?"
              className="w-full bg-white/5 border border-white/10 rounded-3xl p-8 min-h-[200px] outline-none focus:border-brand-purple focus:bg-white/10 transition-all text-lg font-medium resize-none"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
            <div className="flex gap-4">
              <button type="button" className="p-4 rounded-2xl glass hover:bg-brand-cyan/20 group transition-all flex items-center gap-3">
                <ImageIcon size={20} className="text-brand-cyan" />
                <span className="text-xs font-bold uppercase tracking-widest bg-clip-text text-white/60">Attach Media</span>
              </button>
              <button type="button" className="p-4 rounded-2xl glass hover:bg-brand-purple/20 group transition-all flex items-center gap-3">
                <X size={20} className="text-brand-purple" />
                <span className="text-xs font-bold uppercase tracking-widest bg-clip-text text-white/60">Discard</span>
              </button>
            </div>
            
            <button 
              type="submit" 
              disabled={!content.trim()}
              className="bg-white text-black px-12 py-5 rounded-2xl font-bold text-sm tracking-wide hover:bg-brand-cyan hover:scale-[1.05] transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:hover:scale-100"
            >
              POST TO HUB <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
