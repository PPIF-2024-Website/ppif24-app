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
        <section className="flex h-screen w-full flex-col items-center justify-center space-y-8 bg-black p-8 text-white md:p-12">
            {/* TEXT CONTENT */}
            <div className="flex flex-col items-center justify-center text-center">
                {/* TITLE */}
                <h1 className="text-heading mb-6">
                    <span className="glow-white">ABOUT</span>{" "}
                    <span className="glow-pink font-extrabold italic text-[var(--ppif-pink)]">
                        PPIF
                    </span>
                </h1>

                {/* BODY */}
                <div className="text-body w-[60%] leading-loose">
                    {textContent}
                </div>
            </div>

            {/* CAROUSEL */}
            <ImageCarousel />
        </section>
    );
}
