import Logo from "../../public/assets/logo.svg";
import footer from "../../public/assets/footer.svg";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });
const poppinlight = Poppins({ weight: "300", subsets: ["latin"] });
export default function Footer() {
  return (
    <div className="h-[75vh] w-full bg-[#000717] flex flex-col justify-center items-center">
      <div className="w-[60%] flex  -mt-10 mr-5 h-72">
        {/* text div */}
        <div className="w-1/3 flex justify-center ">
          <Image src={Logo} alt="logo" className="h-12 w-36"></Image>
        </div>
        <div className="w-1/3  flex justify-center ">
          <Image src={footer} alt="logo" className="h-12 w-36"></Image>
        </div>
        <div className="w-1/3  flex flex-col items-center">
          <h3 className={`mt-2 ${poppins.className} text-[#879cce] mr-10 `}>
            NAVIGATION
          </h3>

          <p
            className={`mt-9 w-fit -ml-[33%] text-sm ${poppinlight.className} text-[#879cce] hover:border-b-[1px] hover:border-[#7a91c5] cursor-default  `}
          >
            Docs
          </p>
          <p
            className={`mt-4 w-fit -ml-[28%] text-sm ${poppinlight.className} text-[#879cce] hover:border-b-[1px] hover:border-[#7a91c5] cursor-default `}
          >
            Games
          </p>
          <p
            className={`mt-4 w-fit -ml-[24%] text-sm ${poppinlight.className} text-[#879cce] hover:border-b-[1px] hover:border-[#7a91c5] cursor-default `}
          >
            Mainlads
          </p>
          <p
            className={`mt-4 w-fit -ml-[18%] text-sm ${poppinlight.className}  text-[#879cce] hover:border-b-[1px] hover:border-[#7a91c5] cursor-default  `}
          >
            Work as Pro
          </p>
        </div>
      </div>

      <div className="border-b-[1px] w-[90%] opacity-5 border-white">
        {" "}
        {/* border div */}
      </div>

      <div> {/* icons div */}</div>
    </div>
  );
}
