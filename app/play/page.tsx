"use client"

import Footer from "@/components/footer"
import Image from "next/image"
import PlayProject from "@/components/play-project"
import Button from "@/components/button"
// import ExpandableImage from "@/components/expandable-image"
// import PlayImage from "@/components/play-image"


export default function Play(){
    return (
        <div className="mt-35 px-9 md:mt-40 md:px-22">
            <div className="grid grid-cols-1">
                <div className="order-2 md:order-1">
                    <p className="text-4xl md:text-7xl text-[var(--colour-bodytext)] font-semibold tracking-tight md:tracking-[-0.15rem] lleading-[120%] md:leading-[110%] mb-9">I like to play.<br></br>Here&apos;s the damage.</p>
                </div>
            </div>

            <p className="text-2xl text-[var(--colour-bodytext)] mt-20 mb-8">Illustrations</p>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-9">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <Image src="/play/preview illustration 1.png" alt="illustration" className="object-cover" fill />
                    </div>
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <Image src="/play/preview illustration 2.png" alt="illustration" className="object-cover" fill />
                    </div>
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <Image src="/play/preview illustration 3.png" alt="illustration" className="object-cover" fill />
                    </div>
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <Image src="/play/preview illustration 4.png" alt="illustration" className="object-cover" fill />
                    </div>
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <Image src="/play/preview illustration 5.png" alt="illustration" className="object-cover" fill />
                    </div>
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <Image src="/play/preview illustration 6.png" alt="illustration" className="object-cover" fill />
                    </div>

                    {/* <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <PlayImage srcPreview="/play/preview illustration 1.png" src="/play/illustration 1.png" alt="illustration" className="aspect-square"/>
                    </div>
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <PlayImage srcPreview="/play/preview illustration 2.png" src="/play/illustration 2.png" alt="illustration" className="aspect-square"/>
                    </div>
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <PlayImage srcPreview="/play/preview illustration 3.png" src="/play/illustration 3.png" alt="illustration" className="aspect-square"/>
                    </div>
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <PlayImage srcPreview="/play/preview illustration 4.png" src="/play/illustration 4.png" alt="illustration" className="aspect-square"/>
                    </div>
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <PlayImage srcPreview="/play/preview illustration 5.png" src="/play/illustration 5.png" alt="illustration" className="aspect-square"/>
                    </div>
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <PlayImage srcPreview="/play/preview illustration 6.png" src="/play/illustration 6.png" alt="illustration" className="aspect-square"/>
                    </div> */}
                </div>
                <div className="flex items-end">
                    <p className="text-xl text-[var(--colour-bodytext)] w-full md:w-4/5">2020 - now</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-9 mt-35 mb-8">
                <div className="md:flex md:items-baseline">
                    <p className="text-2xl text-[var(--colour-bodytext)] mb-4 md:mb-0 md:mr-18">UX design</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-9 mt-8">
                <div>
                    <PlayProject target="_self" link="/jackalope" name="Jackalope AI is a guide for international students." description="Social event and community finder app, helping international students settle into a new country, with AI-powered suggestions and built-in feedback mechanisms." tag1="UX design & research" tag2="" imageSrc="/jackalope.png" />
                    <PlayProject target="_blank" link="https://www.figma.com/proto/xYL2PzUpTvgKlnxTzp7a5O/Portfolio-2025?page-id=313%3A2973&node-id=313-3004&viewport=479%2C387%2C0.03&t=NHb88K4xz1HL2JVg-1&scaling=scale-down&content-scaling=fixed" name="Uber Eats&lsquo; speculative feature: Nutrition Report." description="Assists and informs users about their food&lsquo;s nutrition details, makes sure their dietary needs are met." tag1="UX design" tag2="" imageSrc="/ubereats.png" />
                    <PlayProject target="_blank" link="https://www.figma.com/proto/xYL2PzUpTvgKlnxTzp7a5O/Portfolio-2025?page-id=375%3A2980&node-id=375-2981&viewport=743%2C390%2C0.24&t=AVR9d3tvwFyFaaeT-1&scaling=scale-down&content-scaling=fixed" name="Enhancing Spotify&lsquo;s onboarding experience for new users." description="How can the interaction of selecting and dragging multiple songs while pressing CTRL (or CMD key on Mac), can be made more accessible and recognizable for new users during their onboarding experience?" tag1="HCI study" tag2="" imageSrc="/spotify.png" />
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-9 mt-35 mb-8">
                <div className="md:flex md:items-baseline">
                    <p className="text-2xl text-[var(--colour-bodytext)] mb-4 md:mb-0 md:mr-18">UX engineer</p>
                    <Button variant="blue-hyperlink" link="https://github.com/hungiie" text="Check out my GitHub." textSize="text-md" target="_blank"></Button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-9 mt-8">
                <div>
                    <PlayProject target="_blank" link="https://github.com/hungiie/pawfectmatch" name="Pawfect Match (2025)" description="Website connecting animal shelters with potential adopters. With pet&lsquo;s data stored in SQL database, dynamic filtering & searching is supported, for a better adopting experience." tag1="SQL database" tag2="PHP for back end" imageSrc="/play/pawfect match.png" />
                    <PlayProject target="_blank" link="https://github.com/hungiie/memorymate" name="Memory Mate (2024)" description="Note-taking app for senior citizens, provides assistance in everyday tasks, integrating native features and API such as Apple Maps, Text-to-speech, voice note." tag1="React Native" tag2="Firebase for back end" imageSrc="/play/memory mate.png" />
                    <PlayProject target="_blank" link="https://github.com/hungiie/adayasabarista" name="A day as a barista (2023)" description="Designed and developed a restaurant game with Java, incorporating wide range of interactions such as tapping, dragging, with dynamic responses to user&lsquo;s input." tag1="Java" tag2="Object-oriented programming" imageSrc="/play/barista.png" />
                    <PlayProject target="_blank" link="https://github.com/hungiie/groceryimpact" name="Grocery Impact (2022)" description="Designed and developed a tile-based game with Java, incorporating diverse interactions & character designs & soundtracks to ensure an immersive experience." tag1="Java" tag2="Object-oriented programming" imageSrc="/play/grocery impact.png" />
                </div>
            </div>


            <p className="text-2xl text-[var(--colour-bodytext)] mt-35 mb-8">Acrylic painting</p>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-9">
                <div className="relative w-full h-[200px] md:h-[500px] rounded-xl overflow-hidden">
                    <Image src="/play/acrylic.jpg" alt="acrylic painting" className="object-cover" fill />
                    {/* <PlayImage srcPreview="/play/acrylic.PNG" src="/play/acrylic.PNG" alt="acrylic painting" className="object-cover"/> */}
                </div>
                <div className="flex items-end">
                    <p className="text-xl text-[var(--colour-bodytext)] w-full md:w-4/5">2021</p>
                </div>
            </div>



            <div className="mt-32">
                <Footer />
            </div>
        </div>
    )
}