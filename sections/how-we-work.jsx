
import SectionTitle from '@/components/section-title';

const steps = [
  {
    id: 1,
    title: 'Discovery',
    description: 'Understanding goals, audience and business.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72',
  },
  {
    id: 2,
    title: 'Strategy',
    description: 'Planning roadmap, positioning, and growth strategy.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
  },
  {
    id: 3,
    title: 'Design & Development',
    description: 'Designing interfaces and building scalable solutions.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692',
  },
  {
    id: 4,
    title: 'Launch & Growth',
    description: 'Launching and continuously optimizing performance.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
  },
];

export default function HowWeWorkSection() {
  return (
    <section className=" my-24 mt-16 flex flex-col items-center  mx-auto">
      
      <SectionTitle
        title="How We Work"
        description="Our streamlined process ensures your project moves smoothly from concept to launch."
      />

      {/* Flow Line + Steps */}
      <div className="relative mt-16 w-full max-w-6xl pb-24">
        
        {/* Curved line (simple version) */}
        {/* <div className="absolute top-6 left-0 right-0 hidden md:block">
          <svg width="100%" height="60">
            <path
              d="M50 30 C150 0, 250 60, 350 30 S550 0, 650 30 S850 60, 950 30"
              fill="transparent"
              stroke="#f97316"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </svg>
        </div> */}

        {/* Steps */}
        <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.id}
            
              className="flex flex-col items-center text-center"
            >
              {/* Step Number */}
              <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white font-semibold shadow-md">
                {step.id}
              </div>

              {/* Image Card */}
              <div
                className="mt-6 w-full overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-40 w-full object-cover"
                />
              </div>

              {/* Content */}
              <h3 className="mt-4 text-lg font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-500 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}