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
import SectionTitle from "@/app/_components/section-title";

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
    title: "Insurance and Financial Services",
    icon: FaShieldAlt,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
    description:
      "Digital insurance systems optimized for automation and customer experience.",
  },
  {
    title: "Web Development and Services",
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
    title: "E-commerce & Retail services",
    icon: FaShoppingCart,
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200&auto=format&fit=crop",
    description:
      "End-to-end eCommerce solutions with seamless shopping experiences.",
  },
  {
    title: "SaaS products & Startups ",
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
    <section className="  relative py-12">
      <div className="absolute inset-0 -z-10 p-8  rounded-3xl w-[90%] mx-auto overflow-hidden shadow-2xl shadow-amber-900/10 ">
        <div className="bg-white/10  absolute inset-0 z-1"></div>
        <Image src="https://images.unsplash.com/photo-1634502795504-f0f685b62d8e?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background" fill className="object-cover object-bottom  opacity-90  pointer-events-none w-full  " />
      </div>
      <SectionTitle
        title="Industries We Serve"
        description="We deliver specialized technology solutions for various industry needs."
      />

      <div className=" w-[90%] mx-auto mt-16  relative">
        <Marquee autoFill speed={50} gradient={false} pauseOnHover={true}>
          {industries.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative h-96 xl:h-[420px] aspect-4/5 rounded-2xl overflow-hidden mx-4 my-10 cursor-pointer"
              >
                {/* 🔥 Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700 ease-out"
                />

                {/* 🔥 Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-black/40 via-transparent" />

                {/* 🔥 Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">

                  {/* TOP */}
                  <div className="flex flex-col items-start gap-4">
                    <div className="text-white text-2xl font-medium xl:text-4xl p-3 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
                      <Icon />
                    </div>

                    <h4 className="text-white font-semibold text-xl text-shadow-2xs leading-snug">
                      {item.title}
                    </h4>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="opacity-100">
                    <p className="text-sm text-gray-900 leading-relaxed bg-white/20 backdrop-blur-xl p-4 text-shadow-2xs text-shadow-amber-50/10 rounded-xl border border-white/30">
                      "{item.description}"
                    </p>
                  </div>
                </div>

                {/* 🔥 Glow Border */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-orange-400/70 transition duration-100 blur border" />
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}