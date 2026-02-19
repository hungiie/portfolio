"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Story from "./story";
import Polaroid from "./polaroid";

export default function AboutHero() {
  return (
    <div className="w-[80%] 2xl:w-[70%] flex justify-center items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-3">

        {/* LEFT IMAGE */}
        <div className="w-full justify-center items-center hidden md:flex">
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(12px)",
              x: -40,
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              x: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-[60%] 2xl:w-[50%] mb-9"
          >
            <Image
              src="/latte.png"
              width={837}
              height={779}
              alt="hung tran"
              className="object-cover origin-center"
            />
          </motion.div>
        </div>

        {/* CENTER CIRCLE (APPEARS FIRST) */}
        {/* <Story/> */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex justify-center items-center relative"
        >
          <div className="w-full flex items-center justify-center">
            <div className="w-[55%]">
              {/* <Polaroid imageSrc="/yuh.jpg" desc="Summer 2025 📸" angle={3} alt="Hung Tran" textSize="text-xl"/> */}
              <Image src="/yuh.jpg" width={3099} height={3363} className="w-full mb-2 rounded-full shadow-xl" alt="Hung Tran" style={{ filter: 'contrast(80%)' }}/> 
              {/* <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">Summer 2025 📸</p> */}
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <div className="w-full flex-col justify-center items-center hidden md:flex">

          {/* TOP RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(12px)",
              x: 40,
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              x: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex justify-center"
          >
            <div className="w-[60%] 2xl:w-[50%]">
              <Image
                src="/tate.png"
                width={837}
                height={779}
                alt="hung tran"
                className="object-cover origin-center"
              />
            </div>
          </motion.div>

          <div className="mb-25 2xl:mb-40"></div>

          {/* BOTTOM RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(12px)",
              x: 40,
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              x: 0,
            }}
            transition={{
              delay: 1.1,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex justify-start"
          >
            <div className="w-[60%] 2xl:w-[50%]">
              <Image
                src="/oops.png"
                width={837}
                height={779}
                alt="hung tran"
                className="object-cover origin-center"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
