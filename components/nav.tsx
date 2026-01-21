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
    "w-full bg-[var(--nav-bg)] backdrop-blur-lg border-b-[0.75px] border-[var(--nav-border)] fixed z-20 h-14 flex justify-center top-0 transition-transform duration-500";
    // "w-full bg-[var(--background)] fixed z-20 h-14 flex justify-center top-0 transition-transform duration-500";

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
          <div className="relative w-[30px] h-[30px] rounded-full overflow-hidden border-none">
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
            link="about"
            textSize="text-sm"
            target="_self"
          />
        </div>
      )}
    </nav>
  );
}
