import { Link, Head } from "@inertiajs/react";

export default function Welcome() {
    return (
        <>
            <Head title="Home" />
            {/* background */}
            <div className="absolute h-screen w-screen bg-black">
                <img
                    className="h-screen w-screen blur-[180px]"
                    src="/ppif/images/logo-ppif-crop.png"
                    alt=""
                />
            </div>
            {/* content */}
            <div className="z-1 relative flex h-screen w-screen flex-col items-center justify-center gap-5 text-white lg:flex-row lg:gap-10">
                <img
                    className="w-full max-w-96"
                    src="/ppif/images/logo.png"
                    alt="ppif"
                />
                <p className="animate-pulse bg-white bg-clip-text text-4xl text-transparent lg:text-5xl">
                    SEE YOU IN
                    <span className="font-italic font-bold italic"> PPIF </span>
                    2024
                </p>
            </div>
        </>
    );
}
