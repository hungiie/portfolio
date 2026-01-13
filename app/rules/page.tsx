"use client"

import Image from "next/image";
import Button from "@/components/button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import SlideUpNoThres from "@/components/slide-up-nothres";

export default function Rules() {
  return (
    <div className="flex items-center justify-center flex-col">
        <div className="w-full px-10 md:w-2/3 md:px-0 lg:w-1/3 2xl:w-1/4 mt-20">
            <SlideUpNoThres>
                <div>
                    <Button variant="blue-hyperlink" text="<- Back to home" link="/" textSize="text-sm" target="_self"/>
                </div>
                <div className="mb-10"></div>

                <Heading text="Samsung Knox Manage: Rules"/>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Designed an EMM feature that triggers actions when specific conditions are met (time, locations, device status & activities, etc.)</p>
                <div className="mb-5"></div>
                <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">EMM = Enterprise Mobility Management.   <Button variant="blue-hyperlink" text="Learn more" link="https://www.samsungknox.com/en/blog/emm-mdm-uem-for-enterprises" textSize="text-sm" target="blank"/></p>
                <div className="mb-7"></div>
                <ImageZoom>
                    <Image src="/rules.png" width={2985} height={2236} className="w-full h-auto block dark:hidden" alt="Samsung Knox"/> 
                </ImageZoom>
                <ImageZoom>
                    <Image src="/rules-darkmode.png" width={2985} height={2236} className="w-full h-auto hidden dark:block" alt="Samsung Knox"/> 
                </ImageZoom>
                
                <div className="mb-20"></div>

                <Heading text="Selected deliverable 1"/>
                <ImageZoom>
                    <Image src="/rules-0.png" width={2622} height={1823} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
                </ImageZoom>
                <ImageZoom>
                    <Image src="/rules-0-darkmode.png" width={2622} height={1823} className="w-full h-auto mb-2 hidden dark:block" alt="Samsung Knox"/> 
                </ImageZoom>
                <ImageZoom>
                    <Image src="/rules-1.png" width={2622} height={1823} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
                </ImageZoom>
                <ImageZoom>
                    <Image src="/rules-1-darkmode.png" width={2622} height={1823} className="w-full h-auto mb-2 hidden dark:block" alt="Samsung Knox"/> 
                </ImageZoom>
                <div className="mb-4"></div>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-2"><span className="font-semibold">Interface for viewing a rule&rsquo;s details</span>: Displaying crucial information an IT admin needs to know.</p>
                <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">Certain details redacted due to NDA.</p>
                <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">Actual content may vary due to ongoing product updates.</p>

                <div className="mb-20"></div>

                <Heading text="Selected deliverable 2"/>
                <ImageZoom>
                    <Image src="/rules-2.png" width={2622} height={3363} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
                </ImageZoom>
                <ImageZoom>
                    <Image src="/rules-2-darkmode.png" width={2622} height={3363} className="w-full h-auto mb-2 hidden dark:block" alt="Samsung Knox"/> 
                </ImageZoom>
                <ImageZoom>
                    <Image src="/rules-3.png" width={2622} height={3363} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
                </ImageZoom>
                <ImageZoom>
                    <Image src="/rules-3-darkmode.png" width={2622} height={3363} className="w-full h-auto mb-2 hidden dark:block" alt="Samsung Knox"/> 
                </ImageZoom>
                {/* <ImageZoom>
                    <Image src="/rules-4.png" width={2622} height={2622} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
                </ImageZoom>
                <ImageZoom>
                    <Image src="/rules-4-darkmode.png" width={2622} height={2622} className="w-full h-auto mb-2 hidden dark:block" alt="Samsung Knox"/> 
                </ImageZoom> */}
                <div className="mb-4"></div>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-2"><span className="font-semibold">Interface for creating a new rule</span>: Helping user configure time & location conditions.</p>
                <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">Certain details redacted due to NDA.</p>
                <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">Actual content may vary due to ongoing product updates.</p>
                
                <div className="mb-20"></div>

                <Heading text="About the work"/>
                <div>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">As 2025 ends, I wrap up my internship at <span className="inline-block"><Button link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung" textSize="text-sm"/></span> as a UX designer.</p>
                    <div className="mb-6"></div>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">My work primarily involves designing features for <span className="inline-block"><Button link="https://www.samsungknox.com/en/solutions/it-solutions/knox-manage" target="_blank" variant="blue-hyperlink" text="Knox Manage" textSize="text-sm"/></span> - one of Samsung&rsquo;s B2B SaaS solutions, designed to help companies deploy, secure, and manage their mobile devices remotely.</p>
                    <div className="mb-6"></div>
                    <p className="mb-1 text-sm text-[var(--colour-bodytext)] leading-loose">Special thanks to:</p>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Tian Jia (Senior UX Designer & UX Lead) and Hosoo Lee (Product Manager)</p>
                    <div className="mb-8"></div>

                    <div className="flex flex-col justify-center bg-[var(--colour-grey)] px-7 py-7 rounded-2xl">
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Due to NDA restrictions, I&rsquo;m unable to share project details publicly, but I&rsquo;d be happy to elaborate on my experience and design contributions during an interview.</p>
                        <p className="text-sm text-[var(--colour-bodytext)] mt-5 leading-loose">Feel free to send me an <span className="inline-block"><Button link="mailto:d.hungtran12@gmail.com" target="_blank" variant="blue-hyperlink" text="email" textSize="text-sm"/></span>!</p>
                    </div>
                </div>

                <div className="mt-25 w-full grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-y-10">
                    <Button variant="blue-hyperlink" text="<- Back to home" link="/" textSize="text-sm" target="_self"/>
                    <div className="flex flex-col items-end">
                        <Button variant="blue-hyperlink" text="Samsung Knox Manage: Organizations ->" link="organizations" textSize="text-sm" target="_self"/>
                        <div className="mb-3"></div>
                        <Button variant="blue-hyperlink" text="Samsung Knox: Demo Kit ->" link="demokit" textSize="text-sm" target="_self"/>
                    </div>
                </div>

                <Footer/>
            </SlideUpNoThres>
        </div>
    </div>
  );
}
