"use client"

import { useAnimation } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Props {
  link: string;
  name: string;
  description: string;
  tag1: string;
  tag2: string;
  tag3: string;
  imageSrc: string;
  image2Src: string;
  colourCode: string;
}

export default function ProjectThumbnail(props: Props) {
    return(
        <a href={props.link} className="group mb-8 block rounded-2xl border-[#e7e7e7] border-2 overflow-hidden">
            <div className="w-full relative overflow-hidden" style={{ backgroundColor: props.colourCode, aspectRatio: "2469 / 861", }}>
                <Image src={props.imageSrc} alt={props.name} width={2469} height={861} className="object-cover mt-0 duration-500 ease-in-out group-hover:-mt-90" />
                <Image src={props.image2Src} alt={props.name} width={2469} height={861} className="absolute inset-0 object-cover mt-90 duration-500 ease-in-out group-hover:mt-0" />
            </div>
            <div className="px-5 md:px-7 pb-8 w-full">
                <div className="w-full flex items-center mt-6 mb-5">
                    <p className={`text-md text-[var(--colour-bodytext)] group-hover:underline group-hover:text-[var(--main-blue)]`}>
                        {props.name}
                    </p>
                </div>
                <p className="mb-3 text-sm text-[var(--colour-bodytext-2)]">{props.description}</p>
                <div className="flex mt-7 justify-between md:justify-normal">
                    <p className="mr-3 md:mr-8 inline-block text-xs text-[var(--colour-bodytext-3)]">{props.tag1}</p>
                    <p className="mr-3 md:mr-8 inline-block text-xs text-[var(--colour-bodytext-3)]">{props.tag2}</p>
                    <p className="inline-block text-xs text-[var(--colour-bodytext-3)]">{props.tag3}</p>
                </div>
            </div>
        </a>
    )
}
