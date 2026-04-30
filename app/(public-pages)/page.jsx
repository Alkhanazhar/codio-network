import CallToActionSection from "../__sections/call-to-action-section";
import TrustedSection from "../__sections/certifications-section";
import FaqSection from "../__sections/faq-section";
import TechStackSection from "../__sections/helping-clients";
import HeroSection from "../__sections/hero-section";
import HowItWorksSection from "../__sections/how-it-works-section";
import HowWeWorkSection from "../__sections/how-we-work";
import IndustriesSection from "../__sections/industries-we-work-for";
import MeetOurTeamSection from "../__sections/meet-our-team-section";
import { WhyChooseUsSection } from "../__sections/why-choose-us";


export default function Page() {
    
    return (
        <main className='no-scrollbar'>

            <HeroSection />
            <HowItWorksSection />
            <HowWeWorkSection />
            <WhyChooseUsSection />
            <TrustedSection />
            <TechStackSection />
            <IndustriesSection />
            <MeetOurTeamSection />
            {/* <TestimonialsSection /> */}
            {/* <OurTestimonialsSection /> */}
            {/* <OurPricingSection /> */}
            <FaqSection />
            <CallToActionSection />
        </main>
    );
}
