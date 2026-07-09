import { Hero } from '../components/Hero';
import { WorkSection } from '../components/WorkSection';
import { WhoWeHelpSection } from '../components/WhoWeHelpSection';
import { LogosSection } from '../components/LogosSection';
import { DreamShipSection } from '../components/DreamShipSection';
import { FaqSection } from '../components/FaqSection';
import { FounderSection } from '../components/FounderSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { SkillsSection } from '../components/SkillsSection';
export function HomePage({ setIsHeroBright }) {
    return (<>
      
      <Hero onBrightnessChange={setIsHeroBright}/>
      <WorkSection />
      <WhoWeHelpSection />
      <LogosSection />
      <SkillsSection />
      <ExperienceSection />
      <FounderSection />
      {/* <SocialPresenceSection /> */}
      {/* <TestimonialsSection /> */}
      <DreamShipSection />
      <FaqSection />
    </>);
}
