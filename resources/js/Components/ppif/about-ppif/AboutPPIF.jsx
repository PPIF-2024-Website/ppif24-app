import React from "react";
import ImageCarousel from "./ImageCarousel";

export default function AboutPPIF() {
    const textContent = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum. 
    `;

    return (
        <section className="flex h-screen w-full flex-col items-center justify-center p-8 text-white md:p-12">
            {/* TEXT CONTENT */}
            <div className="mb-14 flex flex-col items-center justify-center text-center">
                {/* TITLE */}
                <h1 className="text-heading mb-6">
                    <span className="glow-white">ABOUT</span>{" "}
                    <span className="glow-pink font-extrabold italic text-[var(--ppif-pink)]">
                        PPIF
                    </span>
                </h1>

                {/* BODY */}
                <div className="text-body z-[1] font-light !leading-relaxed sm:w-[70%]">
                    {textContent}
                </div>
            </div>

            {/* CAROUSEL */}
            <ImageCarousel imageUrls={[]} />

            {/* DUMMY BACKGROUND
            <div className="-z-10">
                <div className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full bg-black"></div>
                <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[var(--ppif-pink)] opacity-50 blur-[150px]"></div>
                <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[var(--ppif-pink)] opacity-50 blur-[150px]"></div>
            </div> */}
        </section>
    );
}
