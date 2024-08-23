

import { faFacebookF, faInstagram, faSnapchat, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faClock, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="mt-48 flex flex-col gap-12 box-border p-24 font-notokufi mt-12 border-t-8 bg-[whitesmoke] border-sky-600 rounded-tl-md rounded-tr-md">
            <section className="flex flex-row gap-6 justify-between items-start">
                <div className="flex flex-col justify-start w-1/4">
                    <Image className="w-60 h-24" width={0} height={0}  src="https://www.tarmeeztech.com/front/images/logo/logo.svg" alt="The Logo Not Exists" ></Image>
                    <p className="text-sm font-thin">
                        في شركة ترميز تك، نتبنى معاييرنا الخاصة و الصارمة في جودة الأعمال وابتكار تصميمات مواقع الإنترنت، مما ينتج عنه حلول مبتكرة تلتقي تفاعلًا إيجابيًا من الجمهور. يكمن نجاحنا في اتقان مهامنا وتحقيق أهداف عملائنا بشكل استثنائي، بفضل خبرتنا وروح الفريق العالية، والتطوير المستمر على مدار الرحلة. نحن دائمًا في حالة تساؤل، كيف يمكننا تحسين تجربة المستخدم وجعل الإنترنت مكانًا أكثر إثراءً وفاعلية؟
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-xl">خدماتنا</h3>
                    <nav className="flex flex-col gap-3">
                        <Link className="text-sm font-extralight text-[#222]" href="/">تطوير المتاجر الإلكترونية</Link>
                        <Link className="text-sm font-extralight text-[#222]" href="/">تطوير المواقع المخصصة</Link>
                        <Link className="text-sm font-extralight text-[#222]" href="/">تطوير تطبيقات الجوال</Link>
                        <Link className="text-sm font-extralight text-[#222]" href="/">تصميم الهوية التجارية</Link>
                        <Link className="text-sm font-extralight text-[#222]" href="/">تصميم الموشن جرافيك</Link>
                        <Link className="text-sm font-extralight text-[#222]" href="/">التسويق الرقمي</Link>
                        <Link className="text-sm font-extralight text-[#222]" href="/">السيرفرات العالمية</Link>
                        <Link className="text-sm font-extralight text-[#222]" href="/">السيرفرات المحلية</Link>
                    </nav>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-xl">موارد</h3>
                    <nav className="flex flex-col gap-3">
                        <Link className="text-sm font-extralight text-[#222]" href="/">الرئيسية</Link>
                        <Link className="text-sm font-extralight text-[#222]" href="/">من نحن</Link>
                        <Link className="text-sm font-extralight text-[#222]" href="/">خدماتنا </Link>
                        <Link className="text-sm font-extralight text-[#222]" href="/">أعمالنا</Link>
                        <Link className="text-sm font-extralight text-[#222]" href="/">المدونة</Link>
                        <Link className="text-sm font-extralight text-[#222]" href="/">تواصل معنا</Link>
                        <Link className="text-sm font-extralight text-[#222]" href="/">عملائنا</Link>
                    </nav>
                </div>
                <div className="flex flex-col gap-6">
                    <h3 className="font-bold text-xl">اتصل بنا</h3>
                    <nav className="flex flex-col gap-6">
                        <div className="flex flex-row gap-4 items-center">
                            <FontAwesomeIcon icon={faClock} className="w-6 h-6 text-sky-600 bg-sky-100 box-border p-2 rounded-full"/>
                            <span className="flex flex-col items-start">
                                <h4 className="text-sm font-bold text-[#555]">الأحد - الخميس</h4>
                                <p className="text-xs text-[#888]">9:00 صباحا - 6:00 مساء</p>
                            </span>
                        </div>

                        <div className="flex flex-row gap-4 items-center">
                            <FontAwesomeIcon icon={faPhone} className="w-6 h-6 text-sky-600 bg-sky-100 box-border p-2 rounded-full"/>
                            <span className="flex flex-col items-start">
                                <h4 className="text-sm font-bold text-[#555]">اتصل بنا الآن</h4>
                                <p className="text-xs text-[#888]">+966 577 080 109</p>
                            </span>
                        </div>

                        <div className="flex flex-row gap-4 items-center">
                            <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6 text-sky-600 bg-sky-100 box-border p-2 rounded-full"/>
                            <span className="flex flex-col items-start">
                                <h4 className="text-sm font-bold text-[#555]">المملكة العربية السعودية</h4>
                                <p className="text-xs text-[#888]">مكتب B7، الطابق 1 عمارة رقم 44 شارع ابن كثير الملك عبد العزيز الرياض</p>
                            </span>
                        </div>
                    </nav>
                </div>
            </section>
            <section className="flex flex-row justify-between items-center">
                <p className="text-sm font-light">© {currentYear} جميع الحقوق محفوظة لشركة ترميزتك</p>
                <div className="flex flex-row gap-4">
                    <Link href="https://x.com/tarmeeztech"><FontAwesomeIcon icon={faXTwitter} className="w-6 h-6  text-sky-600 bg-sky-100 box-border p-2 rounded-full"/></Link>
                    <Link href="https://www.instagram.com/tarmeeztech/"><FontAwesomeIcon icon={faInstagram} className="w-6 h-6 text-sky-600 bg-sky-100 box-border p-2 rounded-full"/></Link>
                    <Link href="https://web.facebook.com/tarmeeztech?_rdc=1&_rdr"><FontAwesomeIcon icon={faFacebookF} className="w-6 h-6 text-sky-600 bg-sky-100 box-border p-2 rounded-full"/></Link>
                    <Link href="https://www.tiktok.com/@tarmeeztech"><FontAwesomeIcon icon={faSnapchat} className="w-6 h-6  text-sky-600 bg-sky-100 box-border p-2 rounded-full"/></Link>
                </div>
            </section>
        </footer>
    )
}