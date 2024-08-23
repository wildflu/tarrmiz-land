"use client";
import Image from "next/image";
import { useRef } from 'react';



interface ChildComponentProps {
    imageSrc: string;
}


export const TemplateCard = () => {

    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    let scrollInterval: NodeJS.Timeout | null = null;

    const startScrolling = () => {
        if (scrollContainerRef.current) {
            scrollInterval = setInterval(() => {
                if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTop += 1;
                }
            }, 3); // Adjust the speed here
        }
    };

    const stopScrolling = () => {
        if (scrollInterval) {
            clearInterval(scrollInterval);
        }

        // Smoothly scroll back to the top
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };


    return(
        <div className="h-full overflow-hidden" onMouseEnter={startScrolling} onMouseLeave={stopScrolling} ref={scrollContainerRef}>
            <Image
                className="w-full h-auto"
                width="300"
                height="300"
                // src={`${imageSrc}`}
                src='https://www.tarmeeztech.com/front/images/work/1716108805screencapture-doroobalghad-2024-05-19-09_43_05.jpg'
                alt="none"
            />
        </div>
    )
}