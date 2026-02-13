"use client"

import Image from "next/image";
import MyButton from "@/components/my-button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import SlideUpNoThres from "@/components/slide-up-nothres";
import MyNav2 from "@/components/nav2";
import DotsMenu from "@/components/menu";

export default function Rules() {
  return (
    <div>
        <MyNav2 variant="Projects to home"/>
        <div className="w-full flex flex-col items-center justify-center self-center bg-transparent">
            <div className="px-10 md:w-2/3 md:px-0 lg:w-[75%] 2xl:w-[60%]">

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

                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-6">
                        <div className="">
                            <Heading text="Samsung Knox Manage: Rules" variant="black"/>
                        </div>
                        <div>
                            <p className="text-lg text-[var(--colour-bodytext)] leading-loose">Designed a device management feature that triggers actions when specific conditions are met (time, location, device status, etc.)</p>
                            <div className="mb-5"></div>
                            <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">What is Samsung Knox Manage? <MyButton variant="blue-hyperlink" text="Learn more" link="https://www.samsungknox.com/en/solutions/it-solutions/knox-manage" textSize="text-sm" target="blank"/></p>
                            <div className="mb-7"></div>
                        </div>
                    </div>
                </div>

                <div className="mb-10"></div>

                <div>
                    {/* <ImageZoom>
                        <Image src="/rules-00.png" width={2985} height={2236} className="w-full h-auto block dark:hidden" alt="Samsung Knox"/> 
                    </ImageZoom>
                    <ImageZoom>
                        <Image src="/rules-darkmode.png" width={2985} height={2236} className="w-full h-auto hidden dark:block" alt="Samsung Knox"/> 
                    </ImageZoom> */}
                    <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                        <source src="Rule video wide.mp4"type="video/mp4" />
                    </video>
                </div>

                <div className="mb-20"></div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-4">
                        <div className="">
                            <Heading text="About the work" variant="black"/>
                        </div>
                        <div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">As 2025 ends, I wrap up my internship at <span className="inline-block"><MyButton link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung" textSize="text-sm"/></span> as a UX designer.</p>
                            <div className="mb-6"></div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">My work primarily involves designing features for <span className="inline-block"><MyButton link="https://www.samsungknox.com/en/solutions/it-solutions/knox-manage" target="_blank" variant="blue-hyperlink" text="Knox Manage" textSize="text-sm"/></span> - one of Samsung&rsquo;s B2B SaaS solutions, designed to help companies deploy, secure, and manage their mobile devices remotely.</p>
                            <div className="mb-6"></div>
                            <p className="mb-1 text-sm text-[var(--colour-bodytext)] leading-loose">Special thanks to:</p>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Tian Jia (Senior UX Designer & UX Lead) and Hosoo Lee (Product Manager)</p>
                            {/* <div className="mb-8"></div>
                            <div className="flex flex-col justify-center bg-[var(--colour-grey)] p-10 rounded-2xl">
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Due to NDA restrictions, I&rsquo;m unable to share project details publicly, but I&rsquo;d be happy to elaborate on my experience and design contributions during an interview.</p>
                                <p className="text-sm text-[var(--colour-bodytext)] mt-5 leading-loose">Feel free to send me an <span className="inline-block"><MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="blue-hyperlink" text="email" textSize="text-sm"/></span>!</p>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="mb-20"></div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-4">
                        <div className="">
                            <Heading text="Overview" variant="black"/>
                        </div>
                        <div>
                            <div className="flex flex-col justify-center bg-[#fbfbfb] p-10 rounded-2xl">
                                <p className="text-sm text-[var(--main-blue)] leading-loose">Problem ⚠️</p>
                                <div className="mb-6"></div>
                                <p className="text-lg text-[var(--colour-bodytext)] leading-loose">IT admins need a way to automate repetitive tasks so they don’t have to manually perform them each time they’re required.</p>
                                <div className="mb-6"></div>
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Some tasks are time-sensitive, requiring IT admins to stay alert 24/7 without break.</p>
                            </div>
                            <div className="mb-4"></div>
                            <div className="flex flex-col justify-center bg-[var(--colour-grey)] p-10 rounded-2xl">
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Due to NDA restrictions, I&rsquo;m unable to share project details publicly, but I&rsquo;d be happy to elaborate on my experience and design contributions during an interview.</p>
                                <p className="text-sm text-[var(--colour-bodytext)] mt-5 leading-loose">Feel free to send me an <span className="inline-block"><MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="blue-hyperlink" text="email" textSize="text-sm"/></span>!</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="mb-30"></div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-6">
                        <div className="md:sticky md:top-25 md:self-start">
                            <Heading text="Viewing a rule&rsquo;s details" variant="black"/>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-8">Simplifies rule reviewing with an at-a-glance table and a sliding panel for detailed views.</p>
                        </div>
                        <div>
                            <ImageZoom>
                                <Image src="/rules-0.png" width={3099} height={1823} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <ImageZoom>
                                <Image src="/rules-1.png" width={3099} height={1823} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <ImageZoom>
                                <Image src="/rules-1.5.png" width={3099} height={1823} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
                            </ImageZoom>
                        </div>
                    </div>

                    <div className="mb-30"></div>

                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-6">
                        <div className="md:sticky md:top-25 md:self-start">
                            <Heading text="Create a new rule" variant="black"/>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-8">Streamlines the configuration process for time & location conditions.</p>
                        </div>
                        <div>
                            <ImageZoom>
                                <Image src="/rules-2.png" width={3099} height={3363} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <ImageZoom>
                                <Image src="/rules-3.png" width={3099} height={3363} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <ImageZoom>
                                <Image src="/rules-4.png" width={2622} height={2622} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
                            </ImageZoom>
                        </div>
                    </div>
                </div>

                <div className="mb-35"></div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-4">
                        <div className="">
                            <Heading text="Learnings" variant="black"/>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-lg text-[var(--colour-bodytext)] leading-loose">Designing isnt just designing. It's also about writing.</p>
                            <div className="mb-4"></div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">I learned that a clear and concise note section can save a tremendous amount of time communicating back and forth with developers to specify the unclear interactions. Preparing documentation is a process that shouldn’t be treated lightly, or wait until last minute.</p>
                            <div className="mb-15"></div>
                            <p className="text-lg text-[var(--colour-bodytext)] leading-loose">What "think in system" actually means.</p>
                            <div className="mb-4"></div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">I have heard the phrase "think in system" countless time. But working in this project truly put it into perspectives for me. 1 small change in a single flow could create a ripple effect across multiple flows and features. Knowing the product inside and out and anticipating the impact of every decision is just 1 of the skills I have developed through this process.</p>
                        </div>
                    </div>
                </div>

                <div className="mb-30"></div>

                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-4">
                    <div></div>
                    <div className="w-full flex flex-col md:flex-row justify-between">
                        {/* <div className="flex flex-col md:flex-row">
                            <p className="text-sm text-[var(--colour-bodytext)]">View next project: </p>
                            <div className="ml-2 mb-2"></div>
                            <MyButton variant="blue-hyperlink" text="Samsung Knox Manage: Organizations" link="organizations" textSize="text-sm" target="_self"/>
                        </div>
                        <div className="hidden md:flex">
                            <p className="text-sm text-[var(--colour-bodytext)] hidden md:block">Or </p>
                            <div className="ml-1"></div>
                            <MyButton variant="blue-hyperlink" text="return to home" link="/" textSize="text-sm" target="_self"/>
                        </div> */}
                        {/* <MyButton variant="blue-button-outline" text="View next project: Samsung Knox Manage: Organizations" link="organizations" textSize="text-sm" target="_self"/> */}
                        <div className="mb-3"></div>
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
