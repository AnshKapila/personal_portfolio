"use client";
import { motion } from 'motion/react';
import { HlsVideo } from './HlsVideo';
export function DreamShipSection() {
    const headingText = "You dream it. We ship it.";
    const words = headingText.split(" ");
    return (<section className="relative w-full py-40 md:py-64 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <HlsVideo src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8" className="absolute inset-0 w-full h-full object-cover z-0" autoPlay/>
      
      {/* Top and Bottom Gradients */}
      <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"/>
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"/>
      
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/40 z-10"/>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        
        {/* Badge */}
        <motion.div initial={{ opacity: 0, filter: "blur(10px)", y: 50 }} whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="liquid-glass rounded-full px-4 py-1.5 mb-8 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"/>
          <span className="text-xs uppercase tracking-wider text-white">We are ready</span>
        </motion.div>

        {/* Mapped Words for Animation */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic tracking-tight leading-[1.05] text-white pl-4 mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2">
          {words.map((word, i) => (<motion.span key={i} initial={{ opacity: 0, filter: "blur(10px)", y: 50 }} whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{
                duration: 0.35,
                delay: i * 0.15,
                ease: "easeOut"
            }}>
              {word}
            </motion.span>))}
        </h2>

        <motion.p initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }} className="text-lg font-light leading-relaxed text-gray-400 mb-10 max-w-xl">
          Transforming visions into high-performance digital reality. Elite engineering combined with meticulous design.
        </motion.p>

        <motion.div initial={{ opacity: 0, filter: "blur(10px)", y: 30 }} whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 1, ease: "easeOut" }} className="w-full sm:w-auto">
          <a href="https://wa.me/919821687437" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center liquid-glass-strong rounded-lg w-full sm:w-[240px] px-8 py-4 font-medium text-base text-white transition-opacity hover:bg-white/10">
            Start Your Project
          </a>
        </motion.div>

      </div>
    </section>);
}
