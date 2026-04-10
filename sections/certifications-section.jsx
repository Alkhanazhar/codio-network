'use client';

import SectionTitle from '@/components/section-title';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const logos = [
    'https://coding-blocks.github.io/assets/images/cb/cblogo.png',
    'https://cdn.nareshit.com/images/naresh-it-logo2.png',
    'https://cdn.prod.website-files.com/657ba316d2b6a27c7d778152/65b40ed28ddd14838e585c0d_Vectors-Wrapper.svg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png',
    // 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png',
];

export default function TrustedSection() {
    return (
        <section className="flex flex-col -mt-24 pb-48 xl:pb-56 items-center relative  w-[90%] overflow-hidden max-w-7xl mx-auto">

            <SectionTitle
                title="Trusted & Certified"
                description="We collaborate with leading platforms and organizations to deliver reliable and scalable solutions."
            />

           
            <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />

            {/* Gradient Fade Right */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" /> 

            {/* Marquee */}
            <div className="mt-16 overflow-hidden ">
              
                    <Marquee autoFill>

                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center  mx-4 "
                            >
                                <Image
                                    src={logo}
                                    alt="logo"
                                    className="h-12 object-contain transition duration-300"
                                    width={200} height={40}
                                />
                            </div>
                        ))}
                    </Marquee>
            </div>
        </section>
    );
}