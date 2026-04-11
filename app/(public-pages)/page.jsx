import CallToActionSection from '@/sections/call-to-action-section';
import TrustedSection from '@/sections/certifications-section';
import FaqSection from '@/sections/faq-section';
import TechStackSection from '@/sections/helping-clients';
import HeroSection from '@/sections/hero-section';
import HowItWorksSection from '@/sections/how-it-works-section';
import HowWeWorkSection from '@/sections/how-we-work';
import IndustriesSection from '@/sections/industries-we-work-for';
import MeetOurTeamSection from '@/sections/meet-our-team-section';
import OurPricingSection from '@/sections/our-pricing-section';
import OurTestimonialsSection from '@/sections/our-testimonials-section';
import TestimonialsSection from '@/sections/tetimonials';

export default function Page() {
    return (
        <main className='no-scrollbar'>

            <HeroSection />
            <HowItWorksSection />
            <HowWeWorkSection />
            <TrustedSection />
            <TechStackSection />
            <IndustriesSection />
            <MeetOurTeamSection />
            <TestimonialsSection />
            <OurTestimonialsSection />
            {/* <OurPricingSection /> */}
            <FaqSection />
            <CallToActionSection />
        </main>
    );
}
