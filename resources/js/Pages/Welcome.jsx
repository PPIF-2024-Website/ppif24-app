import { Link, Head } from "@inertiajs/react";
import { useGlitch } from "react-powerglitch";
import Contact from "@/Components/ppif/contact/Contact";
import React from "react";
import ContactNew from "@/Components/ppif/contact/ContactNew";

export default function Welcome() {
    return (
        <>
            <Head title="Home" />
            {/* background */}
            <div className="absolute h-screen w-screen bg-black">
                <img
                    className="h-screen w-screen animate-pulse blur-[180px]"
                    src="/ppif/images/logo-ppif-crop.png"
                    alt=""
                />
            </div>
            {/* content */}




            <div className="z-1 relative flex h-screen w-screen flex-col items-center justify-center gap-5 overflow-hidden text-white lg:flex-row lg:gap-10">
                <img
                    ref={glitch.ref}
                    className="max-w-96 lg:w-full"
                    src="/ppif/images/logo-ppif.png"
                    alt="ppif"
                />
                <p
                    ref={glitch.ref}
                    className="bg-white bg-clip-text text-4xl text-transparent lg:text-5xl"
                >
                    SEE YOU IN
                    <span className="font-italic font-bold italic"> PPIF </span>
                    2024
                </p>
            </div>

            <div className="flex flex-col min-h-screen">
                <Head title="Contact" />
                <ContactNew/>
            </div>
        </>
    );
}
