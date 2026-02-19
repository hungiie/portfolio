"use client"

import Image from "next/image";
import MyButton from "@/components/my-button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import SlideUpNoThres from "@/components/slide-up-nothres";
import MyNav2 from "@/components/nav2";
import DotsMenu from "@/components/menu";
import ProtectedPhoto2 from "@/components/protected-photo";
import Head from "next/head";
import Polaroid from "@/components/polaroid";

export default function Organizations() {
  return (
    <div>
        <MyNav2 variant="Projects to home"/>
        <div className="w-full flex flex-col items-center justify-center self-center">
            <div className="px-10 md:w-2/3 md:px-0 lg:w-[75%] 2xl:w-[70%]">
                <div className="w-full mt-20">
                    <div className="w-full flex justify-between items-center">
                        <MyButton variant="blue-hyperlink" text="Return to home" link="/" textSize="text-sm" target="_self"/>
                        <div className="block md:hidden">
                            <DotsMenu/>
                        </div>
                        <div className="hidden md:flex">
                            <MyButton variant="blue-button-outline" text="About me" link="about" textSize="text-sm" target="_self"/>
                            <div className="ml-3"></div>
                            <MyButton variant="blue-button" text="Resume" link="https://drive.google.com/file/d/1CrubhoYF0ok5oFfJT3Ffxlkr6Jp0p8Jk/view?usp=sharing" textSize="text-sm" target="_blank"/>
                        </div>
                    </div>
                    <div className="mb-20"></div>

                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-4">
                        <div className="">
                            <Heading text="Samsung Knox Manage: Organizations" variant="black"/>
                        </div>
                        <div>
                            <p className="text-lg text-[var(--colour-bodytext)] leading-loose">Designed a design-system–ready component that communicates the parent–child relationships among entities and their inheritance logic.</p>
                            <div className="mb-5"></div>
                            <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">What is Samsung Knox Manage? <MyButton variant="blue-hyperlink" text="Learn more" link="https://www.samsungknox.com/en/solutions/it-solutions/knox-manage" textSize="text-sm" target="blank"/></p>
                            <div className="mb-7"></div>
                        </div>
                    </div>
                </div>

                <div className="mb-10"></div>

                <div>
                    <ImageZoom>
                        <Image src="/org-00.png" width={2985} height={2236} className="w-full h-auto block dark:hidden" alt="Samsung Knox"/> 
                    </ImageZoom>
                </div>

                <div className="w-full mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-4">
                        <div className="">
                            <Heading text="About the work" variant="black"/>
                        </div>
                        <div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">As 2025 ends, I wrap up my internship at <span className="inline-block"><MyButton link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung" textSize="text-sm"/></span> as a UX designer.</p>
                            <div className="mb-10"></div>
                            <p className="text-lg text-[var(--colour-bodytext)] leading-loose">My work focused on designing features for <span className="inline-block"><MyButton link="https://www.samsungknox.com/en/solutions/it-solutions/knox-manage" target="_blank" variant="blue-hyperlink" text="Knox Manage" textSize="text-lg"/></span> - Samsung&rsquo;s B2B SaaS device management solution that allows IT admins to remotely manage & ensure security for fleets of Samsung devices.</p>
                            <div className="mb-10"></div>
                            <p className="mb-1 text-sm text-[var(--colour-bodytext)] leading-loose">Special thanks to:</p>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Andrea Lin (Senior UX Designer) and Hyejeong Kim (Product Manager)</p>
                            {/* <div className="mb-8"></div>
                            <div className="flex flex-col justify-center bg-[var(--colour-grey)] p-10 rounded-2xl">
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Due to NDA restrictions, I&rsquo;m unable to share project details publicly, but I&rsquo;d be happy to elaborate on my experience and design contributions during an interview.</p>
                                <p className="text-sm text-[var(--colour-bodytext)] mt-5 leading-loose">Feel free to send me an <span className="inline-block"><MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="blue-hyperlink" text="email" textSize="text-sm"/></span>!</p>
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* <div className="w-full mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-4">
                        <div className="">
                            <Heading text="What I did" variant="black"/>
                        </div>
                        <div>
                            <div className="flex flex-col justify-center bg-[var(--main-darkerblue)] px-7 py-7 rounded-2xl">
                                <Heading text="Project generalized due to NDA." variant="white"/>
                                <div className="-mb-2"></div>
                                <p className="text-sm text-white leading-loose">Due to NDA restrictions,I’m unable to share project details publicly, but I’d be happy to elaborate on my experience and design contributions during an interview.</p>
\                            </div>
                            <div className="mb-4"></div>
                            <div className="w-full flex flex-col justify-center bg-[var(--colour-grey)] px-7 py-7 rounded-2xl ">
                                <Heading text="How might me..." variant="black"/>
                                <div className="-mb-2"></div>
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">... effectively communicate the concept of inherited and assigned profiles to IT admins, using existing components and not reliant on texts?</p>
                            </div>
                        </div>
                    </div>
                </div> */}
                

                <div className="mb-30"></div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-4">
                        <div className="md:sticky md:top-25 md:self-start">
                            <Heading text="Overview" variant="black"/>
                        </div>
                        <div>
                            <div className="flex flex-col justify-center bg-[#fbfbfb] p-10 rounded-2xl">
                                <p className="text-sm text-[var(--main-blue)] leading-loose">Problem ⚠️</p>
                                <div className="mb-9"></div>
                                <p className="text-lg text-[var(--colour-bodytext)] leading-loose">Due to time and development constraints, the concept of multi-level inheritance and parent-to-child settings needs to be communicated with minimal dev effort.</p>
                                <div className="mb-9"></div>
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">When a setting is assigned to a parent organization, it is inherited by all of its child organizations. This inheritance is not editable in the child organization settings UI, and can only be overriden by assigning a new setting to the child organization.</p>
                            </div> 
                            <div className="mb-4"></div>
                            <div className="flex flex-col justify-center bg-[#fbfbfb] p-10 rounded-2xl">
                                <p className="text-sm text-[var(--main-blue)] leading-loose">What I did</p>
                                <div className="mb-4"></div>
                                <p className="text-lg text-[var(--colour-bodytext)] leading-loose">I designed an Organization table component that displays the inheritance hierarchy and override status of settings, while reusing atom and molecule components from the design system.</p>
                                {/* <div className="mb-9"></div>
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">The </p> */}
                            </div>
                            <div className="mb-4"></div>
                            <div className="flex flex-col justify-center bg-[var(--colour-grey)] p-10 rounded-2xl">
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Due to NDA restrictions, I&rsquo;m unable to share project's process publicly, but I&rsquo;d be happy to elaborate on my experience and design contributions during an interview.</p>
                                <p className="text-sm text-[var(--colour-bodytext)] mt-5 leading-loose">Feel free to send me an <span className="inline-block"><MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="blue-hyperlink" text="email" textSize="text-sm"/></span>!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-30"></div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-6">
                        <div className="md:sticky md:top-25 md:self-start">
                            <Heading text="Design system documentation for Organization Table component" variant="black"/>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-8">Detailing specs, variants, interaction guidelines, and edge-case behaviours.</p>
                        </div>
                        <div>
                            <ImageZoom>
                                <Image src="/ds1.png" width={3099} height={1823} className="w-full h-auto block dark:hidden" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <div className="mb-2"></div>
                            <ImageZoom>
                                <Image src="/ds2.png" width={3099} height={1823} className="w-full h-auto block dark:hidden" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <div className="mb-2"></div>
                            <ImageZoom>
                                <Image src="/ds3.png" width={3099} height={1823} className="w-full h-auto block dark:hidden" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <div className="mb-2"></div>
                            <ImageZoom>
                                <Image src="/ds4.png" width={3099} height={1823} className="w-full h-auto block dark:hidden" alt="Samsung Knox"/> 
                            </ImageZoom>
                            {/* <div className="mb-2"></div> */}
                            {/* <ImageZoom>
                                <Image src="/ds5.png" width={3099} height={1823} className="w-full h-auto block dark:hidden" alt="Samsung Knox"/> 
                            </ImageZoom> */}
                            {/* <ProtectedPhoto2 src1="/doc1.png" src2="/doc2.png" alt="organizations" password="2002"/> */}
                            {/* <div className="mb-4"></div> */}
                            {/* <ProtectedPhoto src="/doc2.png" alt="organizations" password="2002"/> */}
                        </div>
                    </div>

                    <div className="mb-30"></div>

                    {/* <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-6">
                        <div className="md:sticky md:top-25 md:self-start">
                            <Heading text="Individual cell component"/>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-8">A core components in Organization table, enables smoother collaboration for Knox Manage UX team.</p>
                        </div>
                        <div>
                            <ImageZoom>
                                <Image src="/org-2.png" width={3099} height={3363} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <ImageZoom>
                                <Image src="/org-2-darkmode.png" width={3099} height={3363} className="w-full h-auto mb-2 hidden dark:block" alt="Samsung Knox"/> 
                            </ImageZoom>
                        </div>
                    </div> */}
                </div>

                <div className="mb-35"></div>
                
                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-4">
                        <div className="">
                            <Heading text="Learnings" variant="black"/>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-lg text-[var(--colour-bodytext)] leading-loose">The first design is almost never the best one.</p>
                            <div className="mb-4"></div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">If there is 1 thing I have grown to not scared of anymore, is to scrap ideas and start from scratch. I've always known designing is an iterative process, but to actually understand why it is needed and how to do it correctly, is what working with Product Manages had taught me.</p>
                            <div className="mb-15"></div>
                            <p className="text-lg text-[var(--colour-bodytext)] leading-loose">Break down complex concept into simple words.</p>
                            <div className="mb-4"></div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Due to the project's complex interactions, it is not uncommon that I had to consult multiple people to confirm its backend logic. I also frequently relay these findings back to my team for feedbacks and suggestions. This has taught me how to adapt my language and simplify technical concepts without losing meaning.</p>
                            <div className="mb-20"></div>
                            <div>
                                <div className="w-full md:w-[80%] grid grid-cols-2 gap-4">
                                    {/* <Polaroid imageSrc="/KM.jpg" desc="Knox Manage team 💻" angle={0} alt="Hung Tran" textSize="text-sm md:text-xl"/> */}
                                    {/* <Polaroid imageSrc="/coop xmas.jpg" desc="Samsung XMas party 🎁" angle={0} alt="Hung Tran" textSize="text-sm md:text-xl"/> */}
                                    <div className="flex flex-col justify-start">
                                        <Image src="/KM.jpg" width={3099} height={3363} className="w-full mb-2 rounded-md shadow-md" alt="Hung Tran" style={{ filter: 'contrast(80%)' }}/> 
                                        <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">Knox Manage team 💻</p>
                                    </div>
                                    <div className="flex flex-col justify-start">
                                        <Image src="/grouse.png" width={3099} height={3363} className="w-full mb-2 rounded-md shadow-md" alt="Hung Tran" style={{ filter: 'contrast(95%)' }}/> 
                                        <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">Product Design meeting @ Grouse ⛰️</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-30"></div>

                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-4">
                    <div></div>
                    <div className="w-full flex flex-col md:flex-row justify-between gap-3">
                        <MyButton variant="blue-button-outline" text="View: Samsung Knox Manage: Rules" link="rules" textSize="text-sm" target="_self"/>
                        <MyButton variant="blue-button-outline" text="View: card.io" link="cardio" textSize="text-sm" target="_self"/>
                        <MyButton variant="blue-button-outline" text="Return to home" link="/" textSize="text-sm" target="_self"/>
                   </div>
                </div>

                <div className="w-full">
                    <Footer/>
                </div>

            </div>
        </div>
    </div>
  );
}