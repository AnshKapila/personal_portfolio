"use client";
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
export function TestimonialsSection() {
    const smallTestimonials = [
        {
            quote: "Great communication, excellent quality — our product redesign feels flawless and well-crafted.",
            name: "Jason P.",
            role: "Los Angeles",
            avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&h=150&auto=format&fit=crop"
        },
        {
            quote: "Intent was professional, fast, and the final web platform truly blew us away. Fully Satisfied!",
            name: "Priya R.",
            role: "Sacramento",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
        },
        {
            quote: "They handled everything from complex UX architecture to final build. We just sat back and watched.",
            name: "Greg T.",
            role: "Pasadena",
            avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=150&h=150&auto=format&fit=crop"
        },
        {
            quote: "It's rare to find a team this reliable and skilled — highly recommended to all founders!",
            name: "Melissa K.",
            role: "San Diego",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop"
        }
    ];
    return (<section id="testimonials" className="py-24 px-6 md:px-12 lg:px-16 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* Left Column: Heading & Grid */}
        <div className="w-full lg:w-1/2 flex flex-col">
          
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#F24E1E]/30 bg-[#F24E1E]/10 mb-6">
              <Quote className="w-3.5 h-3.5 text-[#F24E1E]"/>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#F24E1E]">Testimonials</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight mb-6">
              What Our <span className="text-[#F24E1E] font-sans not-italic font-medium">Clients</span> Are Saying
            </h2>
            <p className="text-lg font-light leading-relaxed text-gray-400">
              Real stories from founders who trusted Intent Studios for their products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            {smallTestimonials.map((t, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-colors">
                <p className="text-gray-300 text-sm leading-relaxed mb-8">
                  "{t.quote}"
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <img src={t.avatar?.src || t.avatar} referrerPolicy="no-referrer" alt={t.name} className="w-10 h-10 rounded-full object-cover border border-white/10"/>
                    <div>
                      <p className="text-white text-sm font-medium">{t.name}</p>
                      <p className="text-gray-500 text-xs">{t.role}</p>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-[#F24E1E] opacity-50 rotate-180"/>
                </div>
              </motion.div>))}
          </div>
        </div>

        {/* Right Column: Featured Image Testimonial */}
        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden min-h-[500px] lg:min-h-full border border-white/10 flex flex-col justify-end group shadow-[0_0_40px_rgba(242,78,30,0.05)]">
          {/* Mockup Project Background Image */}
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&h=1600&auto=format&fit=crop" referrerPolicy="no-referrer" alt="Featured Project Website Mockup" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"/>
          
          {/* Deep Gradient for text legibility */}
          <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black via-black/80 to-transparent"/>
          
          {/* Featured Content Area */}
          <div className="relative z-10 p-8 md:p-10 border-t border-white/10 bg-black/40 backdrop-blur-sm">
             <p className="text-white md:text-lg lg:text-xl font-medium leading-relaxed tracking-wide mb-6">
               "From the very first consultation, Intent Studios felt like the right choice. The team was organized, transparent, and truly cared about the details. Our platform feels brand new."
             </p>
             <p className="text-[#F24E1E] font-bold text-sm tracking-wide">
               - Tanya L., <span className="font-normal text-gray-400">VP Product, ShiftTech</span>
             </p>
          </div>
        </motion.div>

      </div>
    </section>);
}
