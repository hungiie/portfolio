"use client"

import Image from "next/image";
import MyButton from "@/components/my-button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import PhotoTag from "@/components/photo-tag";
import SlideUpNoThres from "@/components/slide-up-nothres";
import MyNav2 from "@/components/nav2";

export default function About() {
  return (
    <div className="flex items-center justify-center flex-col">
        <MyNav2 variant="Abt to home"/>
        <div className="w-full px-10 md:w-2/3 md:px-0 lg:w-1/3 2xl:w-[25%] mt-24">
            <SlideUpNoThres>
                <div className="mb-9 flex justify-between items-center">
                    <MyButton variant="blue-hyperlink" text="Return to home" link="/" textSize="text-sm" target="_self"/>
                    <div className="flex">
                        {/* <MyButton variant="blue-button-outline" text="About me" link="about" textSize="text-sm" target="_self"/>
                        <div className="ml-3"></div> */}
                        <MyButton variant="blue-button" text="Resume" link="https://drive.google.com/file/d/1F2UXNXNltAkH-Y0qinUaZDLaMNDMd6Mh/view" textSize="text-sm" target="_blank"/>
                    </div>
                </div>

                <div className="w-full flex">
                    <div className="w-full h-auto relative mb-9 overflow-hidden">
                        <Image src="/haha.jpg" width={1472} height={828} alt="hung tran" className="object-cover block" style={{ filter: 'contrast(87%) brightness(95%) saturate(115%)' }}/>
                    </div>
                </div>

                <Heading text="Hi, my name is Hung."/>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-6">I&rsquo;m a UX designer. Most recently, I designed at <span className="inline-block"><MyButton link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung" textSize="text-sm"/></span></p>
                {/* <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-6">I&rsquo;m on my way to complete my Bachelor&rsquo;s in Design & Development for Web & Mobile at <span className=""><MyButton link="https://www.sfu.ca/siat.html" target="_blank" variant="blue-hyperlink" text="SFU School of Interactive Arts & Technology" textSize="text-sm"/></span></p> */}
                {/* <p className="mb-2 text-sm text-[var(--colour-bodytext)] leading-loose">I think a lot about my morning coffee. What began as an act of free will, slowly became a habit - something I do on autopilot everyday.</p>
                <p className="mb-2 text-sm text-[var(--colour-bodytext)] leading-loose">Habits often emerge as friction fades: a stop at the coffee shop on the way to work, a swipe that feels natural, a tap that requires no thought. Over time, these interactions stop being decisions, and start becoming part of the subconscious mind.</p>
                <p className="mb-2 text-sm text-[var(--colour-bodytext)] leading-loose">I design for that feeling - experiences so intuitive they fade into the background, allowing users to focus not on the interface, but on living.</p>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Like noticing how good the coffee was.</p> */}

                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">For me, designing an experience is like telling a story - with people, technology, and context as threads of different colours and textures.</p>
                <div className="mb-6"></div>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">I have been playing with those threads since childhood. From posting my self-important, fictional stories to Wattpad, to now designing actual experiences as a UX designer - where I connect users, technology, and context the way a story connects its characters and their journeys.</p>
                {/* <p className="mb-2 text-sm text-[var(--colour-bodytext)] leading-loose">In my work, I connect users, technology, and context the way a story connects its characters and their journeys.</p> */}
                <div className="mb-8"></div>

                <div className="">
                    <p className="text-sm text-[var(--colour-bodytext)]">Send me an <span className="inline-block"><MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="blue-hyperlink" text="email" textSize="text-sm"/></span></p>
                    <p className="text-sm text-[var(--colour-bodytext)] mt-2">Send me a message on <span className="inline-block"><MyButton link="https://www.linkedin.com/in/hung-tran-profile/" target="_blank" variant="blue-hyperlink" text="LinkedIn" textSize="text-sm"/></span></p>
                    <p className="text-sm text-[var(--colour-bodytext)] mt-2">Check out my <span className="inline-block"><MyButton link="https://drive.google.com/file/d/1F2UXNXNltAkH-Y0qinUaZDLaMNDMd6Mh/view" target="_blank" variant="blue-hyperlink" text="resume" textSize="text-sm"/></span></p>
                </div>
                <div className="mb-25"></div>

                {/* <Heading text="My attempts to romanticize life"/>
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
                <div className="mb-25"></div> */}

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

                <div className="mb-25"></div>

                <div className="w-full flex items-center justify-center">
                    <div className="w-full h-auto relative mb-10 overflow-hidden">
                        <Image src="/small.jpg" width={2040} height={1179} alt="hung tran" className="object-cover" style={{ filter: 'contrast(80%)' }}/>
                    </div>
                </div>

                <Heading text="My story"/>
                <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose">Born and raised in Vietnam, I spent my childhood full of curiosity and bold ideas, often quietly observing the world around me.</p>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">In a world where quietness is considered absence, where presence is measured by volume, a quiet child needs to look out for themselves to avoid being left behind. They notice patterns, tone shifts, and emotions that pass too quickly for louder conversations to catch. Many of them learn empathy early - not because they are taught, but because they have to understand people without always being heard themselves.</p>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">(<MyButton variant="blue-hyperlink" text="The Psychology of a Quiet Kid" textSize="font-sm" link="https://youtu.be/t4f2LLExHrY?si=BLNxWPEcgEFO1mQX" target="_blank" />, 2025)</p>
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
                <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose">If you&rsquo;re still here reading my yapping session, maybe that&rsquo;s one of them, so please don&rsquo;t hesitate to <MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="blue-hyperlink" text="reach out" textSize="text-sm"/>. Let&rsquo;s chat :)</p>
                
                <div className="mb-35"></div>

                <div className="w-full flex items-center justify-center">
                    <MyButton variant="blue-button-outline" text="Return to home" link="/" target="_self" textSize="text-sm"/>
                </div>

                {/* <div className="-mb-10"></div> */}

                {/* <Heading text="My life soundtracks"/>
                <iframe data-testid="embed-iframe" style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/playlist/4l2acge11NRVSaAczjswg7?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>            <div className="mb-25"></div> */}

                {/* <Heading text="Sometimes (once every 10 years), I will pick up a brush"/>
                <div className="relative aspect-[1209/751] overflow-hidden">
                    <Image src="/painting.jpg" alt="hung tran" fill className="object-cover scale-105"/>
                </div>
                <div className="mb-25"></div> */}

                <Footer/>
            </SlideUpNoThres>
        </div>
    </div>
  );
}


// "use client"

// import Image from "next/image";
// import MyButton from "@/components/my-button";
// import Footer from "@/components/footer";
// import Heading from "@/components/heading";
// import PhotoTag from "@/components/photo-tag";
// import SlideUpNoThres from "@/components/slide-up-nothres";
// import MyNav from "@/components/nav";
// import MyNav2 from "@/components/nav2";

// export default function About() {
//   return (
//     <div className="flex items-center justify-center flex-col">
//         {/* <MyNav variant="To home"/> */}
//         <div className="w-full px-10 md:w-2/3 md:px-0 lg:w-[75%] 2xl:w-1/4 mt-15">
//             <SlideUpNoThres>
//                 <div className="grid grid-cols-2 gap-x-15">
//                     <div className="w-full sticky top-17 self-start">
//                         <div className="mb-15">
//                             <MyButton variant="blue-hyperlink" text="Return to home" link="/" textSize="text-sm" target="_self"/>
//                         </div>
//                         <Heading text="Hi, my name is Hung."/>
//                         <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-6">I&rsquo;m a UX designer, I designed at <span className="inline-block"><MyButton link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung" textSize="text-sm"/></span></p>
//                         {/* <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-6">I&rsquo;m on my way to complete my Bachelor&rsquo;s in Design & Development for Web & Mobile at <span className=""><MyButton link="https://www.sfu.ca/siat.html" target="_blank" variant="blue-hyperlink" text="SFU School of Interactive Arts & Technology" textSize="text-sm"/></span></p> */}
//                         <p className="mb-2 text-sm text-[var(--colour-bodytext)] leading-loose">Loving him is like driving a new Maserati down a dead end street. Faster than the wind, passionate as sin, ending so suddenly</p>
//                         <p className="mb-2 text-sm text-[var(--colour-bodytext)] leading-loose">Loving him is like trying to change your mind. Once you're already flying through the free fall.</p>
//                         <p className="mb-2 text-sm text-[var(--colour-bodytext)] leading-loose">I design for that feeling - experiences so intuitive they fade into the background, allowing users to focus not on the interface, but on living.</p>
//                         <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Like the colors in autumn, so bright, just before they lose it all.</p>
//                         <div className="mb-8"></div>
//                         <div className="">
//                             <p className="text-sm text-[var(--colour-bodytext)]">Send me an <span className="inline-block"><MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="blue-hyperlink" text="email" textSize="text-sm"/></span></p>
//                             <p className="text-sm text-[var(--colour-bodytext)] mt-2">Send me a message on <span className="inline-block"><MyButton link="https://www.linkedin.com/in/hung-tran-profile/" target="_blank" variant="blue-hyperlink" text="LinkedIn" textSize="text-sm"/></span></p>
//                             <p className="text-sm text-[var(--colour-bodytext)] mt-2">Check out my <span className="inline-block"><MyButton link="https://drive.google.com/file/d/1F2UXNXNltAkH-Y0qinUaZDLaMNDMd6Mh/view" target="_blank" variant="blue-hyperlink" text="resume" textSize="text-sm"/></span></p>
//                         </div>
//                     </div>
//                     <div className="w-full h-auto relative mb-9 overflow-hidden mt-25">
//                         <Image src="/haha.jpg" width={1472} height={828} alt="hung tran" className="object-cover block" style={{ filter: 'contrast(87%) brightness(95%) saturate(115%)' }}/>
//                         <div className="mb-2"></div>
//                         <div className="grid grid-cols-1 gap-2">
//                             <PhotoTag
//                                 photoSrc="/work2.png"
//                                 photoWidth={3721}
//                                 photoHeight={2791}
//                                 className="object-cover"
//                                 tagSrc="/tagtag.png"
//                                 tagWidth={307}
//                                 tagHeight={240}
//                                 tagPosition={{ x: 600, y: 1090 }}
//                             />
//                             <PhotoTag
//                                 photoSrc="/work1.png"
//                                 photoWidth={3721}
//                                 photoHeight={2791}
//                                 className="object-cover"
//                                 tagSrc="/tagtag.png"
//                                 tagWidth={307}
//                                 tagHeight={240}
//                                 tagPosition={{ x: 1090, y: 380 }}
//                             />
//                         </div>

//                     </div>
//                 </div>
//                 <Footer/>
//             </SlideUpNoThres>
//         </div>
//     </div>
//   );
// }
