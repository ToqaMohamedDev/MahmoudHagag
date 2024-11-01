'use client'
import Link from "next/link";
import ViewTrain from "./ViewTrain";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { RiFacebookFill, RiGooglePlayFill, RiYoutubeFill } from "react-icons/ri";

export default function GsapAnimation() {
  return (
    <section className="relative">
      {/* بداية عرض ViewTrain فقط من القسم الثاني */}
      <div style={{ pointerEvents: 'none' }} className="sticky top-0 z-30 h-screen w-full pointer-events-none">
      <ViewTrain />
      </div>
      <div className="container">

        {/* 1 - القسم الأول بدون تأثير الـ sticky */}
        <div className="first-section absolute h-screen top-0 right-5 px-5 flex items-center">
          <div className="max-w-[400px] gap-y-5">
            <h1 className="maintext text-primary text-right mb-5">تطبيقنا</h1>
            <p className="subtitle text-right">
              تطبيق مستر محمود حجاج علي جوجل بلاي هتلاقي شرح جميع المنهج و المرجعات النهائية مع مذكرة خاصة تشمل جميع المنهج والاسئلة المتوقعه في الامتحانات
            </p>
            <div className="flex justify-end">
              <Link href="https://play.google.com/store/apps/details?id=com.mahmoud.hagagg&pcampaignid=web_share">
                <Button className="gap-x-2">
                  تحميل
                  <RiGooglePlayFill size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* 2 - القسم الثاني حيث يبدأ تأثير الـ sticky */}
        <div className="second-section h-screen flex items-center justify-start">
          <div className="max-w-[400px] gap-y-5">
            <h1 className="maintext text-primary text-right mb-5">اليوتيوب</h1>
            <p className="subtitle text-right">
              القناة الرسمية لشرح مادة الفيزياء لطلاب الثانوية العامة
              خبرة بالتدريس 30 عاما
              مدير ادارة تدريب المعلمين بمديرية التربية والتعليم
              الموجة العام لمادة الفيزياء بوزارة التربية والتعليم
            </p>
            <div className="flex justify-end">
              <Link href="https://www.youtube.com/@mahmoudhagagphysics">
                <Button className="gap-x-2">
                  اليوتيوب
                  <RiYoutubeFill size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="third-section h-screen flex items-center justify-end">
          <div className="max-w-[400px] gap-y-5">
            <h1 className="maintext text-primary text-right mb-5">الفيس بوك</h1>
            <p className="subtitle text-right">
              هتلاقي كل جديد علي صفحتنا علي الفيس بوك وتتابع مواعيد نزول المحاضرات والمرجعات النهائيه واهم الاسئله تابعنا ليصلك كل جديد
            </p>
            <div className="flex justify-end">
              <Link href="https://www.facebook.com/mahmoudhaggagphysics/">
                <Button className="gap-x-2">
                  الصفحه
                  <RiFacebookFill size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
