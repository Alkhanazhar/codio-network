import SectionTitle from '@/components/section-title';
import { ChartNoAxesCombinedIcon, KeyRoundIcon, SquareDashedMousePointerIcon } from 'lucide-react';

export default function HowItWorksSection() {
  const data = [
  {
    title: 'Web Development',
    description: 'Modern, fast, and scalable websites built with the latest technologies.',
    icon: KeyRoundIcon,
  },
  {
    title: 'UI/UX Design',
    description: 'User-focused designs that create smooth and engaging digital experiences.',
    icon: SquareDashedMousePointerIcon,
  },
  {
    title: 'Branding',
    description: 'Create a strong brand identity that makes your business stand out.',
    icon: ChartNoAxesCombinedIcon,
  },
  {
    title: 'SEO & Digital Marketing',
    description: 'Improve visibility, traffic, and conversions with smart strategies.',
    icon: KeyRoundIcon,
  },
  {
    title: 'Product Development',
    description: 'Transform ideas into powerful digital products from concept to launch.',
    icon: SquareDashedMousePointerIcon,
  },
  {
    title: 'Mobile App Development',
    description: 'High-performance mobile apps designed for seamless user experiences.',
    icon: ChartNoAxesCombinedIcon,
  },
];
    return (
        <section className='flex flex-col items-center justify-center'>
            <SectionTitle title='Our Services' description='Codio Network is a powerful AI-powered platform that allows you to create and edit slides effortlessly with AI.' />

            <div className='mt-20 flex flex-wrap max-w-7xl w-[90%] items-center justify-center gap-10'>
                {data.map((item, index) => (
                    <div key={index} className='rounded-[14px] bg-orange-200/80 p-0.5 pt-4 transition-all duration-300 hover:-translate-y-1'>
                        <div className='relative flex max-w-80 flex-col items-center rounded-xl bg-white p-6 pb-10'>
                            <div className='absolute -top-6 rounded-full bg-orange-600 p-3'>
                                <item.icon className='size-6 text-white' />
                            </div>
                            <h3 className='mt-10 text-center text-base font-medium'>{item.title}</h3>
                            <p className='mt-6 text-center text-gray-500'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
