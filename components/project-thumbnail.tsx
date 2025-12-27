"use client"

import Image from "next/image";

interface Props {
    name: string;
    desc: string;
    imageSrc: string;
    imageSrcDark: string;
    link: string;
}

export default function ProjectThumbnail(props: Props) {
    return (
        <div className="overflow-hidden bg-[var(--background)]">
            <p className="font-semibold text-sm text-[var(--colour-pure)] mb-6">
                {props.name}
            </p>
            <p className="text-sm text-[var(--colour-bodytext)] mb-6 leading-loose">
                {props.desc}
            </p>
            <a href={props.link} className="group overflow-hidden block">
                <Image src={props.imageSrc} alt={props.name} width={1532} height={1147} className="object-cover block dark:hidden" />
                <Image src={props.imageSrcDark} alt={props.name} width={1532} height={1147} className="object-cover hidden dark:block" />
            </a>
        </div>
    );
}