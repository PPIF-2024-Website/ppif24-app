import { LazyLoadImage } from "react-lazy-load-image-component";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import "react-lazy-load-image-component/src/effects/opacity.css";

export default function Landing({ id }) {
    return (
        <div
            id={id}
            className="flex h-screen w-full select-none items-end justify-center overflow-hidden"
        >
            <div className="absolute flex h-screen w-full items-center justify-center">
                <LazyLoadImage
                    src="/ppif/images/landing/ppif-emblem-glow.svg"
                    className="w-[250px] min-[420px]:w-[400px]"
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
                <ArrowDownIcon className="w-6 animate-bounce [&>path]:stroke-[2.5]" />
            </a>
        </div>
    );
}
