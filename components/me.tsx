"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Me() {
  return (
    <div className="w-[65px] h-[65px]">
      <div className="relative aspect-square rounded-full overflow-hidden bg-black border-none">
        <Image
          src="/me.png"
          fill
          alt="Hung Tran"
          className="object-cover"
          style={{ filter: 'contrast(100%) brightness(100%)' }}
        />
      </div>
    </div>
  );
}
