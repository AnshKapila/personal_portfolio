"use client";
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, Cpu, Code, Search, Layers, Compass, Figma, CheckSquare, Paintbrush, Workflow, Zap, FileText, TrendingUp, Sparkles, ChevronDown, ChevronUp, X, Maximize2 } from 'lucide-react';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { FadeIn } from '../components/FadeIn';
const serviceDetails = {
    'websites-platforms': {
        subtitle: 'HIGH-PERFORMANCE SITE ARCHITECTURE',
        processTitle: 'The Web Redesign Lifecycle',
        processDescription: 'Every pixel and structural container is structured to capture audience attention, cultivate deep brand authority, and turn casual visitors into high-value advocates.',
        processSteps: [
            { title: 'Goal Blueprint & Strategy', desc: 'We examine your business levers, client goals, and content constraints to construct an optimized visual plan.', duration: 'Week 1' },
            { title: 'UX Outline & Copywriting', desc: 'Structuring responsive wireframes, defining key action buttons, and copywriting highly engaging content structures directly.', duration: 'Week 2' },
            { title: 'Swiss Visual Direction', desc: 'Crafting premium visual layouts, selecting crisp typography, styling fluid assets, and matching your brand guidelines.', duration: 'Week 3-4' },
            { title: 'Frontend Stack & Launch', desc: 'Developing rapid, SEO-optimized, lightweight React & Tailwind modules to achieve perfect performance and loading speeds.', duration: 'Week 5-6' }
        ],
        bentoFeatures: [
            { title: 'Frictionless Responsiveness', desc: 'Optimized desktop-first viewport scales seamlessly moving down to robust 44px mobile touch targets.', icon: 'Smartphone' },
            { title: 'Lighthouse Performance', desc: 'Custom code splitting, optimized static rendering, and clean assets resulting in sub-second initial load speeds.', icon: 'Cpu', value: '100%' },
            { title: 'Pristine Tailwind Grid', desc: 'Meticulous styling sheets utilizing utility classes, zero bloated styling blocks, and responsive borders.', icon: 'Code' },
            { title: 'Built-in SEO Strategy', desc: 'Rigid semantic markup, comprehensive meta labels, structure schema configurations, and search-friendly pathways.', icon: 'Search', value: '1st Page ready' }
        ],
        modelsTitle: 'Web Partnership Formats',
        models: [
            { name: 'Fixed Scope Redesign', desc: 'A structured, high-intensity 4-6 week sprint to redesign and code your core brand website from zero to launch.', speed: '4-6 Weeks', target: 'Seed & Series A Startups', icon: 'Zap' },
            { name: 'Digital Architecture Retainer', desc: 'Continuous weekly designs, landing page iterations, conversion updates, and style auditing.', speed: 'Monthly Sprints', target: 'Scaling SaaS & Brands', icon: 'Workflow' }
        ],
        faqs: [
            { q: 'How long does a standard web redesign and launch cycle take?', a: 'A tailored landing page typically launches in 2-3 weeks, while a comprehensive corporate website or custom web app interface ranges from 4-6 weeks depending on requirements and contents.' },
            { q: 'Do you write the website copy or do I need to provide it?', a: 'We collaborate to write high-converting copy. Rather than separating design from message, we lay out draft copy side-by-side inside wireframes to ensure clarity and narrative flow.' },
            { q: 'Will my website be mobile-responsive and search-engine friendly?', a: 'Every build features lightweight Tailwind grids that adapt fluidly to any display width. We optimize on-page SEO metadata, follow semantic tags guidelines, and build site architectures designed to rank on Google.' }
        ]
    },
    'product-ux-design': {
        subtitle: 'UTILITY-ORIENTED WORKFLOW ARCHITECTURE',
        processTitle: 'The Product UX Strategy',
        processDescription: 'Converting highly complex operational procedures into predictable, self-explanatory UI steps that reduce friction and decrease user onboarding drag.',
        processSteps: [
            { title: 'User Journeys & Blueprint', desc: 'Mapping user objectives, analyzing existing flow bottlenecks, and wireframing layout action cards.', duration: 'Week 1-2' },
            { title: 'Wireframe Validation Loop', desc: 'Rigorous interaction outline iterations, planning perfect system paths before and during visual design.', duration: 'Week 2-3' },
            { title: 'Modular Design System', desc: 'Creating rich components with clear states, tokens, auto-layouts, and absolute structural guidelines.', duration: 'Week 4-5' },
            { title: 'Developer Spec Handoff', desc: 'Delivering flawless, annotated Figma handoff sheets with variable specifications and clean asset packages.', duration: 'Week 6' }
        ],
        bentoFeatures: [
            { title: 'Figma Auto-Layouts', desc: 'Grounded in professional flex-parent systems, ensuring fluid window adjustments and crisp scaling.', icon: 'Figma', value: 'Auto-Layout v5' },
            { title: 'Flexible Design Tokens', desc: 'Global spacing scales, responsive variables, and color keys ready to sync seamlessly with code frameworks.', icon: 'Layers' },
            { title: 'Predictable UX Flows', desc: 'Clean paths and UI checkpoints ensuring users complete transactions without cognitive friction.', icon: 'Compass' },
            { title: 'Developer Synchronization', desc: 'Full interactive documentation, hover/active exceptions mapped, and direct developer communication channels.', icon: 'CheckSquare' }
        ],
        modelsTitle: 'Product Design Formats',
        models: [
            { name: 'Core Feature Sprint', desc: 'Designing a clear product module, dashboard workspace, or critical user flow terminal with specs.', speed: '3-4 Weeks', target: 'Existing products scaling', icon: 'Zap' },
            { name: 'End-to-End Product Lead', desc: 'Full conceptual framework design, unified screen flow mapping, custom vector icons, and unified design system.', speed: '2-3 Months', target: 'Pre-launch & Series A SaaS', icon: 'Layers' }
        ],
        faqs: [
            { q: 'Do you write front-end code for the product dashboards too?', a: 'Our deliverables are primarily development-ready Figma blueprints and complete styled React prototypes if requested. All layout components match code configurations precisely (Tailwind, flexboxes, margins).' },
            { q: 'Can you work side-by-side with our internal developers?', a: 'Yes. We host unified design-developer review syncs to walk through state behaviors, discuss CSS variable structures, explain responsive transitions, and ensure zero friction.' },
            { q: 'What is your research protocol for design systems?', a: 'We analyze your target user metrics, establish layout patterns, map repeatable variables (tokens), and construct robust reusable UI libraries in Figma of high-quality standard compliance.' }
        ]
    },
    'brand-visual-identity': {
        subtitle: 'EDITORIAL BRAND IDENTITY SYSTEMS',
        processTitle: 'The Visual Brand Blueprint',
        processDescription: 'Sculpting distinctive brand systems that capture professional authority, evoke aesthetic luxury, and maintain absolute visual discipline across channels.',
        processSteps: [
            { title: 'Brand Position & Style Audit', desc: 'Reviewing market competitors, identifying stylistic openings, and defining core guidelines.', duration: 'Week 1' },
            { title: 'Moodboarding & Typography', desc: 'Curating gorgeous typeface combinations, custom color harmonies, and responsive look-and-feel specs.', duration: 'Week 2' },
            { title: 'Bespoke Vector Production', desc: 'Bespoke vector drafting of logo marks and typography layouts designed to scale beautifully.', duration: 'Week 3-4' },
            { title: 'Unified Brand Guidelines', desc: 'Bundling complete brand guides, social rules, templates, and high-impact physical assets.', duration: 'Week 5' }
        ],
        bentoFeatures: [
            { title: 'Swiss Contrast Grids', desc: 'High-contrast design configurations, generous spacing, and sophisticated typographical pairings.', icon: 'Paintbrush' },
            { title: 'Infinite Vector Spec', desc: 'Pure mathematical coordinates built for clean scaling on any substrate, print or screen.', icon: 'Layers', value: 'Infinite DPI' },
            { title: 'Harmonious Palettes', desc: 'Carefully curated color schemes matching high-end digital environments with physical outputs.', icon: 'Workflow' },
            { title: 'Marketing Templates', desc: 'Pre-packaged stationery assets, pitch presentation rules, and structural brand booklets.', icon: 'CheckSquare' }
        ],
        modelsTitle: 'Identity Partnerships',
        models: [
            { name: 'Core Identity Sprint', desc: 'Key logo, custom typographical pairing, signature color palette, and initial stationery asset layouts.', speed: '3 Weeks', target: 'Personal Brands & Boutups', icon: 'Zap' },
            { name: 'Comprehensive Brand Book', desc: 'Full spatial guideline specs, color application matrix, responsive logo variations, brand booklet, and layout templates.', speed: '5-6 Weeks', target: 'SaaS Startups & Institutions', icon: 'FileText' }
        ],
        faqs: [
            { q: 'What visual formats do you deliver upon completion?', a: 'You will receive pristine, fully organized vector formats (.SVG, .AI, .PDF), specific design system instructions, curated typography links, and a complete Digital Brand Book.' },
            { q: 'Can you evolve or refresh an existing trademark/logo?', a: 'Absolutely. We carry out brand evolutions—preserving the historical characteristics of your established mark while modernizing its proportions, spacing, and font pairing.' },
            { q: 'How does branding tie into physical or collateral items?', a: 'We build our core identity systems with realistic, physical constraints in mind. We model exactly how labels print, how paper textures respond, and how colors reproduce in real life.' }
        ]
    },
    'ai-content-growth-systems': {
        subtitle: 'ALGORITHMIC VISUAL SYSTEM SYNTHESIS',
        processTitle: 'The AI Growth Protocol',
        processDescription: 'Integrating photorealistic visual synthesis workflows into physical product marketing, producing premium high-end campaign assets in a fraction of traditional times.',
        processSteps: [
            { title: 'Core Audit & Model Prep', desc: 'Mapping physical design features, curating reference lighting profiles, and training prompt grids.', duration: 'Week 1' },
            { title: 'Algorithmic Visual Output', desc: 'Generating a rich catalog of product environments, beautiful lifestyle backdrops, and active visuals.', duration: 'Week 2-3' },
            { title: 'Surgical Digital Retouching', desc: 'Polishing generated images inside professional post-processing pipelines for crisp catalogue quality.', duration: 'Week 3-4' },
            { title: 'Unified Asset Distribution', desc: 'Packaging optimized layouts for social ad channels and publishing templates prepared to scale.', duration: 'Week 5' }
        ],
        bentoFeatures: [
            { title: 'Prompt Calibration System', desc: 'Custom trained instructions that lock down consistent subject details, light angles, and material textures.', icon: 'Cpu' },
            { title: 'Zero Photoshoot Friction', desc: 'Generating breathtaking campaign product imagery and environments with zero physical travel or studio cost.', icon: 'TrendingUp', value: '10x Faster' },
            { title: 'Photorealistic Precision', desc: 'Refined textures, realistic light spills, and exact physical details optimized for high-end lookbooks.', icon: 'Sparkles' },
            { title: 'Strategic Creative Wealth', desc: 'Synthesizing hundreds of premium, consistent ad creatives, layouts, and digital banners in record times.', icon: 'Layers', value: '100+ Assets' }
        ],
        modelsTitle: 'Growth Partnerships',
        models: [
            { name: 'Campaign Launch Bundle', desc: 'Synthesizing a complete, cohesive ad folder with AI lifestyle product imagery, background banners, and structures.', speed: '2-3 Weeks', target: 'Physical Product & E-commerce', icon: 'Zap' },
            { name: 'Creative Velocity Retainer', desc: 'Ongoing monthly content updates, continual model prompts improvements, and rapid visual variations.', speed: 'Ongoing Monthly', target: 'High-Frequency Ad Brands', icon: 'Workflow' }
        ],
        faqs: [
            { q: 'How do you guarantee photorealistic AI visual outputs look natural?', a: 'We run multi-source synthesis loops combined with expert hand-guided Photoshop editing. Shadows, highlights, and physical textures are balanced manually so they look identical to raw photography.' },
            { q: 'Am I allowed to use these synthesized assets commercially?', a: 'Yes. We utilize custom model parameters alongside your physical products. You receive absolute, 100% commercial ownership rights to all finalized images.' },
            { q: 'Can you adapt these systems for continuous email/ad creatives?', a: 'Absolutely. We establish structured visual design templates (using Figma and AI assets) that your team can run and scale infinitely to match ad campaigns.' }
        ]
    }
};
export function ServicePage() {
    const { slug } = useParams();
    const service = services.find((s) => s.slug === slug);
    const [openFaqIdx, setOpenFaqIdx] = useState(null);
    const [activeLightboxImg, setActiveLightboxImg] = useState(null);
    const [activeLightboxVideo, setActiveLightboxVideo] = useState(false);
    const [activeSegmentTab, setActiveSegmentTab] = useState('all');
    if (!service) {
        return (<div className="pt-32 pb-48 px-6 min-h-screen text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl font-heading italic text-white" id="service-not-found-heading">Service not found</h1>
        <Link href="/" className="mt-8 text-[#F24E1E] hover:underline hover:text-[#FF6A4D] transition-colors" id="return-home-link">
          Return Home
        </Link>
      </div>);
    }
    // Curate structured details based on slug
    const details = serviceDetails[service.slug] || serviceDetails['websites-platforms'];
    // Filter projects dynamically based on whitelists for a true bespoke feel
    const serviceProjects = useMemo(() => {
        if (service.slug === 'websites-platforms') {
            const allowedSlugs = ["sulipsa-choudhury-personal-website", "fityard", "metline", "spatialdigest", "ezinore"];
            return projects.filter(p => allowedSlugs.includes(p.slug));
        }
        if (service.slug === 'product-ux-design') {
            const allowedSlugs = ["clickpick", "vigorx", "ezinore"];
            return projects.filter(p => allowedSlugs.includes(p.slug));
        }
        if (service.slug === 'brand-visual-identity') {
            const allowedSlugs = ["bergaria-luxury", "sulipsa-choudhury-personal-website"];
            return projects.filter(p => allowedSlugs.includes(p.slug));
        }
        if (service.slug === 'ai-content-growth-systems') {
            const allowedSlugs = ["bergaria-luxury", "fityard", "metline"];
            return projects.filter(p => allowedSlugs.includes(p.slug));
        }
        return [];
    }, [service.slug]);
    // Compute final showcase images dynamically
    const showcaseImages = useMemo(() => {
        let images = [];
        if (service.customShowcaseImages && service.customShowcaseImages.length > 0) {
            images = service.customShowcaseImages;
        }
        else if (service.additionalShowcaseImages && service.additionalShowcaseImages.length > 0) {
            images = service.additionalShowcaseImages;
        }
        // Preserve the original ordering for product UX and other layouts to match CSS selections and design
        return [...images];
    }, [slug]);
    // Map icon names to Lucide icon components
    const renderIcon = (iconName, size = 20, className = '') => {
        switch (iconName) {
            case 'Smartphone': return <Smartphone size={size} className={className}/>;
            case 'Cpu': return <Cpu size={size} className={className}/>;
            case 'Code': return <Code size={size} className={className}/>;
            case 'Search': return <Search size={size} className={className}/>;
            case 'Layers': return <Layers size={size} className={className}/>;
            case 'Compass': return <Compass size={size} className={className}/>;
            case 'Figma': return <Figma size={size} className={className}/>;
            case 'CheckSquare': return <CheckSquare size={size} className={className}/>;
            case 'Paintbrush': return <Paintbrush size={size} className={className}/>;
            case 'Workflow': return <Workflow size={size} className={className}/>;
            case 'Zap': return <Zap size={size} className={className}/>;
            case 'FileText': return <FileText size={size} className={className}/>;
            case 'TrendingUp': return <TrendingUp size={size} className={className}/>;
            case 'Sparkles': return <Sparkles size={size} className={className}/>;
            default: return <Layers size={size} className={className}/>;
        }
    };
    // Setup unique styling accents based on the service category
    const themeAccents = useMemo(() => {
        switch (service.slug) {
            case 'websites-platforms':
                return {
                    glow: 'from-[#F24E1E]/10 via-[#F24E1E]/4 to-transparent',
                    badge: 'bg-[#F24E1E]/10 border-[#F24E1E]/20 text-[#FFD1C2]',
                    circleBg: 'bg-[#F24E1E]/5 border-[#F24E1E]/20',
                    accent: '#F24E1E',
                    cardBorder: 'hover:border-[#F24E1E]/30',
                    heroIcon: <Code className="text-[#F24E1E] animate-pulse" size={24}/>
                };
            case 'product-ux-design':
                return {
                    glow: 'from-blue-500/10 via-[#F24E1E]/5 to-transparent',
                    badge: 'bg-[#F24E1E]/10 border-[#F24E1E]/20 text-[#FFD1C2]',
                    circleBg: 'bg-[#F24E1E]/5 border-white/10',
                    accent: '#F24E1E',
                    cardBorder: 'hover:border-[#F24E1E]/30',
                    heroIcon: <Figma className="text-[#F24E1E] animate-pulse" size={24}/>
                };
            case 'brand-visual-identity':
                return {
                    glow: 'from-amber-500/10 via-zinc-500/5 to-transparent',
                    badge: 'bg-white/5 border-white/10 text-white',
                    circleBg: 'bg-zinc-900 border-[#F24E1E]/20',
                    accent: '#F24E1E',
                    cardBorder: 'hover:border-white/20',
                    heroIcon: <Paintbrush className="text-[#F24E1E]" size={24}/>
                };
            case 'ai-content-growth-systems':
                return {
                    glow: 'from-[#F24E1E]/10 via-purple-500/5 to-transparent',
                    badge: 'bg-[#F24E1E]/10 border-[#F24E1E]/20 text-[#FFD1C2]',
                    circleBg: 'bg-zinc-900 border-[#F24E1E]/20',
                    accent: '#F24E1E',
                    cardBorder: 'hover:border-[#F24E1E]/30',
                    heroIcon: <Sparkles className="text-[#F24E1E] animate-pulse" size={24}/>
                };
            default:
                return {
                    glow: 'from-[#F24E1E]/10 via-transparent to-transparent',
                    badge: 'bg-[#F24E1E]/10 border-[#F24E1E]/20 text-white',
                    circleBg: 'bg-zinc-900 border-white/5',
                    accent: '#F24E1E',
                    cardBorder: 'hover:border-white/15',
                    heroIcon: <Layers className="text-[#F24E1E]" size={24}/>
                };
        }
    }, [service.slug]);
    return (<>
      

      {/* Decorative ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-b ${themeAccents.glow} blur-[120px] opacity-70`}/>
        {service.slug === 'ai-content-growth-systems' && (<div className="absolute top-[30%] -left-40 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px] opacity-50"/>)}
      </div>

      <div className="relative pt-32 pb-48 md:pt-40 px-6 md:px-12 lg:px-16 min-h-screen z-10" id="services-main-container">
        <div className="max-w-7xl mx-auto">
          
          {/* Back Navigation Bar */}
          <div className="mb-12 flex items-center justify-between border-b border-white/5 pb-6" id="service-navbar-sub">
            <Link href="/services" className="group inline-flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-white uppercase tracking-wider transition-colors" id="back-to-services-link">
              <span>←</span>
              <span>All Services</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#F24E1E] animate-ping"/>
              <span className="text-xs font-mono text-gray-400 capitalize bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                {service.slug.replace(/-/g, ' ')}
              </span>
            </div>
          </div>

          {/* Hero Section */}
          <div className="mb-24 md:mb-32 relative" id="service-hero">
            <div className="max-w-4xl">
              <FadeIn delayMs={100} durationMs={800}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl ${themeAccents.circleBg} flex items-center justify-center border`} id="hero-badge-icon-box">
                    {themeAccents.heroIcon}
                  </div>
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-gray-400 font-bold block">
                    {details.subtitle}
                  </span>
                </div>
              </FadeIn>
              
              <FadeIn delayMs={200} durationMs={800}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading italic tracking-tight mb-8 leading-[1.05] text-white">
                  {service.title}
                </h1>
              </FadeIn>
              
              <FadeIn delayMs={300} durationMs={800}>
                <p className="text-lg md:text-xl font-light leading-relaxed text-gray-400 max-w-3xl">
                  {service.overview}
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Bento Specifications Grid */}
          <div className="mb-32" id="specifications-bento-section">
            <FadeIn delayMs={100} durationMs={800}>
              <div className="flex items-center gap-4 mb-12">
                <span className="text-xs uppercase tracking-widest text-[#FFD1C2]/60 font-semibold font-mono">
                  Engineered Advantages
                </span>
                <div className="h-px bg-white/10 flex-grow"/>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {details.bentoFeatures.map((feat, idx) => {
            const isPromo = idx === 1 || idx === 3;
            return (<motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: idx * 0.1, duration: 0.6 }} className={`p-8 rounded-3xl border transition-all duration-300 group flex flex-col justify-between ${isPromo
                    ? 'md:col-span-2 border-white/15 bg-white/[0.02] hover:bg-white/[0.04]'
                    : 'md:col-span-1 border-white/5 bg-zinc-900/30 hover:border-white/10'} ${themeAccents.cardBorder}`} id={`feature-bento-card-${idx}`}>
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/10 text-gray-400 group-hover:text-white group-hover:border-[#F24E1E]/30 transition-all">
                          {renderIcon(feat.icon, 20)}
                        </div>
                        {feat.value && (<span className="text-xs font-mono text-[#F24E1E]/90 bg-[#F24E1E]/5 px-3 py-1 rounded-full border border-[#F24E1E]/10">
                            {feat.value}
                          </span>)}
                      </div>
                      
                      <h4 className="text-xl font-heading text-white font-medium mb-2 group-hover:text-[#F24E1E] transition-colors">
                        {feat.title}
                      </h4>
                    </div>
                    <p className="text-gray-400 text-sm font-light leading-relaxed mt-4">
                      {feat.desc}
                    </p>
                  </motion.div>);
        })}
            </div>
          </div>

          {/* Process Timeline Pipeline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32" id="process-pipeline-section">
            <div className="lg:col-span-4">
              <FadeIn delayMs={100} durationMs={800}>
                <span className="text-xs uppercase font-mono tracking-widest text-[#F24E1E] block mb-4">PRODUCTION CODE</span>
                <h2 className="text-4xl font-heading italic tracking-tight text-white mb-6">
                  {details.processTitle}
                </h2>
                <p className="text-gray-400 font-light leading-relaxed text-base">
                  {details.processDescription}
                </p>
                <div className="mt-8 p-6 rounded-2xl bg-[#111] border border-white/5 text-xs text-gray-500 font-mono space-y-2">
                  <div className="flex justify-between">
                    <span>AGILE SPRINT PHASE:</span>
                    <span className="text-white">WEEKLY METRICS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>QUALITY AUDIT:</span>
                    <span className="text-[#F24E1E]">100% SUCCESS RATE</span>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-8">
              <div className="relative border-l border-white/10 ml-4 pl-8 md:pl-12 space-y-12">
                {details.processSteps.map((step, idx) => (<motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: idx * 0.1, duration: 0.6 }} className="relative group" id={`pipeline-step-${idx}`}>
                    {/* Number Node with dynamic glow */}
                    <div className="absolute -left-[45px] md:-left-[61px] top-1.5 w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center font-mono text-xs text-gray-400 group-hover:border-[#F24E1E] group-hover:text-white group-hover:bg-[#F24E1E]/5 transition-all">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    
                    {/* Step description detail */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                        <h3 className="text-xl font-heading text-white font-medium group-hover:text-[#F24E1E] transition-colors">
                          {step.title}
                        </h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-500 w-max">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-gray-400 font-light leading-relaxed max-w-2xl text-base">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>))}
              </div>
            </div>
          </div>

          {/* Visual Showcase Section */}
          {showcaseImages.length > 0 ? (<div className="mb-32 animate-fade-in" id="visual-showcase-section">
              <FadeIn delayMs={100} durationMs={800}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                  <div className="flex items-center gap-4 flex-grow">
                    <span className="text-xs uppercase tracking-widest text-[#FFD1C2]/60 font-semibold font-mono whitespace-nowrap">
                      Tactile Output Showcase
                    </span>
                  </div>
                  <span className="text-xs font-mono text-gray-500">
                    {showcaseImages.length} Portfolio Assets Visible
                  </span>
                </div>
              </FadeIn>

              {/* Showcase Grid Layout */}
              <FadeIn delayMs={200} durationMs={1000}>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                  {service.slug === 'ai-content-growth-systems' && (<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.8 }} className="break-inside-avoid mb-6 relative rounded-2xl overflow-hidden group border border-white/5 bg-zinc-900 cursor-pointer" onClick={() => setActiveLightboxVideo(true)} id="video-gallery-item-first">
                      <video src="https://assets.mixkit.co/videos/preview/mixkit-girl-holding-a-yellow-bag-of-chips-42289-large.mp4" autoPlay muted playsInline loop className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 block" id="showcase-video-player"/>
                    </motion.div>)}

                  {showcaseImages.map((img, i) => {
                if (i === 6 || i === 7 || i === 14 || i === 17 || i === 18) {
                    return null;
                }
                if (service.slug === 'ai-content-growth-systems' && i === 9) {
                    return null;
                }
                return (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: (i % 3) * 0.1, duration: 0.8 }} className="break-inside-avoid mb-6 relative rounded-2xl overflow-hidden group border border-white/5 bg-zinc-900 cursor-pointer" onClick={() => setActiveLightboxImg(img)} id={`gallery-item-${i}`}>
                        <img src={img?.src || img} referrerPolicy="no-referrer" alt={`${service.title} Portfolio Item ${i + 1}`} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" id={`gallery-image-${i}`}/>
                        
                        {/* Smooth luxury hovering frame overlay */}
                        {i !== 1 && (<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 border border-white/10 text-white backdrop-blur-md">
                              <Maximize2 size={14}/>
                            </div>
                            <div className="text-center p-4">
                              <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 block mb-1">Interactive Asset</span>
                              {i !== 14 && (<span className="text-sm font-sans text-white font-medium">Click to Inspect</span>)}
                            </div>
                          </div>)}
                      </motion.div>);
            })}
                </div>
              </FadeIn>
            </div>) : (
        /* Impeccable Conceptual Swiss Section for services with 0 showcase images (Brand & Identity) */
        <div className="mb-32" id="tactile-swiss-block">
              <FadeIn delayMs={100} durationMs={800}>
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold font-mono">
                    Systematic Design
                  </span>
                  <div className="h-px bg-white/10 flex-grow"/>
                </div>
              </FadeIn>

              <FadeIn delayMs={200} durationMs={800}>
                <div id="swiss-branding-block" className="relative p-8 md:p-12 border border-white/10 rounded-3xl bg-zinc-950 overflow-hidden group">
                  <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#F24E1E]/5 blur-[70px] pointer-events-none"/>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 inline-block mb-4">
                        SYSTEM ARCHITECTURE
                      </span>
                      <h3 className="text-3xl md:text-4xl font-heading text-white italic mb-4 leading-tight">
                        We Design Absolute Visual Consistency
                      </h3>
                      <p className="text-gray-400 font-light leading-relaxed max-w-lg mb-8 text-base">
                        A brand is not a logo. It is an intentional system of proportional spacing, typographic scales, color frequencies, and grids that make your interface immediately recognizable across substrates, devices, and physical mockups.
                      </p>
                      
                      <div className="grid grid-cols-3 gap-6 text-left border-t border-white/10 pt-6">
                        <div>
                          <span className="text-[10px] font-mono text-[#F24E1E] block mb-1">01 / TYPO</span>
                          <span className="text-sm font-sans font-medium text-white">Classic Grids</span>
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-[#F24E1E] block mb-1">02 / COLOR</span>
                          <span className="text-sm font-sans font-medium text-white">Bespoke Palettes</span>
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-[#F24E1E] block mb-1">03 / VOX</span>
                          <span className="text-sm font-sans font-medium text-white">Consistent Voice</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                      {/* Geometric grid design widget */}
                      <div className="w-72 h-72 border border-white/10 rounded-2xl relative bg-zinc-900/40 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px]"/>
                        <div className="absolute w-48 h-48 border border-white/5 rounded-full pointer-events-none"/>
                        <div className="absolute w-32 h-32 border border-[#F24E1E]/20 rounded-full"/>
                        <div className="absolute w-16 h-16 bg-white/[0.02] border border-white/10 transform rotate-45"/>
                        <span className="text-[9px] font-mono text-gray-500 tracking-[0.3em] uppercase z-10 bg-black/80 px-3 py-1.5 border border-white/5 rounded-md">
                          INTENT GRID SPRINT
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>)}

          {/* Pricing Engagement Models Layout */}
          <div className="mb-32" id="engagement-models-section">
            <FadeIn delayMs={100} durationMs={800}>
              <div className="flex items-center gap-4 mb-12">
                <span className="text-xs uppercase tracking-widest text-[#FFD1C2]/60 font-semibold font-mono">
                  Collaboration Models
                </span>
                <div className="h-px bg-white/10 flex-grow"/>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {details.models.map((model, idx) => (<div key={idx} className="p-8 md:p-10 rounded-3xl border border-white/5 bg-[#111]/40 flex flex-col justify-between group hover:border-[#F24E1E]/20 transition-all duration-300" id={`model-card-${idx}`}>
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-[#F24E1E]/5 border border-[#F24E1E]/10 rounded-xl text-[#F24E1E]">
                        {renderIcon(model.icon, 20)}
                      </div>
                      <span className="text-xs font-mono text-gray-500 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                        {model.speed}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-heading text-white font-medium mb-3 group-hover:text-[#F24E1E] transition-colors">
                      {model.name}
                    </h3>
                    
                    <p className="text-gray-400 font-light text-base leading-relaxed mb-8">
                      {model.desc}
                    </p>
                  </div>
                  
                  <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="text-xs font-mono">
                      <span className="text-gray-500">TARGET FIT: </span>
                      <span className="text-white uppercase">{model.target}</span>
                    </div>
                    <Link href="/contact" className="text-xs font-mono text-[#F24E1E] uppercase tracking-wider font-semibold hover:text-[#FF6A4D] transition-colors flex items-center gap-1">
                      <span>Inquire Now</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>))}
            </div>
          </div>

          {/* Related Case Studies Section */}
          {serviceProjects.length > 0 && (<div className="mb-32" id="case-studies-section">
              <FadeIn delayMs={100} durationMs={800}>
                <div className="flex items-center gap-4 mb-16">
                  <span className="text-xs uppercase tracking-widest text-[#FFD1C2]/60 font-semibold font-mono text-gray-400">
                    Selected Case Studies
                  </span>
                  <div className="h-px bg-white/10 flex-grow"/>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {serviceProjects.map((project, i) => (<motion.div key={project.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: i * 0.1, duration: 0.8 }} className="group flex flex-col items-start bg-zinc-950/30 border border-white/5 rounded-3xl overflow-hidden shadow-2xl hover:border-white/10 transition-colors" id={`project-card-${project.slug}`}>
                    <div className="w-full aspect-[4/3] bg-zinc-900 overflow-hidden relative border-b border-white/5">
                      {(typeof project.coverImage === 'string' ? project.coverImage : project.coverImage?.src || '').startsWith("data:image/") ? (<div className="w-full h-full flex flex-col justify-between p-6 text-white relative overflow-hidden" style={{ background: `radial-gradient(circle at center, #111 0%, #050505 100%)` }}>
                          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(#F24E1E 1px, transparent 1px)`, backgroundSize: '16px 16px' }}/>
                          <div className="relative z-10 flex justify-between items-start w-full">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">Project Showcase</span>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#F24E1E]">[ Draft ]</span>
                          </div>
                          <div className="relative z-10 text-center my-auto flex flex-col items-center">
                            <h4 className="text-2xl font-heading italic tracking-tight text-white mb-1 leading-tight">{project.title}</h4>
                          </div>
                          <div className="relative z-10 text-center text-[10px] font-mono text-gray-400">
                            [ Visual Vector Model ]
                          </div>
                        </div>) : (<img src={project.coverImage?.src || project.coverImage} referrerPolicy="no-referrer" alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" id={`project-cover-${project.slug}`}/>)}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                    </div>
                    
                    <div className="p-8 md:p-10 flex flex-col flex-grow w-full">
                      <div className="flex flex-wrap gap-2 mb-6 text-[10px] font-mono font-semibold tracking-wide text-[#FFD1C2]/90">
                        {project.tags.slice(0, 3).map(t => (<span key={t} className="px-2.5 py-1 rounded-md bg-[#F24E1E]/5 border border-[#F24E1E]/10">
                            {t}
                          </span>))}
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-heading tracking-tight mb-3 text-white">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light flex-grow">
                        {project.overviewDescription.slice(0, 140)}...
                      </p>
                      
                      <Link href={`/work/${project.slug}`} className="inline-flex items-center justify-center w-full px-8 py-3.5 bg-white text-black hover:bg-gray-200 transition-colors rounded-lg font-medium text-xs font-mono uppercase tracking-wider" id={`project-btn-${project.slug}`}>
                        Inspect Case Study
                      </Link>
                    </div>
                  </motion.div>))}
              </div>
            </div>)}

          {/* Dynamic Accordion FAQ Section */}
          <div className="mb-32" id="faq-accordion-section">
            <FadeIn delayMs={100} durationMs={800}>
              <div className="flex items-center gap-4 mb-12">
                <span className="text-xs uppercase tracking-widest text-[#FFD1C2]/60 font-semibold font-mono">
                  Service Intelligence — FAQs
                </span>
                <div className="h-px bg-white/10 flex-grow"/>
              </div>
            </FadeIn>

            <div className="max-w-3xl mx-auto space-y-4">
              {details.faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (<div key={idx} className="border border-white/5 rounded-2xl bg-[#111]/20 overflow-hidden transition-all duration-300" id={`faq-item-container-${idx}`}>
                    <button onClick={() => setOpenFaqIdx(isOpen ? null : idx)} className="w-full text-left p-6 flex justify-between items-center text-white focus:outline-none focus:text-[#F24E1E]" id={`faq-toggle-btn-${idx}`}>
                      <span className="text-lg font-heading font-medium tracking-tight pr-4">
                        {faq.q}
                      </span>
                      <div className="text-gray-500 group-hover:text-white transition-colors" id={`faq-icon-holder-${idx}`}>
                        {isOpen ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="overflow-hidden" id={`faq-answer-content-${idx}`}>
                          <div className="px-6 pb-6 pt-1 border-t border-white/5 text-gray-400 font-light text-base leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>)}
                    </AnimatePresence>
                  </div>);
        })}
            </div>
          </div>

          {/* Bespoke Landing Page Footer CTA */}
          <FadeIn delayMs={200} durationMs={800}>
            <div className="w-full bg-[#111111] border border-white/5 p-12 lg:p-20 rounded-[2.5rem] text-center flex flex-col items-center shadow-2xl relative overflow-hidden group" id="service-cta-footer">
              <div className="absolute inset-0 bg-radial-gradient from-[#F24E1E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 md:-right-[300px] pointer-events-none"/>
              
              <div className="relative z-10 max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F24E1E] block mb-4">PARTNERSHIP INITIATOR</span>
                <h2 className="text-4xl md:text-5xl font-heading italic tracking-tight text-white mb-6">
                  Ready to evolve your {service.title.toLowerCase()}?
                </h2>
                <p className="text-lg text-gray-400 mb-10 font-light leading-relaxed">
                  Let's collaborate to construct an elite digital outline that positions your brand at the absolute forefront of your sector.
                </p>
                <Link href="/contact" className="bg-white text-black px-6 py-3 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors inline-flex items-center shadow-lg" id="final-cta-inquire-btn">
                  <span>{service.ctaText}</span>
                </Link>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* Luxury Lightbox Overlay Modal */}
      <AnimatePresence>
        {(activeLightboxImg || activeLightboxVideo) && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="lightbox-wrapper">
            {/* Backdrop layer */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => {
                setActiveLightboxImg(null);
                setActiveLightboxVideo(false);
            }} className="fixed inset-0 bg-black/95 backdrop-blur-sm cursor-zoom-out" id="lightbox-backdrop"/>
            
            {/* Display container */}
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ duration: 0.35, ease: "easeOut" }} className="relative max-w-5xl max-h-[85vh] z-10 overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)]" id="lightbox-body">
              {/* Close marker */}
              <button onClick={() => {
                setActiveLightboxImg(null);
                setActiveLightboxVideo(false);
            }} className="absolute top-4 right-4 p-2 bg-black/60 border border-white/15 text-white hover:bg-[#F24E1E] hover:border-[#F24E1E] transition-all rounded-full z-20" aria-label="Close Lightbox" id="lightbox-close-btn">
                <X size={18}/>
              </button>

              {activeLightboxVideo ? (<video src="https://assets.mixkit.co/videos/preview/mixkit-girl-holding-a-yellow-bag-of-chips-42289-large.mp4" autoPlay controls playsInline className="w-full h-auto max-h-[85vh] object-contain block bg-black" id="lightbox-expanded-video"/>) : (<img src={activeLightboxImg?.src || activeLightboxImg} referrerPolicy="no-referrer" alt="Enlarged Portfolio Detail" className="w-full h-auto max-h-[85vh] object-contain block" id="lightbox-expanded-img"/>)}
            </motion.div>
          </div>)}
      </AnimatePresence>
    </>);
}
