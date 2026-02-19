"use client";

import Image from "next/image";
import MyButton from "@/components/my-button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import PhotoTag from "@/components/photo-tag";
import SlideUpNoThres from "@/components/slide-up-nothres";
import MyNav2 from "@/components/nav2";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AboutHero from "@/components/about-hero";
import SlideUpScroll from "@/components/slide-up-scroll";
import Polaroid from "@/components/polaroid";

export default function About() {
  return (
    <div className="flex items-center justify-center flex-col">
        <MyNav2 variant="About to home" />

        <div className="px-10 md:w-2/3 md:px-0 lg:w-[75%] 2xl:w-[70%] flex flex-col justify-center items-center">
            <div className="w-full mt-6 mb-9 flex justify-between items-center">
                <MyButton variant="blue-hyperlink" text="Return to home" link="/" textSize="text-sm" target="_self"/>
                <div className="flex">
                    <MyButton variant="blue-button" text="Resume" link="https://drive.google.com/file/d/1CrubhoYF0ok5oFfJT3Ffxlkr6Jp0p8Jk/view?usp=sharing" textSize="text-sm" target="_blank"/>
                </div>
            </div>
            <AboutHero/>
            <div className="mb-0 2xl:mb-15"></div>
        </div>

        {/* <SlideUpScroll> */}
        <div className="w-full px-10 md:w-2/3 md:px-0 lg:w-1/3 2xl:w-[30%] mt-10">
            <Heading text="Hi, my name is Hung." variant="black"/>
            <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-6">I&rsquo;m a UX designer. Most recently, I designed at <span className="inline-block"><MyButton link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung" textSize="text-sm"/></span></p>

            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">For me, designing an experience is like telling a story - with people, technology, and context as threads of different colours and textures.</p>
            <div className="mb-6"></div>
            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">I have been playing with those threads since childhood. From posting my self-important, fictional stories to Wattpad, to now designing actual experiences as a UX designer - where I connect users, technology, and context the way a story connects its characters and their journeys.</p>
            <div className="mb-8"></div>

            <div className="">
                <p className="text-sm text-[var(--colour-bodytext)]">Send me an <span className="inline-block"><MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="blue-hyperlink" text="email" textSize="text-sm"/></span></p>
                <p className="text-sm text-[var(--colour-bodytext)] mt-2">Send me a message on <span className="inline-block"><MyButton link="https://www.linkedin.com/in/hung-tran-profile/" target="_blank" variant="blue-hyperlink" text="LinkedIn" textSize="text-sm"/></span></p>
                <p className="text-sm text-[var(--colour-bodytext)] mt-2">Check out my <span className="inline-block"><MyButton link="https://drive.google.com/file/d/1CrubhoYF0ok5oFfJT3Ffxlkr6Jp0p8Jk/view?usp=sharing" target="_blank" variant="blue-hyperlink" text="resume" textSize="text-sm"/></span></p>
            </div>

            {/* <div className="mb-25"></div>

            <Heading text="My attempts to romanticize life" variant="black"/>
            <div className="grid grid-cols-2 gap-2">
                <div className="relative aspect-square overflow-hidden">
                    <Image src="/idk.JPG" className="object-cover" fill alt="hung tran" style={{ filter: 'contrast(90%)' }}/>
                </div>
                <div className="relative aspect-square overflow-hidden">
                    <Image src="/matcha.jpeg" className="object-cover" fill alt="hung tran" style={{ filter: 'contrast(90%)' }}/>
                </div>
                <div className="relative aspect-square overflow-hidden">
                    <Image src="/waterfront.JPG" className="object-cover" fill alt="hung tran" style={{ filter: 'contrast(90%)' }}/>
                </div>
                <div className="relative aspect-square overflow-hidden">
                    <Image src="/street.JPG" className="object-cover" fill alt="hung tran" style={{ filter: 'contrast(90%)' }}/>
                </div>
                <div className="relative aspect-square overflow-hidden">
                    <Image src="/coffee.JPG" className="object-cover" fill alt="hung tran" style={{ filter: 'contrast(90%)' }}/>
                </div>
                <div className="relative aspect-square overflow-hidden">
                    <Image src="/robin.jpg" className="object-cover" fill alt="hung tran" style={{ filter: 'contrast(90%)' }}/>
                </div>
            </div> */}

            <div className="" id="story"></div>
            <div className="mb-25"></div>

            <div className="w-full flex items-center justify-center">
                <div className="w-[75%] h-auto relative mb-18">
                    {/* <Image src="/small.jpg" width={2040} height={1179} alt="hung tran" className="object-cover" style={{ filter: 'contrast(80%)' }}/> */}
                    <Polaroid imageSrc="/small.jpg" alt="hung tran" desc="Summer 2008 🐦" angle={-4} textSize="text-xl"/>
                </div>
            </div>

            <Heading text="My story" variant="black"/>
            <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose">Born and raised in Vietnam, I spent my childhood full of curiosity and bold ideas, often quietly observing the world around me.</p>
            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">In a world where quietness is considered absence, where presence is measured by volume, a quiet child needs to look out for themselves to avoid being left behind. They notice patterns, tone shifts, and emotions that pass too quickly for louder conversations to catch. Many of them learn empathy early - not because they are taught, but because they have to understand people without always being heard themselves.</p>
            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">(<MyButton variant="blue-hyperlink" text="The Psychology of a Quiet Kid" textSize="font-sm" link="https://youtu.be/t4f2LLExHrY?si=BLNxWPEcgEFO1mQX" target="_blank" />, 2025)</p>
            <div className="mb-15"></div>
            
            <Heading text="Read rooms rather than dominate them" variant="black"/>
            <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose">Growing up as one of those quiet kids meant learning to read rooms rather than dominate them.</p>
            <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose">And I believe that way of seeing never really disappear!</p>
            <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose">In UX design, understanding users often goes beyond what is said out loud. Insight can be found in hesitation before a click, in abandoned flows, or in moments where something feels off but goes unspoken.</p>
            <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose">For many quiet kids, listening closely, sitting with uncertainty, and noticing subtle signals become familiar habits over time. In UX, those habits naturally translate into a way of designing that prioritizes care, empathy, and intention.</p>
            <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose"></p>
            <div className="mb-15"></div>

            <Heading text="Everything happens for a reason" variant="black"/>
            <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose">I&rsquo;m a firm believer of the saying: "Everything happens for a reason".</p>
            <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose">If you&rsquo;re still here reading my yapping session, maybe that&rsquo;s one of them, so please don&rsquo;t hesitate to <MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="blue-hyperlink" text="reach out" textSize="text-sm"/>. Let&rsquo;s chat :)</p>
            
            <div className="mb-35"></div>

            <div className="w-full flex items-center justify-center">
                <MyButton variant="blue-button-outline" text="Return to home" link="/" target="_self" textSize="text-sm"/>
            </div>
            <Footer/>
        </div>
        {/* </SlideUpScroll> */}
    </div>
  );
}
