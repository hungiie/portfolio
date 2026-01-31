// "use client"

// import Image from "next/image";
// import MyButton from "@/components/my-button";
// import Footer from "@/components/footer";
// import Heading from "@/components/heading";
// import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
// import SlideUpNoThres from "@/components/slide-up-nothres";
// import MyNav from "@/components/nav";

// export default function Rules() {
//   return (
//     <div className="flex items-center justify-center flex-col">
//         <MyNav variant="To home"/>
//         <div className="w-full px-10 md:w-2/3 md:px-0 lg:w-1/3 2xl:w-1/4 mt-20">
//             <SlideUpNoThres>
//                 <div>
//                     <MyButton variant="blue-hyperlink" text="Return to home" link="/" textSize="text-sm" target="_self"/>
//                 </div>
//                 <div className="mb-10"></div>

//                 <Heading text="Samsung Knox Manage: Rules"/>
//                 <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Designed a device management feature that triggers actions when specific conditions are met (time, location, device status, etc.)</p>
//                 <div className="mb-5"></div>
//                 <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">What is Samsung Knox Manage? <MyButton variant="blue-hyperlink" text="Learn more" link="https://www.samsungknox.com/en/solutions/it-solutions/knox-manage" textSize="text-sm" target="blank"/></p>
//                 <div className="mb-7"></div>
//                 <ImageZoom>
//                     <Image src="/rules.png" width={2985} height={2236} className="w-full h-auto block dark:hidden" alt="Samsung Knox"/> 
//                 </ImageZoom>
//                 <ImageZoom>
//                     <Image src="/rules-darkmode.png" width={2985} height={2236} className="w-full h-auto hidden dark:block" alt="Samsung Knox"/> 
//                 </ImageZoom>
                
//                 <div className="mb-30"></div>

//                 {/* <Heading text="Selected deliverable 1"/> */}
//                 <Heading text="Viewing a rule&rsquo;s details"/>
//                 {/* <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-1"><span className="font-semibold">Viewing a rule&rsquo;s details</span></p> */}
//                 <ImageZoom>
//                     <Image src="/rules-0.png" width={3099} height={1823} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
//                 </ImageZoom>
//                 <ImageZoom>
//                     <Image src="/rules-0-darkmode.png" width={3099} height={1823} className="w-full h-auto mb-2 hidden dark:block" alt="Samsung Knox"/> 
//                 </ImageZoom>
//                 <ImageZoom>
//                     <Image src="/rules-1.png" width={3099} height={1823} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
//                 </ImageZoom>
//                 <ImageZoom>
//                     <Image src="/rules-1-darkmode.png" width={3099} height={1823} className="w-full h-auto mb-2 hidden dark:block" alt="Samsung Knox"/> 
//                 </ImageZoom>
//                 <div className="mb-6"></div>
//                 <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-4">Supports IT admin in rule reviewing with an at-a-glance table and a sliding panel for detailed views.</p>
//                 {/* <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-2"><span className="font-semibold">Interface for viewing a rule&rsquo;s details</span>: Displaying crucial information an IT admin needs to know.</p> */}
//                 {/* <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">Certain details redacted due to NDA.</p> */}
//                 {/* <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">Actual content may vary due to ongoing product updates.</p> */}

//                 <div className="mb-30"></div>

//                 {/* <Heading text="Selected deliverable 2"/> */}
//                 <Heading text="Create a new rule with time & location conditions"/>
//                 {/* <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-1"><span className="font-semibold">Creating a new rule</span></p> */}
//                 <ImageZoom>
//                     <Image src="/rules-2.png" width={3099} height={3363} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
//                 </ImageZoom>
//                 <ImageZoom>
//                     <Image src="/rules-2-darkmode.png" width={3099} height={3363} className="w-full h-auto mb-2 hidden dark:block" alt="Samsung Knox"/> 
//                 </ImageZoom>
//                 <ImageZoom>
//                     <Image src="/rules-3.png" width={3099} height={3363} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
//                 </ImageZoom>
//                 <ImageZoom>
//                     <Image src="/rules-3-darkmode.png" width={3099} height={3363} className="w-full h-auto mb-2 hidden dark:block" alt="Samsung Knox"/> 
//                 </ImageZoom>
//                 {/* <ImageZoom>
//                     <Image src="/rules-4.png" width={2622} height={2622} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
//                 </ImageZoom>
//                 <ImageZoom>
//                     <Image src="/rules-4-darkmode.png" width={2622} height={2622} className="w-full h-auto mb-2 hidden dark:block" alt="Samsung Knox"/> 
//                 </ImageZoom> */}
//                 <div className="mb-4"></div>
//                 <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-4">Helping user configure time & location conditions.</p>
//                 {/* <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-2"><span className="font-semibold">Interface for creating a new rule</span>: Helping user configure time & location conditions.</p> */}
//                 {/* <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">Certain details redacted due to NDA.</p> */}
//                 {/* <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">Actual content may vary due to ongoing product updates.</p> */}
                
//                 <div className="mb-20"></div>

//                 <Heading text="About the work"/>
//                 <div>
//                     <p className="text-sm text-[var(--colour-bodytext)] leading-loose">As 2025 ends, I wrap up my internship at <span className="inline-block"><MyButton link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung" textSize="text-sm"/></span> as a UX designer.</p>
//                     <div className="mb-6"></div>
//                     <p className="text-sm text-[var(--colour-bodytext)] leading-loose">My work primarily involves designing features for <span className="inline-block"><MyButton link="https://www.samsungknox.com/en/solutions/it-solutions/knox-manage" target="_blank" variant="blue-hyperlink" text="Knox Manage" textSize="text-sm"/></span> - one of Samsung&rsquo;s B2B SaaS solutions, designed to help companies deploy, secure, and manage their mobile devices remotely.</p>
//                     <div className="mb-6"></div>
//                     <p className="mb-1 text-sm text-[var(--colour-bodytext)] leading-loose">Special thanks to:</p>
//                     <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Tian Jia (Senior UX Designer & UX Lead) and Hosoo Lee (Product Manager)</p>
//                     <div className="mb-8"></div>

//                     <div className="flex flex-col justify-center bg-[var(--colour-grey)] px-7 py-7 rounded-2xl">
//                         <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Due to NDA restrictions, I&rsquo;m unable to share project details publicly, but I&rsquo;d be happy to elaborate on my experience and design contributions during an interview.</p>
//                         <p className="text-sm text-[var(--colour-bodytext)] mt-5 leading-loose">Feel free to send me an <span className="inline-block"><MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="blue-hyperlink" text="email" textSize="text-sm"/></span>!</p>
//                     </div>
//                 </div>

//                 {/* <div className="mt-25 w-full grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-y-10"> */}
//                 <div className="mt-25 w-full flex items-center justify-end">
//                     {/* <MyButton variant="blue-hyperlink" text="Return to home" link="/" textSize="text-sm" target="_self"/> */}
//                     {/* <div className="flex flex-col items-end"> */}
//                         <p className="text-sm text-[var(--colour-bodytext)] hidden md:block">View next project: </p>
//                         <div className="ml-2"></div>
//                         <MyButton variant="blue-hyperlink" text="Samsung Knox Manage: Organizations ->" link="organizations" textSize="text-sm" target="_self"/>
//                         {/* <div className="mb-3"></div> */}
//                         {/* <MyButton variant="blue-hyperlink" text="Samsung Knox Manage: Demo Kit ->" link="demokit" textSize="text-sm" target="_self"/> */}
//                     {/* </div> */}
//                 </div>
//                 <div className="-mb-15"></div>

//                 <Footer/>
//             </SlideUpNoThres>
//         </div>
//     </div>
//   );
// }




"use client"

import Image from "next/image";
import MyButton from "@/components/my-button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import SlideUpNoThres from "@/components/slide-up-nothres";
import MyNav2 from "@/components/nav2";

export default function Rules() {
  return (
    <div>
        <MyNav2 variant="Projects to home"/>
        <div className="w-full flex flex-col items-center justify-center self-center bg-transparent">
            <div className="px-10 md:w-2/3 md:px-0 lg:w-[75%] 2xl:w-[60%]">

                <div className="w-full mt-20">
                    <div className="w-full flex justify-between items-center">
                        <MyButton variant="blue-hyperlink" text="Return to home" link="/" textSize="text-sm" target="_self"/>
                        <MyButton variant="blue-button" text="Resume" link="https://drive.google.com/file/d/1F2UXNXNltAkH-Y0qinUaZDLaMNDMd6Mh/view" textSize="text-sm" target="_blank"/>
                    </div>
                    <div className="mb-20"></div>

                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-6">
                        <div className="">
                            <Heading text="Samsung Knox Manage: Rules"/>
                        </div>
                        <div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Designed a device management feature that triggers actions when specific conditions are met (time, location, device status, etc.)</p>
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
                    <video src="/Rule vid.mp4" className="w-full" autoPlay muted loop />
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
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Tian Jia (Senior UX Designer & UX Lead) and Hosoo Lee (Product Manager)</p>
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
                            <Heading text="Viewing a rule&rsquo;s details"/>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-8">Simplifies rule reviewing with an at-a-glance table and a sliding panel for detailed views.</p>
                        </div>
                        <div>
                            <ImageZoom>
                                <Image src="/rules-0.png" width={3099} height={1823} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <ImageZoom>
                                <Image src="/rules-0-darkmode.png" width={3099} height={1823} className="w-full h-auto mb-2 hidden dark:block" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <ImageZoom>
                                <Image src="/rules-1.png" width={3099} height={1823} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <ImageZoom>
                                <Image src="/rules-1-darkmode.png" width={3099} height={1823} className="w-full h-auto mb-2 hidden dark:block" alt="Samsung Knox"/> 
                            </ImageZoom>
                        </div>
                    </div>

                    <div className="mb-30"></div>

                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-6">
                        <div className="md:sticky md:top-25 md:self-start">
                            <Heading text="Create a new rule"/>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-8">Streamlines the configuration process for time & location conditions.</p>
                        </div>
                        <div>
                            <ImageZoom>
                                <Image src="/rules-2.png" width={3099} height={3363} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <ImageZoom>
                                <Image src="/rules-2-darkmode.png" width={3099} height={3363} className="w-full h-auto mb-2 hidden dark:block" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <ImageZoom>
                                <Image src="/rules-3.png" width={3099} height={3363} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <ImageZoom>
                                <Image src="/rules-3-darkmode.png" width={3099} height={3363} className="w-full h-auto mb-2 hidden dark:block" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <ImageZoom>
                                <Image src="/rules-4.png" width={2622} height={2622} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <ImageZoom>
                                <Image src="/rules-4-darkmode.png" width={2622} height={2622} className="w-full h-auto mb-2 hidden dark:block" alt="Samsung Knox"/> 
                            </ImageZoom>
                        </div>
                    </div>
                </div>

                <div className="mb-30"></div>

                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-4">
                    <div></div>
                    <div className="w-full flex flex-col md:flex-row justify-between">
                        <div className="flex flex-col md:flex-row">
                            <p className="text-sm text-[var(--colour-bodytext)]">View next project: </p>
                            <div className="ml-2 mb-2"></div>
                            <MyButton variant="blue-hyperlink" text="Samsung Knox Manage: Organizations" link="organizations" textSize="text-sm" target="_self"/>
                        </div>
                        <div className="hidden md:flex">
                            <p className="text-sm text-[var(--colour-bodytext)] hidden md:block">Or </p>
                            <div className="ml-1"></div>
                            <MyButton variant="blue-hyperlink" text="return to home" link="/" textSize="text-sm" target="_self"/>
                        </div>
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
