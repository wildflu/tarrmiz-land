import { faClock, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ContactUs = () => {
    return <section className="font-notokufi mt-48 h-full w-full box-border px-24 m-auto flex flex-row font-notokufi">
        <div className="w-1/2 flex flex-col gap-2 box-border p-7">
            <h2 className="text-xl font-bold">تواصل معنا</h2>
            <p className="text-md font-mediium">
                لا تتردد في الاتصال بنا ومناقشة أفكارك  
            </p>
            <br />
            <div className="flex flex-col gap-6">
                <div className="flex flex-row gap-1">
                    <span className="flex flex-col gap-2 w-1/2">
                        <label className="text-md text-[#555]">الاسم الأول</label>
                        <input className="outline-none box-border p-3 border-b-2" type="text" name="" id="" placeholder="الاسم الأول هنا"/>
                    </span>
                    <span className="flex flex-col gap-2 w-1/2">
                        <label>اسم العائلة</label>
                        <input className="outline-none box-border p-3 border-b-2" type="text" name="" id="" placeholder="اسم العائلة هنا"/>
                    </span>
                </div>
                <div className="flex flex-col gap-2">
                    <label>عنوانك</label>
                    <input className="outline-none box-border p-3 border-b-2" type="text" name="" id="" placeholder="عنوانك هنا"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label>موضوع</label>
                    <input className="outline-none box-border p-3 border-b-2" type="text" name="" id="" placeholder="موضوع هنا"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label>محتوى الرسالة</label>
                    <textarea className="outline-none box-border p-3 border-b-2 w-full h-36" name="" id="" placeholder="محتوى الرسالة هنا"></textarea>
                </div>
            </div>
            <br />
            <div className="flex flex-row justify-end">
                <button className="w-48 h-12 rounded-md bg-sky-600 text-md text-white font-bold">
                    إرسال
                </button>
            </div>
        </div>
        <div className="flex flex-col gap-6 items-start justify-center box-border px-24">
            <h3 className="font-bold text-4xl leading-[50px]">اتصل بنا <br /> عندما تكون مستعدًا للمستقبل</h3>
            <nav className="flex flex-col gap-12">
                <div className="flex flex-row gap-4 items-center">
                    <FontAwesomeIcon icon={faClock} className="w-6 h-6 text-[black] bg-[whitesmoke] box-border p-4 rounded-full"/>
                    <span className="flex flex-col items-start">
                        <h4 className="text-md font-bold text-[#555]">الأحد - الخميس</h4>
                        <p className="text-sm text-[#888]">9:00 صباحا - 6:00 مساء</p>
                    </span>
                </div>

                <div className="flex flex-row gap-4 items-center">
                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 text-[black] bg-[whitesmoke] box-border p-4 rounded-full"/>
                    <span className="flex flex-col items-start">
                        <h4 className="text-md font-bold text-[#555]">اتصل بنا الآن</h4>
                        <p className="text-ms text-[#888]">+966 577 080 109</p>
                    </span>
                </div>

                <div className="flex flex-row gap-4 items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-[black] bg-[whitesmoke] box-border p-4 rounded-full"/>
                    <span className="flex flex-col items-start">
                        <h4 className="text-md font-bold text-[#555]">البريد الإلكتروني</h4>
                        <p className="text-ms text-[#888]">tarmiz@gmail.com</p>
                    </span>
                </div>

                <div className="flex flex-row gap-4 items-center">
                    <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6 text-[black] bg-[whitesmoke] box-border p-4 rounded-full"/>
                    <span className="flex flex-col items-start">
                        <h4 className="text-md font-bold text-[#555]">المملكة العربية السعودية</h4>
                        <p className="text-sm text-[#888]">مكتب B7، الطابق 1 عمارة رقم 44 شارع ابن كثير الملك عبد العزيز الرياض</p>
                    </span>
                </div>
            </nav>
        </div>
    </section>
}