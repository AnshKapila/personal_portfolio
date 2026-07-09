import { Hero } from '../components/Hero';
import { WorkSection } from '../components/WorkSection';
import { WhoWeHelpSection } from '../components/WhoWeHelpSection';
import { LogosSection } from '../components/LogosSection';
import { ServicesSection } from '../components/ServicesSection';
import { DreamShipSection } from '../components/DreamShipSection';
import { FaqSection } from '../components/FaqSection';
import { FounderSection } from '../components/FounderSection';
import { WebsiteAuditTeaser } from '../components/WebsiteAuditTeaser';
export function HomePage({ setIsHeroBright }) {
    return (<>
      
      <Hero onBrightnessChange={setIsHeroBright}/>
      <WorkSection />
      <WhoWeHelpSection />
      <LogosSection />
      <ServicesSection />
      <WebsiteAuditTeaser />
      <FounderSection />
      {/* <SocialPresenceSection /> */}
      {/* <TestimonialsSection /> */}
      <DreamShipSection />
      <FaqSection />
    </>);
}
