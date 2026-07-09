"use client";
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X, Home, Briefcase, Calendar } from 'lucide-react';
import Link from 'next/link';
export function GlassConfirmationModal({ isOpen, onClose, senderName }) {
    return (<AnimatePresence>
      {isOpen && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop Blur overlay */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/60 backdrop-blur-md cursor-pointer" id="modal-backdrop"/>

          {/* Glassmorphic Container modal */}
          <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 15 }} transition={{ type: 'spring', damping: 25, stiffness: 350 }} className="relative w-full max-w-lg p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-2xl shadow-[0_0_50px_-12px_rgba(255,255,255,0.12)] overflow-hidden text-center z-10" id="modal-container">
            {/* Ambient glass light flare */}
            <div className="absolute -top-[150px] -left-[150px] w-[300px] h-[300px] rounded-full bg-white/[0.03] blur-[80px] pointer-events-none"/>
            <div className="absolute -bottom-[150px] -right-[150px] w-[300px] h-[300px] rounded-full bg-white/[0.02] blur-[80px] pointer-events-none"/>

            {/* Close Button */}
            <button onClick={onClose} className="absolute top-5 right-5 p-2 rounded-full border border-white/5 bg-white/[0.02] hover:bg-white/10 transition-colors text-gray-400 hover:text-white" aria-label="Close" id="modal-close-btn">
              <X size={18}/>
            </button>

            {/* Success Icon with glass ring */}
            <div className="flex justify-center mb-6">
              <div className="relative flex items-center justify-center w-20 h-20 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-inner">
                <CheckCircle2 className="text-white w-10 h-10 stroke-[1.5]"/>
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: [1, 1.3, 1], opacity: [0, 0.4, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="absolute inset-0 rounded-full border border-white/30"/>
              </div>
            </div>

            {/* Content */}
            <h2 className="text-3xl md:text-4xl font-heading italic tracking-tight text-white mb-4">
              {senderName ? `Thank you, ${senderName}!` : 'Message Sent!'}
            </h2>
            
            <p className="text-gray-400 font-light text-base leading-relaxed mb-8 max-w-md mx-auto">
              Your inquiry has been delivered safely. I specialize in turning high-impact ideas into physical reality—I'll review your details and get back to you within 24 hours.
            </p>

            {/* Direct Action Links */}
            <div className="flex flex-col gap-3">
              <Link href="/" onClick={onClose} className="w-full py-4 px-6 bg-white text-black rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-2" id="modal-btn-home">
                <Home size={16}/>
                Return to Home
              </Link>
              
              <div className="grid grid-cols-2 gap-3">
                <Link href="/work" onClick={onClose} className="py-3 px-4 border border-white/10 bg-white/[0.02] hover:bg-white/5 rounded-lg text-white font-medium text-sm transition-colors flex items-center justify-center gap-2" id="modal-btn-work">
                  <Briefcase size={14}/>
                  Explore Work
                </Link>
                
                <a href="https://wa.me/919821687437" target="_blank" rel="noopener noreferrer" onClick={onClose} className="py-3 px-4 border border-white/10 bg-white/[0.02] hover:bg-white/5 rounded-lg text-white font-medium text-sm transition-colors flex items-center justify-center gap-1.5" id="modal-btn-book">
                  <Calendar size={14}/>
                  Book Call
                </a>
              </div>
            </div>
            
            <button onClick={onClose} className="mt-6 text-xs text-gray-500 hover:text-gray-300 font-mono tracking-wider uppercase transition-colors" id="modal-btn-back">
              Dismiss and Stay
            </button>
          </motion.div>
        </div>)}
    </AnimatePresence>);
}
