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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                    <PlayProject target="_self" link="/samsungknox" name="Samsung Knox Manage" description="Samsung Knox Suite is a proprietary security and management framework pre-installed on most Samsung mobile devices." tag1="UX design internship" tag2="B2B UX" imageSrc="/knox-square.png" />
                    {/* <PlayProject target="_self" link="/organizations" name="Samsung Knox Manage: Organizations" description="Samsung Knox Suite is a proprietary security and management framework pre-installed on most Samsung mobile devices." tag1="UX design internship" tag2="B2B UX" imageSrc="/organization-sq.png" /> */}
                    {/* <PlayProject target="_self" link="/compliance-rule" name="Samsung Knox Manage: Compliance rules" description="Samsung Knox Suite is a proprietary security and management framework pre-installed on most Samsung mobile devices." tag1="UX design internship" tag2="B2B UX" imageSrc="/compliance-sq.png" /> */}
                    <PlayProject target="_self" link="/cardio" name="card.io" description="Designing a Spotify feature that guides users in creating personalized cardio playlists, helping them feel confident and in control." tag1="UX design" tag2="B2C UX" imageSrc="/cardio.png" />
                    <PlayProject target="_self" link="/jackalope" name="Jackalope AI is a guide for international students." description="Social event and community finder app, helping international students settle into a new country, with AI-powered suggestions and built-in feedback mechanisms." tag1="UX design & research" tag2="B2C UX" imageSrc="/jackalope.png" />
                    <PlayProject target="_blank" link="https://www.figma.com/proto/xYL2PzUpTvgKlnxTzp7a5O/Portfolio-2025?page-id=313%3A2973&node-id=313-3004&viewport=479%2C387%2C0.03&t=NHb88K4xz1HL2JVg-1&scaling=scale-down&content-scaling=fixed" name="Uber Eats&lsquo; speculative feature: Nutrition Report." description="Assists and informs users about their food&lsquo;s nutrition details, makes sure their dietary needs are met." tag1="UX design" tag2="" imageSrc="/ubereats.png" />
                    <PlayProject target="_blank" link="https://www.figma.com/proto/xYL2PzUpTvgKlnxTzp7a5O/Portfolio-2025?page-id=375%3A2980&node-id=375-2981&viewport=743%2C390%2C0.24&t=AVR9d3tvwFyFaaeT-1&scaling=scale-down&content-scaling=fixed" name="Enhancing Spotify&lsquo;s onboarding experience." description="How can the interaction of selecting and dragging multiple songs while pressing CTRL (or CMD key on Mac), can be made more accessible for new users during onboarding experience?" tag1="HCI study" tag2="" imageSrc="/spotify.png" />
                </div>

                <div className="mb-50"></div>
                <Footer />
            </div>
        </div>
    )
}