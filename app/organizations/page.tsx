"use client"

import Button from "@/components/button";
// import ExpandableImage from "@/components/expandable-image";
// import Image from "next/image";
import Footer from "@/components/footer";
import PlayProject from "@/components/play-project";
import ProjectHero from "@/components/projecthero";

export default function SamsungKnox () {
    return(
        <div>
            <div className="px-9 md:px-22 w-full">
                <ProjectHero 
                name="Samsung Knox Manage" 
                colourCode="var(--colour-samsung)" 
                description={
                    <>
                    Streamlining enterprise-level Samsung device management for {" "}
                    <span className="text-[var(--colour-samsung)]">IT administrators</span>
                    .
                </>}
                linkText1="What is Knox Manage?" 
                linkText2="" 
                url1="https://www.samsungknox.com/en/solutions/it-solutions/knox-manage"
                url2=""
                target1="_blank"
                target2=""
                />
            
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr]">
                    <div>
                        <p className="mt-20 mb-8 text-md text-[var(--colour-bodytext)]">I completed an 8-month internship at <span className="inline-block"><Button link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung Canada" textSize="text-md"/></span> as a UX designer in 2025.</p>
                        <p className="mb-4 text-md text-[var(--colour-bodytext)]">My work primarily involves designing features for <span className="inline-block"><Button link="https://www.samsungknox.com/en/solutions/it-solutions/knox-manage" target="_blank" variant="blue-hyperlink" text="Knox Manage" textSize="text-md"/></span> - one of Samsung’s B2B SaaS solutions. It is designed to help companies deploy, secure, and manage their mobile devices and data remotely.</p>
                        <p className="mb-8 text-md text-[var(--colour-bodytext)]">I worked closely with senior UX designers who guided my design process, PMs who helped align my work with business objectives, and developers who ensured technical feasibility. Throughout various design and dev sprints, constant and clear communication is required from all parties to deliver the best outcome.</p>

                        <div className="flex flex-col items-center justify-center bg-[var(--colour-grey)] px-7 md:px-7 py-7 md:py-7 rounded-2xl">
                            <p className="text-md text-[var(--colour-bodytext)]">Due to NDA restrictions, I’m unable to share project details publicly, but I’d be happy to elaborate on my experience and design contributions during an interview. Feel free to send me an <span className="inline-block"><Button link="mailto:tranndhungg@gmail.com" target="_blank" variant="blue-hyperlink" text="email" textSize="text-md"/></span>!</p>
                        </div>
                    </div>
                </div>

                {/* <Image src="/knox-long.png" className="w-full rounded-2xl mt-17" width={4200} height={1604} alt="Knox Manage"/> */}



                <div className="md:flex md:items-baseline mb-8">
                    <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-30 mb-3 md:mb-0 mr-10">Other projects</p>
                    <Button variant="blue-hyperlink" link="/play" text="View more projects in Play page." textSize="text-md" target="_self"></Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <PlayProject target="_self" link="/compliance-rule" name="Samsung Knox Manage: Compliance rules" description="Samsung Knox Suite is a proprietary security and management framework pre-installed on most Samsung mobile devices." tag1="UX design internship" tag2="B2B UX" imageSrc="/compliance-sq.png" />
                    <PlayProject target="_self" link="/cardio" name="card.io" description="Designing a Spotify feature that guides users in creating personalized cardio playlists, helping them feel confident and in control." tag1="UX design" tag2="B2C UX" imageSrc="/cardio.png" />
                    {/* <PlayProject target="_self" link="/jackalope" name="Jackalope AI is a guide for international students." description="Social event and community finder app, helping international students settle into a new country, with AI-powered suggestions and built-in feedback mechanisms." tag1="UX design & research" tag2="B2C UX" imageSrc="/jackalope.png" /> */}
                    {/* <PlayProject target="_blank" link="https://www.figma.com/proto/xYL2PzUpTvgKlnxTzp7a5O/Portfolio-2025?page-id=313%3A2973&node-id=313-3004&viewport=479%2C387%2C0.03&t=NHb88K4xz1HL2JVg-1&scaling=scale-down&content-scaling=fixed" name="Uber Eats&lsquo; speculative feature: Nutrition Report." description="Assists and informs users about their food&lsquo;s nutrition details, makes sure their dietary needs are met." tag1="UX design" tag2="" imageSrc="/ubereats.png" /> */}
                    {/* <PlayProject target="_blank" link="https://www.figma.com/proto/xYL2PzUpTvgKlnxTzp7a5O/Portfolio-2025?page-id=375%3A2980&node-id=375-2981&viewport=743%2C390%2C0.24&t=AVR9d3tvwFyFaaeT-1&scaling=scale-down&content-scaling=fixed" name="Enhancing Spotify&lsquo;s onboarding experience." description="How can the interaction of selecting and dragging multiple songs while pressing CTRL (or CMD key on Mac), can be made more accessible for new users during onboarding experience?" tag1="HCI study" tag2="" imageSrc="/spotify.png" /> */}
                </div>

                <div className="mb-50"></div>
                <Footer />
            </div>
        </div>
    )
}