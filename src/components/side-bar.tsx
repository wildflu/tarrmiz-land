import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"


export const SideBar = () => {
    return(
        <div className="flex flex-col jistify-center items-center gap-24 fixed bottom-5 left-5">
            <div className="flex flex-col jistify-center items-center gap-3">
                <Link href="https://x.com/tarmeeztech"><FontAwesomeIcon icon={faXTwitter} className="w-5 h-5 text-sky-400"/></Link>
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