"use client"

import ProjectThumbnail from "@/components/project-thumbnail";
import Button from "@/components/button";
import Footer from "@/components/footer";
import ProjectThumbnail2 from "@/components/project-thumbnail-2";
import OtherProjectThumbnail from "@/components/other-project-thumbnail";

export default function Home() {
  return (
    <div className="px-9 md:px-22 grid grid-cols-1 md:grid-cols-[1fr_1.3fr]">
      <div className="md:h-screen">
        <div className="mt-35 md:fixed md:-mt-10 md:flex md:flex-col md:justify-center md:h-screen">
          <p className="text-5xl md:text-7xl text-[var(--colour-bodytext)] font-semibold tracking-tight md:tracking-[-0.15rem] mb-9">Hi, I&apos;m Hung.</p>
          <p className="text-md text-[var(--colour-bodytext)]">Pushing pixels by day, pulling requests by night.</p>
          <p className="text-md text-[var(--colour-bodytext)] mt-1">Currently a UX designer at <span className="inline-block"><Button link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung" textSize="text-md"/></span>.</p>
        </div>
        <div className="hidden md:block mt-10 -mb-25 md:mb-0 md:mt-0 md:fixed bottom-0">
          <Footer />
        </div>
      </div>

      <div className="mt-20 md:mt-30 pb-15 md:pb-30">
        {/* <p className="text-lg md:text-2xl text-[var(--colour-bodytext)] mb-5 md:mb-9">Some of my works...</p> */}
        {/* <ProjectThumbnail link="/samsungknox" name="Samsung Knox Manage" description="Samsung Knox Manage is a cloud-based Enterprise Mobility Management (EMM) solution for businesses to deploy, secure, and manage mobile devices." tag1="UX design internship" tag2="8 months" tag3="B2B UX" imageSrc="/knox.png" colourCode="var(--colour-samsung)" /> */}
        <ProjectThumbnail2 link="/rules" name="Samsung Knox Manage: Rules management" description="A feature in Samsung&rsquo;s EMM solution, Knox Manage, that lets IT admins create various device management rules, which monitor device activity and streamline enterprise mobility management." tag1="UX design" tag2="8 months" tag3="B2B UX" imageSrc="/rules.png" image2Src="/rules-2.png" colourCode="#000000" />
        <ProjectThumbnail link="/organizations" name="Samsung Knox Manage: Organizations" description="A feature in Samsung&rsquo;s EMM solution, Knox Manage, that allows IT admins to categorize their devices based on organizational structure, simplifying device management tasks." tag1="UX design" tag2="8 months" tag3="B2B UX" imageSrc="/organization.png" image2Src="/organization-2.png" colourCode="#ECECEC" />
        <ProjectThumbnail link="/demo" name="Samsung Knox: Knox Demo Kit" description="Designed an interactive demo kit for Samsung Knox Cloud Service to showcase its key features and unique selling points to enterprise clients." tag1="UX design" tag2="8 months" tag3="B2B UX" imageSrc="/demo.png" image2Src="/demo-2.png" colourCode="#1E47C1" />

        {/* <ProjectThumbnail link="/cardio" name="card.io" description="Designing a Spotify feature that guides users in creating personalized cardio playlists, helping them feel confident and in control." tag1="UX design" tag2="1.5 month" tag3="B2C UX" imageSrc="/cardio.png" colourCode="var(--colour-cardio)" /> */}
        {/* <ProjectThumbnail link="/jackalope" name="Jackalope" description="Social event and community finder app, helping international students settle into a new country, with AI-powered suggestions and built-in feedback mechanisms." tag1="UX design & research" tag2="3 months" tag3="B2C UX" imageSrc="/jackalope.png" colourCode="var(--colour-jackalope)" /> */}
        {/* <ProjectThumbnail link="/influenso" name="Influenso" description="A solution guiding new influencers navigate brand partnerships & communications, and make use of cross-platform analytics." tag1="UX design" tag2="2 months" tag3="B2B2C UX" imageSrc="/influenso.png" colourCode="var(--colour-influenso)" /> */}


        {/* <div className="md:flex md:items-baseline mt-30 mb-10">
            <p className="text-2xl text-[var(--colour-bodytext)] mr-10">Other projects</p>
            <Button variant="blue-hyperlink" link="/play" text="View more projects in Play page." target="_self" textSize="text-md"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
          <OtherProjectThumbnail target="_self" link="/fraserhealth" name="Fraser Health&apos;s internship." description="My work as a visual design & videographer intern at Fraser Health Authority from October 2023 to May 2024." tag="Visual design" tag2="Non-NDA" imageSrc="/fh.png" />
          <OtherProjectThumbnail target="_self" link="/cardio" name="card.io creates a workout playlist that matches your pace." description="Designing a Spotify feature that guides users in creating personalized cardio playlists, helping them feel confident and in control." tag="UX design" tag2="Non-NDA" imageSrc="/cardio-sm.png" />
          <OtherProjectThumbnail target="_self" link="/jackalope" name="Jackalope AI is a guide for international students." description="Social event and community finder app, helping international students settle into a new country, with AI-powered suggestions and built-in feedback mechanisms." tag="UX design & research" tag2="Non-NDA" imageSrc="/jackalope.png" />
        </div> */}

        {/* <div className="mt-5">
          <Button variant="blue-hyperlink" link="/play" text="View more projects in Play page." target="_self" textSize="text-md"/>
        </div> */}
      </div>
      
      <div className="block md:hidden">
        <Footer/>
      </div>
    </div>
  );
}
