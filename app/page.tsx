"use client"

import Button from "@/components/button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import ProjectThumbnail from "@/components/project-thumbnail";
import SlideUp from "@/components/slide-up";
import Me from "@/components/me";
import SlideUpDelay from "@/components/slide-up-delay";
import { useEffect, useState } from "react";
import SlideRightDelay from "@/components/slide-right-delay";
import { useTheme } from "next-themes";
import { ThemeToggleButton } from "@/components/ui/shadcn-io/theme-toggle-button";
import { Particles } from "@/components/ui/shadcn-io/particles";

export default function Home() {
  const [animate, setAnimate] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTimeout(() => setAnimate(true), 900);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="w-full px-10 md:w-1/3 md:px-0 mt-30">
        <div
          className={`w-full mb-7 flex transition-all duration-700 ease-in-out items-center relative
          ${animate ? "justify-start" : "justify-center"}`}
        >
          <Me />
          <div className="absolute right-0">
            <SlideRightDelay>
              <Button variant="blue-hyperlink" text="About me ->" link="about" target="_self" textSize="text-sm"/>
            </SlideRightDelay>
          </div>
        </div>

        <SlideUpDelay>
          <div className="mb-30">
            <div className="flex justify-between">
              <Heading text="Hi, my name is Hung." />
            </div>
            <p className="text-sm bg-[var(--background)] text-[var(--colour-bodytext)] mb-6">I&lsquo;m a UX desginer at <span className="inline-block"><Button link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung" textSize="text-sm"/></span></p>
            <p className="text-sm bg-[var(--background)] text-[var(--colour-bodytext)] leading-loose mb-6">Much like how social media can turn attention into influence, interfaces can turn curiosity into loyalty.  As a UX designer, I value digital experiences that capture interest quickly - and sustain it through clarity and accessibility.</p>
            <div className="mb-9 bg-[var(--background)]">
              <p className="text-sm text-[var(--colour-bodytext)]">Send me an <span className="inline-block"><Button link="mailto:dht4@sfu.ca" target="_blank" variant="blue-hyperlink" text="email" textSize="text-sm"/></span></p>
              <p className="text-sm text-[var(--colour-bodytext)] mt-1.5">Send me a message on <span className="inline-block"><Button link="https://www.linkedin.com/in/hung-tran-profile/" target="_blank" variant="blue-hyperlink" text="LinkedIn" textSize="text-sm"/></span></p>
              <p className="text-sm text-[var(--colour-bodytext)] mt-1.5">Check out my <span className="inline-block"><Button link="https://drive.google.com/file/d/1F2UXNXNltAkH-Y0qinUaZDLaMNDMd6Mh/view" target="_blank" variant="blue-hyperlink" text="resume" textSize="text-sm"/></span></p>
            </div>
            <ThemeToggleButton
              theme={theme === "light" ? "dark" : "light"}
              onClick={() => {
                const next = theme === "dark" ? "light" : "dark";
                setTheme(next);
              }}
              variant="blur"
              start="center"
              className="hover:cursor-pointer"
              showLabel={false}
            />
          </div>
        </SlideUpDelay>

        <div className="grid grid-cols-1 gap-y-40">
          <SlideUp>
            <ProjectThumbnail link="rules" name="Samsung Knox Manage: Rules" desc="Creating conditional rules to automate management tasks, monitor device activities and set up alert system." imageSrc="/rules.png" />
          </SlideUp>
          <SlideUp>
            <ProjectThumbnail link="organizations" name="Samsung Knox Manage: Organizations" desc="Categorizing devices based on organizational structure, enabling hierarchical device management." imageSrc="/org.png" />
          </SlideUp>
          <SlideUp>
            <ProjectThumbnail link="demokit" name="Samsung Knox: Demo Kit" desc="Interactive demo for Samsung Knox services, highlighting its key features and unique selling points for enterprise clients." imageSrc="/demo.png" />
          </SlideUp>
        </div>

        <div className="">
          <Footer/>
        </div>
      </div>

      <Particles
        className="fixed inset-0 -z-20"
        quantity={0}
        ease={90}
        staticity={50}
        color="#ffffff"
        size={0.8}
      />
    </div>
  );
}
