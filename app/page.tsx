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
// import { Particles } from "@/components/ui/shadcn-io/particles";
// import Testimonial from "@/components/testimonial";

export default function Home() {
  const [animate, setAnimate] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTimeout(() => setAnimate(true), 900);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="w-full px-10 md:w-2/3 md:px-0 lg:w-1/3 lg:px-0 mt-28">
        <div
          className={`w-full mb-7 flex transition-all duration-700 ease-in-out items-center relative
          ${animate ? "justify-start" : "justify-center"}`}
        >
          <Me />
          <div className="absolute right-0">
            <SlideRightDelay>
              <div className="grid grid-cols-1 gap-y-3 justify-items-end pr-1">
                <Button variant="blue-hyperlink" text="More about me ->" link="about" target="_self" textSize="text-sm"/>
              </div>
            </SlideRightDelay>
          </div>
        </div>

        <SlideUpDelay>
          <div className="flex justify-between">
            <Heading text="Hi, my name is Hung." />
          </div>
          {/* <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-6">I&rsquo;m a UX designer. I used to apply drop shadows at <span className="inline-block"><Button link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung" textSize="text-sm"/></span> and <Button link="https://www.fraserhealth.ca/" target="_blank" variant="blue-hyperlink" text="Fraser Health" textSize="text-sm"/></p> */}
          <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-6">I&rsquo;m a UX designer. I used to design at <span className="inline-block"><Button link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung" textSize="text-sm"/></span></p>
          <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-6">Much like how social media can turn attention into influence, interfaces can turn curiosity into loyalty.  As a UX designer, I value digital experiences that capture interest quickly - and sustain it through clarity and accessibility.</p>
          <div className="mb-9">
            <p className="text-sm text-[var(--colour-bodytext)]">Send me an <span className="inline-block"><Button link="mailto:d.hungtran12@gmail.com" target="_blank" variant="blue-hyperlink" text="email" textSize="text-sm"/></span></p>
            <p className="text-sm text-[var(--colour-bodytext)] mt-1.5">Send me a message on <span className="inline-block"><Button link="https://www.linkedin.com/in/hung-tran-profile/" target="_blank" variant="blue-hyperlink" text="LinkedIn" textSize="text-sm"/></span></p>
            <p className="text-sm text-[var(--colour-bodytext)] mt-1.5">Check out my <span className="inline-block"><Button link="https://drive.google.com/file/d/1F2UXNXNltAkH-Y0qinUaZDLaMNDMd6Mh/view" target="_blank" variant="blue-hyperlink" text="resume" textSize="text-sm"/></span></p>
            {/* <p className="text-sm text-[var(--colour-bodytext)] mt-6">Or read my colleagues&rsquo; and managers&rsquo; <span className="inline-block"><Button link="#testimonials" target="_self" variant="blue-hyperlink" text="testimonials" textSize="text-sm"/></span></p> */}
          </div>

          <p className="text-sm text-[var(--colour-bodytext-4)]">(scroll down)</p>
          <div className="mb-9"></div>

          <ThemeToggleButton
            theme={theme === "light" ? "dark" : "light"}
            onClick={() => {
              const next = theme === "dark" ? "light" : "dark";
              setTheme(next);
            }}
            variant="polygon"
            start="center"
            className="hover:cursor-pointer"
            showLabel={false}
          />
        </SlideUpDelay>

        <div className="mb-30 md:mb-50 lg:mb-30"></div>

        <div className="grid grid-cols-1 gap-y-40">
          <SlideUp>
            <ProjectThumbnail link="rules" name="Samsung Knox Manage: Rules" desc="Designed an EMM feature that triggers tasks when specific conditions are met (time, locations, device status & activities, etc.)" imageSrc="/rules.png" imageSrcDark="/rules-darkmode.png"/>
          </SlideUp>
          <SlideUp>
            <ProjectThumbnail link="organizations" name="Samsung Knox Manage: Organizations" desc="Designed an EMM feature that categorizes devices based on organizational structure, enables hierarchical device management." imageSrc="/org.png" imageSrcDark="/org-darkmode.png"/>
          </SlideUp>
          <SlideUp>
            <ProjectThumbnail link="demokit" name="Samsung Knox: Demo Kit" desc="Designed an interactive demo for Samsung Knox services, highlighted its key features and unique selling points for enterprise clients." imageSrc="/demo.png" imageSrcDark="/demo.png"/>
          </SlideUp>
          {/* <SlideUp>
            <ProjectThumbnail link="cardio" name="card.io" desc="Designed a Spotify feature that guides runners in creating personalized cardio playlists, helping them feel confident and in control." imageSrc="/cardioyo.png" imageSrcDark="/cardioyo.png"/>
          </SlideUp> */}
        </div>

        {/* <div className="mb-40" id="testimonials"></div>
        <div className="grid grid-cols-1 gap-y-4">
          <Heading text="Testimonials" />
          <Testimonial name="Tian Jia" job="Senior UX designer, UX lead" company="Samsung" text="Hung has excelled in his role as a UX design student, demonstrating a strong talent for both UX research and graphical UI tasks. His ability to analyze user needs and translate them into intuitive, visually appealing designs has been impressive. Overall, his dedication and versatility make him a valuable asset to any design team." companylink="https://research.samsung.com/srca"/>
          <Testimonial name="Thomas Nelles" job="Senior Communication Consultant" company="Fraser Health" text="From designing a multi-page document for our Indigenous Health team to crafting a Urgent Care video, his clients have been very impressed with his work to date. He adapts to changing timelines easily including timely requests and juggling multiple projects. His calm demeanor and ability to clearly communicate his working progress are just some of his strengths." companylink="#"/>
        </div> */}

        <div className="mt-50">
          <Footer/>
        </div>
      </div>

      {/* <Particles
        className="fixed inset-0 -z-20"
        quantity={80}
        ease={90}
        staticity={50}
        color="#ffffff"
        size={0.8}
      /> */}
    </div>
  );
}
