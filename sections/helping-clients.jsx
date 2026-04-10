'use client';

import { useState } from 'react';
import SectionTitle from '@/components/section-title';
import { motion } from 'framer-motion';

import {
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiStrapi,
  SiThreedotjs,
  SiReact,
  SiFlutter,
  SiJavascript,
  SiTypescript,
  SiLaravel,
  SiPhp,
  SiSocketdotio,
} from 'react-icons/si';

const techStack = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next JS', icon: SiNextdotjs, color: '#000000' },
  { name: 'Vue JS', icon: SiVuedotjs, color: '#42b883' },
  { name: 'Node JS', icon: SiNodedotjs, color: '#3C873A' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Express JS', icon: SiExpress, color: '#000000' },
  { name: 'MERN Stack', icon: SiReact, color: '#61DAFB' },
  { name: 'Strapi CMS', icon: SiStrapi, color: '#4945FF' },
  { name: 'WebSocket', icon: SiSocketdotio, color: '#010101' },
  { name: 'Three.js', icon: SiThreedotjs, color: '#000000' },
  { name: 'React Three Fiber', icon: SiReact, color: '#61DAFB' },
  { name: 'React Native', icon: SiReact, color: '#61DAFB' },
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
];

export default function TechStackSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className=" flex flex-col items-center -mt-40">
      <SectionTitle
        title="Our Technology Stack"
        description="We use modern, scalable, and high-performance technologies to build powerful digital products."
      />

      <div className="py-16 grid xl:py-24 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-[90%] max-w-6xl">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;

          const isActive = hoveredIndex === index;
          const isBlurred = hoveredIndex !== null && hoveredIndex !== index;

          return (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              animate={{
                scale: isActive ? 1.08 : 1,
                filter: isBlurred ? 'blur(3px)' : 'blur(0px)',
                opacity: isBlurred ? 0.5 : 1,
              }}
              className="group flex items-center gap-4 rounded-xl border border-gray-200 hover:border-orange-300 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              {/* Tech Logo */}
              <div className="flex h-12 w-12 xl:w-16 xl:h-16 items-center justify-center rounded-lg bg-gray-50">
                <Icon
                  className="w-7 h-7 xl:w-11 xl:h-11 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: tech.color }}
                />
              </div>

              {/* Name */}
              <p className="font-medium text-gray-700 xl:text-lg">
                {tech.name}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}