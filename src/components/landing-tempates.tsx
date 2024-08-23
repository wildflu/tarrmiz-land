"use client"
import Image from "next/image"
import template from "../../public/assets/icon6.png";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaEye } from 'react-icons/fa'; // Import an icon from react-icons

import { useState } from 'react';
import { TemplateCard } from "./template-card";


export const LandingTemplates = () => {

    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleClick = () => {
        setIsFullScreen(!isFullScreen);
    };

    return (
        <div>
            {/* Card Section */}
            <section className="my-24 box-border px-24 grid grid-cols-2 gap-12">
                <div
                    className="relative border-2 w-full h-96 rounded-md overflow-hidden box-border group"
                    onClick={handleClick}
                >
                    {/* Image */}
                    <Image className="w-full h-full object-cover rounded-md" src={template} alt="Project Template" />

                    {/* Overlay with Icon and Text */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <p className="text-white text-lg font-semibold mb-4 transform scale-90 group-hover:scale-100 transition-transform duration-500">شاهد المشروع</p>
                        <FontAwesomeIcon icon={faPhone} className="text-sky-600 bg-sky-100 box-border p-2 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-500"/>
                    </div>
                </div>
            </section>

            {/* Full-Screen Section */}
            {/* {isFullScreen && (
                <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
                    <div className="relative w-full h-full">
                        <button
                            onClick={handleClick}
                            className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full"
                        >
                            Close
                        </button>
                        <p className="text-xl">Full-Screen Content Here</p>
                    </div>
                </div>
            )} */}
            {isFullScreen && (
                <div className="fixed flex flex-row top-0 right-0 bottom-0 left-0 bg-[#999] inset-2 z-50">
                    <div className="box-border p-3 relative w-2/5 h-full bg-blue-100 flex flex-col gap-2 justify-center">
                        <FontAwesomeIcon icon={faPhone} onClick={handleClick} className="absolute top-2 right-2 p-4 bg-black rounded-full text-white"/>

                        <p className="font-bold text-md">حول المشروع</p>  

                        <p className="font-md text-md ">
                            هو مركز ضيافة أطفال تأسست في عام 2023 في مدينة الرياض، المملكة العربية السعودية. يقع مركز ضيافة الأطفال في منطقة حيوية قريبة من المدارس ومراكز التسوق، مما يسهل على الآباء والأمهات الوصول إليها.
                        </p>

                        <h1 className="text-3xl font-bold">موقع دروب الغد</h1>

                        <p className="font-bold text-md">رأي صاحب المشروع</p>

                        <h1 className="text-lg font-bold">أتعامل معهم منذ مدة طويلة، عملهم ممتاز و تعاملهم رائع جدا ، أنصح بهم لكل من يهمه انجاز عمله باتقان.</h1>

                    </div>
                    <div className="w-3/5 h-full bg-red-100">
                        <TemplateCard />
                    </div>
                </div>
            )}
        </div>
    );

};

{/* <FaEye className="text-white text-2xl" /> */}
