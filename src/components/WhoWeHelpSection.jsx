import foundersImg from '../assets/images/regenerated_image_1780410884007.webp';
import growingBusinessesImg from '../assets/images/regenerated_image_1780410885816.webp';
import teamsLackingDirectionImg from '../assets/images/regenerated_image_1780410886810.webp';
export function WhoWeHelpSection() {
    const pillars = [
        {
            title: "Founders",
            content: "You have the vision, but need a partner to translate it into a digital product that actually converts.",
            image: foundersImg
        },
        {
            title: "Growing Businesses",
            content: "Your existing platform is holding you back. You need a scalable system to handle your next phase of growth.",
            image: growingBusinessesImg
        },
        {
            title: "Teams lacking direction",
            content: "You have internal resources but lack a cohesive strategy. We provide the blueprint and lead the execution.",
            image: teamsLackingDirectionImg
        }
    ];
    return (<section className="py-24 px-6 md:px-12 lg:px-16 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        <div className="lg:w-1/3">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight mb-6 text-white">
            Who we help
          </h2>
          <p className="text-lg font-light leading-relaxed text-gray-400">
            We partner with ambitious teams ready to move beyond generic templates and focus on measurable outcomes.
          </p>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (<div key={i} className="group relative flex flex-col p-6 md:p-8 overflow-hidden rounded-none cursor-default transition-all duration-500">
              {/* Idle state border */}
              <div className="absolute top-0 left-0 right-0 h-px bg-white/20 z-20 transition-opacity duration-300 group-hover:opacity-0"/>
              
              {/* Slide background from bottom to top */}
              <div className="absolute inset-0 w-full h-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0">
                <img src={pillar.image?.src || pillar.image} referrerPolicy="no-referrer" alt={pillar.title} className="absolute inset-0 w-full h-full object-cover object-center"/>
                {/* Darker black fill separating background and foreground */}
                <div className="absolute inset-0 bg-black/75"/>
              </div>

              {/* Content above background */}
              <div className="relative z-10 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                <h3 className="text-xl font-medium mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-white transition-colors duration-500 leading-relaxed font-light drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                  {pillar.content}
                </p>
              </div>
            </div>))}
        </div>

      </div>
    </section>);
}
