import { DribbbleIcon, InstagramIcon, LinkedinIcon, TwitterIcon, XIcon, YoutubeIcon } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='px-4 pt-30 text-gray-600 md:px-16 lg:px-24'>
            <div className='flex flex-col items-start justify-between gap-8 md:flex-row md:gap-16'>
                <div className='flex-1'>
                                     <h2 className='text-xl xl:text-2xl font-bold text-black-500 leading-6 tracking-normal'><span className='text-orange-500'>C</span>odio <br /> <span className='text-orange-500'>N</span>etwork</h2>

                 <p className='mt-6 max-w-sm text-sm/6'>
  Delivering innovative, scalable, and high-performance web and mobile solutions tailored to your business needs.
</p>
                    <div className='mt-2 flex items-center gap-3 text-gray-400'>
                        
                       
                        <a href='https://www.instagram.com/codionetwork/' target='_blank' aria-label='Instagram' title='Instagram'>
                            <InstagramIcon className='size-5 transition duration-200 hover:-translate-y-0.5' />
                        </a>
                        <a href='https://x.com/codionetwork' target='_blank' aria-label='Twitter' title='Twitter'>
                            <XIcon className='size-5 transition duration-200 hover:-translate-y-0.5' />
                        </a>
                        <a href='https://www.linkedin.com/in/codio-network/' target='_blank' aria-label='LinkedIn' title='LinkedIn'>
                            <LinkedinIcon className='size-5 transition duration-200 hover:-translate-y-0.5' />
                        </a>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-around gap-8 md:flex-1 md:flex-row md:gap-20'>
                    <div className='flex flex-col'>
                        <h2 className='mb-5 font-semibold text-gray-800'>Company</h2>
                        <Link href='/' className='py-1.5 transition duration-200 hover:text-black' aria-label='Home' title='Home'>
                            Home
                        </Link>
                        <Link href='#about' className='py-1.5 transition duration-200 hover:text-black' aria-label='About' title='About'>
                            About
                        </Link>
                        <Link href='#careers' className='py-1.5 transition duration-200 hover:text-black' aria-label='Careers' title='Careers'>
                            Careers
                        </Link>
                        <Link href='#partners' className='py-1.5 transition duration-200 hover:text-black' aria-label='Partners' title='Partners'>
                            Partners
                        </Link>
                    </div>
                    <div>
                        <h2 className='mb-5 font-semibold text-gray-800'>Subscribe to our newsletter</h2>
                        <div className='max-w-xs space-y-6 text-sm'>
                            <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
                            <form className='flex items-center justify-center gap-2 rounded-md bg-gray-100 p-1.5'>
                                <input className='w-full max-w-64 rounded px-2 py-2 outline-none' type='email' placeholder='Enter your email' required />
                                <button className='rounded bg-gray-800 px-4 py-2 text-white transition hover:opacity-90'>Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-6 flex flex-col items-center justify-between gap-4 border-t border-gray-200 py-4 md:flex-row'>
                <p className='text-center'>
                    Copyright 2025 © <Link href='/contact-us'>Codio Network</Link> All Right Reserved.
                </p>
                <div className='flex items-center gap-6'>
                    <Link href='#privacy-policy' className='transition duration-200 hover:text-black' aria-label='Privacy Policy' title='Privacy Policy'>
                        Privacy Policy
                    </Link>
                    <Link href='#terms-of-service' className='transition duration-200 hover:text-black' aria-label='Terms of Service' title='Terms of Service'>
                        Terms of Service
                    </Link>
                    <Link href='#cookie-policy' className='transition duration-200 hover:text-black' aria-label='Cookie Policy' title='Cookie Policy'>
                        Cookie Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
}
