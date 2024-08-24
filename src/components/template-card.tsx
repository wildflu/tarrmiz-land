"use client";
import Image from "next/image";
import { useRef } from 'react';
import sc1 from "../../public/assets/s2.jpeg";


interface ChildComponentProps {
    imageSrc: string;
}


export const TemplateCard = ( { imageSrc } ) => {

    return(
        <div className="h-full w-full">
            <iframe
                    src={imageSrc}
                    title="Embedded Website"
                    className="w-full h-full scrollbar scrollbar-thumb-gray-900 scrollbar-none scrollbar-track-gray-100"
                    allowFullScreen
                />
        </div>
    )

}