import { Lato, Space_Grotesk, Poppins } from "next/font/google";
const lato = Lato({ weight: "300", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const poppins = Poppins({ weight: "300", subsets: ["latin"] });
import Image from "next/image";
import ball from "../../public/assets/Vector2.svg";
export default function Section6() {
  return (
    <div className="h-fit lg:h-screen w-full bg-[#01091c] relative">
      <div className="w-screen h-fit pt-14 flex flex-col items-center">
        <p
          className={`w-full text-[#829fe1] text-md sm:text-xl text-center ${lato.className}`}
        >
          IDEOLOGY
        </p>
        <h2
          className={`text-center text-nowrap text-[#829fe1] text-md sm:text-[40px] mt-1 font-semibold ${spaceGrotesk.className}`}
        >
          IDEA Network 3.0
        </h2>
      </div>

      <Image
        src={ball}
        alt="Vector ball"
        className="absolute h-[300px] top-20 -left-36 blur-md"
        ></Image>

      <div className=""></div>
    </div>
  );
}
