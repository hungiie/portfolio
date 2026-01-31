"use client"

import MyButton from "@/components/my-button";
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
import SlideUpScroll from "@/components/slide-up-scroll";
import MyNav from "@/components/nav";
import ProjectVideo from "@/components/project-video";
// import Testimonial from "@/components/testimonial";

export default function Home() {
  const [animate, setAnimate] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTimeout(() => setAnimate(true), 900);
  }, []);

  return (
    <div className="flex items-center justify-center">
      {/* <MyNav variant="To about"/> */}
      <div className="w-full px-10 md:w-2/3 md:px-0 lg:w-1/3 2xl:w-1/4 mt-28">
        <div
          className={`w-full mb-7 flex transition-all duration-700 ease-in-out items-center relative
          ${animate ? "justify-start" : "justify-center"}`}
        >
          <Me />
          <div className="absolute right-0">
            <SlideRightDelay>
              <div className="grid grid-cols-1 gap-y-3 justify-items-end pr-1">
                <MyButton variant="blue-button" text="About me" link="about" target="_self" textSize="text-sm"/>
              </div>
            </SlideRightDelay>
          </div>
        </div>

        <SlideUpDelay>
          <div className="flex justify-between">
            <Heading text="Hi, my name is Hung." />
          </div>
          <div className="w-full">
            <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-6">I&rsquo;m a UX designer. Most recently, I designed at <span className="inline-block"><MyButton link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung" textSize="text-sm"/></span></p>
            <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-6">I make interfaces that quietly disappear, so users can stay focused on their tasks while the design dissolves into the background of attention.</p>
            {/* <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-6">I have a Bachelor&rsquo;s in Design & Development for Web & Mobile at SFU School of Interactive Arts & Technology.</p> */}
            {/* <p className="mb-6 text-sm text-[var(--colour-bodytext)] leading-loose">I&rsquo;m currently available for full-time UX designer roles in 2026.</p> */}
            <Heading text="I&rsquo;m currently available for full-time UX designer roles." />
          </div>

          <div className="mb-9">
            <p className="text-sm text-[var(--colour-bodytext)] mt-2">Send me an <span className="inline-block"><MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="blue-hyperlink" text="email" textSize="text-sm"/></span></p>
            <p className="text-sm text-[var(--colour-bodytext)] mt-2">Send me a message on <span className="inline-block"><MyButton link="https://www.linkedin.com/in/hung-tran-profile/" target="_blank" variant="blue-hyperlink" text="LinkedIn" textSize="text-sm"/></span></p>
            <p className="text-sm text-[var(--colour-bodytext)] mt-2">Check out my <span className="inline-block"><MyButton link="https://drive.google.com/file/d/1F2UXNXNltAkH-Y0qinUaZDLaMNDMd6Mh/view" target="_blank" variant="blue-hyperlink" text="resume" textSize="text-sm"/></span></p>
            {/* <p className="text-sm text-[var(--colour-bodytext)] mt-6">Or read my colleagues&rsquo; and managers&rsquo; <span className="inline-block"><MyButton link="#testimonials" target="_self" variant="blue-hyperlink" text="testimonials" textSize="text-sm"/></span></p> */}
          </div>

          {/* <ThemeToggleButton
            theme={theme === "light" ? "dark" : "light"}
            onClick={() => {
              const next = theme === "dark" ? "light" : "dark";
              setTheme(next);
            }}
            variant="none"
            start="center"
            className="hover:cursor-pointer"
            showLabel={false}
          /> */}

          <div className="mb-9"></div>
          <p className="text-sm text-[var(--colour-bodytext-4)]">Scroll down to see my works.</p>
          {/* <p className="text-lg text-[var(--colour-bodytext-4)]">	&darr;</p> */}
          <div className="mb-9"></div>

        </SlideUpDelay>

        <div className="mb-30 md:mb-50 lg:mb-30"></div>

        <div className="grid grid-cols-1 gap-y-35">
          <SlideUpScroll>
            {/* <ProjectThumbnail isLink="yes" link="rules" name="Samsung Knox Manage: Rules" desc="Designed a device management feature that triggers actions when specific conditions are met (time, location, device status, etc.)" imageSrc="/rules.png" imageSrcDark="/rules-darkmode.png" target="_self"/> */}
            <ProjectVideo isLink="yes" link="rules" name="Samsung Knox Manage: Rules" desc="Designed a device management feature that triggers actions when specific conditions are met (time, location, device status, etc.)" vidSrc="/Rule vid.mov" target="_self" className="w-full h-full object-cover"/>
          </SlideUpScroll>
          <SlideUp>
            <ProjectThumbnail isLink="yes" link="organizations" name="Samsung Knox Manage: Organizations" desc="Designed a device management feature that organizes devices into nested groups and enables hierarchical device management." imageSrc="/org.png" imageSrcDark="/org-darkmode.png" target="_self"/>
          </SlideUp>
          {/* <SlideUp> */}
            {/* <ProjectThumbnail isLink="yes" link="demokit" name="Samsung Knox: Demo Kit" desc="Designed an interactive demo for Samsung Knox services, highlighted its key features and unique selling points for enterprise clients." imageSrc="/demo.png" imageSrcDark="/demo-darkmode.png" target="_self"/> */}
          {/* </SlideUp> */}
        </div>

        <div className="mb-30"></div>

        <SlideUp>
          <div className="w-full">
            <p className="text-sm font-semibold text-[var(--colour-bodytext)]">My undergrad design & dev journey</p>
            <div className="mb-6"></div>
            {/* <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-6">I&rsquo;m on my way to complete my Bachelor&rsquo;s in Design & Development for Web & Mobile at SFU&rsquo;s <span className=""><MyButton link="https://www.sfu.ca/siat.html" target="_blank" variant="blue-hyperlink" text="School of Interactive Arts & Technology" textSize="text-sm"/></span></p> */}
            {/* <div className="mb-2"></div> */}
            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">This portfolio includes both professional and academic work. While my professional work shows real impact, these academic projects show my way to think, explore, and experiment when given space.</p>
            <div className="mb-6"></div>
            <div className="w-full flex">
              <div className="w-full">
                  <MyButton link="academics" text="View my academic projects" textSize="text-sm" target="_self" variant="blue-button-full-width"/>
              </div>
            </div>
            {/* <MyButton variant="blue-hyperlink" text="View my academic projects" link="academics" target="_self" textSize="text-sm"/> */}
          </div>
        </SlideUp>

        <div className="-mb-10"></div>

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


// "use client"

// import Image from "next/image";
// import MyButton from "@/components/my-button";
// import Footer from "@/components/footer";
// import Heading from "@/components/heading";
// import ProjectThumbnail from "@/components/project-thumbnail";
// import SlideUp from "@/components/slide-up";
// import Me from "@/components/me";
// import SlideUpDelay from "@/components/slide-up-delay";
// import { useEffect, useState } from "react";
// import SlideRightDelay from "@/components/slide-right-delay";
// import { useTheme } from "next-themes";
// import { ThemeToggleButton } from "@/components/ui/shadcn-io/theme-toggle-button";
// import SlideUpScroll from "@/components/slide-up-scroll";
// import MyNav from "@/components/nav";
// import SlideRight from "@/components/slide-right";
// import Testimonial from "@/components/testimonial";

// export default function Home() {
//   const [animate, setAnimate] = useState(false);
//   const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     setTimeout(() => setAnimate(true), 900);
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <div className="w-1/3 mt-28">
//         <div
//           className={`w-full mb-7 flex transition-all duration-700 ease-in-out items-center relative
//             ${animate ? "justify-start" : "justify-center"}
//             `}
//         >
//         {/* <div className={`w-full mb-7 flex transition-all duration-700 ease-in-out items-center relative`}> */}
//           <Me />
//           <div className="absolute right-0">
//             <SlideRightDelay>
//               <div className="grid grid-cols-1 gap-y-3 justify-items-end pr-1">
//                 <MyButton variant="blue-hyperlink" text="More about me ->" link="about" target="_self" textSize="text-sm"/>
//               </div>
//             </SlideRightDelay>
//           </div>
//         </div>

//         <SlideUpDelay>
//           <div className="flex justify-between">
//             <Heading text="Hi, my name is Hung." />
//           </div>
//           <div className="w-full">
//             <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-6">I&rsquo;m a UX designer. Most recently, I designed at <span className="inline-block"><MyButton link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung" textSize="text-sm"/></span></p>
//             <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-6">I make interfaces that quietly disappear, so users can stay focused on their tasks while the design dissolves into the background of attention.</p>
//             {/* <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-6">I have a Bachelor&rsquo;s in Design & Development for Web & Mobile at SFU School of Interactive Arts & Technology.</p> */}
//             <Heading text="I&rsquo;m currently available for full-time UX designer roles." />
//           </div>

//           <div className="mb-9">
//             <p className="text-sm text-[var(--colour-bodytext)] mt-2">Send me an <span className="inline-block"><MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="blue-hyperlink" text="email" textSize="text-sm"/></span></p>
//             <p className="text-sm text-[var(--colour-bodytext)] mt-2">Send me a message on <span className="inline-block"><MyButton link="https://www.linkedin.com/in/hung-tran-profile/" target="_blank" variant="blue-hyperlink" text="LinkedIn" textSize="text-sm"/></span></p>
//             <p className="text-sm text-[var(--colour-bodytext)] mt-2">Check out my <span className="inline-block"><MyButton link="https://drive.google.com/file/d/1F2UXNXNltAkH-Y0qinUaZDLaMNDMd6Mh/view" target="_blank" variant="blue-hyperlink" text="resume" textSize="text-sm"/></span></p>
//             <p className="text-sm text-[var(--colour-bodytext)] mt-6">Or read my colleagues&rsquo; and managers&rsquo; <span className="inline-block"><MyButton link="#testimonials" target="_self" variant="blue-hyperlink" text="testimonials" textSize="text-sm"/></span></p>
//           </div>

//           <div className="mb-9"></div>
//           <p className="text-sm text-[var(--colour-bodytext-4)]">Scroll down to see my works.</p>
//           <div className="mb-9"></div>

//         </SlideUpDelay>
//       </div>

//       <div className="w-[85%]">
//         <SlideUpScroll>
//           <div className="mb-30 md:mb-50 lg:mb-30"></div>
//           <div className="grid grid-cols-2 gap-x-5">
//             <ProjectThumbnail isLink="yes" link="rules" name="Samsung Knox Manage: Rules" desc="Designed a device management feature that triggers actions when specific conditions are met (time, location, device status, etc.)" imageSrc="/placeholder-video.png" imageSrcDark="/placeholder.png" target="_self"/>
//             <ProjectThumbnail isLink="yes" link="organizations" name="Samsung Knox Manage: Organizations" desc="Designed a device management feature that organizes devices into nested groups and enables hierarchical device management." imageSrc="/placeholder-video.png" imageSrcDark="/placeholder.png" target="_self"/>
//             {/* <div>
//               <p className="font-semibold text-sm text-[var(--colour-pure)] mb-4 leading-loose">Samsung Knox Manage: Rules</p>
//               <p className="text-sm text-[var(--colour-bodytext)] mb-9 leading-loose">Designed a device management feature that triggers actions when specific conditions are met (time, location, device status, etc.)</p>
//               <MyButton link="rules" text="View case" target="_self" textSize="text-sm" variant="blue-button" />
//             </div>
//             <div className="group overflow-hidden block mt-auto">
//               <Image src="/placeholder-video.png" alt="hungtran" width={1920} height={1080} className="object-cover block dark:hidden" />
//             </div> */}
//           </div>
//         </SlideUpScroll>

//         <div className="mb-30"></div>

//         <SlideUp>
//           <div className="w-full">
//             <p className="text-sm font-semibold text-[var(--colour-bodytext)]">My undergrad design & dev journey</p>
//             <div className="mb-6"></div>
//             <p className="text-sm text-[var(--colour-bodytext)] leading-loose">This portfolio includes both professional and academic work.</p>
//             <p className="text-sm text-[var(--colour-bodytext)] leading-loose">While my professional work shows real impact, these academic projects show my way to think, explore, and experiment when given space.</p>
//             <div className="mb-6"></div>
//             <MyButton variant="blue-hyperlink" text="View my academic projects" link="academics" target="_self" textSize="text-sm"/>
//           </div>
//         </SlideUp>


//         <div className="-mb-10"></div>

//         <div className="mb-40" id="testimonials"></div>
//         <Heading text="Testimonials" />
//         <div className="grid grid-cols-2 gap-x-5">
//           <Testimonial name="Tian Jia" job="Senior UX designer, UX lead" company="Samsung" text="Hung has excelled in his role as a UX design student, demonstrating a strong talent for both UX research and graphical UI tasks. His ability to analyze user needs and translate them into intuitive, visually appealing designs has been impressive. Overall, his dedication and versatility make him a valuable asset to any design team." companylink="https://research.samsung.com/srca"/>
//           <Testimonial name="Thomas Nelles" job="Senior Communication Consultant" company="Fraser Health" text="From designing a multi-page document for our Indigenous Health team to crafting a Urgent Care video, his clients have been very impressed with his work to date. He adapts to changing timelines easily including timely requests and juggling multiple projects. His calm demeanor and ability to clearly communicate his working progress are just some of his strengths." companylink="#"/>
//         </div>

//         <Footer/>
//       </div>

//     </div>
//   );
// }
