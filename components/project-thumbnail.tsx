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
                <div className="group overflow-hidden block mt-auto">
                    <Image src={props.imageSrc} alt={props.name} width={1920} height={1080} className="object-cover block dark:hidden" />
                    <Image src={props.imageSrcDark} alt={props.name} width={1920} height={1080} className="object-cover hidden dark:block" />
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
    if (props.isLink == "yes-thumbnail") {
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
                <a className="group overflow-hidden block mt-auto" href={props.link} target={props.target}>
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