import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
    LazyLoadImage,
    trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "./Timeline.css";

// POPUP COMPONENT
function Popup({
    day,
    dayName,
    date,
    time,
    location,
    Description,
    necessities,
    onClick,
}) {
    return (
        <div className="glow-orange no-scroll flex max-h-[85%] w-[1000px] max-w-[90%] flex-col overflow-y-auto rounded-3xl bg-[rgba(var(--ppif-orange-rgb),0.5)] px-6 py-12 backdrop-blur-md min-[420px]:px-8 sm:px-16">
            <div className="flex w-full items-start justify-between">
                {/* DAY TITLE */}
                <div className="glow-white mb-4 flex flex-col -space-y-1 text-4xl font-extrabold uppercase tracking-tighter sm:text-5xl">
                    <span>{dayName[0]}</span>
                    <span
                        className={
                            day === 2 &&
                            "text-lg tracking-normal min-[300px]:text-xl sm:text-2xl"
                        }
                    >
                        {dayName[1]}
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
            <div className="text-body mb-8">
                <Description />
            </div>

            {/* NECESSITIES */}
            <div className="flex flex-col">
                <span className="text-subheading font-extrabold tracking-tighter">
                    Necessities
                </span>
                <div className="thin-scroll flex w-full space-x-10 overflow-x-auto py-3">
                    {necessities.map(({ name, imageSrc }, index) => (
                        <div className="relative flex flex-shrink-0 flex-col items-center justify-center">
                            <LazyLoadImage
                                src={imageSrc}
                                alt={name}
                                className="h-[75px] w-auto select-none"
                                fetchpriority="low"
                                effect="opacity"
                                wrapperProps={{
                                    style: { transitionDelay: "1s" },
                                }}
                            />
                            <span className="text-footer bg-gradient-to-tr from-white to-white/60 bg-clip-text p-2 text-center font-black leading-3 tracking-tighter text-transparent">
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default trackWindowScroll(Popup);
