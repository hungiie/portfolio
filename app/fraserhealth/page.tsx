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
                    Designing at {" "}
                    <span className="text-[var(--colour-fraserhealth)]">Fraser Health</span>
                    .
                </>}
                linkText1="fraserhealth.ca" 
                linkText2="" 
                url1="https://www.fraserhealth.ca/"
                url2=""
                target1="_blank"
                target2="_blank"
                />

                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-9">
                    <div>
                        <p className="mt-20 text-2xl font-semibold text-[var(--colour-bodytext)] mr-8 mb-8">Designing in the healthcare industry has taught me lots of things.</p>
                        <p className="text-md text-[var(--colour-bodytext-1)]">From the importance of accessibility and clarity in information design, to how thoughtful visuals can ease patient&apos;s anxiety, support decision-making, and bridge the communication gaps between professionals, healthcare workers, and the general public.</p>
                        <p className="mt-5 text-md text-[var(--colour-bodytext-1)]">Here are some of the published work that I made, during my time as a 2nd-year student, and a visual design intern at Fraser Heaalth&apos;s Communications department.</p>
                    </div>
                </div>
                
                <div className="mt-30 flex items-baseline">
                    <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mr-8 mb-8">Videographics</p>
                    <Button variant="blue-hyperlink" link="https://youtu.be/ZBhZYYxJFnw?si=aBnQWQWvucBJxqx_" text="View on YouTube" textSize="text-md" target="_blank"></Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-9">
                    <div className="relative w-full rounded-xl overflow-hidden">
                        <ExpandableVideo src="/fraserhealth/videographics.mp4" className="w-full" />
                    </div>
                </div>

                <div className="mt-30 flex items-baseline">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <PlayProject target="_self" link="/rules" name="Samsung Knox Manage: Rules management" description="A feature in Samsung&rsquo;s EMM solution, Knox Manage, that lets IT admins create various device management rules, which monitor device activity and streamline enterprise mobility management." tag1="UX design" tag2="B2B UX" imageSrc="/rules-sq.png" />
                    <PlayProject target="_self" link="/organizations" name="Samsung Knox Manage: Organizations" description="A feature in Samsung&rsquo;s EMM solution, Knox Manage, that allows IT admins to categorize their devices based on organizational structure, simplifying device management tasks." tag1="UX design" tag2="B2B UX" imageSrc="/organization-sq.png" />
                    <PlayProject target="_self" link="/demo" name="Samsung Knox: Demo Kit" description="Designing an interactive demo kit for Samsung Knox Cloud Service to showcase its key features and unique selling points to enterprise clients." tag1="UX design" tag2="B2B UX" imageSrc="/demo-sq.png" />
                </div>

                <div className="mb-50"></div>
                <Footer />
            </div>
        </div>
    )
}