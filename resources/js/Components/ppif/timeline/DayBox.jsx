import React from "react";

// DAY COMPONENT
export default function DayBox({
    day,
    dayName,
    date,
    time,
    location,
    description,
    onClick,
}) {
    return (
        <div className="glow-orange smooth flex max-h-[25vh] w-full flex-col justify-center rounded-3xl bg-[rgba(var(--ppif-orange-rgb),0.4)] px-4 py-6 backdrop-blur-md hover:bg-ppif-orange min-[270px]:p-6 min-[300px]:p-8 sm:p-10 md:w-[500px] xl:h-[50vh] xl:max-h-[350px] xl:w-full 2xl:px-16 2xl:py-12">
            {/* DAY TITLE */}
            <div className="glow-white mb-2 flex flex-col -space-y-2 text-3xl font-extrabold uppercase tracking-tighter min-[300px]:text-4xl sm:mb-4 sm:-space-y-1 sm:text-5xl">
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

            {/* DATE, TIME, LOCATION */}
            <div className="text-body mb-8 hidden flex-col font-light xl:flex">
                <span>{date}</span>
                <span>{time}</span>
                <span>{location}</span>
            </div>

            {/* DESCRIPTION */}
            {/* <div className="text-body mb-8 hidden xl:block">{description}</div> */}

            {/* VIEW MORE */}
            <div
                className="hover:glow-white smooth cursor-pointer select-none text-base font-semibold opacity-60 hover:opacity-100 lg:text-xl"
                onClick={onClick}
            >
                see details
            </div>
        </div>
    );
}
