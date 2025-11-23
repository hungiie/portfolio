"use client"

import Image from "next/image";
import Button from "@/components/button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import ProjectThumbnail from "@/components/project-thumbnail";
import SlideUp from "@/components/slide-up";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full px-10 md:w-1/3 md:px-0 mt-35">
        <SlideUp>
          <div className="w-1/3 md:w-1/7 rounded-xl aspect-square relative overflow-hidden mb-8">
            <Image src="/me.png" fill className="object-cover" alt="Hung tran" />
          </div>
          <div className="mb-30">
            <Heading text="Hi, my name is Hung." />
            <p className="text-sm text-[var(--colour-bodytext)] mb-6">I&lsquo;m a UX desginer at <span className="inline-block"><Button link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung" textSize="text-sm"/></span></p>
            <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-6">Much like how social media can turn attention into influence, interfaces can turn curiosity into loyalty.  As a UX designer, I value digital experiences that capture interest quickly - and sustain it through clarity and accessibility.</p>
            <div className="">
              <p className="text-sm text-[var(--colour-bodytext)]">Send me an <span className="inline-block"><Button link="mailto:dht4@sfu.ca" target="_blank" variant="blue-hyperlink" text="email" textSize="text-sm"/></span></p>
              <p className="text-sm text-[var(--colour-bodytext)] mt-1.5">Send me a message on <span className="inline-block"><Button link="https://www.linkedin.com/in/hung-tran-profile/" target="_blank" variant="blue-hyperlink" text="LinkedIn" textSize="text-sm"/></span></p>
              <p className="text-sm text-[var(--colour-bodytext)] mt-1.5">Check out my <span className="inline-block"><Button link="https://drive.google.com/file/d/1F2UXNXNltAkH-Y0qinUaZDLaMNDMd6Mh/view" target="_blank" variant="blue-hyperlink" text="resume" textSize="text-sm"/></span></p>
            </div>
          </div>
        </SlideUp>
          <div className="grid grid-cols-1 gap-y-40">
            <SlideUp>
              <ProjectThumbnail link="rules" name="Samsung Knox Manage: Rules" desc="Creating conditional rules to automate management tasks, monitor device activities and set up alert system." imageSrc="/rules.png" />
            </SlideUp>
            <SlideUp>
              <ProjectThumbnail link="organizations" name="Samsung Knox Manage: Organizations" desc="Categorizing devices based on organizational structure, enabling hierarchical device management." imageSrc="/org.png" />
            </SlideUp>
            <SlideUp>
              <ProjectThumbnail link="demokit" name="Samsung Knox: Demo Kit" desc="Interactive demo for Samsung Knox services, highlighting its key features and unique selling points for enterprise clients." imageSrc="/demo.png" />
            </SlideUp>
          </div>

        <div className="">
          <Footer/>
        </div>
      </div>
    </div>
  );
}
