"use client";
import { useState } from "react";
import { Space_Grotesk, Lato, Poppins } from "next/font/google";
import Vector from "../../public/assets/Vector.svg";
import Image from "next/image";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const lato = Lato({ weight: "300", subsets: ["latin"] });
const poppins = Poppins({ weight: "300", subsets: ["latin"] });
export default function Section9() {
  const [input1, setInput1] = useState("Your email");
  return (
    <div className="h-fit flex justify-center lg:h-[65vh] bg-[#020b1e]">
      <div className="relative mt-28 w-[80%] rounded-tr-[2.5rem] rounded-tl-[2.5rem] bg-[#030e26] h-80 overflow-hidden">
        <div className="h-56 w-[53%] mt-9 ml-10">
          <h1
            className={`${spaceGrotesk.className} text-[#829FE2] text-[40px] font-semibold pl-4`}
          >
            Get more updates
          </h1>

          <p className={`${lato.className} text-[#829FE2] text-xl pl-4 pr-10`}>
            Join our mailing list to stay in the loop with our newest feature
            releases, crypto staking, trips and tricks.
          </p>

          <div className="flex gap-2 justify-center items-center ">
            <input
              onMouseEnter={() => {
                setInput1("I");
              }}
              onMouseLeave={() => {
                setInput1("Your email");
              }}
              className={` input-field text-sm px-6  mt-7 py-4 w-[90%] lg:w-[67%] rounded-lg border-none outline-none bg-[#0b172f] text-[#829FE2] ${poppins.className} `}
              type="text"
              placeholder={input1}
            />

            <button
              className={`mt-6 text-sm ${poppins.className} mb-5 ml-1 lg:mb-0 h-14  rounded-full bg-[#0b70bc] hover:bg-gradient-to-r from-[#0C71BC] to-[#0A25B1] text-white px-10 py-2 `}
            >
              Start Staking
            </button>
          </div>
        </div>
        <Image
          className="h-[180%] float-right -mt-72 -mr-24 w-fit"
          src={Vector}
          alt="vector"
        ></Image>
      </div>
    </div>
  );
}
