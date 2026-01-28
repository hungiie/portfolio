"use client"

import Image from "next/image";

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
    if (props.isLink == "yes") {
        return (
            <div className="overflow-hidden bg-[var(--background)] h-full flex flex-col">
                <div>
                    <p className="font-semibold text-sm text-[var(--colour-pure)] mb-4 leading-loose">
                        {props.name}
                    </p>
                </div>
                <div className="mt-auto">
                    <p className="text-sm text-[var(--colour-bodytext)] mb-6 leading-loose">
                        {props.desc}
                    </p>
                </div>
                <a href={props.link} className="group overflow-hidden block mt-auto" target={props.target}>
                    <Image src={props.imageSrc} alt={props.name} width={1920} height={1080} className="object-cover block dark:hidden" />
                    <Image src={props.imageSrcDark} alt={props.name} width={1920} height={1080} className="object-cover hidden dark:block" />
                </a>
            </div>
        );
    }
    if (props.isLink == "no") {
        return (
            <div className="overflow-hidden bg-[var(--background)] h-full flex flex-col">
                <div>
                    <p className="font-semibold text-sm text-[var(--colour-pure)] mb-4 leading-loose">
                        {props.name}
                    </p>
                </div>
                <div className="mt-auto">
                    <p className="text-sm text-[var(--colour-bodytext)] mb-6 leading-loose">
                        {props.desc}
                    </p>
                </div>
                <div className="group overflow-hidden block mt-auto">
                    <Image src={props.imageSrc} alt={props.name} width={1920} height={1080} className="object-cover block dark:hidden" />
                    <Image src={props.imageSrcDark} alt={props.name} width={1920} height={1080} className="object-cover hidden dark:block" />
                </div>
            </div>
        );
    }
}