import React from "react";

function Contact() {
    return (
        <div className="mx-auto h-auto min-h-screen w-screen bg-[url('/ppif/images/bg.png')] bg-cover pb-24 text-white lg:pb-16">
            <div className="pt-16 text-center">
                <span className="text-4xl font-black italic text-ppif-blue sm:text-5xl">
                    CONTACT
                </span>
                <span className="text-4xl font-bold sm:text-5xl"> Us</span>
            </div>

            <div className="mx-4 mt-8 grid grid-cols-1 gap-6 rounded-lg bg-white bg-opacity-15 p-4 lg:mx-20 lg:grid-cols-3 lg:p-12">
                <div className="flex flex-col items-center justify-center rounded-lg bg-white bg-opacity-10 p-2 pb-6 pt-6 shadow-lg lg:flex-col lg:pb-12 lg:pt-12">
                    <div className="grid w-full grid-cols-2 items-center lg:grid-cols-1">
                        <div className="flex h-24 items-center justify-center">
                            <img
                                src="/ppif/images/instagram.png"
                                alt="instagram_logo"
                                className="h-full w-full object-contain lg:h-24 drop-shadow-[0_10px_10px_rgba(255,255,255,0.5)]"
                            />
                        </div>
                        <div className="flex flex-col items-start justify-center lg:items-center">
                            <h2 className="lg:text-[22px] text-[18px] lg:mt-[3vw] lg:text-2xl">
                                PPIF UMN
                            </h2>
                            <button
                                className="mt-2 rounded-lg bg-white bg-opacity-10 px-4 py-1 text-[12px] lg:text-[15px] shadow-lg transition-opacity duration-300 hover:bg-black hover:bg-opacity-35 hover:shadow-md hover:shadow-white lg:mt-4 lg:text-lg"
                                onClick={() =>
                                    (window.location.href =
                                        "https://www.instagram.com/ppif.umn/")
                                }
                            >
                                Follow Our Instagram
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center rounded-lg bg-white bg-opacity-10 p-2 pb-6 pt-6 shadow-lg lg:flex-col lg:p-6">
                    <div className="grid w-full grid-cols-2 items-center lg:grid-cols-1">
                        <div className="flex h-24 items-center justify-center">
                            <img
                                src="/ppif/images/line.png"
                                alt="line_logo"
                                className="h-full w-full object-contain lg:h-24 drop-shadow-[0_10px_10px_rgba(255,255,255,0.5)]"
                            />
                        </div>
                        <div className="flex flex-col items-start justify-center lg:items-center">
                            <h2 className="lg:text-[22px] text-[18px] lg:mt-[3vw] lg:text-2xl">
                                PPIF UMN 2024
                            </h2>
                            <button
                                className="mt-2 rounded-lg bg-white bg-opacity-10 px-4 py-1 text-[12px] lg:text-[15px] shadow-lg transition-opacity duration-300 hover:bg-black hover:bg-opacity-35 hover:shadow-md hover:shadow-white lg:mt-4 lg:text-lg"
                                onClick={() =>
                                    (window.location.href =
                                        "https://line.me/ti/g2/...")
                                }
                            >
                                Join LINE GROUP
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center rounded-lg bg-white bg-opacity-10 p-2 pb-6 pt-6 shadow-lg lg:flex-col lg:p-6">
                    <div className="grid w-full grid-cols-2 items-center lg:grid-cols-1">
                        <div className="flex h-24 items-center justify-center">
                            <img
                                src="/ppif/images/discord.png"
                                alt="discord_logo"
                                className="h-full w-full object-contain lg:h-24 drop-shadow-[0_10px_10px_rgba(255,255,255,0.5)]"
                            />
                        </div>
                        <div className="flex flex-col items-start justify-center lg:items-center">
                            <h2 className="lg:text-[22px] text-[18px] lg:mt-[3vw] lg:text-xl">
                                Informatika UMN
                            </h2>
                            <button
                                className="mt-2 rounded-lg bg-white bg-opacity-10 px-4 py-1 text-[12px] lg:text-[15px] shadow-lg transition-opacity duration-300 hover:bg-black hover:bg-opacity-35 hover:shadow-md hover:shadow-white lg:mt-4 lg:text-lg"
                                onClick={() =>
                                    (window.location.href =
                                        "https://discord.gg/......")
                                }
                            >
                                Join Discord Server
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
