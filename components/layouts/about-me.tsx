"use client";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import React from "react";
import Gambar from "../../public/image/rikofs.png";
import AboutCard from "../fragments/about-signature";

function aboutMe() {
  return (
    <section className="h-max p-8 w-full bg-hitam flex flex-col gap-5">
      <div className="w-full flex justify-between items-center h-20">
        <p className="text-putih font-light">ABOUT ME</p>
        <ChevronLeft className="text-putih rotate-135" />
      </div>

      <article className="w-full gap-10 flex justify-center">
        <div className="w-1/2 flex justify-end text-right ">
          <h1 className="text-putih italic text-[6.7rem] w-[86%] leading-23 uppercase font-extrabold ">
            I build web experiences that feel clear, calm, and intentional.
          </h1>
        </div>
        <div className="w-max flex flex-col h-max gap-3 ">
          <Image src={Gambar} alt="gambar1" className="w-auto h-120" />
          <div className="flex flex-col text-putih justify-center items-center">
            <p>HELLO WORLD</p>
            <p>I'M RIKO FERNANDA SAPUTRA</p>
          </div>
        </div>
      </article>

      <div className="w-full flex justify-between items-center h-20">
        <ChevronLeft className="text-putih -rotate-45" />
        <p className="text-putih font-light">PR0001</p>
      </div>

      <AboutCard/>
    </section>
  );
}

export default aboutMe;
