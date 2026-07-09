"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

export function SkillsSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const skills = [
        {
            title: "UX Strategy & Research",
            evidence: "Redesigned marketing and user dashboard systems to drive actionable customer trust.",
            statNumber: "30%",
            statLabel: "Inquiry Increase (Ezinore)",
            imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
            bulletColor: "bg-blue-400"
        },
        {
            title: "AI-Augmented Design",
            evidence: "Produced over 80 premium visual catalog and banner campaign layouts in six days using generative pipelines.",
            statNumber: "80+",
            statLabel: "Visuals in 6 Days (Bergaria)",
            imageSrc: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1200&auto=format&fit=crop",
            bulletColor: "bg-emerald-400"
        },
        {
            title: "Interface & Prototyping",
            evidence: "Designed habit-forming workout structures to reduce onboarding drop-off and boost consistency.",
            statNumber: "28%",
            statLabel: "Consistency Boost (VigorX)",
            imageSrc: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1200&auto=format&fit=crop",
            bulletColor: "bg-purple-400"
        },
        {
            title: "Frontend Execution",
            evidence: "Tested developer tools to identify navigation bottlenecks and optimize interaction steps.",
            statNumber: "84%",
            statLabel: "Workflow Gain (Techolution)",
            imageSrc: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop",
            bulletColor: "bg-pink-400"
        }
    ];

    const tools = [
        "Figma", "Antigravity", "Google AI Suite", "Protopie", 
        "Adobe Creative Suite", "Framer", "Lovable", "Canva", 
        "HTML", "CSS", "JavaScript"
    ];

    // Double elements for infinite loop effect
    const doubleTools = [...tools, ...tools, ...tools];

    return (
        <section id="skills" className="py-24 px-6 md:px-12 lg:px-16 bg-[#111111] overflow-hidden rounded-t-[2.5rem]">
            <div className="max-w-7xl mx-auto w-full space-y-24">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* LEFT IMAGE CONTAINER */}
                    <div className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 order-2 lg:order-1">
                        <AnimatePresence mode="wait">
                            <motion.img 
                                key={activeIndex} 
                                src={skills[activeIndex].imageSrc} 
                                alt={skills[activeIndex].title} 
                                initial={{ opacity: 0, scale: 1.05 }} 
                                animate={{ opacity: 1, scale: 1 }} 
                                exit={{ opacity: 0 }} 
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
                                className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"
                            />
                        </AnimatePresence>
                    </div>

                    {/* RIGHT CONTENT CONTAINER */}
                    <div className="flex flex-col order-1 lg:order-2">
                        <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-10">
                            My Skills
                        </h3>

                        <div className="flex flex-col mb-16">
                            {skills.map((skill, i) => {
                                const isActive = activeIndex === i;
                                return (
                                    <div 
                                        key={i} 
                                        className="relative cursor-pointer group py-6" 
                                        onMouseEnter={() => setActiveIndex(i)} 
                                        onClick={() => setActiveIndex(i)}
                                    >
                                        <h2 className={cn(
                                            "text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight transition-colors duration-300", 
                                            isActive ? "text-white" : "text-white/40 group-[&:not(:hover)]:text-white/40 group-hover:text-white/70"
                                        )}>
                                            {skill.title}
                                        </h2>

                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div 
                                                    initial={{ height: 0, opacity: 0 }} 
                                                    animate={{ height: "auto", opacity: 1 }} 
                                                    exit={{ height: 0, opacity: 0 }} 
                                                    transition={{ duration: 0.3, ease: "easeInOut" }} 
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pt-5 pb-3">
                                                        <p className="text-gray-400 font-light text-base leading-relaxed">
                                                            {skill.evidence}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Base separator line */}
                                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />

                                        {/* Animated Active Line */}
                                        {isActive && (
                                            <motion.div 
                                                layoutId="activeSkillLine" 
                                                className="absolute bottom-0 left-0 h-[2px] bg-white z-10" 
                                                initial={false} 
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 30,
                                                }} 
                                                style={{ width: "35%" }}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Bottom Dynamic Section showing the Stat Callout */}
                        <div className="min-h-[120px]">
                            <AnimatePresence mode="wait">
                                <motion.div 
                                    key={activeIndex} 
                                    initial={{ opacity: 0, y: 10 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    exit={{ opacity: 0, y: -10 }} 
                                    transition={{ duration: 0.3 }} 
                                    className="flex items-center gap-6"
                                >
                                    <div className="text-4xl md:text-5xl font-heading italic text-[#F24E1E] shrink-0">
                                        {skills[activeIndex].statNumber}
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-white/50 mb-1">Outcome Metric</p>
                                        <p className="text-sm font-light text-gray-300">{skills[activeIndex].statLabel}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* HORIZONTAL INFINITE MARQUEE */}
                <div className="w-full space-y-6 pt-12 border-t border-white/5">
                    <h4 className="text-xs uppercase tracking-widest text-white/40 text-center font-bold">
                        Tools & Technologies
                    </h4>
                    <div className="relative w-full overflow-hidden whitespace-nowrap py-4">
                        {/* Gradient Mask for fading sides */}
                        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#111] to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#111] to-transparent z-10 pointer-events-none" />
                        
                        {/* Marquee Track looping left-to-right */}
                        <div className="flex w-max gap-8 animate-marquee-right">
                            {doubleTools.map((tool, idx) => (
                                <span 
                                    key={idx} 
                                    className="text-2xl md:text-3xl font-heading italic text-white/30 hover:text-white transition-colors cursor-default"
                                >
                                    {tool} &nbsp; ✦
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
