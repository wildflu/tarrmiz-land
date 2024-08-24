"use client";
import Image from "next/image";
import { useRef } from 'react';
import sc1 from "../../public/assets/s2.jpeg";


interface ChildComponentProps {
    imageSrc: string;
}


export const TemplateCard = ( { imageSrc } ) => {

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
        <div className="h-full scrollbar scrollbar-thumb-gray-900 scrollbar-none scrollbar-track-gray-100" onMouseEnter={startScrolling} onMouseLeave={stopScrolling} ref={scrollContainerRef}>
            <iframe
                    // src="https://themewagon.github.io/fastes/"
                    src={imageSrc}
                    title="Embedded Website"
                    className="w-full h-full scrollbar scrollbar-thumb-gray-900 scrollbar-none scrollbar-track-gray-100"
                    allowFullScreen
                />
        </div>
    )

}