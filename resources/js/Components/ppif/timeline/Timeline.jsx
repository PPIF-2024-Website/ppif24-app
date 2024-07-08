import React from "react";

const Popup = ({day}) => {
    if (day==0) return null;
    if (day==1) return <img src={'https://cdn.discordapp.com/attachments/752311963064729643/1259893379127312514/LG-cardart-Dagoth_Ur.png?ex=668d56a5&is=668c0525&hm=2a8bf816059128effa66907c57a55dbd4e0a9c920e55e6a5eb4d2a990aaf49e9&'} className="w-[720px]" />
    if (day==2) return <img src={'https://cdn.discordapp.com/attachments/752311963064729643/1259892243523965008/tusk.jpg?ex=668d5596&is=668c0416&hm=94a46e990d354f285f8f885a3521a7cffa45ef34eabc659b9fb47c280169085e&'} className="w-[720px]" />
    return <img src={'https://cdn.discordapp.com/attachments/752311963064729643/1259893415605174402/gurren.png?ex=668d56ad&is=668c052d&hm=cd948404947fbcd97ab324fa939ea65954a54f127f95476fdd0288007f3641f7&'} className="w-[720px]" />
}

function Timeline() {
    const [open, setOpen] = React.useState(false);
    const [day, setDay] = React.useState(0);
 
    const handleClose = () => {
        setOpen(false);
        setDay(0);
    };
 
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div className="flex justify-center h-screen w-screen bg-cover bg-[url('/ppif/images/timeline_bg.png')]">
            <div className="container min-h-screen w-100 text-white font-[Poppins]">
                <div className="whitespace-nowrap select-none pt-4 lg:pt-32 text-center text-[36px] lg:text-[68px] drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
                    <span className="font-semibold">Our </span>
                    <span className="font-black italic text-ppif-orange">TIMELINE</span>
                </div>

                <div className="mt-[16px] lg:mt-[58px] justify-items-center grid grid-cols-1 gap-x-10 gap-y-5 lg:grid-cols-3">
                    <div className="flex flex-col justify-center rounded-[25px] max-w-[360px] lg:max-w-[490px] max-h-[250px] lg:max-h-[530px] bg-[#FF6600]/25 hover:bg-[#FF6600]/75 transition ease-in-out duration-100 backdrop-blur-md px-[42px] py-[46px] drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] cursor-pointer" 
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

                    <div className="flex flex-col justify-center rounded-[25px] max-w-[360px] lg:max-w-[490px] max-h-[250px] lg:max-h-[530px] bg-[#FF6600]/25 hover:bg-[#FF6600]/75 transition ease-in-out duration-100 backdrop-blur-md px-[42px] py-[46px] drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] cursor-pointer"
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

                    <div className="flex flex-col justify-center rounded-[25px] max-w-[360px] lg:max-w-[490px] max-h-[250px] lg:max-h-[530px] bg-[#FF6600]/25 hover:bg-[#FF6600]/75 transition ease-in-out duration-100 backdrop-blur-md px-[42px] py-[46px] drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] cursor-pointer"
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
                onClick={handleClose}
                className={"fixed top-0 left-0 w-screen h-screen bg-black/10 flex items-center justify-center backdrop-blur-sm transition ease-in-out duration-200 select-none " + (open ? 'visible opacity-100' : 'invisible opacity-0')}
            >
                <Popup day={day} />
            </div>
        </div>
    );
}

export default Timeline;
