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

export default function ProjectThumbnail2(props: Props) {
    if (props.isLink == "image-link") {
        return (
            <div className="overflow-hidden bg-[var(--background)] h-full flex flex-col group">
                <div>
                    <p className="text-sm text-[var(--colour-bodytext-4)] group-hover:text-[var(--main-blue)] mb-4 leading-loose">
                        {props.name}
                    </p>
                </div>
                <div className="mt-auto">
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">
                        {props.desc}
                    </p>
                </div>
                <div className="mb-7"></div>
                <a className="relative block overflow-hidden group mt-auto" href={props.link} target={props.target}>
                    <Image src={props.imageSrc} alt={props.name} width={1920} height={1080} className="object-cover block dark:hidden"/>
                    <div className="absolute inset-x-0 bottom-0 h-[30%] flex items-center justify-center
                                    translate-y-full opacity-0
                                    transition-all duration-300 ease-out
                                    group-hover:translate-y-0 group-hover:opacity-100">
                        <MyButton
                        link={props.link}
                        text={`Explore ${props.name}`}
                        textSize="text-sm"
                        target={props.target}
                        variant="blue-button"
                        />
                    </div>
                </a>

            </div>
        );
    }
    else if (props.isLink == "image-link-hover") {
        return (
            <div className="overflow-hidden bg-[var(--background)] h-full flex flex-col group">
                <div>
                    <p className="text-sm text-[var(--colour-bodytext-4)] group-hover:text-[var(--main-blue)] mb-4 leading-loose">
                        {props.name}
                    </p>
                </div>
                <div className="mt-auto">
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">
                        {props.desc}
                    </p>
                </div>
                <div className="mb-7"></div>
                <a className="relative block overflow-hidden group mt-auto" href={props.link} target={props.target}>
                    <Image src={props.imageSrc} alt={props.name} width={1920} height={1080} className="object-cover"/>
                    <Image src={props.imageSrcDark} alt={props.name} width={1920} height={1080} className="object-cover inset-0 absolute opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"/>
                    <div className="absolute inset-x-0 bottom-0 h-[30%] flex items-center justify-center
                                    translate-y-full opacity-0
                                    transition-all duration-300 ease-out
                                    group-hover:translate-y-0 group-hover:opacity-100">
                        <MyButton
                        link={props.link}
                        text={`Explore ${props.name}`}
                        textSize="text-sm"
                        target={props.target}
                        variant="blue-button"
                        />
                    </div>
                </a>

            </div>
        );
    }
    else if (props.isLink == "video-link") {
        return (
            <div className="h-auto bg-[var(--background)] group">
                <p className="text-sm text-[var(--colour-bodytext-4)] mb-4 leading-loose group-hover:text-[var(--main-blue)]">
                    {props.name}
                </p>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">
                    {props.desc}
                </p>
                <div className="mb-7"></div>
                <a className="relative block overflow-hidden group mt-auto" href={props.link} target={props.target}>
                    <video className={`w-full h-full object-cover !bg-transparent`} style={{ clipPath: "inset(1px 1px)" }} autoPlay muted loop playsInline>
                        <source src={props.imageSrc} type="video/mp4" />
                    </video>

                    <div className="absolute inset-x-0 bottom-0 h-[30%] flex items-center justify-center
                                    translate-y-full opacity-0
                                    transition-all duration-300 ease-out
                                    group-hover:translate-y-0 group-hover:opacity-100">
                        <MyButton link={props.link} text={`Explore ${props.name}`} textSize="text-sm" target={props.target} variant="blue-button"/>
                    </div>
                </a>
            </div>
        );
    }
}