import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "./AnimatedBackground.css";

export default function SvgBackground() {
    return (
        <div className="main-background absolute -z-10 w-full select-none overflow-hidden">
            {/* HOME */}
            <div className="relative h-screen">
                <img
                    width="1600"
                    height="1600"
                    src="/ppif/images/background/orange-ball.svg"
                    className="absolute left-1/2 top-0 origin-left animate-[spin_30s_linear_infinite_reverse]"
                />

                <img
                    width="1500"
                    height="1500"
                    src="/ppif/images/background/pink-ball.svg"
                    className="absolute -bottom-[10%] left-[30%] origin-left animate-[spin_20s_linear_infinite]"
                />

                <img
                    width="1700"
                    height="1700"
                    src="/ppif/images/background/blue-ball.svg"
                    className="absolute -bottom-[30%] left-[70%] origin-left animate-[spin_15s_linear_infinite_reverse]"
                />
            </div>

            {/* ABOUT IF */}
            <div className="relative h-screen">
                <img
                    width="1200"
                    height="1200"
                    src="/ppif/images/background/orange-ball.svg"
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
                    className="absolute left-[30%] origin-left animate-[spin_20s_linear_infinite_reverse]"
                />
            </div>

            {/* TIMELINE */}
            <div className="relative h-screen">
                <img
                    width="1700"
                    height="1700"
                    src="/ppif/images/background/orange-ball.svg"
                    className="absolute right-10 top-0 origin-right animate-[spin_22s_linear_infinite_reverse]"
                />
            </div>
        </div>
    );
}
