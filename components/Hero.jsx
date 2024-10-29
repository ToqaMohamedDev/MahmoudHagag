import React from 'react'

import { Download, Send } from "lucide-react";

import Social from "./socials";
import Link from 'next/link';
import { Button } from './ui/button';
import TeacherImage from './TeacherImage';
import ParticlesContainer from './ParticelsContainers';

export default function Hero() {
  return (
<section className="py-12 xl:py-24  xl:pt-28">
<ParticlesContainer />
<div className='container mx-auto'>
      
        <div className='flex flex-col  xl:flex-row-reverse justify-between gap-x-8'>
          {/*1*/}
          <div className='animate-image-once lex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 
       text-center xl:text-right'>
            <div className="text-md uppercase font-semibold mb-4 text-primary tracking-[4px]">
              مدرس الفزياء
            </div>

            <h1 className="h1 mb-6">مستر محمود حجاج مدرس اول في الفزياء</h1>

            <p className="subtitle max-w-[600px] mx-auto xl:mx-0 xl:text-right">
              شرح الفزياء بطريقه ممتعه وبسيطه جدا لطلاب الثانويه العامه
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12 justify-center xl:justify-end">
              <Link href={`tel:+201111147027`}>
                <Button className="gap-x-2">
                  اتصل بي
                  <Send size={18} />
                </Button>
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.mahmoud.hagagg&pcampaignid=web_share">
                <Button variant="secondary" className="gap-x-2">
                  التطبيق
                  <Download size={18} />
                </Button>
              </Link>
            </div>
            <Social
              containerStyles='flex flex-row mx-auto gap-x-6 xl:mx-0 justify-center xl:justify-end'
              iconStyles='text-[22px] hover:text-primary transition-all'
            />
          </div>

          {/*2*/}
          <div className='animate-once flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 
       text-center xl:text-left'>
            <TeacherImage />
          </div>
        </div>
      </div>
    </section>

  )
}
