"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, FolderKanban } from "lucide-react";
import { projects } from "../data/projects";
import Link from 'next/link';
export function WorkSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const featuredProjectsSlugs = ["vigorx", "clickpick", "fityard"];
    const featuredProjects = projects.filter((p) => featuredProjectsSlugs.includes(p.slug));
    return (<section id="work" className="w-full relative bg-black text-white px-6 md:px-12 lg:px-16 pt-24 pb-48 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column (Sticky scroll area) */}
          <div className="flex flex-col relative w-full pb-[10vh]">
            {/* Header Content */}
            <div className="pt-10 mb-16 lg:mb-24">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#F24E1E]/30 bg-[#F24E1E]/10 mb-6">
                <FolderKanban className="w-3.5 h-3.5 text-[#F24E1E]"/>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#F24E1E]">
                  Our Transformations
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight mb-6 text-white">
                Featured Work. <br className="hidden lg:block"/>
                <span className="text-[#F24E1E] not-italic font-sans font-medium">
                  Proven Results.
                </span>
              </h2>

              <p className="text-lg font-light leading-relaxed text-gray-400 max-w-md">
                See how we turn complex business logic into extraordinary
                digital experiences — one project at a time.
              </p>
            </div>

            {/* Stacked Cards Area */}
            <div className="flex flex-col gap-[30vh] lg:gap-[60vh] relative z-20 pb-[20vh]">
              {featuredProjects.map((project, i) => (<motion.div key={i} className="sticky w-full rounded-3xl shadow-2xl overflow-hidden border border-white/5 group" 
        // Stack offset logic: Card 1 at 120px, Card 2 at 160px, etc.
        style={{ top: `calc(120px + ${i * 40}px)` }} onViewportEnter={() => setActiveIndex(i)} viewport={{ margin: "-50% 0px -50% 0px" }}>
                  {/* Mobile Background Image (Only visible heavily masked on small screens) */}
                  <div className="absolute inset-0 block lg:hidden z-0">
                    {!(typeof project.coverImage === 'string' ? project.coverImage : project.coverImage?.src || '').startsWith("data:image/") && (<img src={project.coverImage?.src || project.coverImage} referrerPolicy="no-referrer" alt={project.title} className="w-full h-full object-cover opacity-20 grayscale transition-opacity duration-700 blur-[2px]"/>)}
                  </div>

                  {/* Card Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1F100B]/95 to-[#080504]/95 lg:from-[#1F100B] lg:to-[#080504] z-0 blur-xl lg:blur-none opacity-80 lg:opacity-100"/>

                  {/* Card Content */}
                  <div className="relative z-10 p-8 md:p-10 lg:p-12">
                    <div className="flex justify-between items-start mb-10">
                      <div className="w-12 h-12 rounded-xl bg-[#F24E1E]/10 border border-[#F24E1E]/20 flex items-center justify-center text-[#F24E1E] shadow-inner backdrop-blur-md">
                        <FolderKanban className="w-5 h-5 text-[#F24E1E]"/>
                      </div>
                      <div className="px-4 py-1.5 rounded-full bg-[#F24E1E]/10 border border-[#F24E1E]/20 text-[11px] font-semibold text-[#FFD1C2]/90 tracking-wider">
                        Featured
                      </div>
                    </div>

                    <h3 className="text-3xl font-heading tracking-tight text-white mb-4 drop-shadow-md">
                      {project.title}
                    </h3>

                    <p className="text-[#FFD1C2]/70 text-sm md:text-base leading-relaxed mb-10 font-light pr-4">
                      {project.overviewDescription.slice(0, 150)}...
                    </p>

                    <div className="mb-10">
                      <Link href={`/work/${project.slug}`} className="inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                        View Project
                      </Link>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (<span key={tag} className="px-4 py-2 rounded-lg bg-[#F24E1E]/10 border border-[#F24E1E]/20 text-xs font-semibold tracking-wide text-[#FFD1C2]/90 shadow-sm backdrop-blur-sm">
                          {tag}
                        </span>))}
                    </div>
                  </div>
                </motion.div>))}
            </div>
          </div>

          {/* Right Column (Sticky Image) */}
          <div className="hidden lg:block relative w-full h-full">
            <div className="sticky top-24 h-[calc(100vh-120px)] w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.4)]">
              <AnimatePresence>
                {(typeof featuredProjects[activeIndex]?.coverImage === 'string' ? featuredProjects[activeIndex]?.coverImage : featuredProjects[activeIndex]?.coverImage?.src || '').startsWith("data:image/") ? (<motion.div key={activeIndex} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }} className="absolute inset-0 w-full h-full flex flex-col justify-between p-12 text-white relative overflow-hidden" style={{ background: `radial-gradient(circle at center, #111 0%, #050505 100%)` }}>
                    <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `radial-gradient(#F24E1E 1px, transparent 1px)`, backgroundSize: '24px 24px' }}/>
                    <div className="relative z-10 flex justify-between items-start w-full">
                      <span className="text-xs font-mono uppercase tracking-widest text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/10 font-bold">Featured Case Concept</span>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#F24E1E] font-bold">[ Draft Placeholder ]</span>
                    </div>
                    <div className="relative z-10 text-center my-auto flex flex-col items-center">
                      <h4 className="text-4xl md:text-5xl font-heading italic tracking-tight text-white mb-4 leading-tight">{featuredProjects[activeIndex]?.title}</h4>
                      <p className="text-sm text-gray-400 font-light max-w-md leading-relaxed">{featuredProjects[activeIndex]?.listTitle || 'Web & Brand Strategy'}</p>
                    </div>
                    <div className="relative z-10 text-center text-xs font-mono text-gray-500">
                      [ Manual Asset Placeholder — Edit in src/data/projects.ts ]
                    </div>
                  </motion.div>) : (<motion.img key={activeIndex} src={featuredProjects[activeIndex]?.coverImage?.src || featuredProjects[activeIndex]?.coverImage} referrerPolicy="no-referrer" alt="Project visualization" initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }} className="absolute inset-0 w-full h-full object-cover"/>)}
              </AnimatePresence>

              {/* Subtle inner shadow overlays */}
              <div className="absolute inset-0 border border-white/5 rounded-[2.5rem] pointer-events-none z-10"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10 opacity-70"/>
            </div>
          </div>
        </div>

        {/* Global Action Button */}
        <div className="flex justify-center mt-32 px-6 relative z-20">
          <Link href="/work" className="bg-white text-black w-full sm:w-[240px] px-8 py-4 rounded-lg font-medium text-base hover:bg-gray-200 transition-colors shadow-lg shadow-white/5 flex items-center justify-center gap-3 group">
            See all projects
            <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/>
          </Link>
        </div>
      </div>
    </section>);
}
