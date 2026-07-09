"use client";
import { motion } from 'motion/react';

export function ExperienceSection() {
    const experiences = [
        {
            company: "Self-Employed",
            period: "November 2025 - Present",
            role: "Product, Web & Content Designer"
        },
        {
            company: "Techolution",
            period: "July 2025 - October 2025",
            role: "UX Designer Intern"
        },
        {
            company: "Ezinore",
            period: "January 2025 - February 2025",
            role: "Freelance UX Designer (Self-Employed & Contractual Work)"
        },
        {
            company: "Scizers IoT Pvt Ptd",
            period: "July 2024 - October 2024",
            role: "UI/UX Design Intern"
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 md:px-12 lg:px-16 bg-black border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight text-white">
                        Experience
                    </h2>
                </div>

                <div className="w-full flex flex-col">
                    {experiences.map((exp, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="w-full py-8 border-b border-white/10 grid grid-cols-1 md:grid-cols-3 items-start md:items-center gap-4 group hover:border-white/30 transition-colors"
                        >
                            <span className="text-xl md:text-2xl font-medium text-white transition-colors duration-300 text-left">
                                {exp.company}
                            </span>
                            <span className="text-gray-400 font-light text-base md:text-lg md:text-center">
                                {exp.period}
                            </span>
                            <span className="text-base md:text-lg font-heading italic text-[#F24E1E] md:text-right">
                                {exp.role}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
