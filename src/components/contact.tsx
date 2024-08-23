
export const ContactUs = () => {
    return <section className="mt-48 h-full w-full box-border px-24 m-auto flex flex-row font-notokufi">
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
        <div className="w-1/2">

        </div>
    </section>
}