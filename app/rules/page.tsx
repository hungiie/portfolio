"use client"

import Button from "@/components/button";
import Footer from "@/components/footer";
import PlayProject from "@/components/play-project";
import ProjectHero from "@/components/projecthero";

export default function Rules () {
    return(
        <div>
            <div className="px-9 md:px-22 w-full">
                <ProjectHero 
                name="Knox Manage: Compliance rules" 
                colourCode="var(--colour-samsung)" 
                description={
                    <>
                    EMM feature that lets IT admins create {" "}
                    <span className="text-[var(--main-blue)]">conditional rules </span>
                    to automate management tasks & set up alert system.
                </>}
                linkText1="What is Knox Manage?" 
                linkText2="What is an EMM solution?" 
                url1="https://www.samsungknox.com/en/solutions/it-solutions/knox-manage"
                url2="https://www.samsungknox.com/en/blog/emm-mdm-uem-for-enterprises"
                target1="_blank"
                target2="_blank"
                />

                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr]">
                    <div>
                        <p className="mt-20 mb-8 text-md text-[var(--colour-bodytext)]">As 2025 ends, I wrap up my internship at <span className="inline-block"><Button link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung" textSize="text-md"/></span> as a UX designer.</p>
                        <p className="mb-4 text-md text-[var(--colour-bodytext)]">My work primarily involves designing features for <span className="inline-block"><Button link="https://www.samsungknox.com/en/solutions/it-solutions/knox-manage" target="_blank" variant="blue-hyperlink" text="Knox Manage" textSize="text-md"/></span> - one of Samsung’s B2B SaaS solutions. It is designed to help companies deploy, secure, and manage their mobile devices and data remotely.</p>
                        <p className="mb-8 text-md text-[var(--colour-bodytext)]">I worked closely with senior UX designers who guided my design process, PMs who helped align my work with business objectives, and developers who ensured technical feasibility. Throughout various design and dev sprints, constant and clear communication is required from all parties to deliver the best outcome.</p>

                        <div className="flex flex-col items-center justify-center bg-[var(--colour-grey)] px-7 md:px-7 py-7 md:py-7 rounded-2xl">
                            <p className="text-md text-[var(--colour-bodytext)]">Due to NDA restrictions, I’m unable to share project details publicly, but I’d be happy to elaborate on my experience and design contributions during an interview. Feel free to send me an <span className="inline-block"><Button link="mailto:dht4@sfu.ca" target="_blank" variant="blue-hyperlink" text="email" textSize="text-md"/></span>!</p>
                        </div>
                    </div>
                </div>

                <div className="md:flex md:items-baseline mb-8">
                    <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-30 mb-3 md:mb-0 mr-10">Other projects</p>
                    <Button variant="blue-hyperlink" link="/play" text="View more projects in Play page." textSize="text-md" target="_self"></Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <PlayProject target="_self" link="/organizations" name="Samsung Knox Manage: Organizations" description="A feature in Samsung&rsquo;s EMM solution, Knox Manage, that allows IT admins to categorize their devices based on organizational structure, simplifying device management tasks." tag1="UX design" tag2="B2B UX" imageSrc="/organization-sq.png" />
                    <PlayProject target="_self" link="/demo" name="Samsung Knox: Demo Kit" description="Designing an interactive demo kit for Samsung Knox Cloud Service to showcase its key features and unique selling points to enterprise clients." tag1="UX design" tag2="B2B UX" imageSrc="/demo-sq.png" />
                    {/* <PlayProject target="_self" link="/cardio" name="card.io" description="Designing a Spotify feature that guides users in creating personalized cardio playlists, helping them feel confident and in control." tag1="UX design" tag2="B2C UX" imageSrc="/cardio.png" /> */}
                </div>

                <div className="mb-50"></div>
                <Footer />
            </div>
        </div>
    )
}