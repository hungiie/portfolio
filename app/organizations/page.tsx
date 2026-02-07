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

export default function Organizations() {
  return (
    <div>
        <MyNav2 variant="Projects to home"/>
        <div className="w-full flex flex-col items-center justify-center self-center">
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
                            <MyButton variant="blue-button" text="Resume" link="https://drive.google.com/file/d/1F2UXNXNltAkH-Y0qinUaZDLaMNDMd6Mh/view" textSize="text-sm" target="_blank"/>
                        </div>
                    </div>
                    <div className="mb-20"></div>

                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-6">
                        <div className="">
                            <Heading text="Samsung Knox Manage: Organizations"/>
                        </div>
                        <div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Designed a device management feature that organizes devices into nested groups and enables hierarchical device management.</p>
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
                    <ImageZoom>
                        <Image src="/rules-darkmode.png" width={2985} height={2236} className="w-full h-auto hidden dark:block" alt="Samsung Knox"/> 
                    </ImageZoom>
                </div>

                <div className="w-full mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-4">
                        <div className="">
                            <Heading text="About the work"/>
                        </div>
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
                    </div>
                </div>
                
                <div className="mb-20"></div>

                <div className="mb-30"></div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-6">
                        <div className="md:sticky md:top-25 md:self-start">
                            <Heading text="Design system documentation for Organization Table component"/>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-8">Detailing specs, variants, interaction guidelines, and edge-case behaviours.</p>
                        </div>
                        <div>
                            {/* <ImageZoom>
                                <Image src="/doc1.png" width={3099} height={1823} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <ImageZoom>
                                <Image src="/doc2.png" width={3099} height={1823} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
                            </ImageZoom> */}
                            <ProtectedPhoto2 src1="/doc1.png" src2="/doc2.png" alt="organizations" password="peepolala"/>
                            {/* <div className="mb-4"></div> */}
                            {/* <ProtectedPhoto src="/doc2.png" alt="organizations" password="peepolala"/> */}
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

                <div className="mb-30"></div>

                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-4">
                    <div></div>
                    <div className="w-full flex flex-col md:flex-row justify-between">
                        {/* <div className="flex flex-col md:flex-row">
                            <p className="text-sm text-[var(--colour-bodytext)]">View next project: </p>
                            <div className="ml-2 mb-2"></div>
                            <MyButton variant="blue-hyperlink" text="Samsung Knox Manage: Rules" link="rules" textSize="text-sm" target="_self"/>
                        </div>
                        <div className="hidden md:flex">
                            <p className="text-sm text-[var(--colour-bodytext)] hidden md:block">Or </p>
                            <div className="ml-1"></div>
                            <MyButton variant="blue-hyperlink" text="return to home" link="/" textSize="text-sm" target="_self"/>
                        </div> */}
                        <MyButton variant="blue-button-outline" text="View next project: Samsung Knox Manage: Rules" link="rules" textSize="text-sm" target="_self"/>
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