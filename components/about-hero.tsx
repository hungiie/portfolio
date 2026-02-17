"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SlideUpNoThres from "./slide-up-nothres";

export default function AboutHero() {
  return (
    <div className="w-[80%] 2xl:w-[80%] flex justify-center items-center">
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
            className="w-[60%] 2xl:w-[55%] mb-9"
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
        <a className="w-full flex justify-center items-center" href="#story">
          <div className="group relative flex flex-col items-center">
              <motion.div
                initial={{
                opacity: 0,
                filter: "blur(20px)",
                y: 20,
                }}
                animate={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                }}
                transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full flex justify-center items-center"
              >
                {/* <p className="absolute -top-10 text-sm text-[var(--colour-bodytext)] leading-loose">Hung's story</p> */}
                <p className="absolute -top-10 text-sm text-[var(--colour-bodytext)] leading-loose opacity-0 translate-y-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:translate-y-0">View Hung's story :)</p>
                <div className="w-[65%] 2xl:w-[65%] aspect-square rounded-full overflow-hidden border-4 group-hover:border-[var(--main-blue)] border-stone-300 p-1 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <div className="w-full rounded-full overflow-hidden group-hover:scale-97 transition-all duration-300">
                    <Image 
                      src="/er.png"
                      width={716}
                      height={716}
                      alt="hung tran"
                      className="object-cover block origin-center"
                      style={{
                      filter:"contrast(87%) brightness(95%) saturate(115%)",}}
                    />
                  </div>
                </div>
              </motion.div>
          </div>
        </a>

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
            <div className="w-[60%] 2xl:w-[55%]">
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
            <div className="w-[60%] 2xl:w-[55%]">
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
