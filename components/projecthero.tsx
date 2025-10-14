"use client"

import Button from "./button";

interface Props {
    name: string;
    description: string | React.ReactNode;
    colourCode: string;
    linkText1: string;
    linkText2: string;
    url1: string;
    url2: string;
    target1: string;
    target2: string;
}

export default function ProjectHero(props: Props) {
    return (
        <div className="mt-35">
            <p className="px-6 py-3 text-md md:text-md text-white rounded-full inline-block" style={{ backgroundColor: props.colourCode }}>
                {props.name}
            </p>
            {/* <div className="flex items-center">
                <Button variant="grey-hyperlink" link="/" text="Home" target="_self" textSize="text-md"/>
                <p className="text-md font-medium text-[var(--colour-bodytext-3)]">
                    &nbsp;&nbsp; / &nbsp;&nbsp;
                </p>
                <p className="text-md font-medium" style={{ color: props.colourCode }}>
                    {props.name}
                </p>
            </div> */}
            <p className="text-[var(--colour-bodytext)] text-4xl md:text-7xl font-semibold mt-10 mb-15 tracking-tight md:tracking-[-0.15rem] leading-[120%] md:leading-[110%] w-full md:w-5/6">{props.description}</p>
            <div className="flex items-center">
                <div className="mr-10 md:mr-20">
                    <Button variant="blue-hyperlink" link={props.url1} text={props.linkText1} target={props.target1} textSize="text-md"/>
                </div>
                <Button variant="blue-hyperlink" link={props.url2} text={props.linkText2} target={props.target2} textSize="text-md"/>
            </div>
            {/* <div className="relative w-full h-120 mt-15 shadow-lg rounded-2xl overflow-hidden">
                <Image src="/knox-lg.png" alt="Samsung Knox Manage" fill className="object-cover"/>
            </div> */}
        </div>
    )
}