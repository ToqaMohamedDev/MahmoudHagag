'use client'
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { useGSAP } from "@gsap/react";

const data = [
  {
    image: "/flutter.svg",
    title: 'شرح المنهج',
    subTitle: 'عمل تطبيقات مبينيه علي فلاتر مع الفاير بيز ',
  },
  {
    image: "/node-js.svg",
    title: 'حل امتحانات',
    subTitle: ' nodejs عمل تطبيقات مبينيه علي فلاتر مع كاستم سيرفر',
  },
  {
    image: "/androidios.png",
    title: 'مرجعات نهائية',
    subTitle: 'عمل تطبيقات اندرويد و اي او اس بواسطة دارت وفلاتر ',
  },
  {
    image: "/androidios.png",
    title: 'متابعه مستمره',
    subTitle: 'عمل تطبيقات اندرويد و اي او اس بواسطة دارت وفلاتر ',
  },
];

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "900 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  });

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner flex">
          {data.map((item, index) => (
            <div key={index} className="scroll-section container flex flex-col items-center justify-center p-8 w-[100vw] text-center">
              <h1 className="md:text-9xl text-5xl font-bold mt-4 ">{item.title}</h1>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
