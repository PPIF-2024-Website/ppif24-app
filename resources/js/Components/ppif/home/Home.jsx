import React, { useEffect } from "react";
import "./Home.css";

function Home() {
    useEffect(() => {
        const updateViewBox = () => {
            const mySVG = document.getElementById("svg");
            if (mySVG) {
                if (window.innerWidth >= 1536) {
                    mySVG.setAttribute("viewBox", "0 0 1500 620");
                } else if (window.innerWidth >= 1280) {
                    mySVG.setAttribute("viewBox", "0 0 1500 750");
                } else if (window.innerWidth >= 1024) {
                    mySVG.setAttribute("viewBox", "0 0 1500 1000");
                } else {
                }
            }

            const mySVG2 = document.getElementById("svg2");

            if (mySVG2) {
                if (window.innerWidth >= 768) {
                    mySVG2.setAttribute("viewBox", "0 0 650 970");
                }
                for (let width = 0; width <= 767; width++) {
                    if (window.innerWidth === width) {
                        var calculatedValue = 10 * (767 - width);
                        mySVG2.setAttribute(
                            "viewBox",
                            `0 0 650 ${calculatedValue}`,
                        );
                    }
                }
            }
        };

        updateViewBox();
        window.addEventListener("resize", updateViewBox);

        return () => {
            window.removeEventListener("resize", updateViewBox);
        };
    }, []);

    return (
        <>
            <div className="relative mx-auto sm:w-[460px] md:w-[640px] lg:w-[844px] xl:w-[1100px] 2xl:w-[1400px]">
                <div className="absolute z-10 w-11/12 lg:w-2/5">
                    <img
                        className="w-full"
                        src="/ppif/images/orangebackground.png"
                        alt="ppif"
                    />

                    <div className="absolute inset-0 flex w-11/12 items-center justify-center">
                        <h1 className="text-center text-4xl font-bold text-white md:text-6xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                            INFORMATIKA
                        </h1>
                    </div>
                </div>

                <div className="container mx-auto h-[550px] rounded-sm p-8">
                    <svg
                        className="absolute inset-0 -z-10 hidden lg:flex"
                        viewBox="0 0 1500 750"
                        preserveAspectRatio="none"
                        id="svg"
                    >
                        <defs>
                            <mask
                                id="mask"
                                x="0"
                                y="0"
                                width="100%"
                                height="100%"
                            >
                                <rect
                                    x="0"
                                    y="0"
                                    width="100%"
                                    height="100%"
                                    fill="white"
                                />
                                <path
                                    d="M 0 0 V 130 Q 0 115 15 115 H 510 q 10 0 25 -15 l 85 -85 q 15 -15 30 -15 Z"
                                    fill="black"
                                />
                            </mask>
                        </defs>

                        <rect
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            mask="url(#mask)"
                            fill="rgba(255, 255, 255, 0.2)"
                        />
                    </svg>
                    <svg
                        className="absolute inset-0 -z-10 flex lg:hidden"
                        viewBox="0 0 650 1000"
                        preserveAspectRatio="none"
                        id="svg2"
                    >
                        <defs>
                            <mask
                                id="mask2"
                                x="0"
                                y="0"
                                width="100%"
                                height="100%"
                            >
                                <rect
                                    x="0"
                                    y="0"
                                    width="100%"
                                    height="100%"
                                    fill="white"
                                />
                                <path
                                    d="M 0 0 V 130 Q 0 115 15 115 H 510 q 10 0 25 -15 l 85 -85 q 15 -15 30 -15 Z"
                                    fill="black"
                                />
                            </mask>
                        </defs>

                        <rect
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            mask="url(#mask2)"
                            fill="rgba(255, 255, 255, 0.2)"
                        />
                    </svg>
                    <div className="flex flex-col lg:flex-row">
                        <div className="p-4 lg:w-2/5">
                            <p
                                className="mb-4 text-white"
                                id="text"
                                style={{
                                    paddingTop: "6.5em",
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div
                            className="flex h-[500px] w-[60%] flex-wrap overflow-y-scroll p-1 pl-6 pt-0"
                            id="images"
                        >
                            <div className="flex flex-wrap md:w-1/2">
                                <div className="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="/ppif/images/activities/7.jpg"
                                    />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="/ppif/images/activities/13.jpg"
                                    />
                                </div>
                                <div className="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="/ppif/images/activities/9.jpg"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap md:w-1/2">
                                <div className="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="/ppif/images/activities/15.jpg"
                                    />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="/ppif/images/activities/16.jpg"
                                    />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="/ppif/images/activities/5.jpg"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap md:w-1/2">
                                <div className="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="/ppif/images/activities/3.jpg"
                                    />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="/ppif/images/activities/6.jpg"
                                    />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="/ppif/images/activities/17.jpg"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap md:w-1/2">
                                <div className="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="/ppif/images/activities/8.jpg"
                                    />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="/ppif/images/activities/16.jpg"
                                    />
                                </div>
                                <div className="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="/ppif/images/activities/12.jpg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
