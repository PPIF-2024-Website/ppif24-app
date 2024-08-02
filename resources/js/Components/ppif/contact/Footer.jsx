import { Link } from "@inertiajs/react";
import React from "react";

export default function Footer() {
    return (
        <footer className="w-full rounded-t-2xl bg-white/15 py-5 backdrop-blur-md">
            <div className="z-10 mx-auto flex flex-col items-center justify-between lg:flex-row">
                <div className="mb-2 flex flex-col items-center justify-center lg:mb-0 lg:ml-6">
                    <img
                        src="/ppif/images/Logo_UMN_PPIF.svg"
                        alt="logo UMN X PPIF"
                        className="lg:w-4/4 mb-5 mt-4 w-3/4 px-7 lg:scale-125 lg:transform lg:pb-4"
                    />
                    <h2 className="text-center text-[3.3vw] font-bold text-[#ffffff] lg:ml-6 lg:text-base">
                        © 2024 Perkenalan Prodi Informatika UMN
                    </h2>
                </div>
                <Link href="/game/story">
                    <img
                        src="/ppif/icons/Game_icon.svg"
                        alt="Navigate to Game Page"
                        className="w-14 cursor-pointer lg:mr-8 lg:w-auto"
                    />
                </Link>
            </div>
        </footer>
    );
}
