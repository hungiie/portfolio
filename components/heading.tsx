"use client"

interface Props {
  text: string;
}

export default function Heading(props: Props) {
    return (
      <p className="font-semibold text-sm text-[var(--colour-body-text)] mb-6">
        {props.text}
      </p>
    );
}