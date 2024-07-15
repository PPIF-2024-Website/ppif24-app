import React from "react";

const DummyImage = ({ i }) => (
    <div
        key={i}
        className="flex h-[175px] w-[250px] flex-shrink-0 items-center justify-center rounded-md bg-white/20 text-5xl font-extralight"
    >
        ?
    </div>
);

export default function ImageCarousel({ imageUrls }) {
    return (
        <div className="relative flex h-[250px] w-full items-center rounded-lg bg-white/10 px-10 shadow-[0_0_25px_rgba(255,255,255,0.2)] backdrop-blur-md">
            {/* CAROUSEL */}
            <div className="overflow-x-scrol flex items-center space-x-8 overflow-y-hidden">
                {Array.from({ length: 10 }, (_, i) => (
                    <DummyImage i={i} />
                ))}
            </div>

            {/* CONTROL BUTTONS */}

            {/* EDGE BLURS */}
            <div className="absolute left-0 z-20 h-full w-[200px] rounded-lg bg-gradient-to-r from-white/20 to-transparent blur-lg"></div>
            <div className="absolute right-0 z-20 h-full w-[200px] rounded-lg bg-gradient-to-r from-transparent to-white/20 blur-lg"></div>
        </div>
    );
}
