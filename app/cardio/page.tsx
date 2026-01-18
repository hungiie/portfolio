"use client"

import Image from "next/image";
import MyButton from "@/components/my-button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import SlideUpNoThres from "@/components/slide-up-nothres";

export default function Cardio() {
  return (
    <div className="flex items-center justify-center flex-col">
        <div className="w-full px-10 md:w-2/3 md:px-0 lg:w-1/3 2xl:w-1/4 mt-28">
            <SlideUpNoThres>
                <div>
                    <MyButton variant="blue-hyperlink" text="<- Back to home" link="/" textSize="text-sm" target="_self"/>
                </div>
                <div className="mb-10"></div>

                <Heading text="card.io"/>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Designed a Spotify feature that guides runners in creating personalized cardio playlists, helping them feel confident and in control.</p>
                <div className="mb-7"></div>
                <ImageZoom>
                    <Image src="/cardioyo.png" width={1532} height={1147} className="w-full h-auto mb-2" alt="cardio"/> 
                </ImageZoom>
                <ImageZoom>
                    <Image src="/cardiopreview.png" width={3775} height={2532} className="w-full h-auto mb-2" alt="cardio"/> 
                </ImageZoom>
                <ImageZoom>
                    <Image src="/cardiopreview2.png" width={3775} height={2532} className="w-full h-auto" alt="cardio"/> 
                </ImageZoom>
                
                <div className="mb-10"></div>
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <div className="mb-3 lg:mb-0">
                        <MyButton link="https://www.figma.com/proto/9XcoE1V7RXomBeYPjR6Q3i/card.io-2024?page-id=0%3A1&node-id=1-770&viewport=263%2C253%2C0.1&t=04CL8AOOFW3mPu7n-1&scaling=contain&content-scaling=fixed" target="_blank" variant="blue-hyperlink" text="View my presentation" textSize="text-sm"/>
                    </div>
                    <MyButton link="https://www.figma.com/proto/5SjXuZ0MgUNMOFRmh3qOOY/card.io?page-id=0%3A1&node-id=24-159&node-type=frame&viewport=1007%2C-233%2C0.14&t=bj4QvDbaNDyAlbzU-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=139%3A1790" target="_blank" variant="blue-hyperlink" text="Experience the prototype" textSize="text-sm"/>
                </div>
                <Footer/>
            </SlideUpNoThres>
        </div>
    </div>
  );
}
