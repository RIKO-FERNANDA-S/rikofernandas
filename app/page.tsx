"use client";
import Homee from "@/components/layouts/home";
import { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import Navbar from "../components/layouts/navbar";
import About from "@/components/layouts/about";

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
      className="flex min-h-screen items-center justify-center relative"
    >
      <div
        id="intro-slider"
        className=" h-screen w-full p-10 bg-[#0E0E0E] absolute top-0 lext-0 z-10 flex justify-center items-center"
      >
     
        <h1 id="text" className=" text-[#F5F5F5] text-[10rem] font-bold">
          WELCOME
        </h1>
      </div>
      <div id="landing-page" className="w-full h-max">
        <Navbar/>
        <Homee />
        <About/>
      </div>
    </main>
  );
}
