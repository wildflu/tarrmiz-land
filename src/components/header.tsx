import Image from "next/image"
import Link from "next/link";



export const Header = () => {
    return (
        <header className="font-notokufi shadow-[#999] h-24 flex flex-row justify-between items-center box-border px-24">
            <Link href="https://www.tarmeeztech.com/ar">
                <Image className="w-36 h-36" width={0} height={0}  src="https://www.tarmeeztech.com/front/images/logo/logo.svg" alt="The Logo Not Exists" ></Image>
            </Link>
            <nav className="flex flex-row justify-center items-center gap-12">
                <Link href="/" className="flex flex-row justify-center items-center gap-2 text-[#666]">الرئيسية</Link>
                <Link href="/" className="flex flex-row justify-center items-center gap-2 text-[#666]">مجالاتنا</Link>
                <Link href="/" className="flex flex-row justify-center items-center gap-2 text-[#666]">آراء العملاء</Link>
                <Link href="/" className="flex flex-row justify-center items-center gap-2 text-[#666]">تواصل معنا</Link>
                <Link href="/" className="flex flex-row justify-center items-center gap-2 text-[#666]">من نحن</Link>
            </nav>
            <div className="flex flex-row justify-center items-center gap-6">
                <button className="w-24 h-12 bg-[#09080A] text-white text-sm rounded-md hover:bg-[#131118]">اتصل بنا</button>
            </div>
        </header>
    )
}