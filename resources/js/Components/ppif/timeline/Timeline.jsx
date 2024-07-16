import React from "react";



function Timeline() {
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
    }

    const hidden = {
        visibility: "hidden",
        opacity: "0",
        transition: "visibility 0s 0.1s, opacity 0.1s linear",
    }
    
    const Popup = ({day}) => {
        if (day==0) return null;
        if (day==1) return (
            <div className="flex flex-col justify-center rounded-[25px] max-w-[480px] lg:max-w-[60%] max-h-[1280px] lg:max-h-[1280px] bg-[#FF6600]/75 backdrop-blur-md px-[42px] py-[46px] lg:p-[64px] drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]">
                <div className="flex justify-between">
                    <span className="font-black text-3xl lg:text-5xl leading-7 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                        BRIEFING<br/>DAY
                    </span>
                    <div>
                        <div className="text-5xl select-none cursor-pointer drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] bg-[url('/ppif/icons/x.png')] bg-no-repeat size-[36px]"
                        onClick={handleClose} />
                    </div>
                </div>
                <span className="text-xs lg:text-xl">
                            Senin, 12 Agustus 2024<br/>
                            12:30 WIB<br/>
                            Lecture Theater, Gedung D, UMN
                        </span>

                        <span className="text-[10px] lg:text-base mt-5 h-40">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </span>

                <div className="mt-4">
                    <span className="font-black text-4xl">
                        Necessities
                    </span>
                    <ul className="h-[190px] flex overflow-x-scroll w-full whitespace-nowrap">
                        <li className="listItem p-4 pb-0 text-center w-auto min-w-[152px]">
                            <img className="bg-gray-800 size-[128px]"/>
                            <span className="mt-4">Item</span>
                        </li>
                        <li className="listItem p-4 pb-0 text-center w-auto min-w-[152px]">
                            <img className="bg-gray-800 size-[128px]"/>
                            <span className="mt-4">Item</span>
                        </li>
                        <li className="listItem p-4 pb-0 text-center w-auto min-w-[152px]">
                            <img className="bg-gray-800 size-[128px]"/>
                            <span className="mt-4">Item</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
        if (day==2) return (
            <div className="flex flex-col justify-center rounded-[25px] max-w-[480px] lg:max-w-[60%] max-h-[1280px] lg:max-h-[1280px] bg-[#FF6600]/75 backdrop-blur-md px-[42px] py-[46px] lg:p-[64px] drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]">
                <div className="flex justify-between">
                    <span className="font-black text-3xl lg:text-5xl leading-7 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                        DAY<br/>ONE
                    </span>
                    <div>
                        <div className="text-5xl select-none cursor-pointer drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] bg-[url('/ppif/icons/x.png')] bg-no-repeat size-[36px]"
                        onClick={handleClose} />
                    </div>
                </div>
                <span className="text-xs lg:text-xl">
                            Senin, 12 Agustus 2024<br/>
                            12:30 WIB<br/>
                            Lecture Theater, Gedung D, UMN
                        </span>

                        <span className="text-[10px] lg:text-base mt-5 h-40">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </span>

                <div className="mt-4">
                    <span className="font-black text-4xl">
                        Necessities
                    </span>
                    <ul className="h-[190px] flex overflow-x-scroll w-full whitespace-nowrap">
                        <li className="listItem p-4 pb-0 text-center w-auto min-w-[152px]">
                            <img className="bg-gray-800 size-[128px]"/>
                            <span className="mt-4">Item</span>
                        </li>
                        <li className="listItem p-4 pb-0 text-center w-auto min-w-[152px]">
                            <img className="bg-gray-800 size-[128px]"/>
                            <span className="mt-4">Item</span>
                        </li>
                        <li className="listItem p-4 pb-0 text-center w-auto min-w-[152px]">
                            <img className="bg-gray-800 size-[128px]"/>
                            <span className="mt-4">Item</span>
                        </li>
                        <li className="listItem p-4 pb-0 text-center w-auto min-w-[152px]">
                            <img className="bg-gray-800 size-[128px]"/>
                            <span className="mt-4">Item</span>
                        </li>
                        <li className="listItem p-4 pb-0 text-center w-auto min-w-[152px]">
                            <img className="bg-gray-800 size-[128px]"/>
                            <span className="mt-4">Item</span>
                        </li>
                        
                    </ul>
                </div>
            </div>
        );
        return (
            <div className="flex flex-col justify-center rounded-[25px] max-w-[480px] lg:max-w-[60%] max-h-[1280px] lg:max-h-[1280px] bg-[#FF6600]/75 backdrop-blur-md px-[42px] py-[46px] lg:p-[64px] drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]">
                <div className="flex justify-between">
                    <span className="font-black text-3xl lg:text-5xl leading-7 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                        DAY<br/>TWO
                    </span>
                    <div>
                        <div className="text-5xl select-none cursor-pointer drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] bg-[url('/ppif/icons/x.png')] bg-no-repeat size-[36px]"
                        onClick={handleClose} />
                    </div>
                </div>
                <span className="text-xs lg:text-xl">
                            Senin, 12 Agustus 2024<br/>
                            12:30 WIB<br/>
                            Lecture Theater, Gedung D, UMN
                        </span>

                        <span className="text-[10px] lg:text-base mt-5 h-40">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </span>

                <div className="mt-4">
                    <span className="font-black text-4xl">
                        Necessities
                    </span>
                    <ul className="h-[190px] flex overflow-x-scroll w-full whitespace-nowrap">
                        <li className="listItem p-4 pb-0 text-center w-auto min-w-[152px]">
                            <img className="bg-gray-800 size-[128px]"/>
                            <span className="mt-4">Item</span>
                        </li>
                        <li className="listItem p-4 pb-0 text-center w-auto min-w-[152px]">
                            <img className="bg-gray-800 size-[128px]"/>
                            <span className="mt-4">Item</span>
                        </li>
                        <li className="listItem p-4 pb-0 text-center w-auto min-w-[152px]">
                            <img className="bg-gray-800 size-[128px]"/>
                            <span className="mt-4">Item</span>
                        </li>
                        <li className="listItem p-4 pb-0 text-center w-auto min-w-[152px]">
                            <img className="bg-gray-800 size-[128px]"/>
                            <span className="mt-4">Item</span>
                        </li>
                        <li className="listItem p-4 pb-0 text-center w-auto min-w-[152px]">
                            <img className="bg-gray-800 size-[128px]"/>
                            <span className="mt-4">Item</span>
                        </li>
                        <li className="listItem p-4 pb-0 text-center w-auto min-w-[152px]">
                            <img className="bg-gray-800 size-[128px]"/>
                            <span className="mt-4">Item</span>
                        </li>
                        <li className="listItem p-4 pb-0 text-center w-auto min-w-[152px]">
                            <img className="bg-gray-800 size-[128px]"/>
                            <span className="mt-4">Item</span>
                        </li>
                        <li className="listItem p-4 pb-0 text-center w-auto min-w-[152px]">
                            <img className="bg-gray-800 size-[128px]"/>
                            <span className="mt-4">Item</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center h-screen w-screen bg-cover bg-[url('/ppif/images/timeline_bg.png')]">
            <div className="container min-h-screen w-100 text-white font-[Poppins]">
                <div className="whitespace-nowrap select-none pt-4 lg:pt-32 text-center text-[36px] lg:text-[68px] drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
                    <span className="font-semibold">Our </span>
                    <span className="font-black italic text-ppif-orange">TIMELINE</span>
                </div>

                <div className="mt-[16px] lg:mt-[58px] justify-items-center grid grid-cols-1 gap-x-10 gap-y-5 lg:grid-cols-3">
                    <div className="flex flex-col justify-center rounded-[25px] max-w-[360px] lg:max-w-[490px] max-h-[250px] lg:max-h-[530px] bg-[#FF6600]/25 hover:bg-[#FF6600]/75 transition ease-in-out duration-100 backdrop-blur-md px-[42px] py-[46px] drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] cursor-pointer select-none" 
                    onClick={() => { 
                        handleOpen();
                        setDay(1);
                    }}
                    >
                        <span className="font-black text-3xl lg:text-5xl leading-7 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                            BRIEFING<br/>DAY
                        </span>
                        
                        <span className="text-xs lg:text-xl">
                            Senin, 12 Agustus 2024<br/>
                            12:30 WIB<br/>
                            Lecture Theater, Gedung D, UMN
                        </span>

                        <span className="text-[10px] lg:text-base mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </span>
                        
                        <span className="font-semibold text-base lg:text-xl mt-12 hidden xl:block">
                            see details
                        </span>
                    </div>

                    <div className="flex flex-col justify-center rounded-[25px] max-w-[360px] lg:max-w-[490px] max-h-[250px] lg:max-h-[530px] bg-[#FF6600]/25 hover:bg-[#FF6600]/75 transition ease-in-out duration-100 backdrop-blur-md px-[42px] py-[46px] drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] cursor-pointer select-none"
                    onClick={() => { 
                        handleOpen();
                        setDay(2);
                    }}
                    >
                        <span className="font-black text-3xl lg:text-5xl leading-7 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                            DAY<br/>ONE
                        </span>
                        
                        <span className="text-xs lg:text-xl">
                            Senin, 12 Agustus 2024<br/>
                            12:30 WIB<br/>
                            Lecture Theater, Gedung D, UMN
                        </span>

                        <span className="text-[10px] lg:text-base mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </span>
                        
                        <span className="font-semibold text-base lg:text-xl mt-12 hidden xl:block">
                            see details
                        </span>
                    </div>

                    <div className="flex flex-col justify-center rounded-[25px] max-w-[360px] lg:max-w-[490px] max-h-[250px] lg:max-h-[530px] bg-[#FF6600]/25 hover:bg-[#FF6600]/75 transition ease-in-out duration-100 backdrop-blur-md px-[42px] py-[46px] drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] cursor-pointer select-none"
                    onClick={() => { 
                        handleOpen();
                        setDay(3);
                    }}
                    >
                        <span className="font-black text-3xl lg:text-5xl leading-7 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                            DAY<br/>TWO
                        </span>
                        
                        <span className="text-xs lg:text-xl">
                            Senin, 12 Agustus 2024<br/>
                            12:30 WIB<br/>
                            Lecture Theater, Gedung D, UMN
                        </span>

                        <span className="text-[10px] lg:text-base mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </span>
                        
                        <span className="font-semibold text-base lg:text-xl mt-12 hidden xl:block">
                            see details
                        </span>
                    </div>
                    
                </div>
            </div>

            <div
                className={"fixed top-0 left-0 w-screen h-screen p-4 bg-black/25 text-white font-[Poppins] flex items-center justify-center"}
                style={(open ? visible : hidden)}
            >
                <div className="fixed top-0 left-0 w-screen h-screen" onClick={handleClose} />
                <Popup day={day} />
            </div>
        </div>
    );
}

export default Timeline;
