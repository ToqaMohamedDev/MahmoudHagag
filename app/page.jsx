'use client'
import GsapAnimation from "@/components/GsapAnimation";
import Hero from "@/components/Hero";
import useBlobity from 'blobity/lib/react/useBlobity'
import ScrollSection from "@/components/ScrollSection";
import { Youtube } from "@/components/Youtube";
import {initialBlobityOptions} from './utils/BlobityConfig'
import { useEffect } from "react";

export default function Home() {
  const blobityInstanse=useBlobity(initialBlobityOptions);
  useEffect(()=>{
 
  window.blobity=blobityInstanse.current;
  },[blobityInstanse]);
  return (
<div>
  <Hero/>
  <GsapAnimation/>
  <Youtube/>
  <ScrollSection/>
</div>
  );
}


