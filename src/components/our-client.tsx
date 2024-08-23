
import Image from 'next/image';
import Marquee from 'react-fast-marquee';


export const OurClient = () => {
    return(
        <div className='w-full flex flex-col gap-6 justify-center items-center'>
            <div className='flex flex-col gap-2 justify-center items-center'>
                <h1 className='text-xl font-bold'>شركاء النجاح</h1>
                <p className='text-lg'>نفتخر بالثقة الممنوحة لنا من قبل الشركات العالمية الرائدة عبر رحلة تاريخنا: شركاء موثوق بهم يقودوننا نحو مستقبل مشرق ومزدهر.</p>
            </div>
            
            <Marquee
                speed={30}
                loop={0}
                >
                    <div className='mx-6'><Image className='rounded hover:bg-[whitesmoke]' width={300} height={300} src="https://www.tarmeeztech.com/front/images/brands/1714725420Rectangle_60-removebg-preview.png" alt='' /></div>
                    <div className='mx-6'><Image className='rounded hover:bg-[whitesmoke]' width={300} height={300} src="https://www.tarmeeztech.com/front/images/brands/1714725420Rectangle_60-removebg-preview.png" alt='' /></div>
                    <div className='mx-6'><Image className='rounded hover:bg-[whitesmoke]' width={300} height={300} src="https://www.tarmeeztech.com/front/images/brands/1714725420Rectangle_60-removebg-preview.png" alt='' /></div>
                    <div className='mx-6'><Image className='rounded hover:bg-[whitesmoke]' width={300} height={300} src="https://www.tarmeeztech.com/front/images/brands/1714725420Rectangle_60-removebg-preview.png" alt='' /></div>
                    <div className='mx-6'><Image className='rounded hover:bg-[whitesmoke]' width={300} height={300} src="https://www.tarmeeztech.com/front/images/brands/1714725420Rectangle_60-removebg-preview.png" alt='' /></div>
                    <div className='mx-6'><Image className='rounded hover:bg-[whitesmoke]' width={300} height={300} src="https://www.tarmeeztech.com/front/images/brands/1714725420Rectangle_60-removebg-preview.png" alt='' /></div>
            </Marquee>
            <div className="w-96 h-96 bg-red-800">

            </div>
            
        </div>
        

    )

}