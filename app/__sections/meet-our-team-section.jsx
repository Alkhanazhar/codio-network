import SectionTitle from '@/app/_components/section-title';

export default function MeetOurTeamSection() {
    const data = [
        {
            name: 'Azhar Khan',
            image: '/assets/team-user-1.png',
        },
        {
            name: 'Aasif Azlaan',
            image: '/assets/team-user-2.png',
        },
        {
            name: 'Yasir Ali',
            image: '/assets/team-user-3.png',
        },
        {
            name: 'Eliana Jade',
            image: '/assets/team-user-4.png',
        },
    ];
    return (
        <section className='flex flex-col items-center justify-center  px-4 pt-20 xl:pt-20 pb-12'>
            <SectionTitle title='Meet Our Team' description='Meet our team and discover how we can help you create the perfect slide using latest AI technologies.' />
            <div className='mt-12 xl:mt-16 flex flex-wrap items-center justify-center gap-8'>
                {data.map((item, index) => (
                    <div key={index} className='flex flex-col transition-all duration-300 hover:-translate-y-1'>
                        <img src={item.image} alt='User Image' className='h-64 w-52 object-cover' />
                        <h3 className='mt-2 text-base font-medium'>{item.name}</h3>
                        <p className='text-sm text-gray-500'>{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
