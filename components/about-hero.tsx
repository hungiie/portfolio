"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <div className="w-[90%] flex justify-center items-center">
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
            className="w-[60%] mb-9"
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
        <div className="w-full flex justify-center items-center">
          <motion.div
            initial={{
              opacity: 0,
            //   scale: 0.6,
              filter: "blur(20px)",
              y: 40,
            }}
            animate={{
              opacity: 1,
            //   scale: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-[70%] aspect-square rounded-full overflow-hidden border-4 border-[var(--main-blue)] p-1"
          >
            <div className="w-full rounded-full overflow-hidden group">
              {/* <Image
                src="/lulu.jpg"
                width={716}
                height={716}
                alt="hung tran"
                className="object-cover block"
                style={{
                  filter:
                    "contrast(87%) brightness(95%) saturate(115%)",
                }}
              /> */}
              <Image
                src="/alright.jpeg"
                width={716}
                height={716}
                alt="hung tran"
                className="object-cover block"
                style={{
                  filter:
                    "contrast(87%) brightness(95%) saturate(115%)",
                }}
              />
            </div>
          </motion.div>
        </div>

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
            <div className="w-[60%]">
              <Image
                src="/tate.png"
                width={837}
                height={779}
                alt="hung tran"
                className="object-cover origin-center"
              />
            </div>
          </motion.div>

          <div className="mb-25"></div>

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
            <div className="w-[60%]">
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
