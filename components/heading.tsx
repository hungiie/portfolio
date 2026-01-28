"use client"

interface Props {
  text: string;
}

export default function Heading(props: Props) {
    return (
      <p className="font-semibold text-sm text-[var(--colour-pure)] mb-6 bg-[var(--background)] leading-loose">
        {props.text}
      </p>
    );
}