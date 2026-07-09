"use client";
import { motion } from 'motion/react';
import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
export function NotFoundPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (<div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#F24E1E]/5 rounded-full filter blur-[100px] pointer-events-none"/>

      <div className="relative z-10 text-center max-w-xl space-y-8 flex flex-col items-center">
        {/* Error icon wrapper */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="w-16 h-16 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center text-[#F24E1E]">
          <AlertTriangle className="w-6 h-6 animate-pulse"/>
        </motion.div>

        <div className="space-y-4">
          <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-7xl md:text-8xl font-heading italic tracking-tighter">
            404
          </motion.h1>
          <motion.h2 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-xl md:text-2xl font-light text-zinc-300">
            This page has drifted out of bounds.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-sm md:text-base text-zinc-500 font-light max-w-md mx-auto">
            The link may be broken, or the content has been refactored or moved to keep the system clean.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="pt-4">
          <Link href="/" className="bg-white text-black px-6 py-3.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors inline-flex items-center gap-2 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1"/>
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </div>);
}
