"use client";
import Homee from "@/components/layouts/home";
import { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import Navbar from "../components/layouts/navbar";
import AboutMe from "@/components/layouts/about-me";
import TextAbout from "@/components/layouts/text-about";

export default function Home() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      const myText =new SplitType('#text', {types: 'chars,words'});

     
      tl.from("#intro-slider", {
        opacity: 1
      })
        .from(myText.chars, {
          opacity: 0,
          delay: 0.3,
          y: "+=30",
          stagger: 0.3,
        }).to(myText.chars,{
          opacity: 0,
          delay: 0.3,
         
        })
        .to("#intro-slider", {
          yPercent: "-100",
          duration: 1.3,
          delay: 0.3,
        })
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={comp}
      className="relative flex items-center justify-center min-h-screen"
    >
      <div
        id="intro-slider"
        className="fixed top-0 z-20 flex items-center justify-center w-full h-screen p-10 bg-hitam lext-0"
      >
     
        <h1 id="text" className=" text-putih text-[10rem] font-bold">
          WELCOME
        </h1>
      </div>
      <div id="landing-page" className="w-full h-max">
        <Navbar/>
        <Homee />
        <TextAbout/>
        <AboutMe/>
      </div>
    </main>
  );
}
