"use client"

import MyButton from "@/components/my-button";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Props {
  variant: string;
}

export default function MyNav2(props: Props) {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
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
    "w-full bg-[var(--nav-bg)] backdrop-blur-lg border-b-1 border-[var(--nav-border)] fixed z-20 h-14 flex justify-center top-0 transition-all duration-400";

  return (
    <nav
      className={`${baseNavClasses} ${showNav ? "translate-y-0" : "-translate-y-full"}`}
    >
      {props.variant === "Abt to home" && (
        <div className="w-full px-10 md:w-2/3 md:px-0 lg:w-1/3 2xl:w-1/4 flex items-center justify-between">
          <MyButton
            variant="blue-hyperlink"
            text="<- Return to home"
            link="/"
            textSize="text-sm"
            target="_self"
          />
          <MyButton
            variant="blue-button"
            text="Resume"
            link="https://drive.google.com/file/d/1F2UXNXNltAkH-Y0qinUaZDLaMNDMd6Mh/view"
            textSize="text-sm"
            target="_blank"
          />
        </div>
      )}

      {props.variant === "Projects to home" && (
        <div className="w-full px-10 md:w-2/3 md:px-0 lg:w-[75%] 2xl:w-1/4 flex items-center justify-between">
          <MyButton
            variant="blue-hyperlink"
            text="<- Return to home"
            link="/"
            textSize="text-sm"
            target="_self"
          />
          <MyButton
            variant="blue-button"
            text="Resume"
            link="https://drive.google.com/file/d/1F2UXNXNltAkH-Y0qinUaZDLaMNDMd6Mh/view"
            textSize="text-sm"
            target="_blank"
          />
        </div>
      )}
    </nav>
  );
}
