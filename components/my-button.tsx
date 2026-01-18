"use client"

interface Props {
  variant: string;
  link: string;
  text: string;
  textSize: string;
  target: string;
}

export default function MyButton(props: Props) {
  if (props.variant == "blue-button") {
    return (
      <a href={props.link} target={props.target} className={`bg-[var(--main-blue)] hover:bg-[var(--main-darkerblue)] transition-colors rounded-full text-white font-medium py-3 px-4 ${props.textSize ?? "text-sm"}`}>
        {props.text}
      </a>
    );
  } else if (props.variant == "blue-hyperlink") {
    return (
      <a href={props.link} target={props.target} className={`bg-transparent rounded-full text-[var(--main-blue)] hover:underline font-medium p-0 ${props.textSize ?? "text-sm"}`}>
        {props.text}
      </a>
    );
  } else if (props.variant == "grey-hyperlink") {
    return (
      <a href={props.link} target={props.target} className={`bg-transparent rounded-full text-[var(--colour-bodytext-4)] hover:text-[var(--main-blue)] hover:underline inline-block font-medium flex items-center p-0 ${props.textSize ?? "text-sm"}`}>
        {props.text}
      </a>
    );
  } else if (props.variant == "grey-hyperlink-active") {
    return (
      <p className={`bg-transparent rounded-full text-[var(--colour-bodytext)] flex items-center font-medium p-0 ${props.textSize ?? "text-sm"}`}>
        {props.text}
      </p>
    );
  }

}