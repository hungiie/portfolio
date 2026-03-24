"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Albums() {
  const [hovered, setHovered] = useState<string | null>(null);

  const getCenterText = () => {
    if (!hovered) return "...";
    return hovered;
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full 2xl:w-[90%] grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_2fr_1fr_1fr_1fr]">
        <div></div>
        {/* column 1 */}
        <div className="w-full justify-center items-center hidden md:flex">
          <motion.div
            onHoverStart={() => setHovered("Silence Between Songs")}
            onHoverEnd={() => setHovered(null)}
            initial={{
              opacity: 0,
              filter: "blur(12px)",
               
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
               
            }}
            transition={{
              delay: 1.1,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-[60%] mr-2 mb-9"
          >
            <motion.div
              animate={{ scale: hovered === "Silence Between Songs" ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className=" "
            >
              <Image src="/sbs.png" width={837} height={779} className="w-full rounded-xl 2xl:rounded-2xl shadow-md -rotate-6" alt="hung tran dark mode"/>
            </motion.div>
          </motion.div>
        </div>


        {/* column 2 */}
        <div className="w-full flex-col justify-center items-center hidden md:flex">

          {/* top */}
          <motion.div
            onHoverStart={() => setHovered("think later")}
            onHoverEnd={() => setHovered(null)}
            className="flex justify-center  w-[60%]"
            initial={{
              opacity: 0,
              filter: "blur(12px)",
               
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
               
            }}
            transition={{
              delay: 0.8,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              animate={{ scale: hovered === "think later" ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className=" "
            >
              <Image src="/think later.jpeg" width={837} height={779} className="w-full rounded-xl shadow-md rotate-6" alt="hung tran dark mode"/>
            </motion.div>
          </motion.div>

          <div className="mb-25 2xl:mb-40"></div>

          {/* bottom */}
          <motion.div
            onHoverStart={() => setHovered("The Secret Of Us")}
            onHoverEnd={() => setHovered(null)}
            className="flex justify-start  w-[60%]"
            initial={{
              opacity: 0,
              filter: "blur(12px)",
               
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
               
            }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              animate={{ scale: hovered === "The Secret Of Us" ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className=" "
            >
              <Image src="/tsou.jpeg" width={837} height={779} className="w-full rounded-xl shadow-md -rotate-8" alt="hung tran dark mode"/>
            </motion.div>
          </motion.div>

        </div>

        {/* column 3 (center) */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)"}}
          animate={{ opacity: 1, filter: "blur(0px)"}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex flex-col justify-center items-center relative"
        >

          <div className="w-[55%]">
            <motion.div
              onHoverStart={() => setHovered("Red (Taylor's Version)")}
              onHoverEnd={() => setHovered(null)}
              animate={{ scale: hovered === "Red (Taylor's Version)" ? 1.02 : 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Image src="/red.jpeg" width={3099} height={3363} className="w-full mb-2 rounded-3xl shadow-2xl -rotate-2" alt="Hung Tran" style={{ filter: "contrast(100%)" }}/>
            </motion.div>
          </div>

          <div className="mt-10 text-sm text-[var(--colour-bodytext-3)] z-10 pointer-events-none hidden md:block">
            Albums on repeat
          </div>
          <div className="mt-1 text-sm text-[var(--colour-bodytext-3)] z-10 pointer-events-none hidden md:block">
            {getCenterText()}
          </div>
        </motion.div>

        {/* column 4 */}
        <div className="w-full flex-col justify-center items-center hidden md:flex">

          {/* top */}
          <motion.div
            onHoverStart={() => setHovered("So Close To What")}
            onHoverEnd={() => setHovered(null)}
            className="flex justify-start  w-[60%]"
            initial={{
              opacity: 0,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              animate={{ scale: hovered === "So Close To What" ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className=" "
            >
              <Image src="/sctw.png" width={837} height={779} className="w-full rounded-xl shadow-md -rotate-8" alt="hung tran dark mode"/>
            </motion.div>
          </motion.div>

          <div className="mb-25 2xl:mb-40"></div>

          {/* bottom */}
          <motion.div
            onHoverStart={() => setHovered("Life Support")}
            onHoverEnd={() => setHovered(null)}
            initial={{
              opacity: 0,
              filter: "blur(12px)",
               
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 0.8,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className=" w-[60%]"
          >
            <motion.div
              animate={{ scale: hovered === "Life Support" ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className=" "
            >
              <Image src="/life support.webp" width={837} height={779} className="w-full rounded-xl 2xl:rounded-2xl shadow-md rotate-6" alt="hung tran dark mode"/>
            </motion.div>
          </motion.div>
        </div>

        {/* column 5 */}
        <div className="w-full justify-center items-center hidden md:flex">
          <motion.div
            onHoverStart={() => setHovered("1989 (Taylor's version)")}
            onHoverEnd={() => setHovered(null)}
            className="mb-9 ml-2 w-[60%]"
            initial={{
              opacity: 0,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 1.1,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              animate={{ scale: hovered === "1989 (Taylor's version)" ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className=" "
            >
              <Image src="/1989.jpeg" width={837} height={779} className="w-full rounded-xl shadow-md rotate-6" alt="hung tran dark mode"/>
            </motion.div>
          </motion.div>
        </div>
        <div></div>
      </div>
    </div>
  );
}