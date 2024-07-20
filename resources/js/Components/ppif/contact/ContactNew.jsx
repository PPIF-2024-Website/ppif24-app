import React from "react";
import { Link } from "@inertiajs/react";
import ContactCard from "./ContactCard";

function ContactNew() {
    return (
        <div className="flex min-h-screen w-screen flex-col bg-[url('/ppif/images/bg.png')] bg-cover text-white">
            <div className="pt-16 text-center">
                <span className="text-4xl font-black italic text-ppif-blue sm:text-5xl">
                    CONTACT
                </span>
                <span className="text-4xl font-bold sm:text-5xl"> Us</span>
            </div>

            <div className="mx-4 mb-40 mt-8 grid flex-grow grid-cols-1 gap-6 rounded-lg bg-white bg-opacity-15 p-4 lg:mx-20 lg:grid-cols-3 lg:p-12">
                <ContactCard
                    imageSrc="/ppif/images/ig.svg"
                    altText="instagram_logo"
                    title="PPIF UMN"
                    buttonText="Follow Our Instagram"
                    buttonLink="https://www.instagram.com/ppif.umn/"
                />

                <ContactCard
                    imageSrc="/ppif/images/line.svg"
                    altText="line_logo"
                    title="PPIF UMN 2024"
                    buttonText="Join LINE GROUP"
                    buttonLink="https://line.me/ti/g2/..."
                />

                <ContactCard
                    imageSrc="/ppif/images/dc.svg"
                    altText="discord_logo"
                    title="Informatika UMN"
                    buttonText="Join Discord Server"
                    buttonLink="https://discord.gg/......"
                />
            </div>
            <footer className="w-full bg-white bg-opacity-[30%] py-5 before:absolute before:left-0 before:top-0 before:h-3 before:w-full before:bg-gradient-to-r before:from-[#8091ce] before:via-[#8091ce] before:to-[#8091ce] before:opacity-30 lg:bg-[#bdbdbd] lg:bg-opacity-60 lg:backdrop-blur-md">
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
        </div>
    );
}

export default ContactNew;
