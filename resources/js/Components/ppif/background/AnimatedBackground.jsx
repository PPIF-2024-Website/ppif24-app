import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import Footer from "../navbar-footer/Footer";
import "./AnimatedBackground.css";

export default function AnimatedBackground() {
    return (
        <div className="main-background absolute -z-10 w-full select-none overflow-hidden">
            {/* HOME */}
            <div className="relative h-screen">
                {/* <div className="bg-ball left-1/2 top-0 bg-[var(--ppif-orange)] [transform:translate(-50%,0)]"></div>
                <div className="bg-ball left-1/2 top-0 bg-[var(--ppif-orange)] [transform:translate(-50%,0)]"></div> */}

                <img
                    width="1600"
                    height="1600"
                    src="/ppif/images/background/orange-ball.svg"
                    alt="-"
                    className="absolute left-1/2 top-0 origin-left animate-[spin_30s_linear_infinite_reverse]"
                />

                <img
                    width="1500"
                    height="1500"
                    src="/ppif/images/background/pink-ball.svg"
                    alt="-"
                    className="absolute -bottom-[10%] left-[30%] origin-left animate-[spin_20s_linear_infinite]"
                />

                <img
                    width="1700"
                    height="1700"
                    src="/ppif/images/background/blue-ball.svg"
                    alt="-"
                    className="absolute -bottom-[30%] left-[70%] origin-left animate-[spin_15s_linear_infinite_reverse]"
                />

                {/* <div className="bg-ball -bottom-[10%] left-[30%] origin-left bg-[var(--ppif-pink)] [transform:translate(-50%,0%)]"></div>
                <div className="bg-ball -bottom-[10%] left-[30%] origin-left bg-[var(--ppif-pink)] [transform:translate(-50%,0%)]"></div>
                <div className="bg-ball -bottom-[30%] left-[70%] origin-right bg-[var(--ppif-blue)] [transform:translate(-50%,0%)]"></div>
                <div className="bg-ball -bottom-[30%] left-[70%] origin-right bg-[var(--ppif-blue)] [transform:translate(-50%,0%)]"></div> */}
            </div>

            {/* ABOUT IF */}
            <div className="relative h-screen">
                {/* <div className="bg-ball left-[70%] top-0 bg-[var(--ppif-orange)] [transform:translate(-50%,0)]"></div> */}

                <img
                    width="1200"
                    height="1200"
                    src="/ppif/images/background/orange-ball.svg"
                    alt="-"
                    className="absolute right-10 top-0 origin-right animate-[spin_22s_linear_infinite_reverse]"
                />

                <LazyLoadImage
                    src="/ppif/images/background/umn-bg.webp"
                    effect="opacity"
                    wrapperProps={{
                        style: { transitionDelay: "1s" },
                    }}
                    role="presentation"
                    fetchpriority="low"
                    className="mask-bg absolute left-0 h-full w-full object-cover opacity-80 xl:object-fill"
                />
            </div>

            {/* ABOUT PPIF */}
            <div className="relative h-screen">
                <img
                    width="1500"
                    height="1500"
                    src="/ppif/images/background/pink-ball.svg"
                    alt="-"
                    className="absolute left-[30%] origin-left animate-[spin_20s_linear_infinite_reverse]"
                />
                {/* <div className="bg-ball -top-[10%] right-0 bg-[var(--ppif-pink)]"></div>
                <div className="bg-ball -bottom-[10%] left-0 origin-bottom bg-[var(--ppif-pink)]"></div> */}
            </div>

            {/* TIMELINE */}
            <div className="relative h-screen">
                <img
                    width="1700"
                    height="1700"
                    src="/ppif/images/background/orange-ball.svg"
                    alt="-"
                    className="absolute right-10 top-0 origin-right animate-[spin_22s_linear_infinite_reverse]"
                />

                {/* <div className="bg-ball -left-[20%] -top-[10%] origin-right bg-[var(--ppif-orange)] opacity-60"></div>
                <div className="bg-ball -top-[20%] right-[10%] origin-left bg-[var(--ppif-orange)]"></div>
                <div className="bg-ball bottom-0 right-0 origin-top-left bg-[var(--ppif-blue)] opacity-40"></div> */}
            </div>

            {/* CONTACT */}
            <div className="relative h-screen">
                <img
                    width="2000"
                    height="2000"
                    src="/ppif/images/background/blue-ball.svg"
                    alt="-"
                    className="absolute bottom-0 left-[1/2] origin-bottom animate-[spin_23s_linear_infinite]"
                />

                {/* <div className="bg-ball -bottom-[70%] left-1/2 h-[900px] w-[900px] animate-none bg-[var(--ppif-blue)] opacity-90 [transform:translate(-50%,0)] md:h-[1000px] md:w-[1000px]"></div> */}
            </div>

            {/* FOOTER */}
            <Footer />
        </div>
    );
}
