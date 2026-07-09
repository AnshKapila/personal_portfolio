"use client";
import { motion } from 'motion/react';

export function SkillsSection() {
    const list1 = [
        {
            title: "Business-Goal Mapping",
            description: "I map interface decisions to business objectives. For example, during the Ezinore freelance project, I redesigned the marketing layout structure to enhance product inquiries by 30 percent."
        },
        {
            title: "User Research & Analysis",
            description: "I analyze physical workflows to identify UX friction points. In the Clickpic case study, this involved researching queue bottlenecks to reduce waiting time to under 60 seconds."
        },
        {
            title: "Persona-Driven Design Decisions",
            description: "I design interactions matching user motivations. For VigorX, I structured guided user flows that incremented daily active app usage by 28 percent."
        },
        {
            title: "Usability Testing & Iteration",
            description: "I test layout variations directly with users. At Techolution, I resolved developer flow friction to improve daily task workflow efficiency by 50 to 84 percent."
        },
        {
            title: "Information Architecture",
            description: "I structure content schemas for wholesale catalog discovery. On the Metline platform, I translated legacy product data into intuitive, mobile-ready categories."
        }
    ];

    const list2 = [
        {
            title: "Generative AI Image Refinement",
            description: "I direct generative models to produce visual assets, then apply manual Photoshop grids and composition controls. This approach delivered over 80 premium visuals for the Bergaria campaign in 6 days."
        },
        {
            title: "AI-Augmented Content & Coding",
            description: "I write prompt rules to generate web components, then inspect, refine, and write custom logic to ensure code quality. I utilized this method to build Fintrack, accelerating ideation by 50 percent."
        },
        {
            title: "Rapid Prototyping & Layouts",
            description: "I compile client feedback into layout rules, direct interactive prototyping systems, and refine page speeds. I applied this method to optimize loading performance for local search results on FitYard."
        }
    ];

    const tools = [
        "Figma", "Antigravity", "Google AI Suite", "Protopie", 
        "Adobe Creative Suite", "Framer", "Lovable", "Canva", 
        "HTML", "CSS", "JavaScript"
    ];

    return (
        <section id="skills-section" className="py-24 px-6 md:px-12 lg:px-16 bg-black border-t border-white/10">
            <div className="max-w-7xl mx-auto space-y-24">
                
                {/* Intro */}
                <div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight text-white mb-6">
                        Skills & Methodology
                    </h2>
                    <p className="text-lg font-light leading-relaxed text-gray-400 max-w-2xl">
                        I combine user experience research with modern development workflows, building high-performing interfaces supported by measurable results.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    
                    {/* UX Process */}
                    <div className="space-y-8">
                        <div className="border-b border-white/10 pb-4">
                            <h3 className="text-xl font-heading italic text-[#F24E1E] uppercase tracking-wider">
                                01. UX Process & Strategy
                            </h3>
                        </div>
                        <div className="space-y-6">
                            {list1.map((item, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className="space-y-2"
                                >
                                    <h4 className="text-lg font-medium text-white">{item.title}</h4>
                                    <p className="text-gray-400 font-light text-sm leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* AI augmented */}
                    <div className="space-y-16">
                        
                        <div className="space-y-8">
                            <div className="border-b border-white/10 pb-4">
                                <h3 className="text-xl font-heading italic text-[#F24E1E] uppercase tracking-wider">
                                    02. AI-Augmented Design Workflow
                                </h3>
                            </div>
                            <div className="space-y-6">
                                {list2.map((item, index) => (
                                    <motion.div 
                                        key={index}
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                        className="space-y-2"
                                    >
                                        <h4 className="text-lg font-medium text-white">{item.title}</h4>
                                        <p className="text-gray-400 font-light text-sm leading-relaxed">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Tools list */}
                        <div className="space-y-6">
                            <div className="border-b border-white/10 pb-4">
                                <h3 className="text-xl font-heading italic text-[#F24E1E] uppercase tracking-wider">
                                    03. Tools
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {tools.map((tool, index) => (
                                    <span 
                                        key={index} 
                                        className="px-4 py-2 rounded-lg bg-zinc-950 border border-white/10 text-sm text-gray-300 font-light"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
