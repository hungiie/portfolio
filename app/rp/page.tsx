"use client"

import Footer from "@/components/footer";
import PlayProject from "@/components/play-project";
import ProjectHero from "@/components/projecthero";

export default function SamsungKnoxRP () {
    return(
        <div>
            <div className="px-9 md:px-22 w-full">
                <ProjectHero 
                name="Samsung Knox Reseller Portal" 
                colourCode="var(--colour-samsung)" 
                description={
                    <>
                    Make sure resellers {" "}
                    <span className="text-[var(--colour-samsung)]">complete required trainings </span>
                    prior to managing devices.
                </>}
                linkText1="What is Reseller Portal?" 
                linkText2="" 
                url1="https://partner.samsungknox.com/resellers"
                url2=""
                target1="_blank"
                target2=""
                />
                <p className="mt-20 mb-30 text-md text-[var(--colour-bodytext-3)]">Coming soon.</p>

                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-30 mb-8">Other projects</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                    <PlayProject target="_self" link="/samsungknox" name="Samsung Knox Manage" description="Samsung Knox Suite is a proprietary security and management framework pre-installed on most Samsung mobile devices." tag1="UX design internship" tag2="B2B UX" imageSrc="/knox-square.png" />
                    <PlayProject target="_self" link="/jackalope" name="Jackalope" description="Social event and community finder app, helping international students settle into a new country, with AI-powered suggestions and built-in feedback mechanisms." tag1="UX design & research" tag2="B2C UX" imageSrc="/jackalope.png" />
                </div>

                <div className="mb-50"></div>
                <Footer />
            </div>
        </div>
    )
}