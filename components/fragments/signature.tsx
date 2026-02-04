"use client"
import React, { useRef } from "react";
import { DrawSVGPlugin, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);
function Signature() {
    const svgRef = useRef(null);
    const svgPOne = useRef(null);
    const svgPTwo = useRef(null);
    const svgPThree = useRef(null);
    const svgPFour = useRef(null);
    const svgPFive = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: {duration: 1, ease: "power1.inOut"},
            scrollTrigger: {
                trigger: svgRef.current,
                start: "top 80%",
                end: "bottom 70%",
                scrub: 2
            }
        })
        tl.fromTo(svgPOne.current, {drawSVG: "0% 0%"}, {drawSVG: "0% 100%"})
        .fromTo(svgPTwo.current, {drawSVG: "0% 0%"}, {drawSVG: "0% 100%"})
        .fromTo(svgPThree.current, {drawSVG: "0% 0%"}, {drawSVG: "0% 100%"})
        .fromTo(svgPFour.current, {drawSVG: "0% 0%"}, {drawSVG: "0% 100%"})
        .fromTo(svgPFive.current, {drawSVG: "0% 0%"}, {drawSVG: "0% 100%"})
    }, [])


  return (
    <div className="absolute flex pt-40 right-40">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        width="159"
        height="134.011"
        fill="none"
        overflow="visible"
      >
        <g>
          <path
            d="M 31 44.011 L 47.5 111.511"
            ref={svgPOne}
            fill="transparent"
            strokeWidth="2"
            stroke="#AAA"
            strokeLinecap="round"
          ></path>
          <path
            d="M 20.872 77.511 C 20.872 77.511 4.939 75.095 1.325 57.511 C -0.482 48.719 -1.093 40.886 3.803 30.511 C 8.698 20.136 17.144 13.672 28.841 10.511 C 40.538 7.35 56.812 10.162 67 15.511 C 77.188 20.861 79.144 25.386 84.406 35.511 C 94.929 55.761 80.13 90.327 65.872 92.511 C 51.615 94.696 50.738 78.904 65.872 81.011 C 81.007 83.119 83.592 101.011 84.372 101.011 C 85.153 101.011 85.497 90.636 86.372 90.511 C 87.247 90.386 86.997 100.636 87.872 100.511 C 88.747 100.386 88.747 89.886 89.872 90.011 C 90.997 90.136 90.44 100.66 91.372 101.011 C 92.305 101.362 91.719 90.011 93.372 90.011 C 95.026 90.011 94.346 101.638 95.372 101.011 C 96.399 100.384 111.735 104.886 115.485 77.511 C 119.235 50.136 119.735 -0.864 117.985 0.011 C 116.235 0.886 105.61 36.136 108.485 81.011 C 111.36 125.886 117.985 134.011 117.985 134.011"
            ref={svgPTwo}
            fill="transparent"
            strokeWidth="2"
            stroke="#AAA"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M 100 94.011 L 100 94.011 L 124.5 85.511 L 124.5 85.511 Z"
            ref={svgPThree}
            fill="transparent"
            strokeWidth="2"
            stroke="#AAA"
            strokeLinejoin="round"
          ></path>
          <path
            d="M 82.5 85.511 C 82.5 85.511 88.5 73.636 90.5 72.511 C 92.5 71.386 89.625 81.011 90.5 81.011 C 91.375 81.011 93.25 72.511 94 72.511 C 94.75 72.511 92.75 81.011 93.5 81.011 C 94.25 81.011 96.375 72.511 97 72.511 C 97.625 72.511 94.25 81.386 96 81.011 C 97.75 80.636 104 71.011 104 71.011"
            ref={svgPFour}
            fill="transparent"
            strokeWidth="2"
            stroke="#AAA"
            strokeLinecap="round"
          ></path>
          <path
            d="M 26.5 123.511 L 159 99.511"
            ref={svgPFive}
            fill="transparent"
            strokeWidth="2"
            stroke="#AAA"
            strokeLinecap="round"
          ></path>
        </g>
      </svg>
    </div>
  );
}

export default Signature;
