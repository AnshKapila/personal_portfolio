"use client";
import { useState } from 'react';
import { motion } from 'motion/react';
import { projects } from '../data/projects';
import Link from 'next/link';
import { cn } from '../lib/utils';
import { FadeIn } from '../components/FadeIn';
export function WorkPage() {
    const [filter, setFilter] = useState('All');
    const filters = ['All', 'Case Studies', 'Websites', 'Products', 'Visual Work'];
    const filteredProjects = projects.filter(project => {
        if (filter === 'All')
            return true;
        if (filter === 'Websites' && project.tags.some(t => t.toLowerCase().includes('web')))
            return true;
        if (filter === 'Products' && project.tags.some(t => t.toLowerCase().includes('app') || t.toLowerCase().includes('dashboard') || t.toLowerCase().includes('saas')))
            return true;
        if (filter === 'Visual Work' && project.tags.some(t => t.toLowerCase().includes('ui/ux') || t.toLowerCase().includes('imagery') || t.toLowerCase().includes('design')))
            return true;
        if (filter === 'Case Studies' && project.tags.some(t => t.toLowerCase().includes('case study')))
            return true;
        return false;
    });
    return (<>
      
      <div className="pt-32 pb-48 px-6 md:px-12 lg:px-16 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="mb-20 text-center flex flex-col items-center">
             <FadeIn delayMs={100} durationMs={800}>
               <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading italic tracking-tight mb-6">
                 Selected Work
               </h1>
             </FadeIn>
             <FadeIn delayMs={300} durationMs={800}>
               <p className="text-lg font-light leading-relaxed text-gray-400 max-w-2xl">
                 A collection of projects across websites, products, and visual systems.
               </p>
             </FadeIn>
          </div>

          {/* Filter Bar */}
          <FadeIn delayMs={500} durationMs={800}>
            <div className="flex flex-wrap justify-center gap-4 mb-20">
              {filters.map(f => (<button key={f} onClick={() => setFilter(f)} className={cn("px-6 py-2 rounded-full text-sm font-medium transition-colors border", f === 'Case Studies'
                ? filter === f
                    ? "bg-[#F24E1E] text-white border-[#F24E1E] shadow-[0_0_15px_rgba(242,78,30,0.4)]"
                    : "bg-transparent text-[#F24E1E] border-[#F24E1E]/50 hover:border-[#F24E1E] hover:bg-[#F24E1E]/10"
                : filter === f
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white")}>
                  {f}
                </button>))}
            </div>
          </FadeIn>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-32">
            {filteredProjects.map((project, i) => (<motion.div key={project.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.8 }} className="group flex flex-col items-start bg-zinc-950/50 border border-white/5 rounded-3xl overflow-hidden shadow-2xl hover:border-white/10 transition-colors">
                 <div className="w-full aspect-[4/3] bg-zinc-900 overflow-hidden relative">
                    {(typeof project.coverImage === 'string' ? project.coverImage : project.coverImage?.src || '').startsWith("data:image/") ? (<div className="w-full h-full flex flex-col justify-between p-6 text-white relative overflow-hidden" style={{ background: `radial-gradient(circle at center, #111 0%, #050505 100%)` }}>
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(#F24E1E 1px, transparent 1px)`, backgroundSize: '16px 16px' }}/>
                        <div className="relative z-10 flex justify-between items-start w-full">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">Project Showcase</span>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#F24E1E]">[ Draft ]</span>
                        </div>
                        <div className="relative z-10 text-center my-auto flex flex-col items-center">
                          <h4 className="text-2xl font-heading italic tracking-tight text-white mb-1 leading-tight">{project.title}</h4>
                        </div>
                        <div className="relative z-10 text-center text-[10px] font-mono text-gray-500">
                          [ Manual Asset Placeholder ]
                        </div>
                      </div>) : (<img src={project.coverImage?.src || project.coverImage} referrerPolicy="no-referrer" alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>)}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                 </div>
                 
                 <div className="p-8 md:p-10 flex flex-col flex-grow w-full border-t border-white/5">
                   <div className="flex flex-wrap gap-2 mb-6 text-xs font-semibold tracking-wide text-[#FFD1C2]/90">
                     {project.tags.map(t => (<span key={t} className="px-3 py-1.5 rounded-md bg-[#F24E1E]/10 border border-[#F24E1E]/20">
                         {t}
                       </span>))}
                   </div>
                   
                   <h3 className="text-3xl font-heading tracking-tight mb-4">
                     {project.title}
                   </h3>
                   
                   <p className="text-gray-400 text-base leading-relaxed mb-10 font-light flex-grow">
                     {project.overviewDescription.slice(0, 120)}...
                   </p>
                   
                   <Link href={`/work/${project.slug}`} className="inline-flex items-center justify-center w-full px-8 py-4 bg-white text-black rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors">
                     View Project
                   </Link>
                 </div>
               </motion.div>))}
          </div>

          {/* Bottom CTA */}
          <FadeIn delayMs={200} durationMs={800} className="w-full bg-[#111111] border border-white/5 p-12 lg:p-20 rounded-[2.5rem] text-center flex flex-col items-center shadow-2xl">
             <h2 className="text-4xl md:text-5xl font-heading italic tracking-tight mb-6">Need something specific?</h2>
             <p className="text-lg font-light leading-relaxed text-gray-400 max-w-xl mb-10">
               Tell me what you are building and I will help you get started or show relevant work.
             </p>
             <a href="https://wa.me/919821687437" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-black font-medium text-base hover:bg-gray-200 transition-colors w-full sm:w-[240px]">
               Request a Project
             </a>
          </FadeIn>
        </div>
      </div>
    </>);
}
