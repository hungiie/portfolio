"use client"

import Image from "next/image";
import Button from "@/components/button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";

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
            <p className="mb-5 text-sm text-[var(--colour-bodytext)] leading-loose">In the future, I aspire to be an adaptive designer and researcher, staying attuned to our ever-evolving digital habits and expectations.</p>
            
            <div className="bg-[var(--background)]">
                <p className="text-sm text-[var(--colour-bodytext)]">Send me an <span className="inline-block"><Button link="mailto:dht4@sfu.ca" target="_blank" variant="blue-hyperlink" text="email" textSize="text-sm"/></span></p>
                <p className="text-sm text-[var(--colour-bodytext)] mt-1.5">Send me a message on <span className="inline-block"><Button link="https://www.linkedin.com/in/hung-tran-profile/" target="_blank" variant="blue-hyperlink" text="LinkedIn" textSize="text-sm"/></span></p>
                <p className="text-sm text-[var(--colour-bodytext)] mt-1.5">Check out my <span className="inline-block"><Button link="https://drive.google.com/file/d/1F2UXNXNltAkH-Y0qinUaZDLaMNDMd6Mh/view" target="_blank" variant="blue-hyperlink" text="resume" textSize="text-sm"/></span></p>
            </div>
            <div className="mb-25"></div>

            <Heading text="My most prized possession (and I'm not even joking)"/>
            <iframe data-testid="embed-iframe" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/4l2acge11NRVSaAczjswg7?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <div className="mb-25"></div>

            <Heading text="Sometimes (once every 10 years), I will pick up a brush"/>
            <div className="relative aspect-[1209/751] overflow-hidden rounded-xl">
                <Image src="/painting.jpg" alt="hung tran" fill className="object-cover scale-105"/>
            </div>
            <div className="mb-25"></div>

            <Heading text="Or, a digital one"/>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-x-2 gap-y-2">
                <div className="rounded-xl relative aspect-square overflow-hidden">
                    <Image src="/preview illustration 1.png" className="object-cover" fill alt="hung tran"/>
                </div>
                <div className="rounded-xl relative aspect-square overflow-hidden">
                    <Image src="/preview illustration 2.png" className="object-cover" fill alt="hung tran"/>
                </div>
                <div className="rounded-xl relative aspect-square overflow-hidden">
                    <Image src="/preview illustration 3.png" className="object-cover" fill alt="hung tran"/>
                </div>
                <div className="rounded-xl relative aspect-square overflow-hidden">
                    <Image src="/preview illustration 4.png" className="object-cover" fill alt="hung tran"/>
                </div>
                <div className="rounded-xl relative aspect-square overflow-hidden">
                    <Image src="/preview illustration 5.png" className="object-cover" fill alt="hung tran"/>
                </div>
                <div className="rounded-xl relative aspect-square overflow-hidden">
                    <Image src="/preview illustration 6.png" className="object-cover" fill alt="hung tran"/>
                </div>
            </div>
            <div className="mb-25"></div>


            <Heading text="When I'm not doing UX..."/>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-x-2 gap-y-2">
                <div className="rounded-xl relative aspect-square overflow-hidden">
                    <Image src="/mad.jpg" className="object-cover" fill alt="hung tran"/>
                </div>
                <div className="rounded-xl relative aspect-square overflow-hidden">
                    <Image src="/matcha.jpeg" className="object-cover" fill alt="hung tran"/>
                </div>
                <div className="rounded-xl relative aspect-square overflow-hidden">
                    <Image src="/coop.jpg" className="object-cover" fill alt="hung tran"/>
                </div>
                <div className="rounded-xl relative aspect-square overflow-hidden">
                    <Image src="/vsa.jpeg" className="object-cover" fill alt="hung tran"/>
                </div>
                <div className="rounded-xl relative aspect-square overflow-hidden">
                    <Image src="/vsaflag.jpeg" className="object-cover" fill alt="hung tran"/>
                </div>
                <div className="rounded-xl relative aspect-square overflow-hidden">
                    <Image src="/spinning.jpeg" className="object-cover" fill alt="hung tran"/>
                </div>
            </div>
            <p className="mt-4 text-sm text-[var(--colour-bodytext)] leading-loose">... You can find me joining local communities, at concerts, or at a school event!</p>

            <Footer/>
        </div>
    </div>
  );
}
