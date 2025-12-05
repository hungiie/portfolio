"use client"

// import Button from "./button";

interface Props {
    name: string;
    job: string;
    company: string;
    text: string;
    linkedin: string;
}

export default function Testimonial(props: Props) {
    return (
        <div className="flex flex-col justify-center bg-[var(--colour-grey)] px-7 md:px-7 py-7 md:py-7 rounded-2xl">
            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">{props.text}</p>
            <p className="text-sm font-semibold text-[var(--colour-bodytext)] leading-loose mt-7">{props.name}</p>
            <div className="flex justify-between items-center">
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">{props.job}</p>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">{props.company}</p>
                {/* <Button link={props.linkedin} target="_blank" variant="blue-hyperlink" text="LinkedIn" textSize="text-sm"/> */}
            </div>
        </div>
    );
}