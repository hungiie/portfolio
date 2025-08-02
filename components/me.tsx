import Image from "next/image"

export default function Me() {
    return (
        <div className="relative group md:-mt-15 md:-mr-20">
            <div className="transition-all duration-800 rounded-xl overflow-hidden w-[120px] h-[120px] md:w-[160px] md:h-[160px] group-hover:scale-[1.07]">
                <Image src="/abt.jpeg" alt="hungie tran" className="object-cover rounded-3xl" fill />
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
            md:text-5xl 
            md:-top-8 
            md:-left-9 
            group-hover:-top-11 
            group-hover:-left-6
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
            md:text-6xl 
            top-2
            -right-6
            md:top-2
            md:-right-11 
            group-hover:top-8 
            group-hover:-right-10
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
            right-3
            md:text-[8rem] 
            md:-bottom-20
            md:right-6 
            group-hover:-bottom-22 
            group-hover:right-9
            ">
                *
            </p>
        </div>
    )
}
