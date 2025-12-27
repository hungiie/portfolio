"use client"

import Image from "next/image";
import Button from "@/components/button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import SlideUpNoThres from "@/components/slide-up-nothres";

export default function Organizations() {
  return (
    <div className="flex items-center justify-center flex-col">
        <div className="w-full px-10 md:w-1/3 md:px-0 mt-20">
            <SlideUpNoThres>
            <div>
                <Button variant="blue-hyperlink" text="<- Back to home" link="/" textSize="text-sm" target="_self"/>
            </div>
            <div className="mb-10"></div>

            <Heading text="Samsung Knox Manage: Organizations"/>
            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Designed an EMM feature that categorizes devices based on organizational structure, enables hierarchical device management.</p>
            <ImageZoom>
                <Image src="/org.png" width={1532} height={1147} className="w-full h-auto mt-9 mb-2" alt="Samsung Knox"/> 
            </ImageZoom>
            
            <div className="mb-20"></div>
            
            <Heading text="Selected deliverable 1"/>
            <ImageZoom>
                <Image src="/doc1-blur.png" width={5605} height={5605} className="w-full h-auto mb-2" alt="Samsung Knox"/> 
            </ImageZoom>
            <ImageZoom>
                <Image src="/doc2-blur.png" width={5605} height={5605} className="w-full h-auto mb-4" alt="Samsung Knox"/>
            </ImageZoom>
            <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-2"><span className="font-semibold">UX documentation for new Organization Table component</span>: Including all specs, variants, interaction guidelines, and behaviours for edge cases.</p>
            <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">Certain details omitted due to NDA.</p>

            <div className="mb-20"></div>

            <Heading text="Selected deliverable 2"/>
            <ImageZoom>
                <Image src="/org-2.png" width={5517} height={3363} className="w-full h-auto mb-4" alt="Samsung Knox"/>
            </ImageZoom>
            <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-2"><span className="font-semibold">Individual cell component</span>: Master component with 3 nested components, used by other designers when designing for this feature.</p>
            <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">Certain details omitted due to NDA.</p>
            
            <div className="mb-20"></div>

            <Heading text="About the work"/>
            {/* <ImageZoom>
                <Image src="/wip.png" width={3600} height={1901} className="w-full h-auto mb-7" alt="Samsung Knox"/>
            </ImageZoom> */}
            <div>
                <p className="mb-6 text-sm text-[var(--colour-bodytext)] leading-loose">As 2025 ends, I wrap up my internship at <span className="inline-block"><Button link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung" textSize="text-sm"/></span> as a UX designer.</p>
                <p className="mb-6 text-sm text-[var(--colour-bodytext)] leading-loose">My work primarily involves designing features for <span className="inline-block"><Button link="https://www.samsungknox.com/en/solutions/it-solutions/knox-manage" target="_blank" variant="blue-hyperlink" text="Knox Manage" textSize="text-sm"/></span> - one of Samsung&rsquo;s B2B SaaS solutions, designed to help companies deploy, secure, and manage their mobile devices remotely.</p>
                <p className="mb-1 text-sm text-[var(--colour-bodytext)] leading-loose">Special thanks to:</p>
                <p className="mb-6 text-sm text-[var(--colour-bodytext)] leading-loose">Andrea Lin (Senior UX Designer) and Hyejeong Kim (Product Manager)</p>

                {/* <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-15">Keep communications concise through comments & annotations.</p> */}

                <div className="flex flex-col justify-center bg-[var(--colour-grey)] px-7 md:px-7 py-7 md:py-7 rounded-2xl">
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Due to NDA restrictions, I&rsquo;m unable to share project details publicly, but I&rsquo;d be happy to elaborate on my experience and design contributions during an interview.</p>
                    <p className="text-sm text-[var(--colour-bodytext)] mt-5 leading-loose">Feel free to send me an <span className="inline-block"><Button link="mailto:d.hungtran12@gmail.com" target="_blank" variant="blue-hyperlink" text="email" textSize="text-sm"/></span>!</p>
                </div>
            </div>

            <div className="mt-25 w-full grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-y-10">
                <Button variant="blue-hyperlink" text="<- Back to home" link="/" textSize="text-sm" target="_self"/>
                <div className="flex flex-col items-end">
                    <Button variant="blue-hyperlink" text="Samsung Knox Manage: Rules ->" link="rules" textSize="text-sm" target="_self"/>
                    <div className="mb-3"></div>
                    <Button variant="blue-hyperlink" text="Samsung Knox: Demo Kit ->" link="demokit" textSize="text-sm" target="_self"/>
                </div>
            </div>

            </SlideUpNoThres>
            <Footer/>
        </div>
    </div>
  );
}
