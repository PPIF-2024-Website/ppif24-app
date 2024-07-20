import React from "react";
import "./Home.css";

function Home() {
    return (
        <>
            <div class="relative mx-auto sm:w-[460px] md:w-[640px] lg:w-[844px] xl:w-[1100px] 2xl:w-[1400px]">
                <img
                    className=""
                    id="orangebackground"
                    src="/ppif/images/orangebackground.png"
                    alt="ppif"
                />
                <h1
                    className="font-poppins font-bold italic text-white"
                    id="informatika"
                >
                    INFORMATIKA
                </h1>

                <div
                    className="container mx-auto h-[550px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] bg-white bg-opacity-20 p-8"
                    id="polygon"
                >
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
                            <div class="flex flex-wrap md:w-1/2">
                                <div class="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="/ppif/images/activities/7.jpg"
                                    />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="/ppif/images/activities/13.jpg"
                                    />
                                </div>
                                <div class="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="/ppif/images/activities/9.jpg"
                                    />
                                </div>
                            </div>
                            <div class="flex flex-wrap md:w-1/2">
                                <div class="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="/ppif/images/activities/15.jpg"
                                    />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="/ppif/images/activities/16.jpg"
                                    />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="/ppif/images/activities/5.jpg"
                                    />
                                </div>
                            </div>
                            <div class="flex flex-wrap md:w-1/2">
                                <div class="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="/ppif/images/activities/3.jpg"
                                    />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="/ppif/images/activities/6.jpg"
                                    />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="/ppif/images/activities/17.jpg"
                                    />
                                </div>
                            </div>
                            <div class="flex flex-wrap md:w-1/2">
                                <div class="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="/ppif/images/activities/8.jpg"
                                    />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="/ppif/images/activities/16.jpg"
                                    />
                                </div>
                                <div class="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
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
