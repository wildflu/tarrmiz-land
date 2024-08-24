"use client";
import Lottie from 'lottie-react';
import animationData from "../../public/assets/lottie.json";
import mouse from "../../public/assets/mouse.png"
import Image from 'next/image';

export const Intoduction = () => {
    
    const scrollToBottom = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior:'smooth'
        })
    }

    return (
        <section className="font-notokufi h-full mt-24 flex flex-row gap-12 box-border px-24">
            <div className="w-1/2 h-full flex flex-col gap-6">
                <p className="text-md font-bold text-sky-300">هل أنت مستعد</p>
                <p className="text-6xl font-bold leading-[100px]">كن التغيير،<br></br> وأشعل المستقبل <br></br>مع <span className="text-sky-400" >ترميز تك</span> </p>
            </div>
            <div className="flex justify-end items-end">
                <Image onClick={scrollToBottom} className='w-12 h-12' src={mouse} alt=""></Image>
            </div>
            <div className="w-1/2 h-full flex items-center justify-center">
                <Lottie className="w-[450px] h-full" animationData={animationData} loop={true} autoplay={true}  />
            </div>
        </section>
    )
} 
