"use client";

import Image from "next/image";
import {
  FaHospital,
  FaUniversity,
  FaGraduationCap,
  FaShieldAlt,
  FaGlobe,
  FaMobileAlt,
  FaRobot,
  FaShoppingCart,
  FaRocket,
  FaFilm,
} from "react-icons/fa";
import Marquee from "react-fast-marquee";
import SectionTitle from "@/components/section-title";

const industries = [
  {
    title: "Pharma, Healthcare & Life Sciences",
    icon: FaHospital,
    image:
      "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200&auto=format&fit=crop",
    description:
      "We build secure, scalable healthcare platforms ensuring compliance and innovation.",
  },
  {
    title: "Fintech, Banking, Financial Services",
    icon: FaUniversity,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    description:
      "Robust fintech solutions with high security, performance, and seamless UX.",
  },
  {
    title: "Education & eLearning",
    icon: FaGraduationCap,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    description:
      "Modern eLearning platforms with interactive and scalable architecture.",
  },
  {
    title: "Insurance",
    icon: FaShieldAlt,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
    description:
      "Digital insurance systems optimized for automation and customer experience.",
  },
  {
    title: "Web Development",
    icon: FaGlobe,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    description:
      "High-performance websites and platforms built with modern scalable technologies.",
  },
  {
    title: "Mobile App Development",
    icon: FaMobileAlt,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    description:
      "Cross-platform and native mobile apps designed for performance and user engagement.",
  },
  {
    title: "AI Agent Development",
    icon: FaRobot,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    description:
      "Custom AI agents and automation workflows to enhance business productivity.",
  },
  {
    title: "E-commerce & Retail",
    icon: FaShoppingCart,
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200&auto=format&fit=crop",
    description:
      "End-to-end eCommerce solutions with seamless shopping experiences.",
  },
  {
    title: "SaaS & Startups",
    icon: FaRocket,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    description:
      "Scalable SaaS platforms with robust architecture for fast-growing startups.",
  },
  {
    title: "Media & Entertainment",
    icon: FaFilm,
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
    description:
      "Content-driven platforms with high performance streaming and engagement features.",
  },
];
export default function IndustriesSection() {
  return (
    <section className=" pb-40">
      <SectionTitle
        title="Industries We Serve"
        description="We deliver specialized technology solutions for various industry needs."
      />

      <div className=" ">
        <Marquee autoFill speed={50} gradient={false} pauseOnHover={true}>
        {industries.map((item, i) => {
          const Icon = item.icon;

          return (
       <div
  key={i}
  className="group relative h-[380px]   aspect-square overflow-hidden rounded-2xl mx-4 border mt-12 border-white/10"
>
  {/* 🔥 Background Image */}
  <Image
    src={item.image}
    width={400}
    height={400}
    alt={item.title}
    className="absolute inset-0 h-full w-full object-cover  transition duration-700 group-hover:scale-110"
  />

  {/* 🔥 Dark Overlay */}
  <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition duration-500" />

  {/* 🔥 Glass Content Card */}
  <div className="absolute inset-4 rounded-xl border border-white/20 h-fit bg-white/5 backdrop-blur-xl p-6 flex flex-col justify-between">

    {/* TOP CONTENT */}
    <div className="flex items-center gap-4 flex-col">
      <div className="text-purple-400 text-4xl drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
        <Icon />
      </div>

      <h4 className="text-white font-semibold text-lg  text-center leading-snug">
        {item.title}
      </h4>
    </div>

    {/* HOVER DESCRIPTION */}
  
  </div>
  <p className="absolute  bottom-6 flex items-center py-3  justify-center text-center text-sm text-gray-100 md:text-xl opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
      {item.description}
    </p>
  {/* 🔥 Border Glow */}
  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 shadow-[0_0_40px_rgba(168,85,247,0.25)]" />
</div>
          );
        })}
        </Marquee>
      </div>
    </section>
  );
}