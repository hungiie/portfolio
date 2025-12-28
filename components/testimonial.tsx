"use client"

import Button from "./button";

interface Props {
    name: string;
    job: string;
    company: string;
    text: string;
    companylink: string;
}

export default function Testimonial(props: Props) {
    return (
        <div className="flex flex-col justify-center bg-[var(--colour-grey)] px-7 py-7 rounded-2xl">
            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">"{props.text}"</p>
            <p className="text-sm font-semibold text-[var(--colour-bodytext)] leading-loose mt-7">{props.name}</p>
            <div className="grid grid-cols-1 lg:grid-cols-[7fr_1fr] items-center">
                <div>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">{props.job} at <span><Button link={props.companylink} target="_blank" variant="blue-hyperlink" text={props.company} textSize="text-sm"/></span> </p>
                </div>
                <div className="flex lg:justify-end items-center">
                    {/* <Button link={props.companylink} target="_blank" variant="blue-hyperlink" text={props.company} textSize="text-sm"/> */}
                </div>
            </div>
            {/* <p className="text-sm text-[var(--colour-bodytext)] leading-loose">{props.company}</p> */}
        </div>
    );
}