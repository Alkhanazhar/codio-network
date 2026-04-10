'use client';

import SectionTitle from '@/components/section-title';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Aman Verma',
    username: '@amanv',
    text: 'Codio Network completely transformed our website. We went from idea to launch in days and saw real growth.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Sarah Khan',
    username: '@sarahk',
    text: 'Their UI/UX design is top-notch. Everything feels smooth and user-friendly.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Rohit Sharma',
    username: '@rohitdev',
    text: 'Amazing development speed and clean code quality. Highly recommended for startups.',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    name: 'Emily Davis',
    username: '@emilyd',
    text: 'They helped us scale our mobile app seamlessly. Performance improved drastically.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Arjun Patel',
    username: '@arjunp',
    text: 'Professional team with strong technical skills. Delivered beyond expectations.',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 flex flex-col items-center">

      <SectionTitle
        title="Our Testimonials"
        description="What our clients say about Codio Network and our services."
      />

      <div className="mt-20 flex flex-col gap-16 w-full max-w-6xl">
        {testimonials.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                !isLeft ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="relative xl:w-40 xl:h-40 rounded-xl overflow-hidden shadow-lg"
              >
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1, x: 10 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                />
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-100 rounded-xl p-6 max-w-md shadow-sm"
              >
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.username}</p>

                {/* Stars */}
                <div className="flex mt-2 text-orange-500">
                  {'★★★★★'}
                </div>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  "{item.text}"
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}