const petaraLogoReal = '/assets/images/logoPetara_real.png';
const ezinoreLogoReal = '/assets/images/logoEzinore_real.png';
const metlineLogoReal = '/assets/images/logoMetline_real.png';
const eqLLogoReal = '/assets/images/logoEqL_real.png';
const forwardOrgLogoReal = '/assets/images/logoForwardOrg_real.png';

export function LogosSection() {
    const logos = [
        { name: 'Ezinore', src: ezinoreLogoReal },
        { name: 'EqL', src: eqLLogoReal },
        { name: 'The Forward Org', src: forwardOrgLogoReal },
        { name: 'Metline', src: metlineLogoReal },
        { name: 'Petara', src: petaraLogoReal },
    ];
    return (<section className="py-24 border-y border-white/10 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight mb-16 text-white">
          Trusted by Ambitious Teams
        </h2>
        
        {/* Infinite scrolling logos */}
        <div className="relative flex overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {/* Create 4 sets of the logos so they span ultra wide monitors before looping resets */}
          {[1, 2, 3, 4].map((set) => (<div key={set} className="flex shrink-0 animate-marquee items-center" aria-hidden={set > 1 ? "true" : undefined}>
              {logos.map((logo, idx) => (<div key={`${set}-${logo.name}-${idx}`} className="flex justify-center items-center w-40 sm:w-48 md:w-56 shrink-0">
                  <img src={logo.src?.src || logo.src} referrerPolicy="no-referrer" alt={logo.name} className="h-12 sm:h-14 md:h-16 w-auto max-w-[140px] md:max-w-[180px] object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 pointer-events-auto"/>
                </div>))}
            </div>))}
        </div>
      </div>
    </section>);
}
