"use client"

import MyButton from "@/components/my-button";
import { useState, useEffect } from "react";
import DotsMenu from "./menu";

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

  // base classes for nav
  const baseNavClasses ="w-full bg-[var(--background)] backdrop-blur-lg border-b-1 border-[var(--nav-border)] fixed z-20 h-14 flex justify-center top-0 transition-all duration-400";
  return (
    <nav className={`${baseNavClasses} ${showNav ? "translate-y-0" : "-translate-y-full"}`}>
      {props.variant === "Abt to home" && (
        <div className="w-full px-10 md:w-2/3 md:px-0 lg:w-1/3 2xl:w-[25%] flex items-center justify-between">
          <MyButton variant="blue-hyperlink" text="Return to home" link="/" textSize="text-sm" target="_self"/>
          <MyButton variant="blue-button" text="Resume" link="https://drive.google.com/file/d/1CrubhoYF0ok5oFfJT3Ffxlkr6Jp0p8Jk/view?usp=sharing" textSize="text-sm" target="_blank"/>
        </div>
      )}

      {props.variant === "Projects to home" && (
        <div className="w-full px-10 md:px-0 md:w-2/3 lg:w-[75%] 2xl:w-[60%] flex items-center justify-between relative">
          <MyButton
            variant="blue-hyperlink"
            text="Return to home"
            link="/"
            textSize="text-sm"
            target="_self"
          />

          {/* Desktop buttons */}
          <div className="hidden md:flex">
            <MyButton
              variant="blue-button-outline"
              text="About me"
              link="about"
              textSize="text-sm"
              target="_self"
            />
            <div className="ml-3" />
            <MyButton
              variant="blue-button"
              text="Resume"
              link="https://drive.google.com/file/d/1CrubhoYF0ok5oFfJT3Ffxlkr6Jp0p8Jk/view?usp=sharing"
              textSize="text-sm"
              target="_blank"
            />
          </div>

          {/* Mobile 3-dots menu */}
          <DotsMenu />
        </div>
      )}

    </nav>
  );
}
