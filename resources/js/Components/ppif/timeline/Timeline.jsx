import React, { useEffect, useState } from "react";
import DayBox from "./DayBox";
import Popup from "./Popup";
import days from "./data.jsx";
import "./Timeline.css";
import { CSSTransition } from "react-transition-group";

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
                    (
                        { day, dayName, date, time, location, Description },
                        index,
                    ) => (
                        <DayBox
                            day={day}
                            dayName={dayName}
                            date={date}
                            time={time}
                            location={location}
                            Description={Description}
                            onClick={() => setActive(day)}
                            key={index}
                        />
                    ),
                )}
            </div>

            {/* POPUPS */}
            <div
                className={`smooth fixed left-0 top-0 z-20 m-0 flex h-screen w-screen items-center justify-center bg-black/40 ${active !== -1 ? "opacity-100 backdrop-blur-[8px]" : "pointer-events-none opacity-0"}`}
            >
                {days.map(
                    (
                        {
                            day,
                            dayName,
                            date,
                            time,
                            location,
                            Description,
                            necessities,
                        },
                        index,
                    ) => (
                        <CSSTransition
                            in={active === index}
                            timeout={300}
                            unmountOnExit
                            classNames="popup"
                            key={index}
                        >
                            <Popup
                                day={day}
                                dayName={dayName}
                                date={date}
                                time={time}
                                location={location}
                                Description={Description}
                                necessities={necessities}
                                onClick={() => setActive(-1)}
                            />
                        </CSSTransition>
                    ),
                )}
            </div>
        </div>
    );
}
