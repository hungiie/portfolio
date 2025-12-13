"use client"

import Image from "next/image";
import Button from "@/components/button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";

export default function Rules() {
  return (
    <div className="flex items-center justify-center flex-col">
        <div className="w-full px-10 md:w-1/3 md:px-0 mt-20">
            <div className="mb-12">
                <Button variant="blue-hyperlink" text="<- Back to home" link="/" textSize="text-sm" target="_self"/>
            </div>
            <Heading text="Samsung Knox Manage: Rules"/>
            <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-6">Creating conditional rules to automate management tasks, monitor device activities and set up alert system.</p>
            <ImageZoom>
                <Image src="/rules.png" width={1532} height={1147} className="w-full h-auto mt-10 mb-10" alt="Samsung Knox"/> 
            </ImageZoom>
            <div>
                <p className="mb-8 text-sm text-[var(--colour-bodytext)] leading-loose">As 2025 ends, I wrap up my internship at <span className="inline-block"><Button link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung" textSize="text-sm"/></span> as a UX designer.</p>
                <p className="mb-8 text-sm text-[var(--colour-bodytext)] leading-loose">My work primarily involves designing features for <span className="inline-block"><Button link="https://www.samsungknox.com/en/solutions/it-solutions/knox-manage" target="_blank" variant="blue-hyperlink" text="Knox Manage" textSize="text-sm"/></span> - one of Samsung&lsquo;s B2B SaaS solutions. It is designed to help companies deploy, secure, and manage their mobile devices and data remotely.</p>
                <p className="mb-1 text-sm text-[var(--colour-bodytext)] leading-loose">Special thanks to:</p>
                <p className="mb-8 text-sm text-[var(--colour-bodytext)] leading-loose">Tian Jia (Senior UX Designer) and Hosoo Lee (Product Manager)</p>

                <div className="flex flex-col justify-center bg-[var(--colour-grey)] px-7 md:px-7 py-7 md:py-7 rounded-2xl">
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Due to NDA restrictions, I&lsquo;m unable to share project details publicly, but I&lsquo;d be happy to elaborate on my experience and design contributions during an interview.</p>
                    <p className="text-sm text-[var(--colour-bodytext)] mt-5 leading-loose">Feel free to send me an <span className="inline-block"><Button link="mailto:d.hungtran12@gmail.com" target="_blank" variant="blue-hyperlink" text="email" textSize="text-sm"/></span>!</p>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
  );
}
