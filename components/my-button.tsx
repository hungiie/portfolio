"use client"

interface Props {
  variant: string;
  link: string;
  text: string;
  textSize: string;
  target: string;
}

export default function MyButton(props: Props) {
  if (props.variant == "blue-button-full-width") {
    return (
      <a href={props.link} target={props.target} className={`inline-block w-full text-center bg-[var(--main-blue)] hover:bg-[var(--main-darkerblue)] transition-colors rounded-full text-white font-medium py-[10px] px-4 ${props.textSize ?? "text-xs"}`}>
        {props.text}
      </a>
    );
  } else if (props.variant == "blue-button") {
    return (
      <a href={props.link} target={props.target} className={`bg-[var(--main-blue)] hover:bg-[var(--main-darkerblue)] transition-colors rounded-full text-white font-medium py-[10px] px-4 ${props.textSize ?? "text-xs"}`}>
        {props.text}
      </a>
    );
  } else if (props.variant == "blue-button-outline") {
    return (
      <a href={props.link} target={props.target} className={`shadow-[inset_0_0_0_1px_var(--main-blue)] hover:bg-[var(--main-blue)] transition-colors rounded-full text-[var(--main-blue)] hover:text-white font-medium py-[10px] px-4 ${props.textSize ?? "text-xs"}`}>
        {props.text}
      </a>
    );
  } else if (props.variant == "blue-button-outline-full-width") {
    return (
      <a href={props.link} target={props.target} className={`inline-block w-full text-center shadow-[inset_0_0_0_1px_var(--main-blue)] hover:bg-[var(--main-blue)] transition-colors rounded-full text-[var(--main-blue)] hover:text-white font-medium py-[10px] px-4 ${props.textSize ?? "text-xs"}`}>
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