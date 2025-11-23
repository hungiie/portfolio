"use client"

import Image from "next/image";
import Button from "@/components/button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";

export default function Demo() {
  return (
    <div className="flex items-center justify-center flex-col">
        <div className="w-full px-10 md:w-1/3 md:px-0 mt-20">
            <div className="mb-20">
                <Button variant="blue-hyperlink" text="<- Back to home" link="/" textSize="text-sm" target="_self"/>
            </div>
            <Heading text="Samsung Knox: Demo Kit"/>
            <p className="text-sm text-[var(--colour-body-text-2)] mb-6">Interactive demo for Samsung Knox services, highlighting its key features and unique selling points for enterprise clients.</p>
            <Image src="/demo.png" width={1532} height={1147} className="w-full h-auto mt-10 mb-10" alt="Samsung Knox"/> 
            <div>
                <p className="mb-8 text-sm text-[var(--colour-bodytext)]">As 2025 ends, I wrap up my internship at <span className="inline-block"><Button link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung" textSize="text-sm"/></span> as a UX designer.</p>
                <p className="mb-1 text-sm text-[var(--colour-bodytext)]">Special thanks to:</p>
                <p className="mb-8 text-sm text-[var(--colour-bodytext)]">Karl Lam (Senior UX Designer)</p>

                <div className="flex flex-col justify-center bg-[var(--colour-grey)] px-7 md:px-7 py-7 md:py-7 rounded-2xl">
                    <p className="text-sm text-[var(--colour-bodytext)]">Due to NDA restrictions, I&lsquo;m unable to share project details publicly, but I&lsquo;d be happy to elaborate on my experience and design contributions during an interview.</p>
                    <p className="text-sm text-[var(--colour-bodytext)] mt-2">Feel free to send me an <span className="inline-block"><Button link="mailto:dht4@sfu.ca" target="_blank" variant="blue-hyperlink" text="email" textSize="text-sm"/></span>!</p>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
  );
}
