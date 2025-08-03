import Image from "next/image"

export default function Me() {
    return (
        <div className="relative group md:-mt-15 md:-mr-20">
            <div className="transition-all duration-800 rounded-3xl shadow-2xl overflow-hidden w-[120px] h-[120px] md:w-[150px] md:h-[150px] group-hover:scale-[1.07] rotate-3 group-hover:rotate-6">
                <Image src="/abt.jpeg" alt="hungie tran" className="object-cover" fill />
            </div>
            <p className="
            absolute 
            transition-all 
            duration-800 
            ease 
            text-[var(--main-blue)] 
            font-black 
            tracking-tight 
            -z-10 
            text-3xl
            -top-5 
            -left-6
            md:text-[2.5rem] 
            md:-top-8 
            md:-left-7 
            group-hover:-top-11 
            group-hover:-left-3
            ">
                &lt;/&gt;
            </p>
            <p className="
            absolute 
            transition-all 
            duration-800 
            ease-in-out 
            text-[var(--colour-yellow)] 
            font-extrabold 
            tracking-tight 
            z-10 
            text-4xl
            top-3
            -right-6
            md:text-5xl
            md:top-5
            md:-right-8 
            group-hover:top-8 
            group-hover:-right-8
            ">
                &#123; &#125;
            </p>
            <p className="
            absolute 
            transition-all 
            duration-800 
            ease-in-out 
            text-[var(--main-blue)] 
            font-medium 
            tracking-tight 
            text-8xl
            -bottom-15
            right-6
            md:text-[8rem] 
            md:-bottom-20
            md:right-8 
            group-hover:-bottom-22 
            group-hover:right-13
            ">
                *
            </p>
        </div>
    )
}
