import { Link } from "@inertiajs/react";
import React from "react";
import { FolderOpenIcon } from "@heroicons/react/24/outline";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="flex w-full items-center justify-between rounded-t-xl bg-gradient-to-t from-black/50 to-transparent px-16 py-5 text-white backdrop-blur-md">
            {/* LOGO AND FOOTER TEXT */}
            <div className="flex w-full flex-col items-center space-y-5 md:items-start">
                {/* LOGO */}
                <div className="flex items-center space-x-8">
                    <img
                        src="/ppif/images/footer/umn-logo.svg"
                        alt=""
                        className="w-[80px] min-[380px]:h-[30px] min-[380px]:w-auto min-[410px]:h-[40px] min-[490px]:h-[50px]"
                    />
                    <img
                        src="/ppif/images/footer/ppif2024-logo.svg"
                        alt=""
                        className="w-[130px] min-[380px]:h-[25px] min-[380px]:w-auto min-[410px]:h-[30px] min-[490px]:h-[40px]"
                    />
                </div>

                {/* TEXT */}
                <p className="text-footer text-center font-light tracking-tight">
                    © 2024 Perkenalan Prodi Informatika UMN. All rights
                    reserved.
                </p>
            </div>

            {/* GAME LINK */}
            <Link href="/game/story" className="hidden md:block">
                <FolderOpenIcon className="glow-white w-[75px] animate-[pulse_3s_ease-out_infinite] opacity-100 hover:animate-[shake_1s_ease-in_infinite] [&>path]:stroke-[0.4]" />
            </Link>
        </footer>
    );
}
