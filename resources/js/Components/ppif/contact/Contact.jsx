import React from "react";

function Contact() {
    return (
        <div className="container mx-auto h-auto bg-[url('/ppif/images/bg.png')] w-screen min-h-screen text-white">
            <div className="pt-16 text-center">
                <span className="text-4xl sm:text-5xl font-black italic text-ppif-blue">
                    CONTACT
                </span>
                <span className="text-4xl sm:text-5xl font-bold"> Us</span>
            </div>

            <div className="bg-white bg-opacity-15 mx-4 lg:mx-20 p-4 lg:p-12 mt-8 rounded-lg grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="flex flex-col lg:flex-col items-center justify-center rounded-lg bg-white bg-opacity-10 lg:pb-12 lg:pt-12 p-2 shadow-lg">
                    <div className="lg:grid-cols-1 grid grid-cols-2 items-center w-full">
                        <div className="h-24 flex items-center justify-center">
                            <img
                                src="/ppif/images/instagram.png"
                                alt="instagram_logo"
                                className="lg:h-24 w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-col items-start lg:items-center justify-center">
                            <h2 className="text-[3.5vw] lg:text-2xl lg:mt-[3vw]">PPIF UMN</h2>
                            <button
                                className="mt-2 lg:mt-4 bg-white bg-opacity-10 hover:bg-black hover:bg-opacity-35 hover:shadow-white hover:shadow-md transition-opacity duration-300 rounded-lg text-base text-[1.8vw] lg:text-lg px-4 py-1 shadow-lg"
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

                <div className="flex flex-col lg:flex-col items-center justify-center rounded-lg bg-white bg-opacity-10 lg:p-6 p-2 shadow-lg">
                    <div className="lg:grid-cols-1 grid grid-cols-2 items-center w-full">
                        <div className="h-24 flex items-center justify-center">
                            <img
                                src="/ppif/images/line.png"
                                alt="line_logo"
                                className="lg:h-24 w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-col items-start lg:items-center justify-center">
                            <h2 className="text-[3.5vw] lg:text-2xl lg:mt-[3vw]">PPIF UMN 2024</h2>
                            <button
                                className="mt-2 lg:mt-4 bg-white bg-opacity-10 hover:bg-black hover:bg-opacity-35 hover:shadow-white hover:shadow-md transition-opacity duration-300 rounded-lg text-base text-[1.8vw] lg:text-lg px-4 py-1 shadow-lg"
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

                <div className="flex flex-col lg:flex-col items-center justify-center rounded-lg bg-white bg-opacity-10 p-2 lg:p-6 shadow-lg">
                    <div className="lg:grid-cols-1 grid grid-cols-2 items-center w-full">
                        <div className="h-24 flex items-center justify-center">
                            <img
                                src="/ppif/images/discord.png"
                                alt="discord_logo"
                                className="lg:h-24 w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-col items-start lg:items-center justify-center">
                            <h2 className="text-[3.5vw] lg:text-xl lg:mt-[3vw]">Informatika UMN</h2>
                            <button
                                className="mt-2 lg:mt-4 bg-white bg-opacity-10 hover:bg-black hover:bg-opacity-35 hover:shadow-white hover:shadow-md transition-opacity duration-300 rounded-lg text-base text-[1.8vw] lg:text-lg px-4 py-1 shadow-lg"
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
