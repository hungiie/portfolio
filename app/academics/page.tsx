"use client"

import Button from "@/components/button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import ProjectThumbnail from "@/components/project-thumbnail";
import SlideUp from "@/components/slide-up";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import SlideUpNoThres from "@/components/slide-up-nothres";
import SlideUpScroll from "@/components/slide-up-scroll";

export default function Academics() {
  const [animate, setAnimate] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTimeout(() => setAnimate(true), 900);
  }, []);

  return (
    <div className="flex items-center justify-center">
        <div className="w-full px-10 md:w-2/5 md:px-0 2xl:w-1/4 mt-20">
            <SlideUpNoThres>
                <div>
                    <Button variant="blue-hyperlink" text="<- Back to home" link="/" textSize="text-sm" target="_self"/>
                </div>

                <div className="mb-18"></div>

                <Heading text="My undergrad design & dev journey."/>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Was it worth it? Yes.</p>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Would I do it again? <s>No</s> Depends.</p>

                <div className="mb-18"></div>
            </SlideUpNoThres>

                <div className="grid grid-cols-1 gap-y-40">
                    <SlideUp>
                        <ProjectThumbnail link="https://www.figma.com/proto/dZnu88TbS026t0KrGb9kzf/Spotify-multi-select-behaviour?page-id=0%3A1&node-id=1-2&viewport=138%2C146%2C0.41&t=m8N8cWUOcJMEwyGJ-1&scaling=contain&content-scaling=fixed" name="Spotify multi-select behaviour" desc="How can the interaction of selecting and dragging multiple songs while pressing CTRL (or CMD key on Mac), can be made more accessible and recognizable for new users during their onboarding experience?" imageSrc="/spotify.png" imageSrcDark="/spotify.png" target="_blank"/>
                    </SlideUp>
                    <SlideUp>
                        <ProjectThumbnail link="" name="Jackalope" desc="Social event and community finder app, helping international students settle into a new country, with AI-powered suggestions and built-in feedback mechanisms." imageSrc="/jackalope.png" imageSrcDark="/jackalope.png" target="_self"/>
                    </SlideUp>
                    <SlideUp>
                        <ProjectThumbnail link="" name="CapCut Space team edit" desc="How can collaboration in CapCut Space be improved to allow view-only members to track the editor&rsquo;s current position on the timeline in real time, enhancing efficiency and reducing navigation effort?" imageSrc="/capcut.png" imageSrcDark="/capcut.png" target="_self"/>
                    </SlideUp>
                    {/* <SlideUp>
                        <ProjectThumbnail link="cardio" name="card.io" desc="Designed a Spotify feature that guides runners in creating personalized cardio playlists, helping them feel confident and in control." imageSrc="/cardio.png" imageSrcDark="/cardio.png" target="_self"/>
                    </SlideUp> */}
                    <SlideUp>
                        <ProjectThumbnail link="https://www.figma.com/proto/undmsCtZPr5lx5XD6y12Pr/Uber-Eats--Nutrition-Report?page-id=0%3A1&node-id=1-32&viewport=316%2C40%2C0.03&t=XLdaLQhs7zoxcBIp-1&scaling=scale-down&content-scaling=fixed" name="Uber Eats: Nutrition Report" desc="Assists and informs users about their food&rsquo;s nutrition details, makes sure their dietary needs are met." imageSrc="/ubereats.png" imageSrcDark="/ubereats.png" target="_blank"/>
                    </SlideUp>
                    <SlideUp>
                        <ProjectThumbnail link="https://drive.google.com/file/d/1d0jGR0QJN3mzwX6o9n0C54g6aHej0I9l/view" name="Memory Mate" desc="React Native note-taking app for senior citizens, built with integration of native features and APIs, such as Apple Maps, Text-to-speech, voice note." imageSrc="/memorymate.png" imageSrcDark="/memorymate.png" target="_blank"/>
                    </SlideUp>
                </div>

                <div className="mb-30"></div>

                <div className="w-full flex items-center justify-center">
                    <Button variant="blue-hyperlink" text="<- Back to home" link="/" target="_self" textSize="text-sm"/>
                </div>

                <div className="-mb-10"></div>

                <Footer/>
        </div>
    </div>
  );
}
