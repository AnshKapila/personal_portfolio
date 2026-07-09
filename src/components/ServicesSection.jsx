"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from 'next/link';
import { ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";
import { services as servicesData } from "../data/services";
export function ServicesSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const services = servicesData.map((s, idx) => {
        // Add UI specific properties
        const uiProps = [
            {
                bulletColor: "bg-blue-400",
                imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
            },
            {
                bulletColor: "bg-emerald-400",
                imageSrc: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1200&auto=format&fit=crop",
            },
            {
                bulletColor: "bg-purple-400",
                imageSrc: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1200&auto=format&fit=crop",
            },
            {
                bulletColor: "bg-pink-400",
                imageSrc: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop",
            },
        ];
        return {
            slug: s.slug,
            title: s.title,
            heading: s.positioning,
            description: s.overview,
            subItems: s.capabilities,
            ...uiProps[idx],
        };
    });
    return (<section id="services" className="min-h-screen flex items-center py-24 px-6 md:px-12 lg:px-16 bg-[#111111] overflow-hidden rounded-t-[2.5rem]">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* LEFT IMAGE CONTAINER */}
        <div className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 order-2 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.img key={activeIndex} src={services[activeIndex].imageSrc} alt={services[activeIndex].title} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"/>
          </AnimatePresence>
        </div>

        {/* RIGHT CONTENT CONTAINER */}
        <div className="flex flex-col order-1 lg:order-2">
          <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-10">
            What We Offer
          </h3>

          <div className="flex flex-col mb-16">
            {services.map((service, i) => {
            const isActive = activeIndex === i;
            const isExpanded = isActive;
            return (<div key={i} className="relative cursor-pointer group py-6" onMouseEnter={() => setActiveIndex(i)} onClick={() => setActiveIndex(i)}>
                  <Link href={`/services/${service.slug}`} className="block">
                    <h2 className={cn("text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight transition-colors duration-300", isActive
                    ? "text-white"
                    : "text-white/40 group-[&:not(:hover)]:text-white/40 group-hover:text-white/70")}>
                      {service.title}
                    </h2>
                  </Link>

                  <AnimatePresence>
                    {isExpanded && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                        <div className="pt-5 pb-3">
                          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-300 font-light">
                            {service.subItems.map((sub, idx) => (<li key={idx} className="flex items-center gap-2">
                                <span className={cn("w-2 h-2 rounded-full", service.bulletColor)}/>
                                {sub}
                              </li>))}
                          </ul>
                        </div>
                      </motion.div>)}
                  </AnimatePresence>

                  {/* Base separator line */}
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"/>

                  {/* Animated Active Line */}
                  {isActive && (<motion.div layoutId="activeServiceLine" className="absolute bottom-0 left-0 h-[2px] bg-white z-10" initial={false} transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                    }} style={{ width: "35%" }}/>)}
                </div>);
        })}
          </div>

          {/* Bottom Dynamic Section */}
          <div className="min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div key={activeIndex} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="flex flex-col">
                <h4 className="text-2xl font-medium mb-3 text-white tracking-tight">
                  {services[activeIndex].heading}
                </h4>
                <p className="text-lg font-light leading-relaxed text-gray-400 max-w-lg mb-8">
                  {services[activeIndex].description}
                </p>
                <Link href={`/services/${services[activeIndex].slug}`} className="bg-white text-black px-6 py-3 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors inline-flex items-center gap-2 self-start group/btn">
                  Explore Service
                  <ArrowUpRight className="w-4 h-4 opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"/>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>);
}
