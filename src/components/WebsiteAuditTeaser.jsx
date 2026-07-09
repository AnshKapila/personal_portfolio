"use client";
import { motion } from 'motion/react';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
function MonitorSearchIcon({ className, size = 16 }) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="14" x="2" y="3" rx="2"/>
      <line x1="12" x2="12" y1="17" y2="21"/>
      <line x1="8" x2="16" y1="21" y2="21"/>
      <circle cx="15" cy="11" r="3.5" fill="black" stroke="currentColor" strokeWidth="2"/>
      <line x1="17.5" x2="21" y1="13.5" y2="17"/>
    </svg>);
}
export function WebsiteAuditTeaser() {
    const highlights = [
        "Manual review by a designer",
        "UX, messaging & trust analysis",
        "Prioritized recommendations",
        "Starting from ₹199"
    ];
    return (<section className="py-24 px-6 md:px-12 lg:px-16 border-t border-b border-white/5 bg-gradient-to-b from-black to-zinc-950/40 relative overflow-hidden" id="website-audit-teaser">
      {/* Subtle Glow Ornament */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#F24E1E]/5 rounded-full blur-[80px] pointer-events-none"/>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        {/* Left column: Headings and copy */}
        <div className="lg:w-7/12 space-y-6">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <MonitorSearchIcon className="w-3.5 h-3.5 text-zinc-400"/>
            Website Audit
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.8, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-tight text-white">
            Is your website quietly <span className="text-[#F24E1E] font-sans not-italic font-medium">leaking customers?</span>
          </motion.h2>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-4 text-base md:text-lg font-light leading-relaxed text-zinc-400">
            <p>
              Sometimes the biggest improvements come from understanding what is already holding your website back.
            </p>
            <p>
              Get a manual Website Audit to uncover the trust, UX, messaging, and conversion issues that may be quietly costing your business customers, enquiries, and credibility.
            </p>
          </motion.div>
        </div>

        {/* Right column: scannable highlights card */}
        <div className="lg:w-5/12 w-full">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.8, delay: 0.3 }} className="p-8 md:p-10 rounded-2xl border border-white/10 bg-zinc-900/40 relative overflow-hidden backdrop-blur-sm">
            {/* Gloss subtle top line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"/>

            <div className="space-y-6 mb-8">
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#F24E1E]">Highlights</span>
              <ul className="space-y-4">
                {highlights.map((highlight, idx) => (<li key={idx} className="flex items-start gap-3.5 text-zinc-200 font-light text-sm md:text-base leading-snug">
                    <span className="w-5 h-5 rounded-full bg-green-950/50 border border-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-green-400"/>
                    </span>
                    <span>{highlight}</span>
                  </li>))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/audit" className="bg-white text-black px-6 py-3 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors inline-flex items-center gap-2 justify-center group shrink-0">
                View Website Audit
                <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform"/>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);
}
