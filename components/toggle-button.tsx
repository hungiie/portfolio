"use client"

interface Props {
  text: string;
  textSize?: string;
  onClick?: () => void;
}

export default function ToggleButton({ text, textSize = "text-sm", onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent h-9 rounded-full text-[var(--main-blue)] hover:underline hover:cursor-pointer inline-block font-medium p-0 ${textSize}`}
    >
      {text}
    </button>
  );
}
