'use client'
import { motion } from "framer-motion";

export function DivBanner(){
    return(
        <motion.div
        className="w-[25.5625rem] h-[42px] flex justify-center items-center rounded-full py-6"
        style={{
          backgroundColor: "#FFDA79", 
        }}
     
        animate={{   
         backgroundColor: [
            "##fffbeb",
            "#fef3c7",
            "#fde68a",
            "#FFDA79", 
            "#f59e0b",
            "##ddd6fe", 
            "##c4b5fd",
            "#a78bfa",
            "#8b5cf6",
            "#e2e8f0",
            "#cbd5e1",
            "#94a3b8",
            "#f5d0fe",
            "#f0abfc",
            "#e879f9",
          ],
        }}
        transition={{
          duration: 45, 
          ease: "easeIn",
          repeat: Infinity,
          repeatType: "loop", 
        }}
      >
        <p className="font-extrabold text-[18px]">Over 3 million ready-to-work creatives!</p>
      </motion.div>
    )
}