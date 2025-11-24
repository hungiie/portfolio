"use client"

import Image from "next/image";
import Button from "@/components/button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import { Particles } from "@/components/ui/shadcn-io/particles";

export default function About() {
  return (
    <div className="flex items-center justify-center flex-col">
        <div className="w-full px-10 md:w-1/3 md:px-0 mt-35">
            <div className="mb-18">
                <Button variant="blue-hyperlink" text="<- Back to home" link="/" textSize="text-sm" target="_self"/>
            </div>

            <Heading text="Hi, my name is Hung."/>
            <p className="mb-2 text-sm text-[var(--colour-bodytext)] leading-loose">I&lsquo;m a UX designer at <span className="inline-block"><Button link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung" textSize="text-sm"/></span></p>
            <p className="mb-2 text-sm text-[var(--colour-bodytext)] leading-loose">I&lsquo;m passionate about how social media shapes our digital habits - and how modern interfaces evolve to match our shrinking attention spans.</p>
            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">In the future, I aspire to be an adaptive designer and researcher, staying attuned to our ever-evolving digital habits and expectations.</p>
            <div className="mb-18"></div>

            <Heading text="When I'm not doing UX..."/>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-2 mt-9">
                <div className="relative aspect-square overflow-hidden">
                    <Image src="/mad.jpg" className="object-cover" fill alt="hung tran"/>
                </div>
                <div className="relative aspect-square overflow-hidden">
                    <Image src="/matcha.jpeg" className="object-cover" fill alt="hung tran"/>
                </div>
                <div className=" relative aspect-square overflow-hidden">
                    <Image src="/coop.jpg" className="object-cover" fill alt="hung tran"/>
                </div>
                <div className="relative aspect-square overflow-hidden">
                    <Image src="/vsa.jpeg" className="object-cover" fill alt="hung tran"/>
                </div>
                <div className=" relative aspect-square overflow-hidden">
                    <Image src="/vsaflag.jpeg" className="object-cover" fill alt="hung tran"/>
                </div>
                <div className="relative aspect-square overflow-hidden">
                    <Image src="/spinning.jpeg" className="object-cover" fill alt="hung tran"/>
                </div>
            </div>
            <p className="mt-4 text-sm text-[var(--colour-bodytext)] leading-loose">... You can find me joining local communities, at concerts, or at a school event!</p>
            
            <Footer/>
        </div>
        <Particles
            className="fixed inset-0 -z-2"
            quantity={90}
            ease={80}
            staticity={50}
            color="#ffffff"
            size={0.9}
        />
    </div>
  );
}
