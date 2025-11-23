"use client"

import Image from "next/image";

interface Props {
    name: string;
    desc: string;
    imageSrc: string;
    link: string;
}

export default function ProjectThumbnail(props: Props) {
    return (
        <div className="overflow-hidden">
            <p className="font-semibold text-sm text-[var(--colour-body-text)] mb-6">
                {props.name}
            </p>
            <p className="text-sm text-[var(--colour-body-text-2)] mb-6 leading-loose">
                {props.desc}
            </p>
            <a href={props.link} className="group overflow-hidden block">
                <Image src={props.imageSrc} alt={props.name} width={1532} height={1147} className="object-cover" />
            </a>
        </div>
    );
}