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
      if (window.scrollY > 350) {
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
    "w-full bg-[var(--background)] backdrop-blur-lg border-b-1 border-[var(--nav-border)] fixed z-20 h-14 flex justify-center top-0 transition-all duration-400";
    // "w-full bg-transparent fixed z-20 h-22 flex justify-center top-0 transition-all duration-500";

  return (
    <nav
      className={`${baseNavClasses} ${showNav ? "translate-y-0" : "-translate-y-full"}`}
      // className={`${baseNavClasses} ${showNav ? "opacity-100" : "opacity-0"}`}
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

      {/* {props.variant === "To home" && (
        <div className="hidden lg:flex lg:w-2/3 2xl:w-2/4 items-center justify-start">
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
        <div className="hidden lg:flex lg:w-[70%] 2xl:w-2/4 items-center justify-start">
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
        <div className="hidden lg:flex lg:w-2/3 2xl:w-2/4 items-center justify-between">
          <div></div>
          <MyButton
            variant="blue-hyperlink"
            text="More about me ->"
            link="about"
            textSize="text-sm"
            target="_self"
          />
        </div>
      )} */}
    </nav>
  );
}
