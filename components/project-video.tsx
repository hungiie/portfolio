"use client"

import Image from "next/image";

interface Props {
    name: string;
    desc: string;
    vidSrc: string;
    link: string;
    target: string;
    bgColor: string;
    className: string;
    isLink: string;
}

export default function ProjectVideo(props: Props) {
    if (props.isLink == "yes") {
        return (
            <div className="overflow-hidden bg-[var(--background)]">
                <p className="font-semibold text-sm text-[var(--colour-pure)] mb-4">
                    {props.name}
                </p>
                <p className="text-sm text-[var(--colour-bodytext)] mb-6 leading-loose">
                    {props.desc}
                </p>
                <a href={props.link} className="group overflow-hidden block w-full h-[430px] flex items-center justify-center" target={props.target} style={{ backgroundColor: props.bgColor }}>
                    <video src={props.vidSrc} className={props.className} autoPlay muted loop />
                </a>
            </div>
        );
    }
    else if (props.isLink == "no") {
        return (
            <div className="overflow-hidden bg-[var(--background)]">
                <p className="font-semibold text-sm text-[var(--colour-pure)] mb-4">
                    {props.name}
                </p>
                <p className="text-sm text-[var(--colour-bodytext)] mb-6 leading-loose">
                    {props.desc}
                </p>
                <div className="group overflow-hidden block w-full h-[430px] flex items-center justify-center" style={{ backgroundColor: props.bgColor }}>
                    <video src={props.vidSrc} className={props.className} autoPlay muted loop />
                </div>
            </div>
        );
    }
}