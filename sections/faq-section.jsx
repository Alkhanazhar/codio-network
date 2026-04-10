'use client';

import SectionTitle from '@/components/section-title';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';

export default function FaqSection() {
    const [isOpen, setIsOpen] = useState(false);
    const data = [
        {
            question: 'What services does Codio Network provide?',
            answer:
                'We provide web development, mobile app development, UI/UX design, and scalable digital solutions tailored to your business.',
        },
        {
            question: 'Do you build custom websites and applications?',
            answer:
                'Yes, all our solutions are custom-built based on your requirements, ensuring performance, scalability, and modern design.',
        },
        {
            question: 'Which technologies do you use?',
            answer:
                'We use modern technologies like React, Next.js, Node.js, MongoDB, MERN stack, Flutter, and more.',
        },
        {
            question: 'How long does it take to complete a project?',
            answer:
                'Project timelines depend on complexity, but most projects are delivered within a few weeks with proper planning.',
        },
        {
            question: 'Do you provide support after project delivery?',
            answer:
                'Yes, we offer ongoing support, maintenance, and updates to ensure your product runs smoothly.',
        },
        {
            question: 'How can I get started with Codio Network?',
            answer:
                'You can contact us through our website, and we will guide you through the process from idea to execution.',
        },
    ];

    return (
        <section className='flex flex-col items-center justify-center'>
            <SectionTitle title="FAQ's" description="Looking for answers to your frequently asked questions? Check out our FAQ's section below to find." />
            <div className='mx-auto mt-12 w-full max-w-xl'>
                {data.map((item, index) => (
                    <div key={index} className='flex flex-col border-b border-gray-200 bg-white'>
                        <h3 className='flex cursor-pointer items-start justify-between gap-4 py-4 font-medium' onClick={() => setIsOpen(isOpen === index ? null : index)}>
                            {item.question}
                            {isOpen === index ? <MinusIcon className='size-5 text-gray-500' /> : <PlusIcon className='size-5 text-gray-500' />}
                        </h3>
                        <p className={`pb-4 text-sm/6 text-gray-500 ${isOpen === index ? 'block' : 'hidden'}`}>{item.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
