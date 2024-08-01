import { Lato, Space_Grotesk, Poppins } from "next/font/google";
const lato = Lato({ weight: "300", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const poppins = Poppins({ weight: "300", subsets: ["latin"] });

import Image from "next/image";
import Gif from "../../public/assets/movingback.gif";

export default function Section7() {
  return (
    <div className="h-fit lg:h-[120vh] relative">
      <div className="absolute w-full h-full top-0 left-0 z-0 outline-none border-none">
        <Image 
          className="object-top w-full h-full blur-md"
          src={Gif} 
          alt="Gif"
          
        />
      </div>
      <div className="w-screen h-fit flex flex-col items-center z-10 relative">
        <p
          className={`w-full text-[#829fe1] lg:mt-14 text-md sm:text-xl text-center ${lato.className}`}
        >
          Powered by Crypto.com
        </p>
        <h2
          className={`text-center text-nowrap text-[#829fe1] text-md sm:text-[40px] mt-1 font-semibold ${spaceGrotesk.className}`}
        >
          Features
        </h2>
      </div>
    </div>
  );
}