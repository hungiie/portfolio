"use client"

import Image from "next/image";
import MyButton from "./my-button";

interface Props {
    name: string;
    desc: string;
    imageSrc: string;
    imageSrcDark: string;
    link: string;
    target: string;
    isLink: string;
}

export default function ProjectThumbnail(props: Props) {
    if (props.isLink == "image-link") {
        return (
            <div className="overflow-hidden bg-[#fbfbfb] w-full grid grid-cols-2 rounded-xl p-10">
                <div className="w-full flex flex-col items-center justify-center px-10">
                    <div>
                        <p className="text-sm text-[var(--colour-bodytext-3)] mb-4 leading-loose">
                            {props.name}
                        </p>
                        <p className="text-lg text-[var(--colour-bodytext)] leading-loose">
                            {props.desc}
                        </p>
                        <div className="mb-11"></div>
                        <MyButton text="View project" link={props.link} target={props.target} textSize="text-sm" variant="blue-button" />
                    </div>
                </div>
                <a className="group overflow-hidden block" href={props.link} target={props.target}>
                    <Image src={props.imageSrc} alt={props.name} width={1920} height={1080} className="object-cover block dark:hidden" />
                </a>
            </div>
        );
    }
    else if (props.isLink == "video-link") {
        return (
            <div className="overflow-hidden bg-[#fbfbfb] w-full grid grid-cols-2 rounded-xl p-10">
                <div className="w-full flex flex-col items-center justify-center px-10">
                    <div>
                        <p className="text-sm text-[var(--colour-bodytext-3)] mb-4 leading-loose">
                            {props.name}
                        </p>
                        <p className="text-lg text-[var(--colour-bodytext)] leading-loose">
                            {props.desc}
                        </p>
                        <div className="mb-11"></div>
                        <MyButton text="View project" link={props.link} target={props.target} textSize="text-sm" variant="blue-button" />
                    </div>
                </div>
                <a className="group w-full flex items-center justify-center" href={props.link} target={props.target}>
                    <video className={`w-full h-full object-cover`} autoPlay muted loop playsInline>
                        <source src={props.imageSrc} type="video/mp4" />
                    </video>
                </a>
            </div>
        );
    }
}