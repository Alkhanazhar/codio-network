import Banner from "../_components/banner";
import Footer from "../_components/footer";
import Navbar from "../_components/navbar";

export const metadata = {
    title: 'Codio Network | Web & Mobile App Development Company',
    description:
        'Codio Network is a leading IT company providing web development, mobile app development, UI/UX design, and scalable digital solutions to grow your business.',

    keywords: [
        'Codio Network',
        'web development company',
        'mobile app development',
        'MERN stack',
        'React development',
        'Next.js agency',
        'IT services',
        'software development company',
    ],

    authors: [{ name: 'Codio Network' }],
    creator: 'Codio Network',
    applicationName: 'Codio Network',

    openGraph: {
        title: 'Codio Network | Build. Scale. Grow.',
        description:
            'We build modern, scalable web and mobile applications using cutting-edge technologies.',
        url: 'https://yourdomain.com',
        siteName: 'Codio Network',
        images: [
            {
                url: '/og-image.png', // add your OG image in public folder
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Codio Network',
        description:
            'Modern web and mobile development solutions for startups and businesses.',
        images: ['/og-image.png'],
    },

    appleWebApp: {
        title: 'Codio Network',
    },
};
export default function Layout({ children }) {
    return (
        <main className='no-scrollbar'>
            <Banner />
            <Navbar />
            {children}
            <Footer />
        </main>
    );
}
