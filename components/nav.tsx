// // this is a responsive nav bar for desktop (md:flex) and mobile (md:hidden)
// // useState is used to control the mobile menu modal
// "use client"

// import Button from "./button";
// import CopyEmailButton from "./copyemail";
// // import Link from "next/link";

// interface Props {
//   variant: string;
// }

// export default function Nav(props: Props) {
//   if (props.variant == "default") {
//     return (
//       <div>
//         <nav className="w-full 
//         bg-[rgba(248,248,248,0.8)] 
//         backdrop-blur-lg 
//         border-1 
//         border-[rgba(204,204,204,0.4)] 
//         fixed 
//         z-20 
//         h-16  
//         flex 
//         justify-between 
//         items-center 
//         left-1/2 
//         -translate-x-1/2 
//         top-0
//         ">
//           <div className="
//           px-9
//           md:px-22 
//           flex 
//           items-center 
//           w-full 
//           justify-between
//           ">
//             <div className="hidden md:block">
//               <CopyEmailButton link="/" text="dht4@sfu.ca" textSize="text-sm"></CopyEmailButton>
//             </div>
//             <div className="w-full flex items-center justify-between md:w-auto md:justify-normal">
//               <div className="flex">
//                 <div className="mr-6 md:mr-12">
//                   <Button link="/" target="_self" variant="grey-hyperlink" text="Home" textSize="text-sm"></Button>
//                 </div>
//                 <div className="mr-6 md:mr-12">
//                   <Button link="/about" target="_self" variant="grey-hyperlink" text="About" textSize="text-sm"></Button>
//                 </div>
//                 <div className="mr-3 md:mr-9">
//                   <Button link="/play" target="_self" variant="grey-hyperlink" text="Play" textSize="text-sm"></Button>
//                 </div>
//               </div>
//               <div className="pl-1.5">
//                 <Button link="https://drive.google.com/file/d/1F2UXNXNltAkH-Y0qinUaZDLaMNDMd6Mh/view" target="_blank" variant="blue-button" text="Resume" textSize="text-sm"></Button>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   } else if (props.variant == "home") {
//     return (
//       <div>
//         <nav className="w-full 
//         bg-[rgba(248,248,248,0.8)] 
//         backdrop-blur-lg 
//         border-1 
//         border-[rgba(204,204,204,0.4)] 
//         fixed 
//         z-20 
//         h-16  
//         flex 
//         justify-between 
//         items-center 
//         left-1/2 
//         -translate-x-1/2 
//         top-0
//         ">
//           <div className="
//           px-9
//           md:px-22 
//           flex 
//           items-center 
//           w-full 
//           justify-between
//           ">
//             <div className="hidden md:block">
//               <CopyEmailButton link="/" text="dht4@sfu.ca" textSize="text-sm"></CopyEmailButton>
//             </div>
//             <div className="w-full flex items-center justify-between md:w-auto md:justify-normal">
//               <div className="flex">
//                 <div className="mr-6 md:mr-12">
//                   <Button link="/" target="_self" variant="grey-hyperlink-active" text="Home" textSize="text-sm"></Button>
//                 </div>
//                 <div className="mr-6 md:mr-12">
//                   <Button link="/about" target="_self" variant="grey-hyperlink" text="About" textSize="text-sm"></Button>
//                 </div>
//                 <div className="mr-3 md:mr-9">
//                   <Button link="/play" target="_self" variant="grey-hyperlink" text="Play" textSize="text-sm"></Button>
//                 </div>
//               </div>
//               <div className="pl-1.5">
//                 <Button link="https://drive.google.com/file/d/1F2UXNXNltAkH-Y0qinUaZDLaMNDMd6Mh/view" target="_blank" variant="blue-button" text="Resume" textSize="text-sm"></Button>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   } else if (props.variant == "about") {
//     return (
//       <div>
//         <nav className="w-full 
//         bg-[rgba(248,248,248,0.8)] 
//         backdrop-blur-lg 
//         border-1 
//         border-[rgba(204,204,204,0.4)] 
//         fixed 
//         z-20 
//         h-16  
//         flex 
//         justify-between 
//         items-center 
//         left-1/2 
//         -translate-x-1/2 
//         top-0
//         ">
//           <div className="
//           px-9
//           md:px-22 
//           flex 
//           items-center 
//           w-full 
//           justify-between
//           ">
//             <div className="hidden md:block">
//               <CopyEmailButton link="/" text="dht4@sfu.ca" textSize="text-sm"></CopyEmailButton>
//             </div>
//             <div className="w-full flex items-center justify-between md:w-auto md:justify-normal">
//               <div className="flex">
//                 <div className="mr-6 md:mr-12">
//                   <Button link="/" target="_self" variant="grey-hyperlink" text="Home" textSize="text-sm"></Button>
//                 </div>
//                 <div className="mr-6 md:mr-12">
//                   <Button link="/about" target="_self" variant="grey-hyperlink-active" text="About" textSize="text-sm"></Button>
//                 </div>
//                 <div className="mr-3 md:mr-9">
//                   <Button link="/play" target="_self" variant="grey-hyperlink" text="Play" textSize="text-sm"></Button>
//                 </div>
//               </div>
//               <div className="pl-1.5">
//                 <Button link="https://drive.google.com/file/d/1F2UXNXNltAkH-Y0qinUaZDLaMNDMd6Mh/view" target="_blank" variant="blue-button" text="Resume" textSize="text-sm"></Button>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   } else if (props.variant == "play") {
//     return (
//       <div>
//         <nav className="w-full 
//         bg-[rgba(248,248,248,0.8)] 
//         backdrop-blur-lg 
//         border-1 
//         border-[rgba(204,204,204,0.4)] 
//         fixed 
//         z-20 
//         h-16  
//         flex 
//         justify-between 
//         items-center 
//         left-1/2 
//         -translate-x-1/2 
//         top-0
//         ">
//           <div className="
//           px-9
//           md:px-22 
//           flex 
//           items-center 
//           w-full 
//           justify-between
//           ">
//             <div className="hidden md:block">
//               <CopyEmailButton link="/" text="dht4@sfu.ca" textSize="text-sm"></CopyEmailButton>
//             </div>
//             <div className="w-full flex items-center justify-between md:w-auto md:justify-normal">
//               <div className="flex">
//                 <div className="mr-6 md:mr-12">
//                   <Button link="/" target="_self" variant="grey-hyperlink" text="Home" textSize="text-sm"></Button>
//                 </div>
//                 <div className="mr-6 md:mr-12">
//                   <Button link="/about" target="_self" variant="grey-hyperlink" text="About" textSize="text-sm"></Button>
//                 </div>
//                 <div className="mr-3 md:mr-9">
//                   <Button link="/play" target="_self" variant="grey-hyperlink-active" text="Play" textSize="text-sm"></Button>
//                 </div>
//               </div>
//               <div className="pl-1.5">
//                 <Button link="https://drive.google.com/file/d/1F2UXNXNltAkH-Y0qinUaZDLaMNDMd6Mh/view" target="_blank" variant="blue-button" text="Resume" textSize="text-sm"></Button>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }

"use client";

import { usePathname } from "next/navigation";
import Button from "./button";
import CopyEmailButton from "./copyemail";

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/play", text: "Play" },
  ];

  return (
    <nav
      className="w-full 
      bg-[rgba(248,248,248,0.8)] 
      backdrop-blur-lg 
      border-1 
      border-[rgba(204,204,204,0.4)] 
      fixed 
      z-20 
      h-16  
      flex 
      justify-between 
      items-center 
      left-1/2 
      -translate-x-1/2 
      top-0"
    >
      <div
        className="
        px-9
        md:px-22 
        flex 
        items-center 
        w-full 
        justify-between"
      >
        <div className="hidden md:block">
          <CopyEmailButton link="/" text="dht4@sfu.ca" textSize="text-sm" />
        </div>

        <div className="w-full flex items-center justify-between md:w-auto md:justify-normal">
          <div className="flex">
            {links.map((link, index) => (
              <div
                key={link.href}
                className={`${
                  index < links.length - 1 ? "mr-6 md:mr-12" : "mr-3 md:mr-9"
                }`}
              >
                <Button
                  link={link.href}
                  target="_self"
                  variant={
                    pathname === link.href
                      ? "grey-hyperlink-active"
                      : "grey-hyperlink"
                  }
                  text={link.text}
                  textSize="text-sm"
                />
              </div>
            ))}
          </div>

          <div className="pl-1.5">
            <Button
              link="https://drive.google.com/file/d/1F2UXNXNltAkH-Y0qinUaZDLaMNDMd6Mh/view"
              target="_blank"
              variant="blue-button"
              text="Resume"
              textSize="text-sm"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
