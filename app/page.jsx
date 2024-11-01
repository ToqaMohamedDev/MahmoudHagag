import GsapAnimation from "@/components/GsapAnimation";
import Hero from "@/components/Hero";
import PreLoader from "@/components/PreLoader/PreLoader";
import ScrollSection from "@/components/ScrollSection";
import { Youtube } from "@/components/Youtube";


export default function Home() {
  return (
    <>
      <PreLoader />
      <div>
        <Hero />
        <GsapAnimation />
        <Youtube />
        <ScrollSection />
      </div>
    </>
  );
}


