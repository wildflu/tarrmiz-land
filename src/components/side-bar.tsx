"use client"
import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import ScrollProgressBar from "./scroll-prograss"


export const SideBar = () => {

    const scrollToTop = () => {
        console.log('Back to Top clicked');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return(
        <div className="font-notokufi flex flex-col jistify-center z-50 items-center gap-24 fixed bottom-5 left-0">
            <ScrollProgressBar />
            <p onClick={scrollToTop} className="rotate-vertical z-50">العودة إلى الأعلى</p>
            <div className="flex flex-col jistify-center items-center gap-3 z-50">
                <Link href="https://x.com/tarmeeztech"><FontAwesomeIcon icon={faXTwitter} className="w-5 h-5 text-sky-400 z-50"/></Link>
                <Link href="https://www.instagram.com/tarmeeztech/"><FontAwesomeIcon icon={faInstagram} className="w-5 h-5 text-sky-400"/></Link>
                <Link href="https://web.facebook.com/tarmeeztech?_rdc=1&_rdr"><FontAwesomeIcon icon={faFacebook} className="w-5 h-5 text-sky-400"/></Link>
            </div>
            <div id="capitol-callback">
                <div className="cpt-circle"></div>
                <div className="cpt-circle-fill"></div>
                <Link href="https://api.whatsapp.com/send?phone=+966577080109&text=hi from Tarrmiza%20" id="WhatsAppBtnDesktop" target="_blank" className="main-button" lang="en">
                    <Image alt="none" src="https://nhtagent.com/nht-upload/assets/javascripts/WhatsApp/WhatsApp.png" width={30} height={30}/>
                </Link>
            </div>
        </div>
    )
}