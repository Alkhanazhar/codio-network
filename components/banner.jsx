import { ArrowRightIcon } from 'lucide-react';

export default function Banner() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center bg-gradient-to-r from-orange-600 via-purple-600 to-fuchsia-600 py-2 text-center font-medium text-white">
      
      <p className="text-sm md:text-sm">
        Build modern websites & mobile apps with <span className="font-semibold">Codio Network</span>
      </p>

      <a
        href="#contact"
        className="ml-3 flex items-center gap-1 rounded-md bg-white px-4 py-1.5 text-xs md:text-xs font-medium text-purple-600 transition hover:bg-gray-200 active:scale-95"
      >
        Get Started
        <ArrowRightIcon className="w-4 h-4" />
      </a>

    </div>
  );
}