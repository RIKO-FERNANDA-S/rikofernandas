"use client"
import React from "react";
import { Space_Grotesk, Sofia_Sans_Condensed } from "next/font/google";
import gsap from "gsap";
import { useRef, useLayoutEffect, useEffect, useState } from "react";
import SplitType from "split-type";

export const sofia = Sofia_Sans_Condensed({
  subsets: ["latin"],
});

export const space = Space_Grotesk({
  subsets: ["latin"],
});


function Home() {
  const [time, setTime] = useState(new Date())
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      const myText = new SplitType('#heading', {types: 'chars,words'});

      tl.from(myText.chars, {
        opacity: 0,
        ease: "power4.out",
        delay: 5.5,
        duration: 1,
          y: "-100$",
          stagger: {
            each: 0.1,
            from: "center",
            amount: 1
          },
      })
    }, comp);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <main className="w-full h-screen flex flex-col">
      
      <div className="flex justify-center items-center pt-20 w-full h-[90vh]">

        <div className="relative flex ml-20 mb-55 w-full h-">
          <div className="flex gap-1 w-max h-max">
            <div className="h-14 pt-1">
              <div className="w-4 h-4  bg-blue-300 rounded-full"> </div>
            </div>
            <p className="w-32 h-14"> {time.toLocaleTimeString("id-ID", {
              hour: "2-digit",
              minute: "2-digit"
            })} WIB SURABAYA, IDN </p>
          </div>
        </div>

        <div className="absolute flex justify-center items-center overflow-hidden">
          <h1 id="heading" className="px-3 tracking-tighter font-extrabold text-[14rem]">
            WEBDEVELOPER
          </h1>
        </div>

        <div className="tracking-[1rem] flex justify-end mt-44 mr-16 relative w-full ">
          <p> UNIVERSITY STUDENT </p>
        </div>
      </div>

      <div className="w-full justify-between px-8 flex items-end font-bold">
        <h1 className="whitespace-pre italic text-2xl">{"{    WEB DESIGN (UI/UX)    }"}</h1>
        <h1 className="whitespace-pre italic text-2xl">{"{    WEB DEVELOPMENT    }"}</h1>
      </div>

    </main>
  );
}

export default Home;
