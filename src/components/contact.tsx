import Image from "next/image"
import host from "../../public/assets/host.svg";
import grow from "../../public/assets/grow.svg";
import seo from "../../public/assets/seo.svg";
import analytics from "../../public/assets/analytics.svg";
import support from "../../public/assets/support.svg";
import more from "../../public/assets/more.svg";

export const ContactUs = () => {
    return <section className="h-full w-full box-border px-24 m-auto flex flex-row font-notokufi">
        <div className="w-5/12 flex flex-col gap-2 box-border p-7">
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
        <div className="flex flex-col items-center w-full justify-center box-border p-4 gap-12">
            <div className="flex flex-col gap-2 items-center">
                <h3 className="text-xl font-bold">
                    لماذا تختارنا؟  
                </h3>
                <p className="text-md font-light">نقدم لك الخدمات الكاملة التي تحتاجها لتنمية أعمالك</p>
            </div>
            <div className="w-full flex flex-row gap-6 box-border p-3">
                <div className="w-full h-96 flex flex-col gap-2">
                    <div className="w-full h-1/2 flex flex-row gap-2">
                        <div className="w-1/2 h-full  rounded-md box-border p-1 hover:bg-[whitesmoke] flex flex-col justify-center items-center">
                            <Image className="w-1/2 h-1/2" src={seo} alt="Not Found Image"></Image>
                            <h3 className="text-xl font-medium">تحسين SEO</h3>
                            <p className="text-xs text-[#555] text-center">
                                نقوم أيضًا بتحسين SEO لموقع الويب الخاص بك بحيث يكون أفضل في عمليات البحث
                            </p>
                        </div>
                        <div className="w-1/2 h-full  rounded-md box-border p-1 hover:bg-[whitesmoke] flex flex-col justify-center items-center">
                            <Image className="w-1/2 h-1/2" src={analytics} alt="Not Found Image"></Image>
                            <h3 className="text-xl font-medium">خدمات جوجل</h3>
                            <p className="text-xs text-[#555] text-center">
                                كما نقدم خدمات جوجل
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-1/2  rounded-md hover:bg-[whitesmoke] flex flex-row">
                        <Image className="w-1/2 h-full" src={grow} alt="Not Found Image"></Image>
                        <div className="flex flex-col gap-2 justify-center box-border p-1">
                            <h3 className="text-xl font-medium">إدارة التسويق</h3>
                            <p className="text-xs text-[#555]">
                                قد تكون إدارة التسويق أصعب قليلاً، فلا تقلق بشأن ذلك، فنحن نقدم هذه الخدمة أيضًا
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-96 flex flex-col gap-2 ">
                    <div className="w-full h-1/2  rounded-md hover:bg-[whitesmoke] flex flex-row">
                        <Image className="w-1/2 h-full" src={host} alt="Not Found Image"></Image>
                        <div className="flex flex-col gap-2 justify-center box-border p-1">
                            <h3 className="text-xl font-medium">استضافة ودومين مجاني</h3>
                            <p className="text-xs text-[#555]">
                                نحن نخدمك بنطاق مجاني واستضافة، لذا لا داعي للقلق بشأنهما
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-row gap-2">
                        <div className="w-1/2 h-full  rounded-md box-border p-1 hover:bg-[whitesmoke] flex flex-col justify-center items-center">
                            <Image className="w-1/2 h-1/2" src={support} alt="Not Found Image"></Image>
                            <h3 className="text-xl font-medium">الدعم الفني</h3>
                            <p className="text-xs text-[#555] text-center">
                                الدعم الفني هو أيضًا خدمة يمكنك الحصول عليها معنا
                            </p>
                        </div>
                        <div className="w-1/2 h-full  rounded-md box-border p-1 hover:bg-[whitesmoke] flex flex-col justify-center items-center">
                            <Image className="w-1/2 h-1/2" src={more} alt="Not Found Image"></Image>
                            <h3 className="text-xl font-medium">لدينا المزيد</h3>
                            <p className="text-xs text-[#555] text-center">
                                اتصل بنا للحصول على المزيد
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}