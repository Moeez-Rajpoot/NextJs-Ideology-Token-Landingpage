
import { Lato , Space_Grotesk } from "next/font/google";
const lato = Lato({ weight: "300", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
export default function section3() {
  return (
    <div className="h-screen bg-[#01091c] w-full">
         <div className=" w-screen h-fit  flex flex-col items-center">   {/* Upper Heading Section */}
          <p className={` w-full text-[#829fe1] text-md sm:text-xl text-center ${lato.className}`}>
            Powered by Crypto.com
          </p>
          <h2
            className={`text-center text-nowrap text-[#829fe1] text-md sm:text-[40px] mt-1 font-semibold ${spaceGrotesk.className} `}
          >
            Latest Products
          </h2>
        </div>

        {/* Lower Image Section */}
        <div className="w-full h-full bg-white">




        </div>



      
    </div>
  )
}
