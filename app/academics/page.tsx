// "use client"

// import MyButton from "@/components/my-button";
// import Footer from "@/components/footer";
// import Heading from "@/components/heading";
// import ProjectThumbnail from "@/components/project-thumbnail";
// import { useEffect, useState } from "react";
// import { useTheme } from "next-themes";
// import SlideUpNoThres from "@/components/slide-up-nothres";
// import ProjectVideo from "@/components/project-video";
// import MyNav from "@/components/nav";

// export default function Academics() {
//   const [animate, setAnimate] = useState(false);
//   const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     setTimeout(() => setAnimate(true), 900);
//   }, []);

//   return (
//     <div>
//         {/* <MyNav variant="Academics"/> */}
//         <SlideUpNoThres>
//             <div className="flex items-center justify-center">
//                 <div className="w-full px-10 md:w-2/3 md:px-0 lg:w-2/5 2xl:w-1/4 mt-20">
//                     <div>
//                         <MyButton variant="blue-hyperlink" text="<- Return to home" link="/" textSize="text-sm" target="_self"/>
//                     </div>

//                     <div className="mb-18"></div>

//                     <Heading text="My undergrad design & dev journey"/>
//                     {/* <p className="text-sm text-[var(--colour-bodytext)] leading-loose">This portfolio includes both professional and academic work. While my professional work shows real impact, these academic projects show my way to think, explore, and experiment when given space.</p> */}
//                     <div className="mb-6"></div>
//                     <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Was it worth it? Yes.</p>
//                     <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Would I do it again? <s>No</s> Depends.</p>
//                     <div className="mb-6"></div>
//                     <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">This page is still a work in progress 🚧.</p>
//                 </div>
//             </div>

//             {/* <div className="mb-20"></div> */}

//             <div className="flex items-center justify-center">
//                 <div className="w-full px-10 md:w-2/3 md:px-0 lg:w-2/5 2xl:w-1/4">
//                     <div className="mb-18"></div>

//                     <div className="grid grid-cols-1 gap-y-25">
//                         {/* <ProjectVideo isLink="no" link="https://www.figma.com/proto/dZnu88TbS026t0KrGb9kzf/Spotify-multi-select-behaviour?page-id=0%3A1&node-id=1-2&viewport=138%2C146%2C0.41&t=m8N8cWUOcJMEwyGJ-1&scaling=contain&content-scaling=fixed" name="Spotify multi-select behaviour" desc="How can the interaction of selecting and dragging multiple songs while pressing CTRL (or CMD key on Mac), can be made more accessible and recognizable for new users during their onboarding experience?" vidSrc="/spotify.mp4" target="_blank" bgColor="#000000" className="w-3/4"/> */}
//                         <ProjectThumbnail isLink="no" link="https://www.figma.com/proto/dZnu88TbS026t0KrGb9kzf/Spotify-multi-select-behaviour?page-id=0%3A1&node-id=1-2&viewport=138%2C146%2C0.41&t=m8N8cWUOcJMEwyGJ-1&scaling=contain&content-scaling=fixed" name="Spotify's multi-select pattern" desc="A more discoverable, beginner-friendly bulk-select pattern for Spotify Desktop, replacing the selecting + CTRL/CMD on Mac interaction." imageSrc="/spotify.png" imageSrcDark="/spotify.png" target="_blank"/>
//                         <ProjectThumbnail isLink="no" link="https://drive.google.com/file/d/1d0jGR0QJN3mzwX6o9n0C54g6aHej0I9l/view" name="React Native app connecting to APIs and device features" desc="Memory Mate is a note-taking app for senior citizens, integrating APIs such as Apple Maps, Text-to-speech, and Firebase for backend database and user authentication." imageSrc="/memorymate.png" imageSrcDark="/memorymate.png" target="_blank"/>
//                         {/* <ProjectThumbnail isLink="no" link="" name="Locating editor's live position on CapCut's timeline" desc="Team collaboration in CapCut Space can be improved by enabling view-only members to see the editor’s current timeline position in real time." imageSrc="/capcut.png" imageSrcDark="/capcut.png" target="_blank"/> */}
//                         <ProjectThumbnail isLink="no" link="cardio" name="Create personalized running playlists with card.io" desc="Designed a Spotify feature that guides runners in creating personalized cardio playlists, helping them feel confident and in control." imageSrc="/cardiohi.png" imageSrcDark="/cardiohi.png" target="_self"/>
//                         <ProjectThumbnail isLink="no" link="" name="Jambo Grill - Winning the Best Usability Award at FLUI 2025 Hackathon, Emily Carr University of Art & Design" desc="Redesigned the website for a Persian & African family-owned restaurant." imageSrc="/jambogrill.png" imageSrcDark="/jambogrill.png" target="_self"/>
//                         <ProjectThumbnail isLink="no" link="" name="Jackalope - AI assist app for international students" desc="Social event and community finder app, helping international students settle into a new country, with AI-powered suggestions and built-in feedback mechanisms." imageSrc="/jackalope.png" imageSrcDark="/jackalope.png" target="_self"/>
//                         <ProjectThumbnail isLink="no" link="https://www.figma.com/proto/undmsCtZPr5lx5XD6y12Pr/Uber-Eats--Nutrition-Report?page-id=0%3A1&node-id=1-32&viewport=316%2C40%2C0.03&t=XLdaLQhs7zoxcBIp-1&scaling=scale-down&content-scaling=fixed" name="Tracking nutrition for frequent Uber Eats users" desc="Uber Eats feature that assists and informs regular users about their food&rsquo;s nutrition details, makes sure specified dietary needs are met." imageSrc="/ubereats.png" imageSrcDark="/ubereats.png" target="_blank"/>
//                     </div>

//                     <div className="mb-30"></div>

//                     <div className="w-full flex items-center justify-center">
//                         <MyButton variant="blue-hyperlink" text="<- Return to home" link="/" target="_self" textSize="text-sm"/>
//                     </div>
//                     <div className="-mb-10"></div>

//                     <Footer/>
//                 </div>
//             </div>
//         </SlideUpNoThres>
//     </div>
//   );
// }


"use client"

import MyButton from "@/components/my-button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import ProjectThumbnail from "@/components/project-thumbnail";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import SlideUpNoThres from "@/components/slide-up-nothres";
import ProjectVideo from "@/components/project-video";
import MyNav from "@/components/nav";
import MyNav2 from "@/components/nav2";

export default function Academics() {
  const [animate, setAnimate] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTimeout(() => setAnimate(true), 900);
  }, []);

  return (
    <div>
        <div>
            <MyNav2 variant="Projects to home"/>
            <div className="flex items-center justify-center">
                <div className="w-full px-10 md:w-2/3 md:px-0 lg:w-[75%] 2xl:w-1/4 mt-20">
                    <div className="w-full flex justify-between">
                        <MyButton variant="blue-hyperlink" text="<- Return to home" link="/" textSize="text-sm" target="_self"/>
                        <MyButton variant="blue-button" text="Resume" link="https://drive.google.com/file/d/1F2UXNXNltAkH-Y0qinUaZDLaMNDMd6Mh/view" textSize="text-sm" target="_blank"/>
                    </div>

                    <div className="mb-18"></div>

                    <Heading text="My undergrad design & dev journey"/>
                    {/* <p className="text-sm text-[var(--colour-bodytext)] leading-loose">This portfolio includes both professional and academic work. While my professional work shows real impact, these academic projects show my way to think, explore, and experiment when given space.</p> */}
                    <div className="mb-6"></div>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Was it worth it? Yes.</p>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Would I do it again? <s>No</s> Depends.</p>
                    <div className="mb-6"></div>
                    <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">This page is still a work in progress 🚧.</p>
                </div>
            </div>

            {/* <div className="mb-20"></div> */}

            <div className="flex items-center justify-center">
                <div className="w-full px-10 md:w-2/3 md:px-0 lg:w-[75%] 2xl:w-1/4">
                    <div className="mb-18"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-25">
                        {/* <ProjectVideo isLink="no" link="https://www.figma.com/proto/dZnu88TbS026t0KrGb9kzf/Spotify-multi-select-behaviour?page-id=0%3A1&node-id=1-2&viewport=138%2C146%2C0.41&t=m8N8cWUOcJMEwyGJ-1&scaling=contain&content-scaling=fixed" name="Spotify multi-select behaviour" desc="How can the interaction of selecting and dragging multiple songs while pressing CTRL (or CMD key on Mac), can be made more accessible and recognizable for new users during their onboarding experience?" vidSrc="/spotify.mp4" target="_blank" bgColor="#000000" className="w-3/4"/> */}
                        <ProjectThumbnail isLink="no" link="https://www.figma.com/proto/dZnu88TbS026t0KrGb9kzf/Spotify-multi-select-behaviour?page-id=0%3A1&node-id=1-2&viewport=138%2C146%2C0.41&t=m8N8cWUOcJMEwyGJ-1&scaling=contain&content-scaling=fixed" name="Spotify's multi-select pattern" desc="A more discoverable, beginner-friendly bulk-select pattern for Spotify Desktop, replacing the selecting + CTRL/CMD on Mac interaction." imageSrc="/spotify.png" imageSrcDark="/spotify.png" target="_blank"/>
                        <ProjectThumbnail isLink="no" link="https://drive.google.com/file/d/1d0jGR0QJN3mzwX6o9n0C54g6aHej0I9l/view" name="React Native app connecting to APIs and device features" desc="Memory Mate is a note-taking app for senior citizens, integrating APIs such as Apple Maps, Text-to-speech, and Firebase for backend database and user authentication." imageSrc="/memorymate.png" imageSrcDark="/memorymate.png" target="_blank"/>
                        {/* <ProjectThumbnail isLink="no" link="" name="Locating editor's live position on CapCut's timeline" desc="Team collaboration in CapCut Space can be improved by enabling view-only members to see the editor’s current timeline position in real time." imageSrc="/capcut.png" imageSrcDark="/capcut.png" target="_blank"/> */}
                        <ProjectThumbnail isLink="no" link="cardio" name="Create personalized running playlists with card.io" desc="Designed a Spotify feature that guides runners in creating personalized cardio playlists, helping them feel confident and in control." imageSrc="/cardiohi.png" imageSrcDark="/cardiohi.png" target="_self"/>
                        <ProjectThumbnail isLink="no" link="" name="Jambo Grill - website redesign" desc="Winning the Best Usability Award at FLUI 2025 Hackathon at Emily Carr University of Art & Design." imageSrc="/jambogrill.png" imageSrcDark="/jambogrill.png" target="_self"/>
                        <ProjectThumbnail isLink="no" link="" name="Jackalope - AI assist app for international students" desc="Social event and community finder app, helping international students settle into a new country, with AI-powered suggestions and built-in feedback mechanisms." imageSrc="/jackalope.png" imageSrcDark="/jackalope.png" target="_self"/>
                        <ProjectThumbnail isLink="no" link="https://www.figma.com/proto/undmsCtZPr5lx5XD6y12Pr/Uber-Eats--Nutrition-Report?page-id=0%3A1&node-id=1-32&viewport=316%2C40%2C0.03&t=XLdaLQhs7zoxcBIp-1&scaling=scale-down&content-scaling=fixed" name="Tracking nutrition for frequent Uber Eats users" desc="Uber Eats feature that assists and informs regular users about their food&rsquo;s nutrition details, makes sure specified dietary needs are met." imageSrc="/ubereats.png" imageSrcDark="/ubereats.png" target="_blank"/>
                    </div>

                    <div className="mb-30"></div>

                    <div className="w-full flex items-center">
                        <MyButton variant="blue-hyperlink" text="<- Return to home" link="/" target="_self" textSize="text-sm"/>
                    </div>
                    <div className="-mb-10"></div>

                    <Footer/>
                </div>
            </div>
        </div>
    </div>
  );
}
