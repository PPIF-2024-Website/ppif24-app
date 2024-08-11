import React from "react";
import "./Timeline.css";

function Timeline({ id }) {
    const [open, setOpen] = React.useState(false);
    const [day, setDay] = React.useState(0);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const visible = {
        visibility: "visible",
        opacity: "1",
        transition: "opacity 0.1s linear",
    };

    const hidden = {
        visibility: "hidden",
        opacity: "0",
        transition: "visibility 0s 0.1s, opacity 0.1s linear",
    };

    const Popup = ({ day }) => {
        if (day == 0) return null;
        if (day == 1)
            return (
                <div className="flex max-h-[1280px] max-w-[480px] flex-col justify-center rounded-[25px] bg-[#FF6600]/75 px-[42px] py-[46px] drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] backdrop-blur-md lg:max-h-[1280px] lg:max-w-[60%] lg:p-[64px]">
                    <div className="flex justify-between">
                        <span className="text-3xl font-black leading-7 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] lg:text-5xl">
                            BRIEFING
                            <br />
                            DAY
                        </span>
                        <div>
                            <div
                                className="size-[36px] cursor-pointer select-none bg-[url('/ppif/icons/x.png')] bg-no-repeat text-5xl drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
                                onClick={handleClose}
                            />
                        </div>
                    </div>
                    <span className="text-xs lg:text-xl">
                        Senin, 12 Agustus 2024
                        <br />
                        12:30 WIB
                        <br />
                        Lecture Theater, Gedung D, UMN
                    </span>

                    <span className="mt-5 h-36 text-[10px] lg:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </span>

                    <div className="mt-4">
                        <span className="text-4xl font-black">Necessities</span>
                        <ul className="necessities mt-4 flex h-[180px] w-full gap-[47px] overflow-x-auto whitespace-nowrap">
                            {" "}
                            <li className="listItem w-auto min-w-[128px] pb-0 text-center">
                                <img className="size-[128px] bg-white" />
                                <span className="mt-4">Item</span>
                            </li>
                            <li className="listItem w-auto min-w-[128px] pb-0 text-center">
                                <img className="size-[128px] bg-white" />
                                <span className="mt-4">Item</span>
                            </li>
                            <li className="listItem w-auto min-w-[128px] pb-0 text-center">
                                <img className="size-[128px] bg-white" />
                                <span className="mt-4">Item</span>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        if (day == 2)
            return (
                <div className="flex max-h-[1280px] max-w-[480px] flex-col justify-center rounded-[25px] bg-[#FF6600]/75 px-[42px] py-[46px] drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] backdrop-blur-md lg:max-h-[1280px] lg:max-w-[60%] lg:p-[64px]">
                    <div className="flex justify-between">
                        <span className="text-3xl font-black leading-7 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] lg:text-5xl">
                            DAY
                            <br />
                            ONE
                        </span>
                        <div>
                            <div
                                className="size-[36px] cursor-pointer select-none bg-[url('/ppif/icons/x.png')] bg-no-repeat text-5xl drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
                                onClick={handleClose}
                            />
                        </div>
                    </div>
                    <span className="text-xs lg:text-xl">
                        Senin, 12 Agustus 2024
                        <br />
                        12:30 WIB
                        <br />
                        Lecture Theater, Gedung D, UMN
                    </span>

                    <span className="mt-5 h-36 text-[10px] lg:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </span>

                    <div className="mt-4">
                        <span className="text-4xl font-black">Necessities</span>
                        <ul className="necessities mt-4 flex h-[180px] w-full gap-[47px] overflow-x-auto whitespace-nowrap">
                            {" "}
                            <li className="listItem w-auto min-w-[128px] pb-0 text-center">
                                <img className="size-[128px] bg-white" />
                                <span className="mt-4">Item</span>
                            </li>
                            <li className="listItem w-auto min-w-[128px] pb-0 text-center">
                                <img className="size-[128px] bg-white" />
                                <span className="mt-4">Item</span>
                            </li>
                            <li className="listItem w-auto min-w-[128px] pb-0 text-center">
                                <img className="size-[128px] bg-white" />
                                <span className="mt-4">Item</span>
                            </li>
                            <li className="listItem w-auto min-w-[128px] pb-0 text-center">
                                <img className="size-[128px] bg-white" />
                                <span className="mt-4">Item</span>
                            </li>
                            <li className="listItem w-auto min-w-[128px] pb-0 text-center">
                                <img className="size-[128px] bg-white" />
                                <span className="mt-4">Item</span>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        return (
            <div className="flex max-h-[1280px] max-w-[480px] flex-col justify-center rounded-[25px] bg-[#FF6600]/75 px-[42px] py-[46px] drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] backdrop-blur-md lg:max-h-[1280px] lg:max-w-[60%] lg:p-[64px]">
                <div className="flex justify-between">
                    <span className="text-3xl font-black leading-7 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] lg:text-5xl">
                        DAY
                        <br />
                        TWO
                    </span>
                    <div>
                        <div
                            className="size-[36px] cursor-pointer select-none bg-[url('/ppif/icons/x.png')] bg-no-repeat text-5xl drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
                            onClick={handleClose}
                        />
                    </div>
                </div>
                <span className="text-xs lg:text-xl">
                    Senin, 12 Agustus 2024
                    <br />
                    12:30 WIB
                    <br />
                    Lecture Theater, Gedung D, UMN
                </span>

                <span className="mt-5 h-36 text-[10px] lg:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </span>

                <div className="mt-4">
                    <span className="text-4xl font-black">Necessities</span>
                    <ul className="necessities mt-4 flex h-[180px] w-full gap-[47px] overflow-x-auto whitespace-nowrap">
                        <li className="listItem w-auto min-w-[128px] pb-0 text-center">
                            <img className="size-[128px] bg-white" />
                            <span className="mt-4">Item</span>
                        </li>
                        <li className="listItem w-auto min-w-[128px] pb-0 text-center">
                            <img className="size-[128px] bg-white" />
                            <span className="mt-4">Item</span>
                        </li>
                        <li className="listItem w-auto min-w-[128px] pb-0 text-center">
                            <img className="size-[128px] bg-white" />
                            <span className="mt-4">Item</span>
                        </li>
                        <li className="listItem w-auto min-w-[128px] pb-0 text-center">
                            <img className="size-[128px] bg-white" />
                            <span className="mt-4">Item</span>
                        </li>
                        <li className="listItem w-auto min-w-[128px] pb-0 text-center">
                            <img className="size-[128px] bg-white" />
                            <span className="mt-4">Item</span>
                        </li>
                        <li className="listItem w-auto min-w-[128px] pb-0 text-center">
                            <img className="size-[128px] bg-white" />
                            <span className="mt-4">Item</span>
                        </li>
                        <li className="listItem w-auto min-w-[128px] pb-0 text-center">
                            <img className="size-[128px] bg-white" />
                            <span className="mt-4">Item</span>
                        </li>
                        <li className="listItem w-auto min-w-[128px] pb-0 text-center">
                            <img className="size-[128px] bg-white" />
                            <span className="mt-4">Item</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    };

    return (
        <div
            id={id}
            className="flex h-screen w-full items-center justify-center"
        >
            <div className="container text-white">
                <div className="select-none whitespace-nowrap pt-4 text-center text-[36px] drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] lg:text-[68px]">
                    <span className="font-semibold">Our </span>
                    <span className="font-black italic text-ppif-orange">
                        TIMELINE
                    </span>
                </div>

                <div className="mt-[16px] grid grid-cols-1 justify-items-center gap-x-10 gap-y-5 lg:mt-[58px] lg:grid-cols-3">
                    <div
                        className="flex max-h-[250px] max-w-[360px] cursor-pointer select-none flex-col justify-center rounded-[25px] bg-[#FF6600]/25 px-[42px] py-[46px] drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] backdrop-blur-md transition duration-100 ease-in-out hover:bg-[#FF6600]/75 lg:max-h-[530px] lg:max-w-[490px]"
                        onClick={() => {
                            handleOpen();
                            setDay(1);
                        }}
                    >
                        <span className="text-3xl font-black leading-7 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] lg:text-5xl">
                            BRIEFING
                            <br />
                            DAY
                        </span>

                        <span className="text-xs lg:text-xl">
                            Senin, 12 Agustus 2024
                            <br />
                            12:30 WIB
                            <br />
                            Lecture Theater, Gedung D, UMN
                        </span>

                        <span className="mt-5 text-[10px] lg:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </span>

                        <span className="mt-12 hidden text-base font-semibold lg:text-xl xl:block">
                            see details
                        </span>
                    </div>

                    <div
                        className="flex max-h-[250px] max-w-[360px] cursor-pointer select-none flex-col justify-center rounded-[25px] bg-[#FF6600]/25 px-[42px] py-[46px] drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] backdrop-blur-md transition duration-100 ease-in-out hover:bg-[#FF6600]/75 lg:max-h-[530px] lg:max-w-[490px]"
                        onClick={() => {
                            handleOpen();
                            setDay(2);
                        }}
                    >
                        <span className="text-3xl font-black leading-7 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] lg:text-5xl">
                            DAY
                            <br />
                            ONE
                        </span>

                        <span className="text-xs lg:text-xl">
                            Senin, 12 Agustus 2024
                            <br />
                            12:30 WIB
                            <br />
                            Lecture Theater, Gedung D, UMN
                        </span>

                        <span className="mt-5 text-[10px] lg:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </span>

                        <span className="mt-12 hidden text-base font-semibold lg:text-xl xl:block">
                            see details
                        </span>
                    </div>

                    <div
                        className="flex max-h-[250px] max-w-[360px] cursor-pointer select-none flex-col justify-center rounded-[25px] bg-[#FF6600]/25 px-[42px] py-[46px] drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] backdrop-blur-md transition duration-100 ease-in-out hover:bg-[#FF6600]/75 lg:max-h-[530px] lg:max-w-[490px]"
                        onClick={() => {
                            handleOpen();
                            setDay(3);
                        }}
                    >
                        <span className="text-3xl font-black leading-7 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] lg:text-5xl">
                            DAY
                            <br />
                            TWO
                        </span>

                        <span className="text-xs lg:text-xl">
                            Senin, 12 Agustus 2024
                            <br />
                            12:30 WIB
                            <br />
                            Lecture Theater, Gedung D, UMN
                        </span>

                        <span className="mt-5 text-[10px] lg:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </span>

                        <span className="mt-12 hidden text-base font-semibold lg:text-xl xl:block">
                            see details
                        </span>
                    </div>
                </div>
            </div>

            <div
                className={
                    "fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black/25 p-4 font-[Poppins] text-white"
                }
                style={open ? visible : hidden}
            >
                <div
                    className="fixed left-0 top-0 h-screen w-screen"
                    onClick={handleClose}
                />
                <Popup day={day} />
            </div>
        </div>
    );
}

export default Timeline;
