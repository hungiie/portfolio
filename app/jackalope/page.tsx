"use client"

import ProjectHero from "@/components/projecthero";
import Footer from "@/components/footer";
import Overview from "@/components/overview";
import Button from "@/components/button";
import ExpandableImage from "@/components/expandable-image";
import ExpandableVideo from "@/components/expandable-video";
import JackalopeResearch from "@/components/jackalope-research";
import PlayProject from "@/components/play-project";

export default function Jackalope () {
    return(
        <div>
            <div className="px-9 md:px-22 w-full">
                <ProjectHero 
                name="Jackalope" 
                colourCode="var(--colour-jackalope)" 
                description={
                    <>
                    <span className="text-[var(--colour-jackalope)]">Finding communities</span>{" "}
                    as a newcomer shouldn&apos;t be this hard.
                </>}
                linkText1="Jump to solution" 
                linkText2="See prototype"
                target1="_self"
                target2="_blank"
                url1="#solution"
                url2="https://cloud.protopie.io/p/19d7fc1126c632fad10ec7f2?ui=true&scaleToFit=true&enableHotspotHints=true&cursorType=touch&mockup=true&bgColor=%23F5F5F5&bgImage=undefined&playSpeed=1" 
                />

                <Overview 
                subject1="Project type:" value1="UX design & research" 
                subject2="Duration:" value2="3 months" 
                subject3="Tool used:" value3="Figma & ProtoPie" 
                description1="Jackalope helps international students in Canada settling in by connecting them with events and communities that align with their interests, while minimizing the impact of cultural shock."
                description2="This is an academic project of IAT 334 - Interface Design, that I completed with 2 colleagues: Jay Ho and Dominika Styk."
                />

                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-30 mb-8">My role in this project</p>
                <p className="text-md text-[var(--colour-bodytext)] w-full md:w-1/2 mb-8">My role in this project involves <span className="text-[var(--colour-jackalope)] font-semibold">1) designing the homepage</span>, where users will spend the most time on, and <span className="text-[var(--colour-jackalope)] font-semibold">2) planning, recruiting, and conducting the first usability testing</span> after the first prototype.</p>

                <div>
                    <div className="mt-30 flex items-baseline">
                        <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mr-8 mb-8">First look</p>
                        <Button variant="blue-hyperlink" link="https://cloud.protopie.io/p/19d7fc1126c632fad10ec7f2?ui=true&scaleToFit=true&enableHotspotHints=true&cursorType=touch&mockup=true&bgColor=%23F5F5F5&bgImage=undefined&playSpeed=1" text="See prototype" textSize="text-md" target="_blank"></Button>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-[var(--colour-grey)] px-3 md:px-10 py-3 md:py-7 rounded-2xl">
                        <div className="grid grid-cols-4 mt-0 md:mt-3 mb-0 md:mb-3 gap-x-1 md:gap-x-4 w-full md:w-3/5">
                            <ExpandableImage src="/jackalope/prev 1.png" className="w-full" alt="jackalope"/>
                            <ExpandableImage src="/jackalope/prev 2.png" className="w-full" alt="jackalope"/>
                            <ExpandableImage src="/jackalope/prev 6.png" className="w-full" alt="jackalope"/>
                            <ExpandableImage src="/jackalope/prev 4.png" className="w-full" alt="jackalope"/>
                        </div>
                    </div>
                    {/* <div className="text-center mt-4">
                        <p className="text-sm text-[var(--colour-darkgrey)]">Click on each video to expand.</p>
                    </div> */}
                </div>

                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-30 mb-8">The problem at hand</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                    <div>
                        <div className="py-10">
                            <p className="text-sm text-[var(--colour-bodytext)] font-semibold mb-4">Challenges</p>
                            <p className="text-lg text-[var(--colour-bodytext)] mb-2">Many newcomers face difficulty finding events or communities that align with their interests due to the lack of centralized platforms designed specifically for their needs.</p>
                            <p className="text-lg text-[var(--colour-bodytext)] mb-2">Information is often scattered across multiple platforms or shared through word of mouth, making it overwhelming to navigate. Additionally, there is a lack of detailed, personalized guidance for adjusting to cultural shock in Canada, which can lead to feelings of social isolation.</p>
                        </div>
                        <div className="">
                            <p className="text-sm text-[var(--colour-bodytext)] font-semibold mb-4">Common goals</p>
                            <p className="text-lg text-[var(--colour-bodytext)] mb-2">I aim to minimize the time it takes for newcomers to adjust to the cultural shock when arriving in Canada. Motivated by the desire to help them build a sense of belonging, I focus on creating solutions that connect individuals with friends and communities who share similar interests, easing their transition into their new environment.</p>
                        </div>
                    </div>
                    <div>
                        <div className="px-13 py-10 rounded-2xl bg-[var(--colour-grey)]">
                            <p className="text-3xl font-semibold tracking-tight text-[var(--colour-bodytext)] mb-2">Being an <span className="text-[var(--colour-jackalope)]">international student</span> can be lonely - navigating a new country & culture setting can make it difficult to connect with friends, or discover activities that help one feels at home!</p>
                        </div>
                    </div>
                </div>

                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-30 mb-8">How Might We...</p>
                <div className="w-full flex justify-center">
                    <div className="px-13 py-10 rounded-2xl bg-[var(--colour-grey)] w-full md:w-4/5">
                        <p className="text-3xl font-semibold tracking-tight text-[var(--colour-bodytext)] mb-2">...help international students <span className="text-[var(--colour-jackalope)]">find communities</span>, events, and connect with interest-based groups while <span className="text-[var(--colour-jackalope)]">minimizing the initial cultural shock</span>?</p>
                    </div>
                </div>
                
                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-30 mb-8" id="solution">Jackalope&lsquo;s solutions</p>
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-y-15 gap-x-2 px-0">
                    <div className="h-full flex flex-col justify-center rounded-2xl bg-[var(--colour-grey)] md:px-13 px-6 py-6">
                        <p className="text-sm text-[var(--colour-jackalope)] font-semibold mb-7">Solution 1</p>
                        <p className="text-lg text-[var(--colour-bodytext)] font-semibold leading-5.5 mb-7">Interests-based matching.</p>
                        <p className="text-md text-[var(--colour-bodytext)] mb-2">Users can select different areas of interests upon creating their profile.</p>
                        <p className="text-md text-[var(--colour-bodytext)]">These interests are shown publicly on a user’s profile page. This would allow users to see and connect with others if they have similar interests.</p>
                    </div>
                    <div className="flex justify-center">
                        <ExpandableImage src="/jackalope/prev 1.png" className="w-full mr-2" alt="jackalope"/>
                        <ExpandableVideo src="/jackalope/sol 6.mp4" className="w-full" />
                    </div>
            
                    <div className="h-full flex flex-col justify-center rounded-2xl bg-[var(--colour-grey)] md:px-13 px-6 py-6">
                        <p className="text-sm text-[var(--colour-jackalope)] font-semibold mb-7">Solution 2</p>
                        <p className="text-lg text-[var(--colour-bodytext)] font-semibold leading-5.5 mb-7">Events discovery.</p>
                        <p className="text-md text-[var(--colour-bodytext)] mb-2">Discover events & communities, view events&lsquo; details, contact organizers, and RSVP or save events of interest.</p>
                    </div>
                    <div className="flex justify-center">
                        <ExpandableImage src="/jackalope/prev 2.png" className="w-full mr-2" alt="jackalope"/>
                        <ExpandableVideo src="/jackalope/overview 2.mp4" className="w-full" />
                    </div>

                    <div className="h-full flex flex-col justify-center rounded-2xl bg-[var(--colour-grey)] md:px-13 px-6 py-6">
                        <p className="text-sm text-[var(--colour-jackalope)] font-semibold mb-7">Solution 3</p>
                        <p className="text-lg text-[var(--colour-bodytext)] font-semibold leading-5.5 mb-7">AI assistance.</p>
                        <p className="text-md text-[var(--colour-bodytext)] mb-2">Jackalope provides tips to help international students navigate cultural differences.</p>
                        <p className="text-md text-[var(--colour-bodytext)]">Users can dislike a tip to contact organizers, ask the community, or provide feedback to improve future assistance.</p>
                    </div>
                    <div className="flex justify-center">
                        <ExpandableImage src="/jackalope/prev 6.png" className="w-full mr-2" alt="jackalope"/>
                        <ExpandableVideo src="/jackalope/sol 5.mp4" className="w-full" />
                    </div>

                    <div className="h-full flex flex-col justify-center rounded-2xl bg-[var(--colour-grey)] md:px-13 px-6 py-6">
                        <p className="text-sm text-[var(--colour-jackalope)] font-semibold mb-7">Solution 4</p>
                        <p className="text-lg text-[var(--colour-bodytext)] font-semibold leading-5.5 mb-7">Community messaging.</p>
                        <p className="text-md text-[var(--colour-bodytext)] mb-2">In-app messaging for direct communication between users and communities, or event organizers.</p>
                    </div>
                    <div className="flex justify-center">
                        <ExpandableImage src="/jackalope/prev 4.png" className="w-full mr-2" alt="jackalope"/>
                        <ExpandableVideo src="/jackalope/overview 1.mp4" className="w-full" />
                    </div>
                </div>

                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-30 mb-8">Initial sketches</p>
                <div className="w-full md:gap-x-7 px-5 md:px-35 3xl:px-70 py-5 md:py-15 rounded-xl md:rounded-2xl bg-[var(--colour-grey)] flex flex-col items-center">
                    <div className="relative w-full md:w-3/5 mb-10">
                        <ExpandableImage src="/jackalope/sketch 1.png" alt="jackalope sketch" className="w-full h-full" />
                        <p className="text-sm text-[var(--colour-darkgrey)] mt-2 text-center">Sketches for the profile creation process.</p>
                    </div>
                    <div className="relative w-full md:w-3/5 mb-10">
                        <ExpandableImage src="/jackalope/sketch 2.png" alt="jackalope sketch" className="w-full h-full" />
                        <p className="text-sm text-[var(--colour-darkgrey)] mt-2 text-center">Sketches for the process of discovering and accessing new events.</p>
                    </div>
                    <div className="relative w-full md:w-3/5 mb-10">
                        <ExpandableImage src="/jackalope/sketch 3.png" alt="jackalope sketch" className="w-full h-full" />
                        <p className="text-sm text-[var(--colour-darkgrey)] mt-2 text-center">The AI feature was designed to help reduce cultural shock for students, by providing contextual explanations for unfamiliar words or phrases.</p>
                    </div>
                    <div className="relative w-full md:w-3/5">
                        <ExpandableImage src="/jackalope/sketch 4.png" alt="jackalope sketch" className="w-full h-full" />
                        <p className="text-sm text-[var(--colour-darkgrey)] mt-2 text-center">Initially, the idea was that users could select a word or phrase they didn&lsquo;t understand, and the AI would explain it in the appropriate context.</p>
                    </div>
                </div>
                <p className="text-md text-[var(--colour-bodytext)] font-semibold mt-8">However, this approach had the following issues:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5 mt-8">
                    <div className="bg-[var(--colour-grey)] px-10 py-10 rounded-2xl">
                        <p className="text-sm text-[var(--colour-jackalope)] font-semibold mb-4">Limited proactivity</p>
                        <p className="text-xl text-[var(--colour-bodytext)] font-semibold mb-4">The AI&lsquo;s support was passive, requiring users to activate it manually.</p>
                        <p className="text-md text-[var(--colour-bodytext)]">* This reduced its ability to assist users effectively.</p>
                    </div>
                    <div className="bg-[var(--colour-grey)] px-10 py-10 rounded-2xl">
                        <p className="text-sm text-[var(--colour-jackalope)] font-semibold mb-4">Unintuitive interaction</p>
                        <p className="text-xl text-[var(--colour-bodytext)] font-semibold mb-4">Highlighting text to request an explanation felt unnatural.</p>
                        <p className="text-md text-[var(--colour-bodytext)]">* Making it difficult for users to recognize this as a viable interaction option.</p>
                    </div>
                </div>

                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-30 mb-8">Low-fidelity UX drafts</p>
                <div className="w-full px-5 md:px-35 3xl:px-70 py-5 md:py-15 rounded-xl md:rounded-2xl bg-[var(--colour-grey)]">
                    <p className="text-md text-[var(--colour-bodytext)] font-semibold mb-10">Option 1</p>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-2 md:gap-x-7">
                        <div className="relative w-full">
                            <ExpandableVideo src="/jackalope/lowfidelity.mp4" className="w-full h-fit" />
                        </div>
                        <div className="relative w-full">
                            <ExpandableImage src="/jackalope/diagram-1.png" alt="jackalope site map" className="w-full h-auto" />
                        </div>
                    </div>
                </div>

                <div className="w-full px-5 md:px-35 3xl:px-70 py-5 md:py-15 rounded-xl md:rounded-2xl bg-[var(--colour-grey)] mt-10">
                    <p className="text-md text-[var(--colour-bodytext)] font-semibold mb-10">Option 2</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-x-7">
                        <div className="relative w-full">
                            <ExpandableImage src="/jackalope/lofi-1.png"  alt="jackalope low fidelity" className="w-full h-fit mb-4" />
                            <ExpandableImage src="/jackalope/lofi-2.png"  alt="jackalope low fidelity" className="w-full h-fit" />
                        </div>
                        <div className="relative w-full">
                            <ExpandableImage src="/jackalope/diagram-2.png" alt="jackalope site map" className="w-full h-auto" />
                        </div>
                    </div>
                </div>

                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-30 mb-8">Early-stage design decisions</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
                    <div>
                        <div className="mb-5 bg-[var(--colour-grey)] px-10 py-10 rounded-2xl">
                            <p className="text-md text-[var(--colour-jackalope)] font-semibold mb-6">Prioritizing communities discovery.</p>
                            <p className="text-lg text-[var(--colour-bodytext)] mb-2">While option 1’s user flow diagrams had access to event discovery, the final user flow and wireframes had more of a focus on finding communities.</p>
                            <p className="text-lg text-[var(--colour-bodytext)] mb-2">The group chat function of the first 2 user flow options is hidden behind lots of interactions or only accessible through its event.</p>
                            <p className="text-lg text-[var(--colour-bodytext)] mb-2">In the last user flow, users can access communities freely without having to rely on events.</p>
                            <p className="text-lg text-[var(--colour-bodytext)] mb-2">Because the main goal of our interactive system is to connect people and help them find a new community, we found that this was the best user flow.</p>
                        </div>
                        <div className="mb-5 bg-[var(--colour-grey)] px-10 py-10 rounded-2xl">
                            <p className="text-md text-[var(--colour-jackalope)] font-semibold mb-6">Encouraging new friendships.</p>
                            <p className="text-lg text-[var(--colour-bodytext)] mb-2">Compared to option 1, where 1-on-1 chat is limited to between user and event organizers, and users can only chat with other users in a group settings, the last user flow allows users to:</p>
                            <p className="text-lg text-[var(--colour-bodytext)] mb-2">Easily reach out to other attendees or other people in the same community.</p>
                            <p className="text-lg text-[var(--colour-bodytext)] mb-2">Simplify keeping in touch by easy access to their status (Can see the communities that they join, friends that go to the same events).</p>
                        </div>
                    </div>
                    <div>
                        <div className="px-13 py-10 rounded-2xl bg-[var(--colour-grey)]">
                            <p className="text-3xl font-semibold tracking-tight text-[var(--colour-bodytext)] mb-2">Option 2&lsquo;s <span className="text-[var(--colour-jackalope)]">user flow diagram</span> is more accessible and purposeful...</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
                    <div>
                        <div className="px-13 py-10 rounded-2xl bg-[var(--colour-grey)]">
                            <p className="text-3xl font-semibold tracking-tight text-[var(--colour-bodytext)] mb-2">...While option 1 has more intuitive <span className="text-[var(--colour-jackalope)]">UI</span> and diverse <span className="text-[var(--colour-jackalope)]">interactions</span>.</p>
                        </div>
                    </div>
                    <div>
                        <div className="mb-5 bg-[var(--colour-grey)] px-10 py-10 rounded-2xl">
                            <p className="text-md text-[var(--colour-jackalope)] font-semibold mb-6">Wide range of interactions that prompt key actions.</p>
                            <p className="text-lg text-[var(--colour-bodytext)] mb-2">Option 1’s UI offers a more diverse range of interaction, where more information can be revealed as user performs certain actions, (such as swiping, pinching, rather than simply tapping)</p>
                            <p className="text-lg text-[var(--colour-bodytext)] mb-2">Whereas option 2’s UI does not have a similar range of interactions - all information is displayed by default with no interactions which leads to visual clutter and cognitive overload.</p>
                        </div>
                        <div className="mb-5 bg-[var(--colour-grey)] px-10 py-10 rounded-2xl">
                            <p className="text-md text-[var(--colour-jackalope)] font-semibold mb-6">High-level information upon landing, then details-on-demand.</p>
                            <p className="text-lg text-[var(--colour-bodytext)] mb-2">Reduce visual clutter by having clear information structures. Display high-level information first, then display details upon interacting.</p>
                            <p className="text-lg text-[var(--colour-bodytext)] mb-2">Prompts users to keep interacting to uncover information, keeping the attention.</p>
                        </div>
                    </div>
                </div>

                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-30 mb-8">First prototype & user testing</p>
                <div className="flex items-center justify-center flex-col py-10 bg-[var(--colour-grey)] rounded-2xl">
                    <ExpandableVideo src="/jackalope/first.mp4" className="w-3/5 md:w-1/6 md:rounded-[28px]" />
                    <p className="text-sm text-[var(--colour-bodytext)] mt-4">First prototype of Jackalope.</p>
                </div>

                <div className="mb-10"></div>
                <JackalopeResearch />

                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-30 mb-8">Key UX improvements</p>
                <div className="flex flex-col items-center justify-center bg-[var(--colour-grey)] px-3 md:px-10 py-3 md:py-7 rounded-2xl mt-8">
                    <div className="grid grid-cols-2 mt-0 md:mt-3 mb-0 md:mb-3 gap-x-1 md:gap-x-4 w-full md:w-2/5">
                        <ExpandableVideo src="/jackalope/overview 1.mp4" className="w-full" />
                        <ExpandableVideo src="/jackalope/overview 2.mp4" className="w-full" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 mt-8">
                    <div className="px-13 py-10 rounded-2xl bg-[var(--colour-grey)] h-fit">
                        <p className="text-3xl font-semibold tracking-tight text-[var(--colour-bodytext)] mb-8">After considerations, we made these 2 key UX improvements to Jackalope.</p>
                        <Button variant="blue-hyperlink" link="https://cloud.protopie.io/p/19d7fc1126c632fad10ec7f2?ui=true&scaleToFit=true&enableHotspotHints=true&cursorType=touch&mockup=true&bgColor=%23F5F5F5&bgImage=undefined&playSpeed=1" text="See prototype on ProtoPie" textSize="text-md" target="_blank"></Button>
                    </div>
                    <div>
                        <div className="mb-5 bg-[var(--colour-grey)] px-10 py-10 rounded-2xl">
                            <p className="text-sm text-[var(--colour-jackalope)] font-semibold mb-4">UX improvement 1</p>
                            <p className="text-xl text-[var(--colour-bodytext)] mb-4 font-semibold">Make sure to enable different routes for users and make cancel options always available.</p>
                            <p className="text-md text-[var(--colour-bodytext)]">Make sure interaction design (buttons, texts, etc.) are all consistent throughout the app.</p>
                            <p className="text-md text-[var(--colour-bodytext)]">Make sure labels are clear (remove all abstract labels such as “See more”).</p>
                        </div>
                        <div className="mb-5 bg-[var(--colour-grey)] px-10 py-10 rounded-2xl">
                            <p className="text-sm text-[var(--colour-jackalope)] font-semibold mb-4">UX improvement 2</p>
                            <p className="text-xl text-[var(--colour-bodytext)] mb-4 font-semibold">Iterate the UI so that the AI’s post malfunction interface offers to collect users’ input to help future assistance.</p>
                            <p className="text-md text-[var(--colour-bodytext)]">Having more support options available for users when they show dissatisfaction after the first suggestions.</p>
                        </div>
                    </div>
                </div>

                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-30 mb-8">Other projects</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                    <PlayProject target="_self" link="/samsungknox" name="Samsung Knox Manage" description="Samsung Knox Suite is a proprietary security and management framework pre-installed on most Samsung mobile devices." tag1="UX design internship" tag2="B2B UX" imageSrc="/knox-square.png" />
                    <PlayProject target="_self"link="/cardio" name="card.io" description="Designing a Spotify feature that guides users in creating personalized cardio playlists, helping them feel confident and in control." tag1="UX design" tag2="B2C UX" imageSrc="/cardio.png" />
                </div>

                <div className="mb-50"></div>
                <Footer />
            </div>
        </div>
    )
}