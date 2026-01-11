import Button from "./button";

export default function Footer() {
    return (
        <div className="mt-40 pb-28 flex flex-col items-center">
            <div className="text-center w-full">
                <p className="mb-1 text-sm text-[var(--colour-bodytext-3)] leading-loose">This site was designed and <Button variant="blue-hyperlink" text="coded by me" link="https://github.com/hungiie" target="_blank" textSize="text-sm"></Button>. (Tailwind CSS + Next.js)</p>
                <p className="text-sm text-[var(--colour-bodytext-3)]">I had iced coffee and a dream.</p>
                {/* <p className="text-sm text-[var(--colour-bodytext-3)]">© 2025 Hung</p> */}
            </div>
            <div className="mb-7"></div>
            <div className="flex w-full md:w-4/5 justify-between">
                <Button variant="blue-hyperlink" text="LinkedIn" link="https://www.linkedin.com/in/hung-tran-profile" target="_blank" textSize="text-sm"></Button>
                <Button variant="blue-hyperlink" text="d.hungtran12@gmail.com" link="mailto:d.hungtran12@gmail.com" target="_blank" textSize="text-sm"></Button>
                {/* <Button variant="blue-hyperlink" text="GitHub" link="https://github.com/hungiie" target="_blank" textSize="text-sm"></Button> */}
                <Button variant="blue-hyperlink" text="Resume" link="https://drive.google.com/file/d/1F2UXNXNltAkH-Y0qinUaZDLaMNDMd6Mh/view" target="_blank" textSize="text-sm"></Button>
            </div>
        </div>
    )
}