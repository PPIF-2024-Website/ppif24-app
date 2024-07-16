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
            <div className="fixed z-50 flex h-24 w-screen justify-end md:hidden">
                <img
                    onClick={handleBurger}
                    className="z-50 m-6"
                    src="/ppif/icons/burger_navigation.svg"
                    alt=""
                ></img>
            </div>
            <nav
                className={`${isScrollUp ? "md:top-0" : "md:-top-40"} ${isBurgerActive ? "bg-black bg-opacity-75" : "backdrop-blur-0"} fixed z-10 mx-auto flex h-full w-screen flex-col px-12 py-20 text-2xl text-white backdrop-blur-md transition-all duration-700 ease-in-out md:mt-8 md:flex md:h-auto md:w-auto md:flex-row md:gap-16 md:rounded-xl md:bg-white md:bg-opacity-10 md:px-12 md:py-5 md:text-base md:shadow-[0px_0px_50px_20px_rgba(255,255,255,0.1)] md:duration-200`}
            >
                <Link
                    className={`${isBurgerActive ? "translate-y-0 delay-0" : "-translate-y-10 opacity-0 delay-[250ms]"} py-4 font-bold transition-all ease-in-out hover:drop-shadow-[0px_0px_5px_rgba(255,255,255,1)] md:translate-y-0 md:p-0 md:font-normal md:opacity-100 md:delay-0`}
                    href="#Home"
                >
                    Home
                </Link>
                <Link
                    className={`${isBurgerActive ? "translate-y-0 delay-[50ms]" : "-translate-y-10 opacity-0 delay-200"} py-4 font-bold transition-all ease-in-out hover:drop-shadow-[0px_0px_5px_rgba(255,255,255,1)] md:translate-y-0 md:p-0 md:font-normal md:opacity-100 md:delay-0`}
                    href="#AboutIF"
                >
                    About IF
                </Link>
                <Link
                    className={`${isBurgerActive ? "translate-y-0 delay-100" : "-translate-y-10 opacity-0 delay-150"} py-4 font-bold transition-all ease-in-out hover:drop-shadow-[0px_0px_5px_rgba(255,255,255,1)] md:translate-y-0 md:p-0 md:font-normal md:opacity-100 md:delay-0`}
                    href="#AboutPPIF"
                >
                    About PPIF
                </Link>
                <Link
                    className={`${isBurgerActive ? "translate-y-0 delay-150" : "-translate-y-10 opacity-0 delay-100"} py-4 font-bold transition-all ease-in-out hover:drop-shadow-[0px_0px_5px_rgba(255,255,255,1)] md:translate-y-0 md:p-0 md:font-normal md:opacity-100 md:delay-0`}
                    href="#Timeline"
                >
                    Timeline
                </Link>
                <Link
                    className={`${isBurgerActive ? "translate-y-0 delay-200" : "-translate-y-10 opacity-0 delay-[50ms]"} py-4 font-bold transition-all ease-in-out hover:drop-shadow-[0px_0px_5px_rgba(255,255,255,1)] md:translate-y-0 md:p-0 md:font-normal md:opacity-100 md:delay-0`}
                    href="#Contact"
                >
                    Contact
                </Link>
                <hr
                    className={`${isBurgerActive ? "translate-y-0 opacity-75 delay-[250ms]" : "-translate-y-10 opacity-0 delay-0"} mt-4 border-t-4 transition-all ease-in-out md:hidden`}
                />
            </nav>
        </div>
    );
}
