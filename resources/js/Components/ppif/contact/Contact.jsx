import React from "react";
import { Link } from "@inertiajs/react";

function Contact() {

    return (

        <div className="flex min-h-screen w-screen flex-col bg-[url('/ppif/images/bg.png')] bg-cover text-white">
            <div className="pt-16 text-center">
                <span className="text-4xl font-black italic text-ppif-blue sm:text-5xl">
                    CONTACT
                </span>
                <span className="text-4xl font-bold sm:text-5xl"> Us</span>
            </div>

            <div className="mx-4 mb-40 mt-8 grid flex-grow grid-cols-1 gap-6 rounded-lg bg-white bg-opacity-15 p-4 lg:mx-20 lg:grid-cols-3 lg:p-12">
                <div className="flex flex-col items-center justify-center rounded-lg bg-white bg-opacity-10 p-2 pb-6 pt-6 shadow-lg lg:flex-col lg:pb-12 lg:pt-12">
                    <div className="grid w-full grid-cols-2 items-center lg:grid-cols-1">
                        <div className="flex h-24 items-center justify-center">
                            <img
                                src="/ppif/images/instagram.png"
                                alt="instagram_logo"
                                className="h-full w-full object-contain drop-shadow-[0_10px_10px_rgba(255,255,255,0.5)] lg:h-24"
                            />
                        </div>
                        <div className="flex flex-col items-start justify-center lg:items-center">
                            <h2 className="text-[18px] lg:mt-[3vw] lg:text-2xl lg:text-[22px]">
                                PPIF UMN
                            </h2>
                            <button
                                className="mt-2 rounded-lg bg-white bg-opacity-10 px-4 py-1 text-[12px] shadow-lg transition-opacity duration-300 hover:bg-black hover:bg-opacity-35 hover:shadow-md hover:shadow-white lg:mt-4 lg:text-[15px] lg:text-lg"
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
                                className="h-full w-full object-contain drop-shadow-[0_10px_10px_rgba(255,255,255,0.5)] lg:h-24"
                            />
                        </div>
                        <div className="flex flex-col items-start justify-center lg:items-center">
                            <h2 className="text-[18px] lg:mt-[3vw] lg:text-2xl lg:text-[22px]">
                                PPIF UMN 2024
                            </h2>
                            <button
                                className="mt-2 rounded-lg bg-white bg-opacity-10 px-4 py-1 text-[12px] shadow-lg transition-opacity duration-300 hover:bg-black hover:bg-opacity-35 hover:shadow-md hover:shadow-white lg:mt-4 lg:text-[15px] lg:text-lg"
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
                                className="h-full w-full object-contain drop-shadow-[0_10px_10px_rgba(255,255,255,0.5)] lg:h-24"
                            />
                        </div>
                        <div className="flex flex-col items-start justify-center lg:items-center">
                            <h2 className="text-[18px] lg:mt-[3vw] lg:text-[22px] lg:text-xl">
                                Informatika UMN
                            </h2>
                            <button
                                className="mt-2 rounded-lg bg-white bg-opacity-10 px-4 py-1 text-[12px] shadow-lg transition-opacity duration-300 hover:bg-black hover:bg-opacity-35 hover:shadow-md hover:shadow-white lg:mt-4 lg:text-[15px] lg:text-lg"
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
            <footer className="w-full bg-white bg-opacity-[40%] py-5 before:absolute before:left-0 before:top-0 before:h-3 before:w-full before:bg-gradient-to-r before:from-[#8091ce] before:via-[#8091ce] before:to-[#8091ce] before:opacity-30 lg:bg-[#898085] lg:bg-opacity-100">
                <div className="z-10 mx-auto flex flex-col items-center justify-between lg:flex-row">
                    <div className="mb-2 flex flex-col items-center justify-center lg:mb-0 lg:ml-6">
                        <img
                            src="/ppif/images/Logo_UMN_PPIF.png"
                            alt="logo UMN X PPIF"
                            className="lg:w-4/4 mb-5 mt-4 w-3/4 px-7 lg:scale-125 lg:transform lg:pb-4"
                        />
                        <h2 className="text-center text-[3.3vw] font-bold text-[#000000] lg:ml-6 lg:text-base">
                            © 2024 Perkenalan Prodi Informatika UMN
                        </h2>
                    </div>
                    <Link href="/game/story">
                        <img
                            src="/ppif/icons/Game_icon.png"
                            alt="Navigate to Game Page"
                            className="w-14 cursor-pointer lg:mr-8 lg:w-auto"
                        />
                    </Link>
                </div>
            </footer>
        </div>
    );
}

export default Contact;
