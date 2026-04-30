import { ArrowRightIcon } from 'lucide-react';

export default function Banner() {
  return (
    <div className="flex w- px-10 flex-wrap items-center justify-center gap-4 py-3 bg-gradient-to-r from-orange-600 via-purple-600 to-fuchsia-600 xl:py-2 text-center font-medium text-white">
      
      <p className="text-xs md:text-sm">
        Build modern websites & mobile apps <span>with</span> <span className="font-semibold">Codio Network</span>
      </p>

      <a
        href="#contact"
        className="ml-3  items-center hidden md:flex gap-1 rounded-md bg-white px-4 py-1.5 text-xs md:text-xs font-medium text-purple-600 transition hover:bg-gray-200 active:scale-95"
      >
        Get Started
        <ArrowRightIcon className="w-4 h-4" />
      </a>

    </div>
  );
}