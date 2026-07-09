import Link from 'next/link';
import { HlsVideo } from './HlsVideo';
export function CtaFooter() {
    return (<section className="relative w-full overflow-hidden bg-black flex flex-col items-center justify-center min-h-[600px] pt-32 pb-8">
      {/* Video Background */}
      <HlsVideo src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"/>

      {/* Gradient Fades */}
      <div className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent pointer-events-none z-10"/>
      <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent pointer-events-none z-10"/>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-3xl mx-auto w-full flex-grow pt-12">
        
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic tracking-tight mb-6 text-white leading-[1.05]">
          Your next website starts here.
        </h2>
        
        <p className="text-lg font-light leading-relaxed text-gray-400 mb-12 max-w-lg">
          Let us chat about your digital goals. See how tailored design and structured execution can elevate your brand. No commitment, just possibilities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mt-4 px-4 sm:px-0">
          <a href="https://wa.me/919821687437" target="_blank" rel="noopener noreferrer" className="bg-white text-black rounded-lg w-full sm:w-[240px] px-6 py-3.5 font-medium text-sm hover:bg-white/90 transition-colors flex items-center justify-center">
            Book a Call
          </a>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mt-32 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-white/40 text-xs font-body">
          &copy; 2026 Ansh Kapila. All rights reserved.
        </span>
        
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="text-white/40 text-xs font-body hover:text-white transition-colors">Privacy</Link>
          <Link href="/contact" className="text-white/40 text-xs font-body hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </section>);
}
