import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

// POPUP COMPONENT
export default function Popup({
    day,
    date,
    time,
    location,
    description,
    necessities,
    active,
    onClick,
}) {
    return (
        <div
            className={`smooth fixed left-0 top-0 z-20 m-0 flex h-screen w-screen items-center justify-center bg-black/40 backdrop-blur-[8px] ${active ? "opacity-100" : "pointer-events-none opacity-0"}`}
        >
            <div className="glow-orange relative flex max-h-[80%] w-[1000px] max-w-[90%] flex-col overflow-y-scroll rounded-3xl bg-[rgba(var(--ppif-orange-rgb),0.5)] px-8 py-12 backdrop-blur-md sm:px-16">
                {/* DAY TITLE */}
                <div className="glow-white mb-4 flex flex-col -space-y-1 text-4xl font-extrabold tracking-tighter sm:text-5xl">
                    <span>{day === 0 ? "BRIEFING" : "DAY"}</span>
                    <span>{day === 0 ? "DAY" : day === 1 ? "ONE" : "TWO"}</span>
                </div>

                {/* DATE, TIME, LOCATION */}
                <div className="text-body mb-8 flex flex-col font-light">
                    <span>{date}</span>
                    <span>{time}</span>
                    <span>{location}</span>
                </div>

                {/* DESCRIPTION */}
                <div className="text-body mb-8">{description}</div>

                {/* NECESSITIES */}
                <div className="flex flex-col space-y-3">
                    <span className="text-subheading font-extrabold tracking-tighter">
                        Necessities
                    </span>
                    <div className="flex w-full space-x-6 overflow-y-hidden overflow-x-scroll">
                        {necessities.map(({ name, imgSrc }) => (
                            <div className="size-[75px] shrink-0 rounded-xl bg-white/10"></div>
                        ))}
                    </div>
                </div>

                {/* CLOSE BUTTON */}
                <XMarkIcon
                    className="smooth absolute right-12 top-12 w-10 cursor-pointer hover:opacity-70"
                    onClick={onClick}
                />
            </div>
        </div>
    );
}
