"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, TrendingDown, ShieldCheck, Users, MousePointerClick, Sparkles, Check, Plus, Minus } from 'lucide-react';
import { WebsiteAuditHeroHud } from '../components/WebsiteAuditHeroHud';
function MonitorSearchIcon({ className, size = 16 }) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="14" x="2" y="3" rx="2"/>
      <line x1="12" x2="12" y1="17" y2="21"/>
      <line x1="8" x2="16" y1="21" y2="21"/>
      <circle cx="15" cy="11" r="3.5" fill="black" stroke="currentColor" strokeWidth="2"/>
      <line x1="17.5" x2="21" y1="13.5" y2="17"/>
    </svg>);
}
export function WebsiteAuditPage() {
    const [activeFaq, setActiveFaq] = useState(0);
    const [activeLeak, setActiveLeak] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024 ||
                window.matchMedia("(pointer: coarse)").matches);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    // TODO: Replace with actual Google Form and WhatsApp URLs when available
    const GOOGLE_FORM_URL = "https://wa.me/919821687437?text=Hi%20Team%20Intent,%20I'd%20like%20to%20get%20a%20website%20audit%20for%20my%20business.";
    const WHATSAPP_URL = "https://wa.me/919821687437?text=Hi%20Team%20Intent,%20I'd%20like%20to%20get%20a%20website%20audit%20for%20my%20business.";
    const leaks = [
        {
            title: "Vague Value Messaging",
            description: "If users cannot understand what you do and who you serve within 3 seconds of loading, they will close the tab.",
            tip: "Use crisp, bold, benefit-driven headlines to retain visitor attention immediately.",
            metric: "Boosts immediate retention by up to 40%"
        },
        {
            title: "Weak Trust Elements",
            description: "Generic testimonials without photos, missing client logos, or lack of proof can cause prospects to leave instantly.",
            tip: "Include real headshots, client names, and verified business outcomes to build trust.",
            metric: "Reduces bounce rates by up to 28%"
        },
        {
            title: "Friction-Filled Navigation",
            description: "Complex menu drop-downs and hidden links frustrate buyers who just want to book or inquire.",
            tip: "Implement a clean, simple header navigation containing a single high-contrast action.",
            metric: "Speeds up user path-to-goal by 35%"
        },
        {
            title: "Broken Mobile UX Layouts",
            description: "Overlapping elements, tiny text, and hard-to-tap buttons on mobile trigger high bounce rates.",
            tip: "Optimize layouts for all viewport resizes and ensure touch target bounds are 44px.",
            metric: "Directly lowers mobile customer drop-offs"
        }
    ];
    const auditOptions = [
        {
            name: "Leak Check",
            price: "₹199",
            description: "A professional manual 5-minute Loom video audit highlighting critical homepage gaps.",
            uncovers: "Delivers rapid user mapping & clear actionable recommendations.",
            features: [
                "5-Minute Custom Loom Audit Video",
                "Explains what the user is experiencing",
                "Pinpoints core homepage messaging & layout issues",
                "Focus on mapping user behavior with business goals",
                "Explains how to accomplish and fix issues properly"
            ],
            cta: "Get Leak Check",
            formUrl: "https://forms.gle/3pEHXKAY5WWDfftm8",
            popular: false
        },
        {
            name: "Leak Analysis",
            price: "₹299",
            description: "A detailed manual walkthrough across up to 3 core pages, combined with structured action steps.",
            uncovers: "Deep dive conversion audit with custom video + key action PDF.",
            features: [
                "Detailed UX & copy suggestions video",
                "Actionable minor PDF report to help you understand & act",
                "Covers up to 3 key customer-facing pages",
                "Conversion funnel flow & checkout walkthrough",
                "UX & layout responsiveness testing"
            ],
            cta: "Get Leak Analysis",
            formUrl: "https://forms.gle/3pEHXKAY5WWDfftm8",
            popular: false
        },
        {
            name: "Experience Blueprint",
            price: "₹4,999",
            description: "Our premium tier. A complete manual UX architecture blueprint and strategic wireframe roadmap.",
            uncovers: "Maps out the exact structural redesign and strategy needed for ultimate trust and conversions.",
            features: [
                "Full website UX architecture audit",
                "Navigation tree & information flow map",
                "Custom copywriting & messaging matrix",
                "High-fidelity visual wireframe recommendations",
                "Two separate 1-on-1 strategy & discussion calls",
                "Call 1: For taking inputs & understanding your problem",
                "Call 2: For sharing solutions & walkthrough discussion"
            ],
            cta: "Get Full Blueprint",
            formUrl: "https://forms.gle/3pEHXKAY5WWDfftm8",
            popular: true
        }
    ];
    const sampleFindings = [
        {
            page: "Homepage Hero Section",
            issue: "Vague, metaphorical headline with no clear subtext.",
            consequence: "High immediate bounce rate as visitors fail to grasp the specific product offering.",
            recommendation: "Replace 'We Orbit Your Potential' with 'A Web & Product Design Studio for High-Growth Startups'."
        },
        {
            page: "Service Grid Layout",
            issue: "Unresponsive columns and small clickable areas.",
            consequence: "Mobile visitors get frustrated trying to select custom service items and exit.",
            recommendation: "Apply dynamic CSS grids and scale click/tap targets to a minimum of 44px."
        },
        {
            page: "Case Study CTA",
            issue: "The primary button color matches the section background.",
            consequence: "Zero visual contrast causes users to scroll past key conversion gates.",
            recommendation: "Drench the action button in high-contrast Intent Orange (#F24E1E)."
        }
    ];
    const faqs = [
        {
            question: "Who is this website audit for?",
            answer: "This is for founders, startups, B2B services, and digital brands whose websites are getting traffic but aren't generating the conversions, leads, or enquiries they expect."
        },
        {
            question: "Do I need a complete redesign to fix these?",
            answer: "No, absolutely not. Most website leaks can be plugged with simple, surgical modifications, such as adjusting a headline, swapping background colors on critical buttons, or changing section orders."
        },
        {
            question: "Can I implement these fixes myself?",
            answer: "Yes, our audit reports are written in crystal-clear, plain English with no developer jargon. You can easily share the action items with your internal developers or make the adjustments yourself."
        },
        {
            question: "How long does it take to receive my audit?",
            answer: "We deliver our smaller audits (Leak Check & Leak Analysis) within 6 to 7 hours, and the full Experience Blueprint within 4 to 5 business days, as each is conducted manually by our design team."
        },
        {
            question: "Can I upgrade my audit option later?",
            answer: "Yes! If you start with a Leak Check or Leak Analysis and decide you want a deeper dive, you can upgrade to the Experience Blueprint at any time by paying the difference."
        },
        {
            question: "Will you redesign my website afterwards if I ask?",
            answer: "Yes, we will take the project forward and redesign your website. Since we already understand your requirements and what your customers are looking forward to, we understand exactly how to map your business goals with the solution. We believe we can do a really good job at that and execute it seamlessly."
        }
    ];
    return (<div className="bg-black text-white min-h-screen relative overflow-hidden" id="audit-page-root">
      {/* Background Ornaments */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#F24E1E]/5 rounded-full blur-[120px] pointer-events-none"/>
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#F24E1E]/3 rounded-full blur-[100px] pointer-events-none"/>

      {/* SECTION 1: HERO */}
      <section className="pt-32 pb-20 px-6 md:pt-40 md:pb-28 md:px-12 lg:px-16 border-b border-white/5 relative z-10" id="audit-hero-section">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 text-left">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6 text-white">
              <MonitorSearchIcon className="w-4 h-4 text-zinc-400"/>
              <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-300">Performance & Conversion Audit</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading italic tracking-tight leading-tight mb-8">
              See what's quietly <span className="text-[#F24E1E] font-sans not-italic font-medium">costing your business.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg md:text-xl font-light text-zinc-400 leading-relaxed max-w-2xl mb-12">
              Every website has opportunities that are easy to overlook but expensive to ignore. We manually review your website to uncover the trust, messaging, UX, and conversion issues that may be holding back enquiries, sales, and long-term growth.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-start items-start">
              <button onClick={() => {
            const target = document.getElementById('audit-options-pricing');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }} className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-zinc-200 text-black text-sm font-medium rounded-lg transition-colors duration-300 group w-full sm:w-auto cursor-pointer" id="hero-audit-cta-primary">
                <span>Start My Audit</span>
              </button>
            </motion.div>
          </div>

          {/* Hero Right HUD Image Reference Recreation */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="lg:col-span-5 flex items-center justify-center relative">
            <WebsiteAuditHeroHud />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: WHAT IS A WEBSITE LEAK? */}
      <section className="py-24 px-6 md:px-12 lg:px-16 border-b border-white/5 bg-zinc-950/40 relative z-10" id="audit-leaks-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading italic tracking-tight mb-4">
              What Is A <span className="text-[#F24E1E] font-sans not-italic font-medium">Website Leak?</span>
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto font-light">
              Leaks are unseen friction points on your website that cause visitors to abandon their journey before booking, calling, or buying.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Interactive Annotated Mockup UI Display */}
            <div className="lg:col-span-7 bg-[#0b0b0b] border border-white/10 rounded-2xl p-6 relative shadow-2xl" id="leak-visual-mockup">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5 text-zinc-600 text-xs font-mono">
                <span className="w-3 h-3 rounded-full bg-red-500/50"/>
                <span className="w-3 h-3 rounded-full bg-yellow-500/50"/>
                <span className="w-3 h-3 rounded-full bg-green-500/50"/>
                <span className="ml-2 text-zinc-400">YOUR-WEBSITE.COM/HOMEPAGE_MOCKUP</span>
              </div>

              {/* Context-wise interactive leak visualization */}
              <div className="min-h-[260px] flex flex-col justify-center my-6">
                <AnimatePresence mode="wait">
                  {((activeLeak !== null ? activeLeak : 0) === 0) && (<motion.div key="vague-messaging" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-4">
                      <div className="border border-red-500/30 bg-red-950/10 p-4 rounded-xl relative">
                        <span className="absolute top-2 right-2 text-[9px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-mono font-semibold">LEAK: UNCONSCIOUS BOUNCE</span>
                        <h4 className="text-xs text-zinc-500 font-mono mb-1">Before: Headline is abstract</h4>
                        <p className="text-sm text-red-400 font-medium font-serif italic">"We elevate synergetic paradigms to coordinate potential."</p>
                      </div>
                      
                      <div className="border border-green-500/30 bg-green-950/10 p-4 rounded-xl relative">
                        <span className="absolute top-2 right-2 text-[9px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded font-mono font-semibold">FIX: HIGH CONVERSION</span>
                        <h4 className="text-xs text-zinc-500 font-mono mb-1">After: Human, high-intent headline</h4>
                        <p className="text-sm text-green-400 font-medium font-sans">"Web & Product Design Studio for High-Growth Startups."</p>
                      </div>
                    </motion.div>)}

                  {((activeLeak !== null ? activeLeak : 0) === 1) && (<motion.div key="weak-trust" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-4">
                      <div className="border border-red-500/30 bg-red-950/10 p-4 rounded-xl relative">
                        <span className="absolute top-2 right-2 text-[9px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-mono font-semibold">LEAK: ZERO TRUST</span>
                        <h4 className="text-xs text-zinc-500 font-mono mb-1">Before: No full name, photo, or proof</h4>
                        <p className="text-xs text-zinc-400 italic mb-2">"The project went well and they were nice."</p>
                        <span className="text-[10px] text-zinc-500 font-mono">- John</span>
                      </div>

                      <div className="border border-green-500/30 bg-green-950/10 p-4 rounded-xl relative flex gap-3 items-center">
                        <span className="absolute top-2 right-2 text-[9px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded font-mono font-semibold">FIX: VERIFIED OUTCOME</span>
                        <div className="w-10 h-10 rounded-full bg-zinc-800 border border-green-500/30 shrink-0 flex items-center justify-center font-bold text-xs text-green-400">AK</div>
                        <div>
                          <h4 className="text-xs text-zinc-500 font-mono">After: Complete proof & context</h4>
                          <p className="text-xs text-white font-medium">"Delivered our custom platform on time. Conversions rose +40%."</p>
                          <span className="text-[10px] text-green-400 font-mono font-medium">Ansh Kapila, Founder, Intent Studio</span>
                        </div>
                      </div>
                    </motion.div>)}

                  {((activeLeak !== null ? activeLeak : 0) === 2) && (<motion.div key="navigation" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-4">
                      <div className="border border-red-500/30 bg-red-950/10 p-4 rounded-xl relative">
                        <span className="absolute top-2 right-2 text-[9px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-mono font-semibold">LEAK: FRICTION PATH</span>
                        <h4 className="text-xs text-zinc-500 font-mono mb-2">Before: 6 navigation items with dropdowns</h4>
                        <div className="flex flex-wrap gap-2 text-[10px] text-red-400 font-mono">
                          <span className="border border-red-500/20 px-2 py-1 rounded">About Us</span>
                          <span className="border border-red-500/20 px-2 py-1 rounded">Careers</span>
                          <span className="border border-red-500/20 px-2 py-1 rounded">Resources</span>
                          <span className="border border-red-500/20 px-2 py-1 rounded">Solutions</span>
                        </div>
                      </div>

                      <div className="border border-green-500/30 bg-green-950/10 p-4 rounded-xl relative">
                        <span className="absolute top-2 right-2 text-[9px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded font-mono font-semibold">FIX: SINGLE GOAL</span>
                        <h4 className="text-xs text-zinc-500 font-mono mb-2">After: Focused user path</h4>
                        <div className="flex justify-between items-center bg-zinc-950 p-2 rounded-lg border border-white/5">
                          <span className="text-xs font-serif italic text-white">Intent Studio</span>
                          <div className="flex items-center gap-3 text-[10px] text-zinc-400">
                            <span>Work</span>
                            <span>Services</span>
                            <span className="bg-white text-black px-2 py-1 rounded text-[9px] font-medium">Book a Call</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>)}

                  {((activeLeak !== null ? activeLeak : 0) === 3) && (<motion.div key="broken-mobile" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-4">
                      <div className="border border-red-500/30 bg-red-950/10 p-4 rounded-xl relative">
                        <span className="absolute top-2 right-2 text-[9px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-mono font-semibold">LEAK: TINY TARGETS</span>
                        <h4 className="text-xs text-zinc-500 font-mono mb-2">Before: Text overlaps, 24px buttons</h4>
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-1/2 bg-zinc-800 rounded relative overflow-hidden flex items-center justify-center text-[9px] text-red-400">
                            OVERLAPPING
                          </div>
                          <button className="bg-zinc-800 text-[8px] text-zinc-500 px-2 py-0.5 rounded">CTA</button>
                        </div>
                      </div>

                      <div className="border border-green-500/30 bg-green-950/10 p-4 rounded-xl relative">
                        <span className="absolute top-2 right-2 text-[9px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded font-mono font-semibold">FIX: MOBILE FLUIDITY</span>
                        <h4 className="text-xs text-zinc-500 font-mono mb-2">After: Full spacing & 44px safe touch targets</h4>
                        <div className="space-y-2">
                          <div className="h-4 w-2/3 bg-zinc-800 rounded"/>
                          <button className="w-full bg-white text-black py-2 rounded-lg text-[10px] font-medium hover:bg-zinc-200 transition-colors">
                            Book a Call (44px target)
                          </button>
                        </div>
                      </div>
                    </motion.div>)}
                </AnimatePresence>
              </div>

              {/* Highlight Overlay Detail */}
              <div className="mt-6 p-4 bg-zinc-900/80 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 mb-2 text-[#F24E1E]">
                  <Sparkles className="w-4 h-4"/>
                  <span className="text-xs font-semibold uppercase tracking-wider font-sans">Interactive Leak Highlight</span>
                </div>
                <h4 className="text-sm font-medium text-white mb-1">
                  {activeLeak !== null ? leaks[activeLeak].title : leaks[0].title}
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {activeLeak !== null ? leaks[activeLeak].description : leaks[0].description}
                </p>
              </div>
            </div>

            {/* List of Leak Categories */}
            <div className="lg:col-span-5 flex flex-col" onMouseLeave={() => setActiveLeak(0)}>
              {leaks.map((leak, idx) => {
            const isActive = activeLeak === idx;
            return (<div key={idx} onMouseEnter={() => setActiveLeak(idx)} className="relative cursor-pointer group py-5" id={`leak-category-btn-${idx}`}>
                    <div className="flex items-start gap-4">
                      <span className={`font-mono text-xs mt-1 transition-colors duration-300 ${isActive ? 'text-[#F24E1E]' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                        0{idx + 1}.
                      </span>
                      <div className="flex-1">
                        <h3 className={`text-xl md:text-2xl font-heading italic tracking-tight transition-colors duration-300 ${isActive
                    ? "text-white"
                    : "text-white/40 group-hover:text-white/70"}`}>
                          {leak.title}
                        </h3>
                        
                        <AnimatePresence initial={false}>
                          {isActive && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                              <p className="text-sm text-zinc-400 font-light mt-2 leading-relaxed">
                                {leak.description} <strong className="text-green-400 font-medium ml-1.5">{leak.metric}</strong>
                              </p>
                            </motion.div>)}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Bottom separator line */}
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"/>

                    {/* Animated Active Line */}
                    {isActive && (<motion.div layoutId="activeLeakLine" className="absolute bottom-0 left-0 h-[2px] bg-[#F24E1E] z-10" initial={false} transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                    }} style={{ width: "35%" }}/>)}
                  </div>);
        })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY IT MATTERS */}
      <section className="py-24 px-6 md:px-12 lg:px-16 border-b border-white/5 relative z-10" id="audit-impact-section">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading italic tracking-tight mb-6">
            Why Website Leaks <span className="text-[#F24E1E] font-sans not-italic font-medium">Matter</span>
          </h2>
          <p className="text-zinc-400 font-light text-lg">
            This isn't an aesthetic discussion. Web leaks affect your growth metrics directly, hurting conversion rates and digital credibility.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 rounded-2xl border border-white/5 bg-zinc-950/20 flex flex-col justify-between">
            <div className="mb-8">
              <div className="p-3 bg-red-950/30 text-red-400 rounded-xl w-fit mb-6">
                <TrendingDown className="w-6 h-6"/>
              </div>
              <h3 className="text-xl font-medium mb-3">Fewer Enquiries</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                When prospects are confused by unclear value statements, they leaves without starting a dialogue or filling forms.
              </p>
            </div>
            <span className="text-xs text-red-400 font-mono">Immediate Revenue Leak</span>
          </div>

          <div className="p-8 rounded-2xl border border-white/5 bg-zinc-950/20 flex flex-col justify-between">
            <div className="mb-8">
              <div className="p-3 bg-red-950/30 text-red-400 rounded-xl w-fit mb-6">
                <ShieldCheck className="w-6 h-6 animate-pulse"/>
              </div>
              <h3 className="text-xl font-medium mb-3">Weaker Credibility</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Amateur alignment patterns, poor typography hierarchies, and weak social proof signals make your business feel unreliable.
              </p>
            </div>
            <span className="text-xs text-red-400 font-mono">Damages Market Positioning</span>
          </div>

          <div className="p-8 rounded-2xl border border-white/5 bg-zinc-950/20 flex flex-col justify-between">
            <div className="mb-8">
              <div className="p-3 bg-red-950/30 text-red-400 rounded-xl w-fit mb-6">
                <MousePointerClick className="w-6 h-6"/>
              </div>
              <h3 className="text-xl font-medium mb-3">Lower Conversions</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Unresponsive buttons and invisible action cues mean high-intent traffic leaves before taking action.
              </p>
            </div>
            <span className="text-xs text-red-400 font-mono">Wasted Buying Intent</span>
          </div>

          <div className="p-8 rounded-2xl border border-white/5 bg-zinc-950/20 flex flex-col justify-between">
            <div className="mb-8">
              <div className="p-3 bg-red-950/30 text-red-400 rounded-xl w-fit mb-6">
                <Users className="w-6 h-6"/>
              </div>
              <h3 className="text-xl font-medium mb-3">Marketing Inefficiency</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Paying for LinkedIn, Meta, or search ads to drive traffic is a waste if your landing page fails to hold attention.
              </p>
            </div>
            <span className="text-xs text-red-400 font-mono">Drains Advertising Budget</span>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT YOU'LL RECEIVE */}
      <section className="py-24 px-6 md:px-12 lg:px-16 border-b border-white/5 bg-zinc-950/20 relative z-10" id="audit-deliverables-info">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading italic tracking-tight mb-6">
            What You'll <span className="text-[#F24E1E] font-sans not-italic font-medium">Receive</span>
          </h2>
          <p className="text-zinc-400 font-light text-lg">
            Each audit experience is tailored to provide distinct levels of diagnostics. Here is what we uncover in each tier:
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-white/5 bg-zinc-900/40 relative">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-lg font-medium">Leak Check</h3>
            </div>
            <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
              A streamlined manual diagnostic focused on structural problems. We check your main homepage copy, main call to action elements, and key trust sections to reveal fast, high-impact fixes.
            </p>
            <div className="flex items-center gap-2 text-white text-xs font-mono">
              <CheckCircle className="w-4 h-4 shrink-0"/>
              Great for basic conversion checks
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-white/5 bg-zinc-900/40 relative">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-lg font-medium">Leak Analysis</h3>
            </div>
            <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
              A comprehensive review targeting up to 3 major pages. Ideal for checking service paths, checkout flows, or subscription conversion funnels. We analyze touch layouts, form friction, and clarity.
            </p>
            <div className="flex items-center gap-2 text-white text-xs font-mono">
              <CheckCircle className="w-4 h-4 shrink-0"/>
              Best for conversion funnel reviews
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-white/5 bg-[#F24E1E]/5 relative">
            <div className="absolute top-4 right-4 text-[#F24E1E]">
              <Sparkles className="w-5 h-5"/>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-lg font-medium">Experience Blueprint</h3>
            </div>
            <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
              Our ultimate experience map. We reconstruct your user-flows, craft a optimized copywriting outline, map precise typography rules, and deliver annotated blueprint wires for redesigning your pages.
            </p>
            <div className="flex items-center gap-2 text-green-400 text-xs font-mono">
              <CheckCircle className="w-4 h-4 shrink-0"/>
              Complete visual wireframe mapping
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: AUDIT OPTIONS (PRICING GRID) */}
      <section className="py-24 px-6 md:px-12 lg:px-16 border-b border-white/5 relative z-10" id="audit-options-pricing">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading italic tracking-tight mb-4">
            Select Your <span className="text-[#F24E1E] font-sans not-italic font-medium">Audit Experience</span>
          </h2>
          <p className="text-zinc-400 font-light max-w-xl mx-auto">
            Choose the tier that matches your goals. Flat rates, no hidden fees. Complete manual expert review.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {auditOptions.map((opt, i) => (<div key={i} className={`p-8 md:p-10 rounded-2xl flex flex-col justify-between transition-all duration-300 relative ${opt.popular ? 'border-2 border-[#F24E1E] bg-[#0d0402] shadow-[0_0_50px_rgba(242,78,30,0.08)]' : 'border border-white/10 bg-[#080808] hover:border-white/20'}`} id={`audit-pricing-card-${i}`}>
              {opt.popular && (<span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F24E1E] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Recommended</span>)}

              <div>
                <h3 className="text-xl font-heading mb-2">{opt.name}</h3>
                <p className="text-zinc-500 text-xs font-light mb-6 leading-relaxed">{opt.description}</p>
                
                <div className="flex flex-col gap-1 mb-8 border-b border-white/5 pb-6">
                  <span className="text-4xl md:text-5xl font-medium tracking-tight text-white">{opt.price}</span>
                  <span className="text-zinc-500 text-xs uppercase tracking-wider font-mono">one time</span>
                </div>

                <div className="space-y-4 mb-8">
                  <p className="text-xs font-mono text-[#F24E1E] uppercase tracking-wider">{opt.uncovers}</p>
                  <ul className="space-y-3">
                    {opt.features.map((feat, fIdx) => (<li key={fIdx} className="flex items-start gap-2.5 text-zinc-300 text-sm font-light leading-snug">
                        <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5"/>
                        <span>{feat}</span>
                      </li>))}
                  </ul>
                </div>
              </div>

              {/* TODO: Link to checkout or Google Form */}
              <a href={opt.formUrl} target="_blank" rel="noopener noreferrer" className={`w-full px-6 py-3 rounded-lg text-center text-sm font-medium transition-colors duration-300 block ${opt.popular ? 'bg-white hover:bg-zinc-200 text-black' : 'bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white'}`} id={`audit-buy-btn-${i}`}>
                {opt.cta}
              </a>
            </div>))}
        </div>
      </section>

      {/* SECTION 6: HOW IT WORKS */}
      <section className="py-24 px-6 md:px-12 lg:px-16 border-b border-white/5 bg-zinc-950/40 relative z-10" id="audit-how-it-works">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading italic tracking-tight mb-4">
            How It <span className="text-[#F24E1E] font-sans not-italic font-medium">Works</span>
          </h2>
          <p className="text-zinc-400 font-light">
            We've streamlined the entire experience. Complete manual review in 4 easy steps:
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector Line on Desktop */}
          <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-[#F24E1E]/0 via-white/10 to-[#F24E1E]/0 pointer-events-none"/>

          {[
            {
                title: "Submit Your Website",
                desc: "Provide your URL and share brief business goals via WhatsApp message."
            },
            {
                title: "Manual Expert Review",
                desc: "Our design professionals manually walk through your user journeys, copy matrices, and layout elements."
            },
            {
                title: "Receive Your Audit & Video",
                desc: "Get a personalized Loom video walkthrough pointing out critical user experience friction points alongside your actionable, beautifully organized report."
            },
            {
                title: "Decide Next Steps",
                desc: "Implement fixes yourself, coordinate with your devs, or hire Intent Studios to remodel your flows."
            }
        ].map((step, idx) => (<div key={idx} className="text-center group" id={`how-it-works-step-${idx}`}>
              <div className="w-14 h-14 rounded-full border border-white/10 bg-[#080808] text-white group-hover:border-[#F24E1E] transition-colors duration-500 flex items-center justify-center mx-auto mb-6 text-lg font-mono font-bold relative z-10">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-medium mb-3">{step.title}</h3>
              <p className="text-zinc-400 text-xs font-light leading-relaxed max-w-[220px] mx-auto">{step.desc}</p>
            </div>))}
        </div>
      </section>

      {/* SECTION 7: WHY THIS IS DIFFERENT */}
      <section className="py-24 px-6 md:px-12 lg:px-16 border-b border-white/5 relative z-10" id="audit-differentiation">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs text-[#F24E1E] font-mono uppercase tracking-widest font-bold mb-4 block">No Scrapers. No Automations.</span>
              <h2 className="text-3xl md:text-5xl font-heading italic tracking-tight leading-tight mb-6">
                Why Our Audit Is <span className="text-[#F24E1E] font-sans not-italic font-medium">Distinctly Different</span>
              </h2>
              <p className="text-zinc-400 font-light leading-relaxed mb-6">
                Most website audits are run through generic, automated scrapers that spits out meaningless numbers about file sizes or missing meta-tags.
              </p>
              <p className="text-zinc-400 font-light leading-relaxed">
                We believe conversion problems are fundamentally human. Our team reviews your website manually to assess how well it speaks to prospective clients.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl border border-white/5 bg-[#050505] space-y-3">
                <Check className="w-5 h-5 text-green-400"/>
                <h4 className="font-semibold text-sm">Expert Human Review</h4>
                <p className="text-zinc-500 text-xs font-light leading-relaxed">
                  Real designers walk through your pages manually to discover messaging gaps and usability blocks.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-[#050505] space-y-3">
                <Check className="w-5 h-5 text-green-400"/>
                <h4 className="font-semibold text-sm">Strict UX Framework</h4>
                <p className="text-zinc-500 text-xs font-light leading-relaxed">
                  Every page is graded based on cognitive layout guidelines, responsive layouts, and user accessibility.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-[#050505] space-y-3">
                <Check className="w-5 h-5 text-green-400"/>
                <h4 className="font-semibold text-sm">Business Conversions Focus</h4>
                <p className="text-zinc-500 text-xs font-light leading-relaxed">
                  We look beyond code speeds to focus on copy flow, action triggers, and customer trust assets.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-[#050505] space-y-3">
                <Check className="w-5 h-5 text-green-400"/>
                <h4 className="font-semibold text-sm">Structured Reports</h4>
                <p className="text-zinc-500 text-xs font-light leading-relaxed">
                  These highly convenient reports are formatted perfectly for your AI agent. Simply input the insights to instantly align improvements with your core business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: SAMPLE FINDINGS (VISUAL PLACEHOLDER) */}
      <section className="py-24 px-6 md:px-12 lg:px-16 border-b border-white/5 bg-zinc-950/20 relative z-10" id="audit-sample-findings">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading italic tracking-tight mb-4">
            Sample <span className="text-[#F24E1E] font-sans not-italic font-medium">Audit Findings</span>
          </h2>
          <p className="text-zinc-400 font-light max-w-xl mx-auto">
            Here are actual common visual and messaging leaks we consistently discover during our website manual audits.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {sampleFindings.map((finding, idx) => (<div key={idx} className="p-6 rounded-2xl border border-white/5 bg-[#080808] flex flex-col md:flex-row gap-6 justify-between items-start md:items-center relative overflow-hidden" id={`sample-finding-card-${idx}`}>
              {/* Decorative blurred illustration represent placeholder */}
              <div className="absolute top-0 right-0 w-32 h-full bg-[#F24E1E]/[0.02] blur-xl pointer-events-none"/>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-950/50 text-red-400 border border-red-500/10">LEAK LOCATED</span>
                  <span className="text-xs text-zinc-500 font-mono">{finding.page}</span>
                </div>
                <h3 className="text-lg font-medium text-white">{finding.issue}</h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-2xl">
                  <strong>Consequence:</strong> {finding.consequence}
                </p>
              </div>

              <div className="w-full md:w-auto shrink-0 p-4 rounded-xl border border-green-500/10 bg-green-950/5 text-green-400">
                <div className="flex items-center gap-1.5 mb-1">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0"/>
                  <span className="text-[10px] uppercase font-bold tracking-wider">Recommended Fix</span>
                </div>
                <p className="text-xs text-zinc-300 font-light max-w-xs">{finding.recommendation}</p>
              </div>
            </div>))}
        </div>
      </section>

      {/* SECTION 9: TESTIMONIALS (Hidden as requested) */}
      {/* <TestimonialsSection /> */}

      {/* SECTION 10: FAQ */}
      <section className="py-24 px-6 md:px-12 lg:px-16 border-b border-white/5 bg-zinc-950/40 relative z-10" id="audit-faq-section">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight sticky top-32 text-white">
              Audit<br /><span className="text-[#F24E1E] not-italic font-sans font-medium">FAQ</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4 lg:w-2/3">
            {faqs.map((faq, i) => {
            const isOpen = activeFaq === i;
            return (<div key={i} className={`border border-white/10 rounded-xl overflow-hidden transition-colors duration-300 cursor-pointer select-none ${isOpen ? "bg-white/[0.04]" : "bg-transparent hover:bg-white/[0.02]"}`} onMouseEnter={() => {
                    if (!isMobile) {
                        setActiveFaq(i);
                    }
                }} onMouseLeave={() => {
                    if (!isMobile) {
                        setActiveFaq(null);
                    }
                }} onClick={() => {
                    setActiveFaq(isOpen ? null : i);
                }} id={`faq-item-card-${i}`}>
                  <div className="w-full flex items-center justify-between p-6 text-left">
                    <span className="text-lg font-medium text-white pr-8">
                      {faq.question}
                    </span>
                    <div className="text-gray-400 flex-shrink-0">
                      {isOpen ? <Minus className="w-5 h-5"/> : <Plus className="w-5 h-5"/>}
                    </div>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="p-6 pt-0 text-gray-400 font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>);
        })}
          </div>
        </div>
      </section>

      {/* SECTION 11: FINAL CTA */}
      <section className="py-24 px-6 md:py-32 md:px-12 lg:px-16 relative z-10 bg-gradient-to-t from-[#140501] to-black" id="audit-final-cta">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading italic tracking-tight mb-6">
            Find out what's <span className="text-[#F24E1E] font-sans not-italic font-medium">quietly costing</span> your business.
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto font-light mb-12">
            Stop guessing where users leave. Get a manual, expert usability review and copy matrix roadmap.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* TODO: Google Form integration URL */}
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-zinc-200 text-black text-sm font-medium rounded-lg transition-colors duration-300 group w-full sm:w-auto" id="final-audit-cta-primary">
              <span>Start My Audit</span>
            </a>
          </div>
        </div>
      </section>
    </div>);
}
