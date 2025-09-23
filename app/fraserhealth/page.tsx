"use client"

import Button from "@/components/button";
import ExpandableImage from "@/components/expandable-image";
import ExpandableVideo from "@/components/expandable-video";
import Footer from "@/components/footer";
import PlayProject from "@/components/play-project";
import ProjectHero from "@/components/projecthero";

export default function FraserHealth () {
    return(
        <div>
            <div className="px-9 md:px-22 w-full">
                <ProjectHero 
                name="Fraser Health intership" 
                colourCode="var(--colour-fraserhealth)" 
                description={
                    <>
                    My work as a {" "}
                    <span className="text-[var(--colour-fraserhealth)]">visual designer intern </span>
                    at Fraser Health Authority.
                </>}
                linkText1="fraserhealth.ca" 
                linkText2="" 
                url1="https://www.fraserhealth.ca/"
                url2=""
                target1="_blank"
                target2="_blank"
                />
                
                <div className="mt-40 flex items-baseline">
                    <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mr-8 mb-8">Videographics</p>
                    <Button variant="blue-hyperlink" link="https://youtu.be/ZBhZYYxJFnw?si=aBnQWQWvucBJxqx_" text="View on YouTube" textSize="text-md" target="_blank"></Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-9">
                    <div className="relative w-full rounded-xl overflow-hidden">
                        <ExpandableVideo src="/fraserhealth/videographics.mp4" className="w-full" />
                    </div>
                </div>

                <div className="mt-40 flex items-baseline">
                    <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mr-8 mb-8">Fraser Health&apos;s 2024 corporate brochure</p>
                    <Button variant="blue-hyperlink" link="https://drive.google.com/file/d/12_Hnzfqztvrm2rH_ZSei2mOYYY4uHZmB/view" text="View PDF" textSize="text-md" target="_blank"></Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-9">
                    <div>
                        <div className="relative w-full rounded-xl overflow-hidden mb-2 md:mb-5">
                            <ExpandableImage alt="Fraser Health's 2024 corporate brochure" src="/fraserhealth/corporate-brochure.png" className="w-full" />
                        </div>
                        <div className="grid grid-cols-2 gap-2 md:gap-5">
                            <div className="relative w-full rounded-xl overflow-hidden">
                                <ExpandableImage alt="Fraser Health's 2024 corporate brochure" src="/fraserhealth/corporate-brochure-2.png" className="w-full" />
                            </div>
                            <div className="relative w-full rounded-xl overflow-hidden">
                                <ExpandableImage alt="Fraser Health's 2024 corporate brochure" src="/fraserhealth/corporate-brochure-3.png" className="w-full" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-40 flex items-baseline">
                    <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mr-8 mb-8">Fraser Health&apos;s substance use awareness inforgraphics</p>
                    <Button variant="blue-hyperlink" link="https://drive.google.com/file/d/1yOtR_Y54gbaL0NUUvxe7Bb6w_h22E6L1/view" text="View PDF" textSize="text-md" target="_blank"></Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-9">
                    <div>
                        <div className="grid grid-cols-2 gap-2 md:gap-5">
                            <div className="relative w-full rounded-xl overflow-hidden">
                                <ExpandableImage alt="Fraser Health's substance use awareness inforgraphics" src="/fraserhealth/infographics-1.png" className="w-full" />
                            </div>
                            <div className="relative w-full rounded-xl overflow-hidden">
                                <ExpandableImage alt="Fraser Health's substance use awareness inforgraphics" src="/fraserhealth/infographics-2.png" className="w-full" />
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-30 mb-8">Other projects</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                    <PlayProject target="_self" link="/samsungknox" name="Samsung Knox Manage" description="Samsung Knox Suite is a proprietary security and management framework pre-installed on most Samsung mobile devices." tag1="UX design internship" tag2="B2B UX" imageSrc="/knox-square.png" />
                    <PlayProject target="_self" link="/cardio" name="card.io" description="Designing a Spotify feature that guides users in creating personalized cardio playlists, helping them feel confident and in control." tag1="UX design" tag2="B2C UX" imageSrc="/cardio.png" />
                </div>

                <div className="mb-50"></div>
                <Footer />
            </div>
        </div>
    )
}