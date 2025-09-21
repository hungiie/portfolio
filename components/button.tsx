"use client"

// all the properties of a button (its variant, where it goes, its text)
interface Props {
  variant: string;
  link: string;
  text: string;
  textSize: string;
  target: string;
}

export default function Button(props: Props) {
  if (props.variant == "blue-button") {
    return (
      <a href={props.link} target={props.target} className={`bg-[var(--main-blue)] hover:bg-[var(--main-darkerblue)] transition-colors rounded-full text-white font-medium py-3 px-4 ${props.textSize ?? "text-sm"}`}>
        {props.text}
      </a>
    );
  } else if (props.variant == "blue-hyperlink") {
    return (
      <a href={props.link} target={props.target} className={`bg-transparent h-9 rounded-full text-[var(--main-blue)] hover:underline inline-block font-medium p-0 ${props.textSize ?? "text-sm"}`}>
        {props.text}
      </a>
    );
  } else if (props.variant == "grey-hyperlink") {
    return (
      <a href={props.link} target={props.target} className={`bg-transparent h-9 rounded-full text-[var(--colour-bodytext-2)] hover:text-[var(--main-blue)] flex items-center font-medium p-0 ${props.textSize ?? "text-sm"}`}>
        {props.text}
      </a>
    );
  }

}