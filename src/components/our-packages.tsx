
import { faCheck, faCircle, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const OurPackages = () => {


    return <section className="font-notokufi flex flex-col justify-center items-center gap-5 font-notokufi">
        <h1 className="text-2xl font-bold p-12">عروضنا لك</h1>
        <div className="flex flex-row gap-3">
            <div className="flex flex-col border border-t-8 rounded border-sky-600 box-border p-6 gap-4 transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <div className="flex flex-col">
                    <h3 className="font-bold text-lg text-sky-600">باقة انطلق </h3>
                    <p className="font-semibold text-md">لبدء الشركات الصغيرة</p>
                </div>
                <div className="h-46 flex flex-row items-end gap-2">
                    <div className="flex flex-row">
                        <p className="text-sky-600">$</p>
                        <strong className="text-6xl text-sky-600">0</strong>
                    </div>
                    <p className="text-sm font-[400]">
                        لكل مشروع
                    </p>
                </div>
                <button className="w-60 h-10 text-white rounded-md bg-sky-600 ">ابدأ الآن</button>
                <div className="flex flex-row gap-2 items-center">
                    <FontAwesomeIcon className="w-2 h-2 text-[#dedede]" icon={faCircle} />
                    <p className="text-[#dedede] text-sm">الميزات الرئيسية</p>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-sky-300" icon={faCheck} />
                        <p className="text-[#555]">عدد صفحة هبوط واحدة </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-sky-300" icon={faCheck} />
                        <p className="text-[#555]">مدة التنفيذ 24 ساعة </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-sky-300" icon={faCheck} />
                        <p className="text-[#555]">دومين مجاني لمدة سنة</p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-sky-300" icon={faCheck} />
                        <p className="text-[#555]">استضافة مجانية لمدة سنة </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-sky-300" icon={faCheck} />
                        <p className="text-[#555]">دعم فني لمدة 3 اشهر </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-sky-300" icon={faCheck} />
                        <p className="text-[#555]">الربط مع جميع منصات السوشل ميديا</p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-sky-300" icon={faCheck} />
                        <p className="text-[#555]">الربط مع واتساب اعمال </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-sky-300" icon={faCheck} />
                        <p className="text-[#555]">الربط مع االيميل الرسمي </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-red-300" icon={faXmark} />
                        <p className="text-[#555]">الربط مع Google Map </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-red-300" icon={faXmark} />
                        <p className="text-[#555]">بدون لوحة تحكم </p>
                    </span>
                </div>
            </div>

            <div className="flex flex-col border border-t-8 rounded border-[#a420b0] box-border p-6 gap-4  transition-transform duration-300 ease-in-out hover:-translate-y-2 ">
                <div className="flex flex-col">
                    <h3 className="font-bold text-lg text-[#a420b0]">باقة النمو </h3>
                    <p className="font-semibold text-md"> لبدء الشركات الصغيرة أعمال متعددة</p>
                </div>
                <div className="h-46 flex flex-row items-end gap-2">
                    <div className="flex flex-row">
                        <p className="text-[#a420b0]">$</p>
                        <strong className="text-6xl text-[#a420b0]">0</strong>
                    </div>
                    <p className="text-sm font-[400]">
                        لكل مشروع
                    </p>
                </div>
                <button className="w-60 h-10 text-white rounded-md bg-[#a420b0] ">ابدأ الآن</button>
                <div className="flex flex-row gap-2 items-center">
                    <FontAwesomeIcon className="w-2 h-2 text-[#dedede]" icon={faCircle} />
                    <p className="text-[#dedede] text-sm">الميزات الرئيسية</p>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#a420b0]" icon={faCheck} />
                        <p className="text-[#555]">عدد 2 صفحات هبوط بتصاميم مختلفة </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#a420b0]" icon={faCheck} />
                        <p className="text-[#555]">مدة التنفيذ 48 ساعة </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#a420b0]" icon={faCheck} />
                        <p className="text-[#555]">دومين مجاني لمدة سنة</p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#a420b0]" icon={faCheck} />
                        <p className="text-[#555]">استضافة مجانية لمدة سنة </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#a420b0]" icon={faCheck} />
                        <p className="text-[#555]">دعم فني لمدة 6 اشهر </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#a420b0]" icon={faCheck} />
                        <p className="text-[#555]">الربط مع جميع منصات السوشل ميديا</p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#a420b0]" icon={faCheck} />
                        <p className="text-[#555]">الربط مع واتساب اعمال </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#a420b0]" icon={faCheck} />
                        <p className="text-[#555]">الربط مع االيميل الرسمي </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-red-300" icon={faXmark} />
                        <p className="text-[#555]">الربط مع Google Map </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-red-300" icon={faXmark} />
                        <p className="text-[#555]">بدون لوحة تحكم </p>
                    </span>
                </div>
            </div>


            <div className="flex flex-col border border-t-8 rounded border-[#d62276] box-border p-6 gap-4 transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <div className="flex flex-col">
                    <h3 className="font-bold text-lg text-[#d62276]">باقة االنتشار </h3>
                    <p className="font-semibold text-md">الشركات المتوسطة، مع المزيد من الخدمات</p>
                </div>
                <div className="h-18 flex flex-row items-end gap-2">
                    <div className="flex flex-row">
                        <p className="text-[#d62276]">$</p>
                        <strong className="text-6xl text-[#d62276]">0</strong>
                    </div>
                    <p className="text-sm font-[400]">
                        لكل مشروع
                    </p>
                </div>
                <button className="w-60 h-10 text-white rounded-md bg-[#d62276] ">ابدأ الآن</button>
                <div className="flex flex-row gap-2 items-center">
                    <FontAwesomeIcon className="w-2 h-2 text-[#dedede]" icon={faCircle} />
                    <p className="text-[#dedede] text-sm">الميزات الرئيسية</p>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#a420b0]" icon={faCheck} />
                        <p className="text-[#555]">عدد 6 صفحات </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#d62276]" icon={faCheck} />
                        <p className="text-[#555]">مدة التنفيذ 72 ساعة  </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#d62276]" icon={faCheck} />
                        <p className="text-[#555]">دومين مجاني لمدة سنة</p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#d62276]" icon={faCheck} />
                        <p className="text-[#555]">استضافة مجانية لمدة سنة </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#d62276]" icon={faCheck} />
                        <p className="text-[#555]">دعم فني لمدة سنة مجانا </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#d62276]" icon={faCheck} />
                        <p className="text-[#555]">الربط مع جميع منصات السوشل ميديا</p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#d62276]" icon={faCheck} />
                        <p className="text-[#555]">الربط مع واتساب اعمال </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#d62276]" icon={faCheck} />
                        <p className="text-[#555]">الربط مع االيميل الرسمي </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#d62276]" icon={faCheck} />
                        <p className="text-[#555]">الربط مع Google Map </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#d62276]" icon={faCheck} />
                        <p className="text-[#555]">الربط مع GOOGLE SARCH CONSOL </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#d62276]" icon={faCheck} />
                        <p className="text-[#555]">الربط مع GOOGLE TAG MANGER </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#d62276]" icon={faCheck} />
                        <p className="text-[#555]">بدون لوحة تحكم </p>
                    </span>
                </div>
            </div>

            <div className="flex flex-col border border-t-8 rounded border-[#4a281b] box-border p-6 gap-4 transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <div className="flex flex-col">
                    <h3 className="font-bold text-lg text-[#4a281b]">باقة االبداع  </h3>
                    <p className="font-semibold text-md">للمشاريع الكبيرة والضخمة</p>
                </div>
                <div className="h-16 ">
                    <p className="h-19 w-64 p-0">
                        واستشارة مجانية ,اتصل بنا لمناقشة المشروع وإعطائك الطائرة بأكملها والسعر واستشارة   
                    </p>
                </div>
                <button className="w-60 h-10 text-white rounded-md bg-[#4a281b] ">اتصل بنا</button>
                <div className="flex flex-row gap-2 items-center">
                    <FontAwesomeIcon className="w-2 h-2 text-[#dedede]" icon={faCircle} />
                    <p className="text-[#dedede] text-sm">الميزات الرئيسية</p>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text--[#4a281b]" icon={faCheck} />
                        <p className="text-[#555]">عدد النهائي من صفحات للموقع </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text--[#4a281b]" icon={faCheck} />
                        <p className="text-[#555]">مدة التنفيذ حسب المطلوب </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text--[#4a281b]" icon={faCheck} />
                        <p className="text-[#555]">دومين مجاني لمدة سنة</p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text--[#4a281b]" icon={faCheck} />
                        <p className="text-[#555]">استضافة مجانية لمدة سنة </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text--[#4a281b]" icon={faCheck} />
                        <p className="text-[#555]">دعم فني لمدة سنة مجانا </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text--[#4a281b]" icon={faCheck} />
                        <p className="text-[#555]">الربط مع جميع منصات السوشل ميديا</p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text--[#4a281b]" icon={faCheck} />
                        <p className="text-[#555]">الربط مع واتساب اعمال </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text--[#4a281b]" icon={faCheck} />
                        <p className="text-[#555]">الربط مع االيميل الرسمي </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#4a281b]" icon={faCheck} />
                        <p className="text-[#555]">الربط مع Google Map </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#4a281b]" icon={faCheck} />
                        <p className="text-[#555]">الربط مع GOOGLE SARCH CONSOL </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#4a281b]" icon={faCheck} />
                        <p className="text-[#555]">الربط مع GOOGLE TAG MANGER </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#4a281b]" icon={faCheck} />
                        <p className="text-[#555]">بدون لوحة تحكم </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#4a281b]" icon={faCheck} />
                        <p className="text-[#555]">بدون لوحة تحكم </p>
                    </span>
                    <span className="flex flex-row gap-2">
                        <FontAwesomeIcon className="w-3 h-6 text-[#4a281b]" icon={faCheck} />
                        <p className="text-[#555]">المزيد من الخدمات </p>
                    </span>
                </div>
            </div>
        </div>
    </section>
}