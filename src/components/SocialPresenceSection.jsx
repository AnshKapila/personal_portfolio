"use client";
import { motion } from 'motion/react';
import { ArrowUpRight, Linkedin, Instagram, Briefcase, Layers, ArrowRight, Sparkles } from 'lucide-react';
// Import manual placeholders and local assets securely
import { clickpickCover, spatialdigestCover, metlineCover } from '../data/projects';
const imagePng = '/assets/images/image.png';
import citySkylineInstagram from '../assets/images/regenerated_image_1780194540313.png';
export function SocialPresenceSection() {
    return (<section id="public-notes" className="py-24 px-6 md:px-12 lg:px-16 bg-black relative overflow-hidden border-t border-white/5">
      {/* Background radial accent glow to match the dark premium aesthetic */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#F24E1E]/5 rounded-full filter blur-[120px] pointer-events-none"/>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block with editorial pacing */}
        <div className="mb-16 md:mb-20">
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xs text-[#F24E1E] uppercase tracking-[0.25em] font-bold mb-4">
            Beyond the Studio
          </motion.p>
          
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight text-white">
            Writing & <span className="text-white/40 not-italic font-sans font-medium uppercase text-3xl md:text-4xl lg:text-5xl tracking-widest block sm:inline sm:ml-4">Building in Public</span>
          </motion.h2>
          
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-gray-400 font-light text-lg md:text-xl max-w-2xl mt-5 leading-relaxed">
            A curation of design insights, startup reflections, creative experiments, and visual systems documented as they happen.
          </motion.p>
        </div>

        {/* Responsive Bento Grid representing hierarchical curation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 1. LINKEDIN CARD: Primary, visually emphasized */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2 group relative rounded-[2rem] bg-zinc-950/60 border border-white/10 p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-[#F24E1E]/30">
            {/* Subtle overlay accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none"/>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch w-full h-full">
              {/* Left Column (Content) */}
              <div className="md:col-span-3 flex flex-col justify-between h-full">
                <div>
                  {/* Header Meta */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/15 flex items-center justify-center shrink-0">
                        <Linkedin className="w-4 h-4 text-white/90"/>
                      </div>
                      <div>
                        <span className="text-xs text-white/50 uppercase tracking-widest font-semibold block">Primary Perspective</span>
                        <span className="text-sm font-medium text-white">Ansh Kapila</span>
                      </div>
                    </div>
                    <span className="text-xs text-white/40 font-mono tracking-wider bg-white/5 px-3 py-1 rounded-full">
                      Weekly reflections
                    </span>
                  </div>

                  {/* Curated Post Preview without distinct heading and paragraph */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono text-[#F24E1E]">POST REfLECTION</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F24E1E]/80 animate-pulse"/>
                    </div>
                    <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">
                      In complex enterprise software platforms, features and processing speeds are baseline metrics. Real adoption, however, happens in the micro-interaction margins. When we reduce mental drag during high-stakes actions, we directly prevent operational fatigue and build organic, lasting trust.
                    </p>
                  </div>
                </div>

                {/* Bottom Descriptive / CTA Row */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-6 border-t border-white/5 relative z-10 mt-auto">
                  <div className="max-w-xs">
                    <p className="text-xs text-gray-400 font-medium leading-relaxed">
                      Thoughts on UX systems, design thinking, startups, and product design.
                    </p>
                  </div>
                  
                  <a href="https://www.linkedin.com/in/anshkapila/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-black hover:bg-neutral-200 transition-colors duration-300 rounded-xl font-medium text-xs text-center shrink-0 shadow-lg">
                    Read Insights
                    <ArrowUpRight className="w-3.5 h-3.5"/>
                  </a>
                </div>
              </div>

              {/* Right Column (Aesthetic Image) */}
              <div className="md:col-span-2 hidden md:block relative w-full h-full min-h-[180px] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 group-hover:border-[#F24E1E]/20 transition-all duration-500">
                <img src={clickpickCover?.src || clickpickCover} alt="Aesthetic Design Showcase" className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1000ms] ease-out" referrerPolicy="no-referrer"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/5 px-2.5 py-1 rounded-lg">
                    <Briefcase className="w-3.5 h-3.5 text-white/70"/>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-white/90">Curated Work</span>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* 2. BEHANCE CARD: Visual-first showcasing design showcases */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="lg:col-span-1 group relative rounded-[2rem] bg-zinc-950/60 border border-white/10 p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-[#F24E1E]/30">
            {/* Embedded Visual Preview Container */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-zinc-900 border border-white/10 group-hover:border-white/20 transition-colors">
              <img src={imagePng?.src || imagePng} alt="Selected Visual Showcase" className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1000ms] ease-out-quint" referrerPolicy="no-referrer"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/5 px-2.5 py-1 rounded-lg">
                  <Layers className="w-3.5 h-3.5 text-white/70"/>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-white/90">Curated Mockups</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-[#F24E1E] uppercase tracking-wider font-bold">Creative Portfolios</span>
                <span className="text-xs font-mono text-white/30">Case Studies</span>
              </div>
              <h3 className="text-2xl font-heading italic text-white mb-3">
                Selected Visual Work & Systems
              </h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                Polished interface design explorations, systemic layouts, and detailed creative work.
              </p>
            </div>

            <a href="https://www.behance.net/anshkapila" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-between px-5 py-3 border border-white/10 hover:border-white/30 rounded-xl font-medium text-sm text-white group-hover:bg-white/5 transition-all duration-300">
              <span>Explore Case Studies</span>
              <ArrowRight className="w-4 h-4 text-white/50 group-hover:translate-x-1 group-hover:text-white transition-all"/>
            </a>
          </motion.div>

          {/* 3. INSTAGRAM CARD: Immersive, experimental AI assisted explorations */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2 group relative rounded-[2rem] bg-zinc-950/60 border border-white/10 p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-[#F24E1E]/30">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              {/* Left Side Content */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-full bg-zinc-900 border border-white/15 flex items-center justify-center shrink-0">
                    <Instagram className="w-4 h-4 text-white/95"/>
                  </div>
                  <div>
                    <span className="text-[11px] text-white/40 uppercase tracking-widest block">Aesthetics Lab</span>
                    <span className="text-xs text-white/80 font-mono">@anshkapila.ux</span>
                  </div>
                </div>

                <h3 className="text-3xl font-heading italic text-white mb-4 leading-tight">
                  Visual Experiments & AI Concepts
                </h3>
                
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                  Ongoing artistic collaborations, design system tokens, and interactive asset generation combining procedural art with AI parameters.
                </p>

                <a href="https://www.instagram.com/anshkapila.ux/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#F24E1E] hover:text-white font-medium transition-colors">
                  Explore More on Instagram
                  <ArrowUpRight className="w-3.5 h-3.5"/>
                </a>
              </div>

              {/* Right Side Visual Grid (Micro-Gallery Showcase) */}
              <div className="md:col-span-3 grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-zinc-905 border border-white/5 group/img">
                  <img src={citySkylineInstagram?.src || citySkylineInstagram} alt="Creative experiment 1" className="absolute inset-0 w-full h-full object-cover hover:scale-110 grayscale-[0.3] hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer"/>
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden bg-zinc-905 border border-white/5 group/img">
                  <img src={spatialdigestCover?.src || spatialdigestCover} alt="Creative experiment 2" className="absolute inset-0 w-full h-full object-cover hover:scale-110 grayscale-[0.3] hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer"/>
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden bg-zinc-905 border border-white/5 group/img">
                  <img src={metlineCover?.src || metlineCover} alt="Creative experiment 3" className="absolute inset-0 w-full h-full object-cover hover:scale-110 grayscale-[0.3] hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer"/>
                </div>
                {/* Accent Grid Box for Experimental feeling */}
                <div className="aspect-square rounded-xl bg-zinc-900/40 border border-dashed border-white/10 flex flex-col items-center justify-center p-4 text-center">
                  <Sparkles className="w-5 h-5 text-[#F24E1E] mb-2 shrink-0 animate-pulse"/>
                  <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">The Journey</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. CONTRA CARD: Minimal / Collaborative availability */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="lg:col-span-1 group relative rounded-[2rem] bg-zinc-950/60 border border-white/10 p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-[#F24E1E]/30">
            {/* Header / Avaialbility tags */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-white/40"/>
                  <span className="text-[11px] text-white/50 uppercase tracking-widest font-mono">Independent Work</span>
                </div>
                
                {/* Availability Indicator */}
                <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full shrink-0">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-[9px] text-emerald-400 font-mono tracking-widest uppercase">Verified</span>
                </div>
              </div>

              <h3 className="text-2xl font-heading italic text-white mb-3">
                Selected Collaborations & Direct Hire
              </h3>
              
              <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                Proof of freelance consistency, verifiable reviews, independent project partnerships, and curated deliverables.
              </p>

              {/* Minimal Credentials Checklist */}
              <div className="space-y-2 mb-8">
                <div className="flex items-center justify-between text-xs font-mono text-white/50 border-b border-white/5 pb-2">
                  <span>COLLABORATION STATUS</span>
                  <span className="text-white">Active</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-white/50 border-b border-white/5 pb-2">
                  <span>PROJECT TYPES</span>
                  <span className="text-white">Direct Handcrafted Only</span>
                </div>
              </div>
            </div>

            <a href="https://contra.com/anshkapila/work" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-zinc-200 text-black rounded-lg font-medium text-sm transition-colors shadow-lg">
              <span>Consult on Contra</span>
            </a>
          </motion.div>

        </div>

      </div>
    </section>);
}
