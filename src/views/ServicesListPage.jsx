"use client";
import Link from 'next/link';
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services";
import { FadeIn } from "../components/FadeIn";
export function ServicesListPage() {
    return (<>
      
      <div className="pt-32 pb-48 md:pt-40 px-6 md:px-12 lg:px-16 min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="mb-24 md:mb-32">
            <FadeIn delayMs={100} durationMs={800}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading italic tracking-tight mb-6">
                Our Services
              </h1>
            </FadeIn>
            <FadeIn delayMs={200} durationMs={800}>
              <p className="text-lg md:text-xl font-light leading-relaxed text-gray-400 max-w-2xl">
                We craft comprehensive digital experiences tailored to build
                brand credibility, elevate aesthetic appeal, and drive
                measurable performance.
              </p>
            </FadeIn>
          </div>

          <div className="space-y-12 md:space-y-24">
            {services.map((service, index) => (<motion.div key={service.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="group relative border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 hover:border-white/30 transition-colors bg-zinc-950/50">
                <Link href={`/services/${service.slug}`} className="absolute inset-0 z-10" aria-label={`View ${service.title} service`}/>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-0">
                  <div>
                    <h2 className="text-sm uppercase tracking-widest text-[#FFD1C2] font-bold mb-6">
                      {service.positioning}
                    </h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight mb-6">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-400 font-light leading-relaxed mb-10">
                      {service.overview}
                    </p>

                    <div className="bg-white text-black px-6 py-3 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors inline-flex items-center gap-2 group-hover:bg-gray-200">
                      View Service
                      <ArrowUpRight className="w-4 h-4 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"/>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <h4 className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-6">
                      Capabilities
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                      {service.capabilities.map((capability, idx) => (<li key={idx} className="flex items-center gap-3 text-white text-lg font-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F24E1E]"/>
                          {capability}
                        </li>))}
                    </ul>
                  </div>
                </div>
              </motion.div>))}
          </div>
        </div>
      </div>
    </>);
}
