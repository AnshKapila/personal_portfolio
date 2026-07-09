import Link from 'next/link';
import { Linkedin, Instagram, Palette, Briefcase } from 'lucide-react';
export function Footer() {
    return (<footer className="bg-black pt-32 pb-12 px-6 md:px-12 lg:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-32 max-w-2xl flex flex-col justify-center items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight mb-6">
            Ready to execute?
          </h2>
          <p className="text-lg font-light leading-relaxed text-gray-400 mb-10">
            Stop waiting for perfect design. Start building systems that scale and convert.
          </p>
          <a href="https://wa.me/919821687437" target="_blank" rel="noopener noreferrer" className="bg-white text-black w-full sm:w-[240px] px-8 py-4 rounded-lg font-medium text-base hover:bg-gray-200 transition-colors flex items-center justify-center">
            Book a Call
          </a>
        </div>

        {/* Footer Bottom Strip */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/10 text-gray-500 text-sm">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-center md:text-left">
            <span>&copy; {new Date().getFullYear()} Intent Studios. All rights reserved.</span>
            <span className="text-white/10 hidden sm:inline">|</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
          <div className="flex items-center gap-6 justify-center">
            <a href="https://www.linkedin.com/in/anshkapila/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 bg-zinc-950 border border-white/5 rounded-lg hover:border-white/20" title="LinkedIn" aria-label="LinkedIn Profile">
              <Linkedin className="w-4 h-4"/>
            </a>
            <a href="https://www.behance.net/anshkapila" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 bg-zinc-950 border border-white/5 rounded-lg hover:border-white/20" title="Behance" aria-label="Behance Portfolio">
              <Palette className="w-4 h-4"/>
            </a>
            <a href="https://www.instagram.com/anshkapila.ux/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 bg-zinc-950 border border-white/5 rounded-lg hover:border-white/20" title="Instagram" aria-label="Instagram Profile">
              <Instagram className="w-4 h-4"/>
            </a>
            <a href="https://contra.com/anshkapila/work" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 bg-zinc-950 border border-white/5 rounded-lg hover:border-white/20" title="Contra" aria-label="Contra Portfolio">
              <Briefcase className="w-4 h-4"/>
            </a>
          </div>
        </div>
      </div>
    </footer>);
}
