"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Me() {
  return (
    <motion.div
      layout
      initial={{ scale: 0.85, y: 10, opacity: 0, filter: "blur(6px)" }}
      animate={{ scale: 1, y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.9,
        ease: [0.2, 1, 0.4, 1],
      }}
      className="flex-shrink-0"
    >
      <div className="w-[75px] h-[75px]">
        <div className="relative aspect-square rounded-xl overflow-hidden bg-black">
          <Image
            src="/me.png"
            fill
            alt="Hung Tran"
            className="object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}
