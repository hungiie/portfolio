"use client"

import Image from "next/image";
import MyButton from "@/components/my-button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import SlideUpNoThres from "@/components/slide-up-nothres";
import MyNav from "@/components/nav";

export default function Organizations() {
  return (
    <div className="flex items-center justify-center flex-col">
        <MyNav variant="To home"/>
        <div className="w-full px-10 md:w-2/3 md:px-0 lg:w-1/3 2xl:w-1/4 mt-20">
            <SlideUpNoThres>
                <div>
                    <MyButton variant="blue-hyperlink" text="<- Back to home" link="/" textSize="text-sm" target="_self"/>
                </div>
                <div className="mb-10"></div>

                <Heading text="Samsung Knox Manage: Organizations"/>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Designed an EMM feature that categorizes devices based on organizational structure, enables hierarchical device management.</p>
                <div className="mb-5"></div>
                <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">EMM = Enterprise Mobility Management.   <MyButton variant="blue-hyperlink" text="Learn more" link="https://www.samsungknox.com/en/blog/emm-mdm-uem-for-enterprises" textSize="text-sm" target="blank"/></p>
                <div className="mb-7"></div>
                <ImageZoom>
                    <Image src="/org.png" width={2985} height={2236} className="w-full h-auto block dark:hidden" alt="Samsung Knox"/> 
                </ImageZoom>
                <ImageZoom>
                    <Image src="/org-darkmode.png" width={2985} height={2236} className="w-full h-auto hidden dark:block" alt="Samsung Knox"/> 
                </ImageZoom>
                
                <div className="mb-20"></div>
                
                <Heading text="Selected deliverable 1"/>
                <ImageZoom>
                    <Image src="/doc1-blur.png" width={3197.52} height={3197.52} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
                </ImageZoom>
                <ImageZoom>
                    <Image src="/doc1-blur-darkmode.png" width={3197.52} height={3197.52} className="w-full h-auto mb-2 hidden dark:block" alt="Samsung Knox"/> 
                </ImageZoom>
                <ImageZoom>
                    <Image src="/doc2-blur.png" width={3197.52} height={3197.52} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/>
                </ImageZoom>
                <ImageZoom>
                    <Image src="/doc2-blur-darkmode.png" width={3197.52} height={3197.52} className="w-full h-auto mb-2 hidden dark:block" alt="Samsung Knox"/> 
                </ImageZoom>
                <div className="mb-4"></div>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-2"><span className="font-semibold">UX documentation for Organization Table component</span>: Detailing specs, variants, interaction guidelines, and edge-case behaviours.</p>
                <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">Certain details redacted due to NDA.</p>
                <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">Actual content may vary due to ongoing product updates.</p>

                <div className="mb-20"></div>

                <Heading text="Selected deliverable 2"/>
                <ImageZoom>
                    <Image src="/org-2.png" width={3376.15} height={2058} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/>
                </ImageZoom>
                <ImageZoom>
                    <Image src="/org-2-darkmode.png" width={3376.15} height={2058} className="w-full h-auto mb-2 hidden dark:block" alt="Samsung Knox"/>
                </ImageZoom>
                <div className="mb-4"></div>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-2"><span className="font-semibold">Individual cell component</span>: Used by other designers, designed to support all edge cases.</p>
                <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">Certain details redacted due to NDA.</p>
                <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">Actual content may vary due to ongoing product updates.</p>
                
                <div className="mb-20"></div>

                <Heading text="About the work"/>
                {/* <ImageZoom>
                    <Image src="/wip.png" width={3600} height={1901} className="w-full h-auto mb-7" alt="Samsung Knox"/>
                </ImageZoom> */}
                <div>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">As 2025 ends, I wrap up my internship at <span className="inline-block"><MyButton link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung" textSize="text-sm"/></span> as a UX designer.</p>
                    <div className="mb-6"></div>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">My work primarily involves designing features for <span className="inline-block"><MyButton link="https://www.samsungknox.com/en/solutions/it-solutions/knox-manage" target="_blank" variant="blue-hyperlink" text="Knox Manage" textSize="text-sm"/></span> - one of Samsung&rsquo;s B2B SaaS solutions, designed to help companies deploy, secure, and manage their mobile devices remotely.</p>
                    <div className="mb-6"></div>
                    <p className="mb-1 text-sm text-[var(--colour-bodytext)] leading-loose">Special thanks to:</p>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Andrea Lin (Senior UX Designer) and Hyejeong Kim (Product Manager)</p>
                    <div className="mb-8"></div>

                    <div className="flex flex-col justify-center bg-[var(--colour-grey)] px-7 py-7 rounded-2xl">
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Due to NDA restrictions, I&rsquo;m unable to share project details publicly, but I&rsquo;d be happy to elaborate on my experience and design contributions during an interview.</p>
                        <p className="text-sm text-[var(--colour-bodytext)] mt-5 leading-loose">Feel free to send me an <span className="inline-block"><MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="blue-hyperlink" text="email" textSize="text-sm"/></span>!</p>
                    </div>
                </div>

                {/* <div className="mt-25 w-full grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-y-10"> */}
                <div className="mt-25 w-full flex items-center justify-end">
                    {/* <MyButton variant="blue-hyperlink" text="<- Back to home" link="/" textSize="text-sm" target="_self"/> */}
                    {/* <div className="flex flex-col items-end"> */}
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">View next project: </p>
                        <div className="ml-2"></div>
                        <MyButton variant="blue-hyperlink" text="Samsung Knox Manage: Rules ->" link="rules" textSize="text-sm" target="_self"/>
                        {/* <div className="mb-3"></div> */}
                        {/* <MyButton variant="blue-hyperlink" text="Samsung Knox Manage: Demo Kit ->" link="demokit" textSize="text-sm" target="_self"/> */}
                    {/* </div> */}
                </div>
                <div className="-mb-15"></div>
                
                <Footer/>
            </SlideUpNoThres>
        </div>
    </div>
  );
}
