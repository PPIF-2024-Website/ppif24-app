import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

export default function Landing({ id }) {
    return (
        <div id={id} className="flex h-screen w-full items-end justify-center">
            <div className="absolute flex h-screen w-full items-center justify-center">
                <LazyLoadImage
                    src="/ppif/images/landing/ppif-emblem-glow.svg"
                    className="max-w-[400px] lg:w-full"
                    alt="PPIF 2024 Logo"
                    effect="opacity"
                    wrapperProps={{
                        style: { transitionDelay: "0.1s" },
                    }}
                />
            </div>
            <a
                href="#about-if"
                className="absolute mb-12 flex cursor-pointer flex-col items-center space-y-6 text-white"
            >
                <p className="hidden xl:block">click to scroll down</p>
                <p className="xl:hidden">touch to scroll down</p>
                <img
                    className="animate-bounce"
                    src="/ppif/icons/arrow-down.svg"
                    alt="arrow-down"
                />
            </a>
        </div>
    );
}
