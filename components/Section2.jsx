import Image from "next/image"
import Vector from "../public/assets/Vector.svg";
export default function Section2() {
  return (
    <div className="h-[110vh] bg-white relative">
     <div className="absolute top-80 left-[29%]">
     <Image
      src={Vector}
      alt="Vector"
      height={250}
      width={250}


       
       >

      </Image>
     </div>
      
    </div>
  )
}
