"use client"

import Image from "next/image";
import MyButton from "./my-button";

interface Props {
    name: string;
    desc: string;
    vidSrc: string;
    link: string;
    target: string;
    className: string;
    isLink: string;
}

export default function ProjectVideo(props: Props) {
    if (props.isLink == "yes") {
        return (
            <div className="h-auto bg-[var(--background)]">
                <p className="font-semibold text-sm text-[var(--colour-pure)] mb-4 leading-loose">
                    {props.name}
                </p>
                <p className="text-sm text-[var(--colour-bodytext)] mb-6 leading-loose">
                    {props.desc}
                </p>
                <div className="group w-full h-[380px] flex items-center justify-center">
                    <video src={props.vidSrc} className={props.className} autoPlay muted loop />
                </div>
                <div className="mb-9"></div>
                <div className="w-full flex">
                    <div className="w-full">
                        <MyButton link={props.link} text={`View ${props.name}`} textSize="text-sm" target={props.target} variant="blue-button-full-width"/>
                    </div>
                </div>
            </div>
        );
    }
    else if (props.isLink == "no") {
        return (
            <div className="overflow-hidden bg-[var(--background)]">
                <p className="font-semibold text-sm text-[var(--colour-pure)] mb-4 leading-loose">
                    {props.name}
                </p>
                <p className="text-sm text-[var(--colour-bodytext)] mb-6 leading-loose">
                    {props.desc}
                </p>
                <div className="group overflow-hidden w-full h-[430px] flex items-center justify-center">
                    <video src={props.vidSrc} className={props.className} autoPlay muted loop />
                </div>
            </div>
        );
    }
}