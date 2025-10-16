"use client"

// import ExpandableImage from "@/components/expandable-image";
import Image from "next/image";
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

                {/* <div className="bg-[var(--colour-grey)] px-3 md:px-10 py-3 md:py-7 rounded-2xl mt-17">
                    <div className="flex justify-center items-center mt-0 md:mt-3 mb-0 md:mb-3 w-full md:w-3/5 mx-auto">
                        <Image src="/knox-preview.png" className="w-full" width={1781} height={1121} alt="Knox Manage"/>
                    </div>
                </div> */}
                <p className="mt-20 mb-30 text-md text-[var(--colour-bodytext-3)]">Coming soon.</p>

                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-30 mb-8">Other projects</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                    <PlayProject target="_self" link="/cardio" name="card.io" description="Designing a Spotify feature that guides users in creating personalized cardio playlists, helping them feel confident and in control." tag1="UX design" tag2="B2C UX" imageSrc="/cardio.png" />
                    <PlayProject target="_self" link="/jackalope" name="Jackalope" description="Social event and community finder app, helping international students settle into a new country, with AI-powered suggestions and built-in feedback mechanisms." tag1="UX design & research" tag2="B2C UX" imageSrc="/jackalope.png" />
                </div>

                <div className="mb-50"></div>
                <Footer />
            </div>
        </div>
    )
}