import React from 'react';
import { motion } from 'motion/react';
import { SnakeGame } from './components/SnakeGame';
import { MusicPlayer } from './components/MusicPlayer';
import { Gamepad2, Headphones, Sparkles } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30 overflow-hidden relative">
      {/* Background Animated Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-emerald-500/20 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-purple-500/20 blur-[120px] rounded-full"
        />
      </div>

      {/* Header */}
      <header className="relative z-10 pt-8 pb-4 px-8 flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(52,211,153,0.4)]">
            <Sparkles className="w-6 h-6 text-black" />
          </div>
          <div>
            <h1 className="text-xl font-black uppercase tracking-tighter italic leading-none">Neon Snake</h1>
            <p className="text-[10px] text-emerald-400/60 font-mono uppercase tracking-widest mt-1">Beats & Bytes Edition</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-zinc-500">
          <a href="#" className="hover:text-emerald-400 transition-colors">Arcade</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Playlist</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Settings</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="h-8 w-[1px] bg-zinc-800" />
          <button className="text-xs font-mono uppercase tracking-widest text-emerald-400 border border-emerald-400/20 px-4 py-2 rounded-full hover:bg-emerald-400/10 transition-all">
            Connect Wallet
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column - Stats/Info */}
        <div className="lg:col-span-3 space-y-8 hidden lg:block">
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <Gamepad2 className="w-4 h-4 text-emerald-400" />
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400">Controls</h2>
            </div>
            <ul className="space-y-3 text-sm text-zinc-500 font-mono">
              <li className="flex justify-between">
                <span>Move</span>
                <span className="text-zinc-300">Arrows / WASD</span>
              </li>
              <li className="flex justify-between">
                <span>Pause</span>
                <span className="text-zinc-300">Space</span>
              </li>
              <li className="flex justify-between">
                <span>Reset</span>
                <span className="text-zinc-300">R</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <Headphones className="w-4 h-4 text-purple-400" />
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400">Audio Visual</h2>
            </div>
            <div className="space-y-4">
              <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ width: ["20%", "80%", "40%", "90%", "30%"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="h-full bg-purple-500" 
                />
              </div>
              <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ width: ["60%", "30%", "70%", "20%", "50%"] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="h-full bg-emerald-500" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Center Column - Snake Game */}
        <div className="lg:col-span-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SnakeGame />
          </motion.div>
        </div>

        {/* Right Column - Music Player */}
        <div className="lg:col-span-3 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MusicPlayer />
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-auto py-8 px-8 border-t border-white/5 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.3em]">
            &copy; 2026 Neon Snake Beats // All Rights Reserved
          </div>
          <div className="flex gap-8 text-zinc-500 text-[10px] font-mono uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
