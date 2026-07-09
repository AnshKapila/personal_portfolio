"use client";
import { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../lib/utils';
export function FaqSection() {
    const faqs = [
        {
            question: "How much does a project typically cost?",
            answer: "Every project is custom-scoped based on your specific requirements. We focus on value-driven delivery rather than hourly billing, ensuring our incentives align with your outcomes."
        },
        {
            question: "What is the typical timeline?",
            answer: "Standard website projects typically take 2-4 weeks. Comprehensive SaaS product design engagements can range from 4-8 weeks depending on complexity."
        },
        {
            question: "What does the process look like?",
            answer: "We follow a strict Discovery > Strategy > Design > Execution > Launch protocol. You are involved at key milestones to ensure alignment, but we handle the heavy lifting."
        },
        {
            question: "How do we get started?",
            answer: "Book a discovery call using the link below. We'll discuss your current bottlenecks and explore if Intent Studios is the right partner to solve them."
        }
    ];
    const [openIndex, setOpenIndex] = useState(0);
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
    return (<section id="faq" className="py-24 px-6 md:px-12 lg:px-16 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        <div className="lg:w-1/3">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight sticky top-32 text-white">
            Common<br /><span className="text-[#F24E1E] not-italic font-sans font-medium">Questions</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4 lg:w-2/3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (<div key={i} className={cn("border border-white/10 rounded-xl overflow-hidden transition-colors duration-300 cursor-pointer select-none", isOpen ? "bg-white/[0.04]" : "bg-transparent hover:bg-white/[0.02]")} onMouseEnter={() => {
                    if (!isMobile) {
                        setOpenIndex(i);
                    }
                }} onMouseLeave={() => {
                    if (!isMobile) {
                        setOpenIndex(null);
                    }
                }} onClick={() => {
                    setOpenIndex(isOpen ? null : i);
                }}>
                <div className="w-full flex items-center justify-between p-6 text-left">
                  <span className="text-lg font-medium text-white pr-8">
                    {faq.question}
                  </span>
                  <div className="text-gray-400 flex-shrink-0">
                    {isOpen ? <Minus className="w-5 h-5"/> : <Plus className="w-5 h-5"/>}
                  </div>
                </div>
                
                <div className={cn("overflow-hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
                  <div className="p-6 pt-0 text-gray-400 font-light leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>);
        })}
        </div>

      </div>
    </section>);
}
