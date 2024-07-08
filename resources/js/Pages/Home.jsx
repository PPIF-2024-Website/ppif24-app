import { Head } from "@inertiajs/react";
import Navbar from "@/Components/ppif/navbar-footer/Navbar";

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <div className="flex h-screen w-screen justify-center">
                <Navbar className="" />
                <div className="flex h-screen w-screen items-center justify-center bg-black">
                    <div className="absolute flex h-screen w-screen items-center justify-center">
                        <img
                            className="max-w-32 lg:w-full"
                            src="/ppif/images/logo-ppif.png"
                            alt="ppif"
                        />
                    </div>
                    <div className="absolute bottom-12 flex flex-col items-center space-y-4 text-white">
                        <p className="">click to scroll down</p>
                        <img
                            className=""
                            src="/ppif/icons/arrow-down.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
