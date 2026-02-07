"use client"

import Image from "next/image";
import MyButton from "@/components/my-button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import SlideUpNoThres from "@/components/slide-up-nothres";

export default function Demo() {
  return (
    <div className="flex items-center justify-center flex-col">
        <div className="w-full px-10 md:w-2/3 md:px-0 lg:w-1/3 2xl:w-1/4 mt-20">
            <SlideUpNoThres>
            <div>
                <MyButton variant="blue-hyperlink" text="Return to home" link="/" textSize="text-sm" target="_self"/>
            </div>
            <div className="mb-10"></div>

            <Heading text="Samsung Knox: Demo Kit"/>
            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Designed an interactive demo for Samsung Knox services, highlighted its key features and unique selling points for enterprise clients.</p>
            <div className="mb-7"></div>
            <ImageZoom>
                <Image src="/demo.png" width={2985} height={2236} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
            </ImageZoom>
            <ImageZoom>
                <Image src="/demo-darkmode.png" width={2985} height={2236} className="w-full h-auto mb-2 hidden dark:block" alt="Samsung Knox"/> 
            </ImageZoom>
            <ImageZoom>
                <Image src="/demo-1.png" width={2622} height={1823} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
            </ImageZoom>
            <ImageZoom>
                <Image src="/demo-1-darkmode.png" width={2622} height={1823} className="w-full h-auto mb-2 hidden dark:block" alt="Samsung Knox"/> 
            </ImageZoom>
            <ImageZoom>
                <Image src="/demo-2.png" width={2622} height={1823} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
            </ImageZoom>
            <ImageZoom>
                <Image src="/demo-2-darkmode.png" width={2622} height={1823} className="w-full h-auto mb-2 hidden dark:block" alt="Samsung Knox"/> 
            </ImageZoom>
            <div className="mb-4"></div>
            <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">Certain details redacted due to NDA.</p>
            <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">Actual content may vary due to ongoing product updates.</p>
            
            <div className="mb-14"></div>

            <Heading text="About the work"/>
            <div>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">As 2025 ends, I wrap up my internship at <span className="inline-block"><MyButton link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung" textSize="text-sm"/></span> as a UX designer.</p>
                <div className="mb-6"></div>
                <p className="mb-1 text-sm text-[var(--colour-bodytext)] leading-loose">Special thanks to:</p>
                <p className="text-sm text-[var(--colour-bodytext)]">Karl Lam (Senior UX Designer)</p>
                <div className="mb-8"></div>

                <div className="flex flex-col justify-center bg-[var(--colour-grey)] px-7 py-7 rounded-2xl">
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Due to NDA restrictions, I&rsquo;m unable to share project details publicly, but I&rsquo;d be happy to elaborate on my experience and design contributions during an interview.</p>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose mt-5">Feel free to send me an <span className="inline-block"><MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="blue-hyperlink" text="email" textSize="text-sm"/></span>!</p>
                </div>
            </div>

            {/* <div className="mt-25 w-full grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-y-10"> */}
            <div className="mt-25 w-full flex flex-col items-end">
                {/* <MyButton variant="blue-hyperlink" text="Return to home" link="/" textSize="text-sm" target="_self"/> */}
                {/* <div className="flex flex-col items-end"> */}
                    <MyButton variant="blue-hyperlink" text="Samsung Knox Manage: Rules ->" link="rules" textSize="text-sm" target="_self"/>
                    <div className="mb-3"></div>
                    <MyButton variant="blue-hyperlink" text="Samsung Knox Manage: Organizations ->" link="organizations" textSize="text-sm" target="_self"/>
                {/* </div> */}
            </div>

            <Footer/>
            </SlideUpNoThres>
        </div>
    </div>
  );
}
