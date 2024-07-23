import React, { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const DummyImage = ({ i }) => (
    <div
        key={i}
        className="smooth h-[175px] w-[250px] flex-shrink-0 snap-center overflow-hidden rounded-md bg-white/20 hover:scale-[1.1]"
    >
        <div className="flex h-full w-full items-center justify-center text-5xl font-extralight">
            ?
        </div>
    </div>
);

const ImageContainer = ({ src, index }) => (
    <div
        key={index}
        className="smooth h-[200px] w-[300px] flex-shrink-0 snap-center overflow-hidden rounded-md bg-white/20 hover:scale-[1.1]"
    >
        <img
            src={src}
            alt={`Foto Dokumentasi PPIF ${index}`}
            className="h-full w-full select-none object-cover"
            loading="lazy"
            fetchPriority="low"
        />
    </div>
);

export default function ImageCarousel({ imageUrls }) {
    const [showLeftControl, setShowLeftControl] = useState(false);
    const [showRightControl, setShowRightControl] = useState(true);
    const carouselRef = useRef(null);

    const handleScrollCarousel = (direction) =>
        carouselRef.current?.scrollBy({
            left: direction === "right" ? 290 : -290,
            behavior: "smooth",
        });

    const checkScrollPosition = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
                carouselRef.current;
            setShowLeftControl(scrollLeft > 10);
            setShowRightControl(scrollLeft < scrollWidth - clientWidth);
        }
    };

    useEffect(() => {
        const carouselElement = carouselRef.current;
        if (carouselElement) {
            carouselElement.addEventListener("scroll", checkScrollPosition);
            checkScrollPosition();
        }

        return () => {
            if (carouselElement) {
                carouselElement.removeEventListener(
                    "scroll",
                    checkScrollPosition,
                );
            }
        };
    }, []);

    return (
        <div className="relative h-[275px] w-full">
            <div
                ref={carouselRef}
                className="mask-ends flex h-full w-full snap-x snap-mandatory items-center space-x-8 overflow-x-scroll rounded-lg bg-white/10 px-10 shadow-[0_0_25px_rgba(255,255,255,0.2)] backdrop-blur-md"
            >
                {/* CAROUSEL */}
                {imageUrls.map((src, index) => (
                    <ImageContainer key={index} src={src} index={index} />
                ))}
            </div>

            {/* CONTROL BUTTONS */}
            <div className="absolute left-0 top-1/2 flex w-full justify-between [transform:translate(0,-50%)]">
                <ChevronLeftIcon
                    onClick={() => handleScrollCarousel("left")}
                    className={`smooth glow-white w-10 cursor-pointer hover:scale-125 [&>path]:stroke-[2] ${showLeftControl ? "opacity-60 hover:opacity-100" : "pointer-events-none opacity-0"}`}
                />
                <ChevronRightIcon
                    onClick={() => handleScrollCarousel("right")}
                    className={`smooth glow-white w-10 cursor-pointer hover:scale-125 [&>path]:stroke-[2] ${showRightControl ? "opacity-60 hover:opacity-100" : "pointer-events-none opacity-0"}`}
                />
            </div>

            {/* EDGE BLURS */}
            <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[200px] rounded-lg bg-gradient-to-r from-white/[0.15] to-transparent blur-lg"></div>
            <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-[200px] rounded-lg bg-gradient-to-r from-transparent to-white/[0.15] blur-lg"></div>
        </div>
    );
}