
"use client";

import Image from "next/image"
import logo from "../../public/assets/logo.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faChevronDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";



export const Header = () => {
    const [hiddenMenu, setHiddenMenu] = useState(false)
    return (
        <header className="shadow-[#999] h-24 flex flex-row justify-between items-center box-border px-24">
            <Link href="https://www.tarmeeztech.com/ar">
                <Image className="w-36 h-36" width={0} height={0}  src="https://www.tarmeeztech.com/front/images/logo/logo.svg" alt="The Logo Not Exists" ></Image>
            </Link>
            <nav className="flex flex-row justify-center items-center gap-12">
                <Link href="/" className="flex flex-row justify-center items-center gap-2 text-[#666]">الرئيسية</Link>
                <Link href="/" className="flex flex-row justify-center items-center gap-2 text-[#666]" onMouseOver={()=>setHiddenMenu(true)}>أعمالنا <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4" /> </Link>
                <Link href="/" className="flex flex-row justify-center items-center gap-2 text-[#666]">مجالاتنا</Link>
                <Link href="/" className="flex flex-row justify-center items-center gap-2 text-[#666]">آراء العملاء</Link>
                <Link href="/" className="flex flex-row justify-center items-center gap-2 text-[#666]">تواصل معنا</Link>
                <Link href="/" className="flex flex-row justify-center items-center gap-2 text-[#666]">من نحن</Link>
            </nav>
            <div className="flex flex-row justify-center items-center gap-6">
                <button className="w-24 h-12 bg-[#09080A] text-white text-sm rounded-md hover:bg-[#131118]">اتصل بنا</button>
            </div>

            <div className={hiddenMenu ? "visible bg-white border-b-2 fixed py-12 top-0 left-0 right-0 flex flex-row gap-36 justify-center" : "invisible fixed top-0 left-0 right-0"} onMouseLeave={()=>setHiddenMenu(false)}>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium">Men</h3>
                    <Link href="/" className="text-sm font-normal color-[#555]">T-shirt</Link>
                    <Link href="/" className="text-sm font-normal color-[#555]">Jacket</Link>
                    <Link href="/" className="text-sm font-normal color-[#555]">Vistes</Link>
                    <Link href="/" className="text-sm font-normal color-[#555]">Blazers</Link>
                    <Link href="/" className="text-sm font-normal color-[#555]">inderWaire</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium">Women</h3>
                    <Link href="/" className="text-sm font-normal color-[#555]">T-shirt</Link>
                    <Link href="/" className="text-sm font-normal color-[#555]">Jacket</Link>
                    <Link href="/" className="text-sm font-normal color-[#555]">Vistes</Link>
                    <Link href="/" className="text-sm font-normal color-[#555]">Vistes</Link>
                    <Link href="/" className="text-sm font-normal color-[#555]">Blazers</Link>
                    <Link href="/" className="text-sm font-normal color-[#555]">inderWaire</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium">Kids</h3>
                    <Link href="/" className="text-sm font-normal color-[#555]">T-shirt</Link>
                    <Link href="/" className="text-sm font-normal color-[#555]">Jacket</Link>
                    <Link href="/" className="text-sm font-normal color-[#555]">Vistes</Link>
                    <Link href="/" className="text-sm font-normal color-[#555]">Blazers</Link>
                    <Link href="/" className="text-sm font-normal color-[#555]">inderWaire</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium">Sport</h3>
                    <Link href="/" className="text-sm font-normal color-[#555]">T-shirt</Link>
                    <Link href="/" className="text-sm font-normal color-[#555]">Jacket</Link>
                    <Link href="/" className="text-sm font-normal color-[#555]">Vistes</Link>
                    <Link href="/" className="text-sm font-normal color-[#555]">Blazers</Link>
                    <Link href="/" className="text-sm font-normal color-[#555]">cup</Link>
                    <Link href="/" className="text-sm font-normal color-[#555]">comper</Link>
                    <Link href="/" className="text-sm font-normal color-[#555]">sneakers</Link>
                </div>
            </div>
        </header>
    )
}