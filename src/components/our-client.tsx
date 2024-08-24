
import Image from 'next/image';


export const OurClient = () => {
    return(
        <section className=' font-notokufi mb-36 flex flex-row gap-10 box-border px-24'>
            <div className='w-1/2 flex flex-col gap-4'>
                <p className='font-bold text-md'>عملائنا وشركاء النجاح</p>
                <h2 className='font-bold text-4xl leading-[60px]'>العملاء الذين يختاروننا  ويصدقون أن خدماتنا <br /> هي الأفضل </h2>
                <div className='w-24 h-[5px] bg-sky-400'></div>
                <p className='text-lg mt-12'>
                    نحن نستثمر دائمًا في عملائنا، لأن نجاحهم هو أساس نجاحنا، ونلتزم بتقديم أفضل الحلول والخدمات لتحقيق أهدافهم وتطلعاتهم.
                </p>
            </div>
            <div className='w-1/2 grid grid-cols-3 items-center justify-end self-end'>
                <Image className='rounded hover:bg-[whitesmoke]' width={200} height={100} src="https://www.tarmeeztech.com/front/images/brands/1714727392Rectangle_57-removebg-preview(1).png" alt='' />
                <Image className='rounded hover:bg-[whitesmoke]' width={200} height={100} src="https://www.tarmeeztech.com/front/images/brands/1714725468Rectangle_56-removebg-preview.png" alt='' />
                <Image className='rounded hover:bg-[whitesmoke]' width={200} height={100} src="https://www.tarmeeztech.com/front/images/brands/1714725433Rectangle_59-removebg-preview.png" alt='' />
                <Image className='rounded hover:bg-[whitesmoke]' width={200} height={100} src="https://www.tarmeeztech.com/front/images/brands/1714727404Rectangle_55-removebg-preview(1).png" alt='' />
                <Image className='rounded hover:bg-[whitesmoke]' width={200} height={100} src="https://www.tarmeeztech.com/front/images/brands/1714725420Rectangle_60-removebg-preview.png" alt='' />
            </div>
        </section>
    )

}