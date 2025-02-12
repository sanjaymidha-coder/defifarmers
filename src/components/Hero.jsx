"use client";
import { useRef, useEffect } from "react";
import React from "react";
import Farmer from "../assets/images/heroFarmer.jsx";
import FarmerFields from "../assets/images/farmeFields";
import brace from "../assets/images/brace.svg";
import braceRight from "../assets/images/brace-right.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/all";

gsap.registerPlugin(useGSAP, TextPlugin);

export default function Hero() {
  const bracecontainer = useRef(null);
  const tl = gsap.timeline({ repeat: 0, ease: "slow(0.7,0.7,false)" });

  useGSAP(() => {
    if (bracecontainer.current) {
      gsap.to("h1 span", {
        duration: 4,
        text: " Sustainability Clubs with DeFi Farmers",
      });
      tl.fromTo( "p", { y: -20, opacity:0 }, { y: 0, opacity:1, duration: 1 });
      tl.fromTo( "a",{ y: -20, opacity:0}, { y: 0, opacity:1});
      gsap.fromTo(
        ".brace",
        { x: "20", opacity: 0 },
        { x: "0", ease: "none", duration: 0.2, opacity: 1 }
      );
      gsap.fromTo(
        ".brace-right",
        { x: "-20", opacity: 0 },
        { x: "0", ease: "none", duration: 0.2, opacity: 1 }
      );
      gsap.fromTo(
        "p",
        { opacity: 0 },
        { ease: "none", opacity: 1, duration: 0.1 }
      );
    }
  }, []);

  return (
    <div className="bg-[#4CA146] h-screen">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 text-white lg:max-w-7xl lg:px-8">
        <div className="flex items-center gap-20">
          <div className="w-3/5 bracecontainer" ref={bracecontainer}>
            <h1 className="text-4xl font-bold leading-16 text-white sm:text-5xl title relative">
              <span>Building</span>
            </h1>

            <div className="relative px-[2.5rem]">
              <img
                className="brace absolute top-0 left-0 h-full"
                src={brace}
                alt="img"
              />
              <p className="mt-8 text-lg font-medium text-pretty">
                Treedefi is the first ecofriendly defi project. We are fighting
                carbon emission by creating a thriving ecosystem focused on NFT
                and carbon credit tokens. Now expanding in AVAX ecosystem.
              </p>
              <img
                className="brace-right absolute top-0 right-0 h-full"
                src={braceRight}
                alt="img"
              />
            </div>
            <div className="mt-10">
              <a
                href="#"
                className=" inline-block rounded-md bg-transparent px-6 border border-white py-3.5 font-semibold text-white shadow-xs hover:bg-white hover:text-[#4CA146] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
            </div>
          </div>
          <div className="w-2/5">
            <Farmer />
          </div>
        </div>
      </div>
      <div className="relative">
        <FarmerFields />
      </div>
    </div>
  );
}
