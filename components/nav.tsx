"use client"

import MyButton from "@/components/my-button";
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
    "w-full bg-transparent fixed z-20 mt-10 flex justify-center top-0 transition-all duration-500";

  return (
    <nav className={`${baseNavClasses} ${showNav ? "opacity-100" : "opacity-0"}`}>
      
      {props.variant === "To home" && (
        <div className="hidden lg:flex lg:w-2/3 2xl:w-2/4 items-center justify-between">
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
        <div className="hidden lg:flex lg:w-2/3 2xl:w-2/4 items-center justify-end">
          <div></div>
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
