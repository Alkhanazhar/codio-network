import SectionTitle from '@/components/section-title';
import { ArrowRightIcon } from 'lucide-react';

export default function CallToActionSection() {
    return (
        <section className='py-12 xl:py-24 my-20  bg-orange-300'>
            <div className="max-w-5xl mx-auto w-[90%] flex lg:flex-row xl:gap-20 gap-8  items-center justify-between">

            {/* <SectionTitle title='Try PrebuiltUI for Free' description='Let’s build something great together.' /> */}
             <div className=' flex flex-col items-center justify-center'>
            <h3 className=' text-[32px] xl:text-6xl font-semibold text-start'>Let’s build something <br /> great together</h3>
            {/* <p className='mt-3 max-w-xs text-center text-gray-500 md:max-w-lg'>{description}</p> */}
        </div>
            <a href='https://prebuiltui.com?utm_source=slidex' className='mt-4 flex items-center gap-2 rounded-full bg-gray-900 px-8 py-2.5 font-medium text-white transition hover:opacity-90'>
                Get Started
                <ArrowRightIcon className='size-5' />
            </a>
            </div>
        </section>
    );
}
