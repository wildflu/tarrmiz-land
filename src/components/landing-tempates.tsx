"use client"
import Image from "next/image"
import template from "../../public/assets/icon6.png";
import { faArrowLeft, faPhone, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEye } from 'react-icons/fa'; // Import an icon from react-icons

import { SetStateAction, useState } from 'react';
import { TemplateCard } from "./template-card";
import { Template } from "@/models/template";





import s1 from "../../public/assets/s1.png";
import s2 from "../../public/assets/s2.png";
import s3 from "../../public/assets/s3.png";
import s4 from "../../public/assets/s4.png";
import s5 from "../../public/assets/s5.png";
import s6 from "../../public/assets/s6.png";
import { TitleComponent } from "./title";

const templates:Template[] = [
    {
        name:"",
        des:"",
        image:s1,
        screen:"https://themewagon.github.io/fastes/"
    },
    {
        name:"",
        des:"",
        image:s2,
        screen:"https://technext.github.io/cloudtemplate/index.html"
    },
    {
        name:"",
        des:"",
        image: s3,
        screen:"https://technext.github.io/potoub/index.html"
    },
    {
        name:"",
        des:"",
        image:s4,
        screen:"https://themewagon.github.io/brainwave/"
    },

    {
        name:"",
        des:"",
        image:s5,
        screen:"https://themewagon.github.io/softland/"
    },
    {
        name:"",
        des:"",
        image:s6,
        screen:"https://themewagon.github.io/author-colorlib/"
    },
]


export const LandingTemplates = () => {

    const [isFullScreen, setIsFullScreen] = useState(false);
    const [screen, setScreenTemplate] = useState("");

    const handleClick = (screenImage: String | SetStateAction<string>) => {
        setIsFullScreen(!isFullScreen);
        if(!isFullScreen) {
            setScreenTemplate(`${screenImage}`)
        }
    };

    return (
        <div className="font-notokufi my-24 flex flex-col gap-24 justify-center items-center">
            <TitleComponent title="صفحات هبوط" />
            <section className="box-border px-24 grid grid-cols-3 gap-12">
                {
                    templates.map((tem)=> {
                        return <div
                                className="relative border-2 w-full h-72 rounded-md overflow-hidden box-border group"
                                onClick={() => handleClick(tem.screen)}
                            >
                                <Image className="w-full h-full object-cover rounded-md" src={tem.image} alt="Project Template" />
                                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute bottom-3 right-3 flex flex-row gap-3 items-center">
                                        <p className="text-white text-lg font-semibold transform scale-90 group-hover:scale-100 transition-transform duration-500">شاهد المشروع</p>
                                        <FontAwesomeIcon icon={faArrowLeft} className="cursor-pointer text-white transform transform scale-90 group-hover:scale-100 transition-transform duration-500"/>
                                    </div>
                                    <FaEye className="text-white text-4xl box-border border-2 p-1 border-white rounded" />
                                </div>
                            </div>
                    })
                }

            </section>

            {/* {isFullScreen && (
                <div className="fixed flex flex-row top-0 right-0 bottom-0 left-0 bg-white inset-2 z-50">
                    <div className="box-border p-12 relative w-1/4 h-full flex flex-col gap-4 justify-center">
                        <FontAwesomeIcon icon={faXmark} onClick={()=> handleClick('')} className="absolute text-lg top-2 right-2 p-4 bg-black rounded-full text-white"/>
                        <p className="font-bold text-sm">حول المشروع</p>  

                        <h1 className="text-3xl font-bold">موقع دروب الغد</h1>
                        <p className="font-md text-md ">
                            هو مركز ضيافة أطفال تأسست في عام 2023 في مدينة الرياض، المملكة العربية السعودية. يقع مركز ضيافة الأطفال في منطقة حيوية قريبة من المدارس ومراكز التسوق، مما يسهل على الآباء والأمهات الوصول إليها.
                        </p>

                        <div className="absolute bottom-5 left-5 w-48 h-12 flex flex-row gap-5 cursor-pointer items-center justify-end">
                            <p className="font-bold text-sky-500 text-md">اكتشاف المزيد</p>
                            <FontAwesomeIcon icon={faArrowLeft} onClick={()=> handleClick('')} className="cursor-pointer text-sky-500"/>
                        </div>
                    </div>
                    <div className="w-3/4 h-full">
                        <TemplateCard imageSrc={screen}/>
                    </div>
                </div>
            )} */}

            {isFullScreen && (
                <div className="fixed flex flex-row top-0 right-0 bottom-0 left-0 bg-white inset-2 z-50">
                    <div className="w-full h-full relative">
                        <iframe
                            src={screen}
                            title="Embedded Website"
                            className="w-full h-full scrollbar scrollbar-thumb-gray-900 scrollbar-none scrollbar-track-gray-100"
                            allowFullScreen
                        />
                        <div onClick={()=> handleClick('')} className="fixed bottom-4 left-4 w-12 h-12 bg-black rounded-full box-border p-2 flex items-center justify-center">
                            <FontAwesomeIcon icon={faXmark} className="text-white w-6 h-6"/>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );

};

{/* <FaEye className="text-white text-2xl" /> */}
