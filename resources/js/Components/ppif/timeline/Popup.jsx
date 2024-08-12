import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import "./Timeline.css";

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
            <div className="thin-scroll glow-orange flex max-h-[80%] w-[1000px] max-w-[90%] flex-col overflow-y-auto rounded-3xl bg-[rgba(var(--ppif-orange-rgb),0.5)] px-6 py-12 backdrop-blur-md min-[420px]:px-8 sm:px-16">
                <div className="flex w-full items-start justify-between">
                    {/* DAY TITLE */}
                    <div className="glow-white mb-4 flex flex-col -space-y-1 text-4xl font-extrabold tracking-tighter sm:text-5xl">
                        <span>{day === 0 ? "BRIEFING" : "DAY"}</span>
                        <span>
                            {day === 0 ? "DAY" : day === 1 ? "ONE" : "TWO"}
                        </span>
                    </div>

                    {/* CLOSE BUTTON */}
                    <XMarkIcon
                        className="smooth w-10 cursor-pointer hover:opacity-70"
                        onClick={onClick}
                    />
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
                    <div className="thin-scroll flex w-full space-x-6 overflow-x-auto overflow-y-hidden py-3">
                        {necessities.map(({ name, imgSrc }, index) => (
                            <div
                                className="size-[75px] shrink-0 rounded-xl bg-white/10"
                                key={index}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
