"use client"

import MyButton from "@/components/my-button";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Props {
  variant: string;
}

export default function MyNav(props: Props) {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Common classes for nav
  const baseNavClasses =
    "w-full bg-[rgba(248,248,248,0.8)] backdrop-blur-lg border-1 border-[rgba(204,204,204,0.4)] fixed z-20 h-14 flex justify-center top-0 transition-transform duration-500";

  return (
    <nav
      className={`${baseNavClasses} ${showNav ? "translate-y-0" : "-translate-y-full"}`}
    >
      {props.variant === "To home" && (
        <div className="w-full px-10 md:w-2/3 md:px-0 lg:w-1/3 2xl:w-1/4 flex items-center justify-start">
          <MyButton
            variant="blue-hyperlink"
            text="<- Back to home"
            link="/"
            textSize="text-sm"
            target="_self"
          />
        </div>
      )}

      {props.variant === "Academics" && (
        <div className="w-full px-10 md:w-2/3 md:px-0 lg:w-2/5 2xl:w-1/4 flex items-center justify-start">
          <MyButton
            variant="blue-hyperlink"
            text="<- Back to home"
            link="/"
            textSize="text-sm"
            target="_self"
          />
        </div>
      )}

      {props.variant === "To about" && (
        <div className="w-full px-10 md:w-2/3 md:px-0 lg:w-1/3 2xl:w-1/4 flex items-center justify-between">
          <div className="relative w-[35px] h-[35px] rounded-full overflow-hidden border-none">
            <Image
              src="/me.png"
              fill
              alt="Hung Tran"
              className="object-cover"
              style={{ filter: "contrast(100%) brightness(100%)" }}
            />
          </div>
          <MyButton
            variant="blue-hyperlink"
            text="More about me ->"
            link="/"
            textSize="text-sm"
            target="_self"
          />
        </div>
      )}
    </nav>
  );
}
