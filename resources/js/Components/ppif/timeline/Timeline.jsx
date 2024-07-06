import React from "react";

function Timeline() {
    return (
        <div className="flex justify-center h-auto w-screen bg-cover bg-[url('/ppif/images/timeline_bg.png')]">
            <div className="container min-h-screen w-100 text-white">
                <div className="whitespace-nowrap select-none pt-32 text-center text-[36px] lg:text-[68px] font-['Poppins'] drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
                    <span className="font-semibold">Our </span>
                    <span className="font-black italic text-ppif-orange">TIMELINE</span>
                </div>

                <div className="mt-[16px] lg:mt-[58px] justify-items-center grid grid-cols-1 gap-x-10 gap-y-5 lg:grid-cols-3">
                    <div className="flex flex-col justify-center rounded-[25px] max-w-[360px] lg:max-w-[490px] max-h-[250px] lg:max-h-[530px] bg-[#FF6600]/75 backdrop-blur-md px-[42px] py-[46px] drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                    >
                        <span className="font-[Poppins] font-black text-3xl lg:text-5xl leading-7 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                            BRIEFING<br/>DAY
                        </span>
                        
                        <span className="font-[Poppins] text-xs lg:text-xl">
                            Senin, 12 Agustus 2024<br/>
                            12:30 WIB<br/>
                            Lecture Theater, Gedung D, UMN
                        </span>

                        <span className="font-[Poppins] text-[10px] lg:text-base mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </span>
                        
                        <span className="font-[Poppins] font-semibold text-base lg:text-xl mt-12 hidden xl:block">
                            see details
                        </span>
                    </div>

                    <div className="flex flex-col justify-center rounded-[25px] max-w-[360px] lg:max-w-[490px] max-h-[250px] lg:max-h-[530px] bg-[#FF6600]/25 backdrop-blur-md px-[42px] py-[46px] drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                    >
                        <span className="font-[Poppins] font-black text-3xl lg:text-5xl leading-7 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                            DAY<br/>ONE
                        </span>
                        
                        <span className="font-[Poppins] text-xs lg:text-xl">
                            Senin, 12 Agustus 2024<br/>
                            12:30 WIB<br/>
                            Lecture Theater, Gedung D, UMN
                        </span>

                        <span className="font-[Poppins] text-[10px] lg:text-base mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </span>
                        
                        <span className="font-[Poppins] font-semibold text-base lg:text-xl mt-12 hidden xl:block">
                            see details
                        </span>
                    </div>

                    <div className="flex flex-col justify-center rounded-[25px] max-w-[360px] lg:max-w-[490px] max-h-[250px] lg:max-h-[530px] bg-[#FF6600]/25 backdrop-blur-md px-[42px] py-[46px] drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                    >
                        <span className="font-[Poppins] font-black text-3xl lg:text-5xl leading-7 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                            DAY<br/>TWO
                        </span>
                        
                        <span className="font-[Poppins] text-xs lg:text-xl">
                            Senin, 12 Agustus 2024<br/>
                            12:30 WIB<br/>
                            Lecture Theater, Gedung D, UMN
                        </span>

                        <span className="font-[Poppins] text-[10px] lg:text-base mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </span>
                        
                        <span className="font-[Poppins] font-semibold text-base lg:text-xl mt-12 hidden xl:block">
                            see details
                        </span>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Timeline;
