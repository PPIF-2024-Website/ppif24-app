import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isScrollUp, setIsScrollUp] = useState(true);
    const [isBurgerActive, setIsBurgerActive] = useState(false);

    useEffect(() => {
        let lastScroll = window.scrollY;

        const handleScroll = () => {
            const scroll = window.scrollY;

            if (scroll < lastScroll) {
                setIsScrollUp(true);
            } else {
                setIsScrollUp(false);
            }

            lastScroll = scroll;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleBurger = () => {
        setIsBurgerActive(!isBurgerActive);
    };

    return (
        <div className="flex w-screen justify-center">
            <div className="fixed z-50 flex h-16 w-screen justify-end md:hidden">
                <img
                    onClick={handleBurger}
                    className="z-50 m-2 max-w-96"
                    src="/ppif/icons/burger_navigation.svg"
                    alt=""
                ></img>
            </div>
            <nav
                className={`${isScrollUp ? "md:top-0" : "md:-top-40"} ${isBurgerActive ? "top-0" : "-top-[100vh]"} fixed z-10 mx-auto flex h-full w-screen flex-col bg-white bg-opacity-10 pt-16 text-2xl text-white backdrop-blur-md transition-all duration-200 ease-in-out md:mt-8 md:flex md:h-auto md:w-auto md:flex-row md:gap-16 md:rounded-xl md:px-12 md:py-5 md:text-base md:shadow-[0px_0px_50px_20px_rgba(255,255,255,0.1)]`}
            >
                <hr className="opacity-20 md:hidden" />
                <Link
                    className="p-4 transition-all hover:drop-shadow-[0px_0px_5px_rgba(255,255,255,1)] md:p-0"
                    href="#Home"
                >
                    Home
                </Link>
                <hr className="opacity-20 md:hidden" />
                <Link
                    className="p-4 transition-all hover:drop-shadow-[0px_0px_5px_rgba(255,255,255,1)] md:p-0"
                    href="#AboutIF"
                >
                    About IF
                </Link>
                <hr className="opacity-20 md:hidden" />
                <Link
                    className="p-4 transition-all hover:drop-shadow-[0px_0px_5px_rgba(255,255,255,1)] md:p-0"
                    href="#AboutPPIF"
                >
                    About PPIF
                </Link>
                <hr className="opacity-20 md:hidden" />
                <Link
                    className="p-4 transition-all hover:drop-shadow-[0px_0px_5px_rgba(255,255,255,1)] md:p-0"
                    href="#Timeline"
                >
                    Timeline
                </Link>
                <hr className="opacity-20 md:hidden" />
                <Link
                    className="p-4 transition-all hover:drop-shadow-[0px_0px_5px_rgba(255,255,255,1)] md:p-0"
                    href="#Contact"
                >
                    Contact
                </Link>
                <hr className="opacity-20 md:hidden" />
            </nav>
        </div>
    );
}
