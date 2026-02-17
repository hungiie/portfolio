"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Story from "./story";

export default function AboutHero() {
  return (
    <div className="w-[80%] 2xl:w-[70%] flex justify-center items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 2xl:gap-x-[-100px]">

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
        <Story/>

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
