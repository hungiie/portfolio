"use client"

import Image from "next/image";
import Button from "@/components/button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import SlideUpNoThres from "@/components/slide-up-nothres";
import SlideUp from "@/components/slide-up";

export default function Rules() {
  return (
    <div className="flex items-center justify-center flex-col">
        <div className="w-full px-10 md:w-1/3 md:px-0 mt-20">
            <SlideUpNoThres>
            <div className="mb-15">
                <Button variant="blue-hyperlink" text="<- Back to home" link="/" textSize="text-sm" target="_self"/>
            </div>

            <Heading text="Samsung Knox Manage: Rules"/>
            <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-15">Designed an EMM feature that helps IT admins automate management tasks, triggered when specific device conditions are met (time, locations, device status & activities, etc.)</p>
            {/* <ImageZoom>
                <Image src="/rules.png" width={1532} height={1147} className="w-full h-auto mt-10 mb-2" alt="Samsung Knox"/> 
            </ImageZoom> */}

            <Heading text="Selected deliverables"/>

            <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-4"><span className="font-semibold">1. Interface for viewing a specific rule&rsquo;s details</span>: Displaying crucial information an IT admin needs to know.</p>
            <ImageZoom>
                <Image src="/rules-0.png" width={2622} height={1823} className="w-full h-auto mb-2" alt="Samsung Knox"/> 
            </ImageZoom>
            <ImageZoom>
                <Image src="/rules-1.png" width={2622} height={1823} className="w-full h-auto mb-4" alt="Samsung Knox"/> 
            </ImageZoom>
            <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose mb-6">Certain details omitted due to NDA.</p>

            <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-4"><span className="font-semibold">2. Interface for creating a new rule</span>: Helping user configure time & location conditions.</p>
            <ImageZoom>
                <Image src="/rules-2.png" width={2622} height={3363} className="w-full h-auto mb-2" alt="Samsung Knox"/> 
            </ImageZoom>
            <ImageZoom>
                <Image src="/rules-3.png" width={2622} height={3363} className="w-full h-auto mb-4" alt="Samsung Knox"/> 
            </ImageZoom>
            <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose mb-15">Certain details omitted due to NDA.</p>
            
            <Heading text="Design story"/>
            <div>
                <p className="mb-6 text-sm text-[var(--colour-bodytext)] leading-loose">As 2025 ends, I wrap up my internship at <span className="inline-block"><Button link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung" textSize="text-sm"/></span> as a UX designer.</p>
                <p className="mb-6 text-sm text-[var(--colour-bodytext)] leading-loose">My work primarily involves designing features for <span className="inline-block"><Button link="https://www.samsungknox.com/en/solutions/it-solutions/knox-manage" target="_blank" variant="blue-hyperlink" text="Knox Manage" textSize="text-sm"/></span> - one of Samsung&rsquo;s B2B SaaS solutions, designed to help companies deploy, secure, and manage their mobile devices remotely.</p>
                <p className="mb-1 text-sm text-[var(--colour-bodytext)] leading-loose">Special thanks to:</p>
                <p className="mb-6 text-sm text-[var(--colour-bodytext)] leading-loose">Tian Jia (Senior UX Designer) and Hosoo Lee (Product Manager)</p>

                <div className="flex flex-col justify-center bg-[var(--colour-grey)] px-7 md:px-7 py-7 md:py-7 rounded-2xl">
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Due to NDA restrictions, I&rsquo;m unable to share project details publicly, but I&rsquo;d be happy to elaborate on my experience and design contributions during an interview.</p>
                    <p className="text-sm text-[var(--colour-bodytext)] mt-5 leading-loose">Feel free to send me an <span className="inline-block"><Button link="mailto:d.hungtran12@gmail.com" target="_blank" variant="blue-hyperlink" text="email" textSize="text-sm"/></span>!</p>
                </div>
            </div>
            <Footer/>
            </SlideUpNoThres>
        </div>
    </div>
  );
}
