
import Image from "next/image"
import host from "../../public/assets/host.svg";
import grow from "../../public/assets/grow.svg";
import seo from "../../public/assets/seo.svg";
import analytics from "../../public/assets/analytics.svg";
import support from "../../public/assets/support.svg";
import more from "../../public/assets/more.svg";


export const WhyUs = () => {
    return (
        <div className="box-border px-24 mt-48 flex flex-col items-center w-full justify-center box-border p-4 gap-24">
            <div className="flex flex-col gap-2 items-center box-border">
                <h3 className="text-xl font-bold">
                    لماذا تختارنا؟  
                </h3>
                <p className="text-md font-light">نقدم لك الخدمات الكاملة التي تحتاجها لتنمية أعمالك</p>
            </div>
            <div className="w-full flex flex-row gap-6 box-border p-3">
                <div className="w-full h-[500px] flex flex-col gap-12">
                    <div className="w-full h-1/2 flex flex-row gap-2">
                        <div className="w-1/2 h-full  rounded-md box-border p-1 hover:bg-[whitesmoke] flex flex-col justify-center items-center box-border p-2 gap-4">
                            <Image className="w-1/2 h-1/2" src={seo} alt="Not Found Image"></Image>
                            <h3 className="text-xl font-medium">تحسين SEO</h3>
                            <p className="text-xs text-[#555] text-center">
                                نقوم أيضًا بتحسين SEO لموقع الويب الخاص بك بحيث يكون أفضل في عمليات البحث
                            </p>
                        </div>
                        <div className="w-1/2 h-full  rounded-md box-border p-1 hover:bg-[whitesmoke] flex flex-col justify-center items-center box-border p-2 gap-4">
                            <Image className="w-1/2 h-1/2" src={analytics} alt="Not Found Image"></Image>
                            <h3 className="text-xl font-medium">خدمات جوجل</h3>
                            <p className="text-xs text-[#555] text-center">
                                كما نقدم خدمات جوجل
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-1/2  rounded-md hover:bg-[whitesmoke] flex flex-row box-border p-2 gap-4 ">
                        <Image className="w-1/2 h-full" src={grow} alt="Not Found Image"></Image>
                        <div className="flex flex-col gap-2 justify-center box-border p-1">
                            <h3 className="text-xl font-medium">إدارة التسويق</h3>
                            <p className="text-xs text-[#555]">
                                قد تكون إدارة التسويق أصعب قليلاً، فلا تقلق بشأن ذلك، فنحن نقدم هذه الخدمة أيضًا
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[500px] flex flex-col gap-12">
                    <div className="w-full h-1/2  rounded-md hover:bg-[whitesmoke] flex flex-row box-border p-2 gap-4">
                        <Image className="w-1/2 h-full" src={host} alt="Not Found Image"></Image>
                        <div className="flex flex-col gap-2 justify-center box-border p-1">
                            <h3 className="text-xl font-medium">استضافة ودومين مجاني</h3>
                            <p className="text-xs text-[#555]">
                                نحن نخدمك بنطاق مجاني واستضافة، لذا لا داعي للقلق بشأنهما
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-row gap-2">
                        <div className="w-1/2 h-full  rounded-md box-border p-1 hover:bg-[whitesmoke] flex flex-col justify-center items-center box-border p-2 gap-4">
                            <Image className="w-1/2 h-1/2" src={support} alt="Not Found Image"></Image>
                            <h3 className="text-xl font-medium">الدعم الفني</h3>
                            <p className="text-xs text-[#555] text-center">
                                الدعم الفني هو أيضًا خدمة يمكنك الحصول عليها معنا
                            </p>
                        </div>
                        <div className="w-1/2 h-full  rounded-md box-border p-1 hover:bg-[whitesmoke] flex flex-col justify-center items-center box-border p-2 gap-4">
                            <Image className="w-1/2 h-1/2" src={more} alt="Not Found Image"></Image>
                            <h3 className="text-xl font-medium">لدينا المزيد</h3>
                            <p className="text-xs text-[#555] text-center">
                                اتصل بنا للحصول على المزيد
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="w-full h-[500px] flex flex-row gap-12">
                <div className="w-full h-1/2 flex flex-row gap-2">
                    <div className="w-1/2 h-full  rounded-md box-border p-1 hover:bg-[whitesmoke] flex flex-col justify-center items-center box-border p-2 gap-4">
                        <Image className="w-1/2 h-1/2" src={seo} alt="Not Found Image"></Image>
                        <h3 className="text-xl font-medium">تحسين SEO</h3>
                        <p className="text-xs text-[#555] text-center">
                            نقوم أيضًا بتحسين SEO لموقع الويب الخاص بك بحيث يكون أفضل في عمليات البحث
                        </p>
                    </div>
                    <div className="w-1/2 h-full  rounded-md box-border p-1 hover:bg-[whitesmoke] flex flex-col justify-center items-center box-border p-2 gap-4">
                        <Image className="w-1/2 h-1/2" src={analytics} alt="Not Found Image"></Image>
                        <h3 className="text-xl font-medium">خدمات جوجل</h3>
                        <p className="text-xs text-[#555] text-center">
                            كما نقدم خدمات جوجل
                        </p>
                    </div>
                </div>
                <div className="w-full h-1/2  rounded-md hover:bg-[whitesmoke] flex flex-row box-border p-2 gap-4 ">
                    <Image className="w-1/2 h-full" src={grow} alt="Not Found Image"></Image>
                    <div className="flex flex-col gap-2 justify-center box-border p-1">
                        <h3 className="text-xl font-medium">إدارة التسويق</h3>
                        <p className="text-xs text-[#555]">
                            قد تكون إدارة التسويق أصعب قليلاً، فلا تقلق بشأن ذلك، فنحن نقدم هذه الخدمة أيضًا
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
} 