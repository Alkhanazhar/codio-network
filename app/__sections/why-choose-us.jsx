"use client";

import SectionTitle from "@/app/_components/section-title";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "5+ Years Experience",
    desc: "Proven expertise in scalable web & mobile apps.",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "International Clients",
    desc: "Worked with global clients across US, UK & UAE.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Web Development",
    desc: "Modern apps using React, Next.js & MERN stack.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Mobile Apps",
    desc: "High performance Android & iOS apps.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Dedicated Support",
    desc: "Ongoing maintenance & support.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center w-[92%] sm:w-[90%] mx-auto py-16 sm:py-20 xl:-mt-40 -mt-16">

      {/* Header */}


      <SectionTitle
        title={
          <>
            Why Choose <span className="text-[#D85A30]">Us?</span>
          </>
        }
        description="We bring 5+ years of experience delivering high-quality web & mobile solutions for international clients."
      />

      {/* Cards Track */}
      <div className="w-[90%] flex gap-4 sm:gap-5 overflow-x-auto pb-5 snap-x snap-mandatory mx-auto  scrollbar-hide mt-16">
        {features.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04, y: -4 }}
            className="
              relative
              min-w-[240px]
              sm:min-w-[270px]
              lg:min-w-[290px]
              h-[300px]
              sm:h-[320px]
              rounded-[18px]
              overflow-hidden
              snap-start
              flex-shrink-0
              cursor-pointer
              group
            "
          >
            {/* Number Badge */}
            <div className="
              absolute top-3.5 left-3.5 z-10
              bg-black/45 backdrop-blur-md
              border border-white/20
              rounded-full
              px-2.5 py-0.5
              text-[10px] tracking-wider
              text-white/85 font-medium
            ">
              {String(item.id).padStart(2, "0")}
            </div>

            {/* Image */}
            <Image
              src={`${item.img}?auto=format&fit=crop&w=800&q=80`}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 240px, (max-width: 1024px) 270px, 290px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

            {/* Glass Bottom Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-3.5">
              <div className="
                bg-white/10 backdrop-blur-xl
                border border-white/20
                rounded-[14px]
                p-3 sm:p-3.5
                flex items-center justify-between gap-2.5
              ">
                {/* Text */}
                <div>
                  <h3 className="text-white text-sm sm:text-base font-bold leading-tight font-syne">
                    {item.title}
                  </h3>
                  <p className="text-white/65 text-xs mt-1 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Icon Circle */}
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#D85A30] shrink-0">
                  {item.icon}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};