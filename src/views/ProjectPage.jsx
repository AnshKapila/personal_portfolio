"use client";
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { projects } from '../data/projects';
import { FadeIn } from '../components/FadeIn';
export function ProjectPage() {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);
    if (!project) {
        return (<>
        
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-heading italic">Project not found</h1>
        </div>
      </>);
    }
    return (<>
      
      <div className="pt-32 pb-48 px-6 md:px-12 lg:px-16 min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        {/* Project Hero */}
        <div className="mb-16 md:mb-24 flex flex-col items-start">
          <FadeIn delayMs={100} durationMs={800}>
            <div className="flex flex-wrap gap-3 mb-6">
              {project.tags.map(tag => (<span key={tag} className="px-3 py-1.5 rounded-lg bg-[#2a0e05] border border-[#4a1805] text-[13px] font-medium tracking-wide text-[#ffd3c2] shadow-sm">
                  {tag}
                </span>))}
            </div>
          </FadeIn>
          
          <FadeIn delayMs={200} durationMs={800}>
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-heading italic tracking-tight mb-8 leading-[1.1]">
              {project.title}
            </h1>
          </FadeIn>

          <FadeIn delayMs={300} durationMs={800}>
            {project.buttonLink && project.buttonLink.trim() !== '' && (<a href={project.buttonLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-black rounded-lg font-semibold text-[15px] hover:bg-gray-200 transition-colors">
                {project.buttonText || "View Live"}
              </a>)}
          </FadeIn>
        </div>

        {/* Main Visual */}
        <FadeIn delayMs={400} durationMs={800} className="mb-24 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
          {(typeof project.coverImage === 'string' ? project.coverImage : project.coverImage?.src || '').startsWith("data:image/") ? (<div className="w-full aspect-[16/10] flex flex-col justify-between p-8 md:p-12 text-white relative overflow-hidden" style={{ background: `radial-gradient(circle at center, #111 0%, #050505 100%)` }}>
              <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `radial-gradient(#F24E1E 1px, transparent 1px)`, backgroundSize: '24px 24px' }}/>
              <div className="relative z-10 flex justify-between items-start w-full">
                <span className="text-xs font-mono uppercase tracking-widest text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/10">Project Showcase</span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#F24E1E]">[ Draft Placeholder ]</span>
              </div>
              <div className="relative z-10 text-center my-auto flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-heading italic tracking-tight text-white mb-4 leading-tight">{project.title}</h2>
                <p className="text-sm md:text-base text-gray-400 font-light max-w-lg mb-6 leading-relaxed">{project.listTitle || project.listSubtitle || 'Interactive Digital System Concept'}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.tags.slice(0, 3).map(t => (<span key={t} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-white/80">{t}</span>))}
                </div>
              </div>
              <div className="relative z-10 text-center text-xs font-mono text-gray-500">
                [ Manual Asset Placeholder — Edit in src/data/projects.ts ]
              </div>
            </div>) : (<img src={project.coverImage?.src || project.coverImage} referrerPolicy="no-referrer" alt={project.title} className="w-full h-auto block"/>)}
        </FadeIn>

        {/* Content Structure */}
        <div className="space-y-24 mb-32">
          
          {/* Overview */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <h2 className="text-sm uppercase tracking-widest text-gray-500 font-bold md:col-span-1">{project.overviewHeading}</h2>
            <div className="md:col-span-2 text-lg font-light leading-relaxed text-gray-300 whitespace-pre-wrap">
              {project.overviewDescription}
            </div>
          </section>

          {/* Work Done */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <h2 className="text-sm uppercase tracking-widest text-gray-500 font-bold md:col-span-1">{project.strategyHeading}</h2>
            <div className="md:col-span-2 text-lg font-light leading-relaxed text-gray-300 space-y-6">
              <p>{project.strategyDescription1}</p>
              {project.strategyDescription2 && <p>{project.strategyDescription2}</p>}
            </div>
          </section>

          {/* Output / Result */}
          {project.outcomeHeading && project.outcomeDescription && (<section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <h2 className="text-sm uppercase tracking-widest text-gray-500 font-bold md:col-span-1">{project.outcomeHeading}</h2>
              <div className="md:col-span-2 text-lg font-light leading-relaxed text-gray-300 whitespace-pre-wrap">
                {project.outcomeDescription}
              </div>
            </section>)}

        </div>

        {/* Visual Section */}
        <div className="space-y-12 mb-32">
          {project.detailImage1 && (<div className="w-full rounded-[2rem] overflow-hidden border border-white/5 bg-zinc-900 shadow-xl">
              {(typeof project.detailImage1 === 'string' ? project.detailImage1 : project.detailImage1?.src || '').startsWith("data:image/") ? (<div className="w-full aspect-[16/10] flex flex-col justify-between p-8 md:p-12 text-white relative overflow-hidden" style={{ background: `radial-gradient(circle at center, #1c1917 0%, #0d0c0b 100%)` }}>
                  <div className="relative z-10 flex justify-between items-start w-full">
                    <span className="text-xs font-mono uppercase tracking-widest text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/10">Interface Exploration</span>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#F24E1E]">[ Detail 1 ]</span>
                  </div>
                  <div className="relative z-10 text-center my-auto flex flex-col items-center">
                    <h3 className="text-3xl font-heading italic tracking-tight text-white mb-2 leading-tight">{project.title}</h3>
                    <p className="text-sm text-gray-400 font-light max-w-md">Design Strategy & Interface Flow Demonstration</p>
                  </div>
                  <div className="relative z-10 text-center text-xs font-mono text-gray-500">
                    [ Manual Asset Placeholder — Edit in src/data/projects.ts ]
                  </div>
                </div>) : (<img src={project.detailImage1?.src || project.detailImage1} referrerPolicy="no-referrer" alt="Project detail 1" className="w-full h-auto"/>)}
            </div>)}
          {project.detailImage2 && (<div className="w-full rounded-[2rem] overflow-hidden border border-white/5 bg-zinc-900 shadow-xl">
              {(typeof project.detailImage2 === 'string' ? project.detailImage2 : project.detailImage2?.src || '').startsWith("data:image/") ? (<div className="w-full aspect-[16/10] flex flex-col justify-between p-8 md:p-12 text-white relative overflow-hidden" style={{ background: `radial-gradient(circle at center, #0f172a 0%, #020617 100%)` }}>
                  <div className="relative z-10 flex justify-between items-start w-full">
                    <span className="text-xs font-mono uppercase tracking-widest text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/10">Architecture Framework</span>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#F24E1E]">[ Detail 2 ]</span>
                  </div>
                  <div className="relative z-10 text-center my-auto flex flex-col items-center">
                    <h3 className="text-3xl font-heading italic tracking-tight text-white mb-2 leading-tight">{project.title}</h3>
                    <p className="text-sm text-gray-400 font-light max-w-md">Design System and Token Hierarchy Analysis</p>
                  </div>
                  <div className="relative z-10 text-center text-xs font-mono text-gray-500">
                    [ Manual Asset Placeholder — Edit in src/data/projects.ts ]
                  </div>
                </div>) : (<img src={project.detailImage2?.src || project.detailImage2} referrerPolicy="no-referrer" alt="Project detail 2" className="w-full h-auto"/>)}
            </div>)}
          {project.bannerImage && (<div className="w-full rounded-[2rem] overflow-hidden border border-white/5 bg-zinc-900 shadow-xl">
              {(typeof project.bannerImage === 'string' ? project.bannerImage : project.bannerImage?.src || '').startsWith("data:image/") ? (<div className="w-full aspect-[16/6] flex flex-col justify-between p-8 md:p-12 text-white relative overflow-hidden bg-zinc-950">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F24E1E]/10 to-transparent pointer-events-none"/>
                  <div className="relative z-10 flex justify-between items-start w-full">
                    <span className="text-xs font-mono uppercase tracking-widest text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/10">Campaign Context</span>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#F24E1E]">[ Banner ]</span>
                  </div>
                  <div className="relative z-10 text-left my-auto">
                    <h3 className="text-3xl md:text-4xl font-heading italic tracking-tight text-white mb-2 leading-tight">{project.title} Showcase Campaign</h3>
                  </div>
                  <div className="relative z-10 text-right text-xs font-mono text-gray-500">
                    [ Manual Asset Placeholder — Edit in src/data/projects.ts ]
                  </div>
                </div>) : (<img src={project.bannerImage?.src || project.bannerImage} referrerPolicy="no-referrer" alt="Project banner" className="w-full h-auto"/>)}
            </div>)}
        </div>

        {/* Final CTA */}
        <FadeIn delayMs={100} durationMs={800} className="w-full bg-[#111111] border border-white/5 p-12 lg:p-20 rounded-[2.5rem] text-center flex flex-col items-center shadow-2xl">
           <h2 className="text-4xl md:text-5xl font-heading italic tracking-tight mb-6">Have a similar project?</h2>
           <a href="https://wa.me/919821687437" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-black font-medium text-base hover:bg-gray-200 transition-colors w-full sm:w-[240px] mt-6">
             Start a Project
           </a>
        </FadeIn>

      </div>
    </div>
    </>);
}
