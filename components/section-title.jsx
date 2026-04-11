export default function SectionTitle({ title, description }) {
    return (
        <div className='xl:mt-40 mt-20 flex flex-col items-center justify-center w-[90%] mx-auto'>
            <h3 className='text-center text-[32px] font-semibold'>{title}</h3>
            <p className='mt-3 max-w-xs text-center text-gray-500 md:max-w-lg'>{description}</p>
        </div>
    );
}
