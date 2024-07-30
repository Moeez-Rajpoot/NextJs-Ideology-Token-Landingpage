"use client";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Section1bar() {
  return (
    <div className={`${spaceGrotesk.className} uppercase text-xl text-nowrap flex justify-center items-center h-16 mb-96 w-screen right-0 bg-[#0C71BC] border-[#092550]`}>
      <motion.p
        animate={{
          x: [0, 500, -300 , 0], // Moves right a little (100px) and then left a lot (-500px)
        }}
        transition={{
          duration: 10, 
          ease: 'easeOut', 
          repeat: Infinity, 
        }}
        className='text-white'
      >
        Quarter 2 Projects Ready for Launch  |  Manialands Promo Video Released  |  Ideaology CEO Live on Space  |  New Blockchain Integrations Announced  |  Freelancer Platform Updates Coming Soon
      </motion.p>
    </div>
  );
}