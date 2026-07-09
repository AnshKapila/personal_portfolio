"use client";
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import founderAvatar from '../assets/images/regenerated_image_1780423517302.jpg';
export function FounderSection() {
    return (<section id="team" className="py-24 px-6 md:px-12 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Card Container - Reduced height, horizontal structure */}
        <div className="relative w-full rounded-[2.5rem] bg-[#F24E1E] p-8 md:p-12 shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center gap-10 border border-white/5">

          {/* Left/Middle Content Group */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center md:items-start text-center md:text-left flex-1 min-w-0">
            
            {/* Confined Image Container */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-[2rem] overflow-hidden shrink-0 shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/20 relative">
               <img src={founderAvatar?.src || founderAvatar} referrerPolicy="no-referrer" alt="Ansh Kapila - Founder and Product Designer" className="absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms]"/>
            </motion.div>

            {/* Text Content */}
            <div className="flex flex-col justify-center md:pt-4">
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xs text-white/90 uppercase tracking-widest font-bold mb-4">
                The Founder
              </motion.p>
              
              <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight mb-2 text-white">
                Ansh Kapila
              </motion.h2>
              
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-[#FFD1C2] font-semibold text-lg md:text-xl tracking-wide mb-6">
                Founder & Product Designer
              </motion.p>
              
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg font-light leading-relaxed max-w-lg text-white/95">
                I partner directly with select teams to translate vision into high-performing digital realities. With a deep focus on business logic and meticulous user experience, no detail goes unnoticed.
              </motion.p>
            </div>
          </div>

          {/* Restored and Stretched 15-Minute Call CTA Widget */}
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }} className="w-full lg:w-80 shrink-0 bg-[#0a0a0a] rounded-[2rem] p-7 shadow-2xl border border-white/10 relative z-10 lg:self-stretch flex flex-col justify-center">
             <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center shrink-0 shadow-inner">
                 <Calendar className="w-5 h-5 text-white/80"/>
               </div>
               <div>
                 <h3 className="font-semibold text-white/90 text-base leading-tight">15-min discovery</h3>
                 <div className="flex items-center gap-2 mt-1.5">
                   <span className="relative flex h-2 w-2">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F24E1E] opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F24E1E]"></span>
                   </span>
                   <p className="text-[11px] text-[#F24E1E] font-bold tracking-wider uppercase">Project Available</p>
                 </div>
               </div>
             </div>
             
             <a href="https://wa.me/919821687437" target="_blank" rel="noopener noreferrer" className="w-full bg-white text-black px-6 py-3 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors flex items-center justify-center group shadow-lg mt-8">
               Book your call
             </a>
          </motion.div>

        </div>
      </div>
    </section>);
}
