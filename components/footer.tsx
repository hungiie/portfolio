import Button from "./button";

export default function Footer() {
    return (
        <div className="mt-30 pb-28 flex flex-col items-center">
            <div className="text-center">
                <p className="mb-1 text-xs text-[rgba(0,0,0,0.3)]">Designed and coded by me using Tailwind CSS and Next.js</p>
                <p className="mb-7 text-xs text-[rgba(0,0,0,0.3)]">© 2025 Hung</p>
            </div>
            <div className="flex w-full md:w-4/5 justify-between">
                <Button variant="blue-hyperlink" text="LinkedIn" link="https://www.linkedin.com/in/hung-tran-profile" target="_blank" textSize="text-sm"></Button>
                <Button variant="blue-hyperlink" text="d.hungtran12@gmail.com" link="mailto:d.hungtran12@gmail.com" target="_blank" textSize="text-sm"></Button>
                <Button variant="blue-hyperlink" text="Resume" link="https://drive.google.com/file/d/1F2UXNXNltAkH-Y0qinUaZDLaMNDMd6Mh/view" target="_blank" textSize="text-sm"></Button>
            </div>
        </div>
    )
}