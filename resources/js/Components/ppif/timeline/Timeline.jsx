import React, { useEffect, useState } from "react";
import DayBox from "./DayBox";
import Popup from "./Popup";
import days from "./data";
import "./Timeline.css";

// MAIN TIMELINE COMPONENT
export default function Timeline({ id }) {
    const [active, setActive] = useState(-1);

    useEffect(() => {
        document.body.style.overflowY = active === -1 ? "scroll" : "hidden";
    }, [active]);

    return (
        <div
            id={id}
            className="flex h-screen w-full flex-col items-center justify-center py-12 text-white"
        >
            {/* TITLE */}
            <h1 className="text-heading mb-8">
                <span className="glow-white">Our</span>{" "}
                <span className="glow-orange font-extrabold italic text-[var(--ppif-orange)]">
                    TIMELINE
                </span>
            </h1>

            {/* DAYS */}
            <div className="flex w-full flex-col items-center space-y-8 px-8 sm:px-16 xl:flex-row xl:space-x-8 xl:space-y-0">
                {days.map(
                    ({ day, date, time, location, description }, index) => (
                        <DayBox
                            day={day}
                            date={date}
                            time={time}
                            location={location}
                            description={description}
                            onClick={() => setActive(day)}
                            key={index}
                        />
                    ),
                )}
            </div>

            {/* POPUPS */}
            {days.map(
                (
                    { day, date, time, location, description, necessities },
                    index,
                ) => (
                    <Popup
                        day={day}
                        date={date}
                        time={time}
                        location={location}
                        description={description}
                        necessities={necessities}
                        active={active === day}
                        onClick={() => setActive(-1)}
                        key={index}
                    />
                ),
            )}
        </div>
    );
}
