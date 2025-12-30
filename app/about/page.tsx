"use client"

import Image from "next/image";
import Button from "@/components/button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import PhotoTag from "@/components/photo-tag";
// import TopBlur from "@/components/top-blur";

export default function About() {
  return (
    <div className="flex items-center justify-center flex-col">
        {/* <TopBlur zIndex={20} height={30} maxBlur={10} /> */}
        <div className="w-full px-10 md:w-2/3 lg:w-1/3 lg:px-0 mt-28">
            <div className="mb-10">
                <Button variant="blue-hyperlink" text="<- Back to home" link="/" textSize="text-sm" target="_self"/>
            </div>

            <div className="w-full flex items-center justify-center">
                <div className="w-full h-auto relative mb-10 overflow-hidden">
                    <Image src="/mememe-darkmode.png" width={2316} height={1276} alt="hung tran" className="object-cover block dark:hidden" style={{ filter: 'contrast(89%)' }}/>
                    <Image src="/mememe-darkmode.png" width={2316} height={1276} alt="hung tran" className="object-cover hidden dark:block" style={{ filter: 'contrast(95%)' }}/>
                </div>
            </div>

            <Heading text="Hi, my name is Hung."/>
            <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-6">I&rsquo;m a UX designer. I used to apply drop shadows at <span className="inline-block"><Button link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung" textSize="text-sm"/></span></p>
            <p className="mb-2 text-sm text-[var(--colour-bodytext)] leading-loose">I&rsquo;m passionate about how social media shapes our digital habits - and how modern interfaces evolve to match our shrinking attention spans.</p>
            <p className="mb-8 text-sm text-[var(--colour-bodytext)] leading-loose">In the future, I aspire to be an adaptive designer and researcher, staying attuned to our ever-evolving digital habits and expectations.</p>
            
            <div className="">
                <p className="text-sm text-[var(--colour-bodytext)]">Send me an <span className="inline-block"><Button link="mailto:d.hungtran12@gmail.com" target="_blank" variant="blue-hyperlink" text="email" textSize="text-sm"/></span></p>
                <p className="text-sm text-[var(--colour-bodytext)] mt-1.5">Send me a message on <span className="inline-block"><Button link="https://www.linkedin.com/in/hung-tran-profile/" target="_blank" variant="blue-hyperlink" text="LinkedIn" textSize="text-sm"/></span></p>
                <p className="text-sm text-[var(--colour-bodytext)] mt-1.5">Check out my <span className="inline-block"><Button link="https://drive.google.com/file/d/1F2UXNXNltAkH-Y0qinUaZDLaMNDMd6Mh/view" target="_blank" variant="blue-hyperlink" text="resume" textSize="text-sm"/></span></p>
            </div>
            <div className="mb-25"></div>

            <Heading text="My attempts to romanticize life"/>
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
            </div>
            <div className="mb-25"></div>

            <Heading text="It&rsquo;s all about the work life balance"/>
            <div className="grid grid-cols-1 gap-2">
                <PhotoTag
                    photoSrc="/work2.png"
                    photoWidth={3721}
                    photoHeight={2791}
                    className="object-cover"
                    tagSrc="/tagtag.png"
                    tagWidth={307}
                    tagHeight={240}
                    tagPosition={{ x: 600, y: 1090 }}
                />
                <PhotoTag
                    photoSrc="/work1.png"
                    photoWidth={3721}
                    photoHeight={2791}
                    className="object-cover"
                    tagSrc="/tagtag.png"
                    tagWidth={307}
                    tagHeight={240}
                    tagPosition={{ x: 1090, y: 380 }}
                />
            </div>

            {/* <div className="flex justify-between mb-6">
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Fraser Health, 2023-2024</p>
            </div> */}
            <div className="grid grid-cols-1 gap-2">
                {/* <div className="relative overflow-hidden">
                    <Image src="/fraser2.png" width={828} height={607} alt="hung tran" className="object-cover" style={{ filter: 'contrast(90%)' }}/>
                </div> */}
                {/* <div className="relative overflow-hidden">
                    <Image src="/fraser1.jpg" width={2796} height={2097} alt="hung tran" className="object-cover" style={{ filter: 'contrast(90%)' }}/>
                </div> */}
            </div>

            <div className="mb-25"></div>

            <div className="w-full flex items-center justify-center">
                <div className="w-full h-auto relative mb-10 overflow-hidden">
                    {/* <Image src="/small.jpg" width={2040} height={1179} alt="hung tran" className="object-cover" style={{ filter: 'contrast(80%)' }}/> */}
                    <PhotoTag
                        photoSrc="/small.jpg"
                        photoWidth={3689}
                        photoHeight={2116}
                        className="object-cover"
                        tagSrc="/tagtag.png"
                        tagWidth={307}
                        tagHeight={240}
                        tagPosition={{ x: 1650, y: 170 }}
                    />
                </div>
            </div>

            <Heading text="My story"/>
            <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose">Born and raised in Vietnam, I was a curious kid, a mind full of bold ideas, trapped inside the body of a shy, reserved boy.</p>
            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">In a world where quietness is considered absence, where presence is measured by volume, a quiet child needs to look out for themselves to avoid being left behind. They notice patterns, tone shifts, and emotions that pass too quickly for louder conversations to catch. Many of them learn empathy early - not because they are taught, but because they have to understand people without always being heard themselves.</p>
            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">(<Button variant="blue-hyperlink" text="The Psychology of a Quiet Kid" textSize="font-sm" link="https://youtu.be/t4f2LLExHrY?si=BLNxWPEcgEFO1mQX" target="_blank" />, 2025)</p>
            <div className="mb-15"></div>
            
            <Heading text="Read rooms rather than dominate them"/>
            <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose">Growing up as one of those quiet kids meant learning to read rooms rather than dominate them.</p>
            <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose">And I believe that way of seeing never really disappear!</p>
            <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose">In UX design, understanding users often goes beyond what is said out loud. Insight can be found in hesitation before a click, in abandoned flows, or in moments where something feels off but goes unspoken.</p>
            <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose">For many quiet kids, listening closely, sitting with uncertainty, and noticing subtle signals become familiar habits over time. In UX, those habits naturally translate into a way of designing that prioritizes care, empathy, and intention.</p>
            <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose"></p>
            <div className="mb-15"></div>

            <Heading text="Everything happens for a reason"/>
            <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose">I&rsquo;m a firm believer of the saying: "Everything happens for a reason".</p>
            <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose">If you&rsquo;re still here reading my yapping session, maybe that&rsquo;s one of them, so please don&rsquo;t hesitate to <Button link="mailto:d.hungtran12@gmail.com" target="_blank" variant="blue-hyperlink" text="reach out" textSize="text-sm"/>. Let&rsquo;s chat :)</p>
            





            {/* <Heading text="My life soundtracks"/>
            <iframe data-testid="embed-iframe" style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/playlist/4l2acge11NRVSaAczjswg7?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>            <div className="mb-25"></div> */}

            {/* <Heading text="Sometimes (once every 10 years), I will pick up a brush"/>
            <div className="relative aspect-[1209/751] overflow-hidden rounded-xl">
                <Image src="/painting.jpg" alt="hung tran" fill className="object-cover scale-105"/>
            </div>
            <div className="mb-25"></div> */}

            <Footer/>
        </div>
    </div>
  );
}
