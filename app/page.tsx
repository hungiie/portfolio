"use client"

import Image from "next/image";
import MyButton from "@/components/my-button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import ProjectThumbnail2 from "@/components/project-thumbnail2";
import SlideUp from "@/components/slide-up";
import Me from "@/components/me";
import { useEffect, useState } from "react";
import SlideUpScroll from "@/components/slide-up-scroll";
import SlideRightDelay from "@/components/slide-right-delay";
import SlideUpDelay from "@/components/slide-up-delay";
import SlideRight from "@/components/slide-right";
import SlideUpNoThres from "@/components/slide-up-nothres";
import CopyEmailButton from "@/components/copyemail";
import { useTheme } from "next-themes";
import MyNav2 from "@/components/nav2";
import ProjectThumbnail from "@/components/project-thumbnail";
import { ThemeSelector } from "@/components/ui/shadcn-io/colour-toggle-button";
import { ThemeToggleButton } from "@/components/ui/shadcn-io/theme-toggle-button";


export default function Home2() {
  const [animate, setAnimate] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTimeout(() => setAnimate(true), 900);
  }, []);

  return (
    <div className="flex items-center justify-center" id="top">
        <MyNav2 variant="Home"/>
        <div className="w-full px-10 md:w-2/3 md:px-0 lg:w-[85%] 2xl:w-[80%] mt-28">
            <SlideUpNoThres>
              <div className={`w-full flex items-center relative justify-between`}>
                <div className="flex justify-start items-start" >
                  <Image src="/yuh.jpg" width={3099} height={3363} className="w-[64px] aspect-square mb-2 rounded-2xl shadow-xl" alt="Hung Tran"/> 
                </div>
                <div className="flex justify-end">
                  <MyButton variant="blue-button-outline" text="About me" link="about" target="_self" textSize="text-sm"/>
                  <div className="ml-4"></div>
                  <MyButton variant="blue-button" text="Resume" link="https://drive.google.com/file/d/1CrubhoYF0ok5oFfJT3Ffxlkr6Jp0p8Jk/view?usp=sharing" textSize="text-sm" target="_blank"/>
                </div>
              </div>

              <div className="mb-12"></div>

              <div className="flex justify-between">
                <p className="text-md font-semibold text-[var(--colour-pure)] leading-loose">Hi, my name is Hung.</p>
              </div>
              <div className="mb-9"></div>
              <div className="w-full md:w-[75%]">
                <p className="text-md text-[var(--colour-bodytext)] leading-loose mb-5">I&rsquo;m a UX designer. Previously, I designed at <span className="inline-block"><MyButton link="https://research.samsung.com/srca" target="_blank" variant="hyperlink" text="Samsung" textSize="text-md"/></span>, <span className="inline-block"><MyButton link="https://fraserhealth.ca/" target="_blank" variant="hyperlink" text="Fraser Health" textSize="text-md"/></span></p>
                <p className="text-md text-[var(--colour-bodytext)] leading-loose">I see design as a complex system of relationships, between people, technology, and context. By grounding my work in system thinking and human-computer interaction, I turn modern problems into solutions that feel human.</p>
              </div>
              <div className="mb-9"></div>
              <div>
                <p className="text-md text-[var(--colour-bodytext)]">Send me an <span className="inline-block"><MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="hyperlink" text="email" textSize="text-md"/></span></p>
                <p className="text-md text-[var(--colour-bodytext)]">Send me a message on <span className="inline-block"><MyButton link="https://www.linkedin.com/in/hung-tran-profile/" target="_blank" variant="hyperlink" text="LinkedIn" textSize="text-md"/></span></p>
                <p className="text-md text-[var(--colour-bodytext)]">Check out my <span className="inline-block"><MyButton link="https://drive.google.com/file/d/1CrubhoYF0ok5oFfJT3Ffxlkr6Jp0p8Jk/view?usp=sharing" target="_blank" variant="hyperlink" text="resume" textSize="text-md"/></span></p>
                {/* <p className="text-sm text-[var(--colour-bodytext)] mt-6">Or read my colleagues&rsquo; and managers&rsquo; <span className="inline-block"><MyButton link="#testimonials" target="_self" variant="hyperlink" text="testimonials" textSize="text-sm"/></span></p> */}
              </div>
              <div className="w-full hidden md:flex justify-start items-center mt-14 gap-4">
                <ThemeToggleButton
                  theme={theme === "light" ? "dark" : "light"}
                  onClick={() => {
                    const next = theme === "dark" ? "light" : "dark";
                    setTheme(next);
                  }}
                  variant="none"
                  start="center"
                  className="hover:cursor-pointer"
                  showLabel={false}
                />
                <ThemeSelector/>
              </div>
            </SlideUpNoThres>

            <div className="mb-30 md:mb-40"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-15">
              <SlideUpNoThres>
                <ProjectThumbnail2 isLink="video-link" link="rules" name="Samsung Knox Manage: Rules" desc="Designed a device management feature that triggers actions when specific conditions are met (time, location, device status, etc.)" imageSrc="/Rule video.mp4" imageSrcPoster="rule-poster.png" imageSrcDark="/Rule video - d.mp4" imageSrcPosterDark="rule-poster - d.png" target="_self"/>
              </SlideUpNoThres>
              <SlideUpNoThres>
                  <ProjectThumbnail2 isLink="image-link" link="organizations" name="Samsung Knox Manage: Organizations" desc="Designed a scalable, design-system–ready component that visualizes the inheritance logic among parent-child entities." imageSrc="/organize.png" imageSrcDark="/organize - d.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
              </SlideUpNoThres>
              <SlideUp>
                  <ProjectThumbnail2 isLink="video-link" link="cardio" name="card.io" desc="Designed a Spotify feature that guides runners in creating personalized cardio playlists, helping them feel confident and in control." imageSrc="/cardio video.mp4" imageSrcPoster="/cardio-poster.png" imageSrcDark="/cardio video - d.mp4" imageSrcPosterDark="/cardio-poster - d.png" target="_self"/>
              </SlideUp>
            </div>

            <div className="mb-30 md:mb-45"></div>

            <p className="text-lg text-[var(--colour-bodytext)] leading-loose mb-12">My other work spans development, visual design, and service design.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-15">
              <SlideUp>
                  <ProjectThumbnail isLink="image-link" link="https://drive.google.com/file/d/1d0jGR0QJN3mzwX6o9n0C54g6aHej0I9l/view" name="Full stack" desc="React Native note-taking app, integrating Apple Maps API, Text-to-speech API, and Firebase." imageSrc="/memorymate.png" imageSrcDark="/memorymate - d.png" imageSrcPoster="" imageSrcPosterDark="" target="_blank"/>
              </SlideUp>
              <SlideUp>
                  <ProjectThumbnail isLink="image-link" link="visuals" name="Visual design" desc={`I like to play around with visual design and motions. Here's the damage.`} imageSrc="/visuall.png" imageSrcDark="/visuall - d.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
              </SlideUp>
              <SlideUp>
                  <ProjectThumbnail isLink="image-link" link="servicedesign" name="Service design" desc="A cooling initiative helping neighbourhood houses protect vulnerable communities from extreme heat." imageSrc="/cool-tgt.png" imageSrcDark="/organize - d.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
              </SlideUp>
            </div>

            <div className="mb-55"></div>


            {/* <div className="-mb-10"></div> */}

            {/* <div className="mb-40" id="testimonials"></div>
            <div className="grid grid-cols-1 gap-y-4">
            <Heading text="Testimonials" />
            <Testimonial name="Tian Jia" job="Senior UX designer, UX lead" company="Samsung" text="Hung has excelled in his role as a UX design student, demonstrating a strong talent for both UX research and graphical UI tasks. His ability to analyze user needs and translate them into intuitive, visually appealing designs has been impressive. Overall, his dedication and versatility make him a valuable asset to any design team." companylink="https://research.samsung.com/srca"/>
            <Testimonial name="Thomas Nelles" job="Senior Communication Consultant" company="Fraser Health" text="From designing a multi-page document for our Indigenous Health team to crafting a Urgent Care video, his clients have been very impressed with his work to date. He adapts to changing timelines easily including timely requests and juggling multiple projects. His calm demeanor and ability to clearly communicate his working progress are just some of his strengths." companylink="#"/>
            </div> */}

            <Footer/>
        </div>
    </div>
  );
}

