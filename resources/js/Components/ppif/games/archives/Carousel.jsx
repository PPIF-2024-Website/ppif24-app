import React, { useEffect, useRef, useState } from "react";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    KeyIcon,
} from "@heroicons/react/24/outline";
import data from "./data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [items, setItems] = useState(data);
    const carouselRef = useRef(null);
    const touchStartX = useRef(null);

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    useEffect(() => {
        if (carouselRef.current) {
            setSlideWidth(
                carouselRef.current.firstElementChild?.clientWidth || 0,
            );
        }
    }, []);

    useEffect(() => {
        setItems([...data.slice(-1), ...data, ...data.slice(0, 1)]);
        setTranslateX(-slideWidth);
    }, [slideWidth]);

    const handleNext = () => {
        if (isButtonDisabled) return;

        setIsButtonDisabled(true);
        setIsTransitioning(true);
        setTranslateX((prevPosition) => prevPosition - slideWidth);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);

        setTimeout(() => {
            setIsTransitioning(false);
            if (currentIndex === data.length - 1) {
                setTranslateX(-slideWidth);
            }
            setIsButtonDisabled(false);
        }, 300);
    };

    const handlePrevious = () => {
        if (isButtonDisabled) return;

        setIsButtonDisabled(true);
        setIsTransitioning(true);
        setTranslateX((prevPosition) => prevPosition + slideWidth);
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + data.length) % data.length,
        );

        setTimeout(() => {
            setIsTransitioning(false);
            if (currentIndex === 0) {
                setTranslateX(-slideWidth * data.length);
            }
            setIsButtonDisabled(false);
        }, 300);
    };

    const handleTouchStart = (event) =>
        (touchStartX.current = event.touches[0].clientX);

    const handleTouchMove = (event) => {
        if (touchStartX.current !== null) {
            const deltaX = event.touches[0].clientX - touchStartX.current;
            if (deltaX > 50) {
                handlePrevious();
                touchStartX.current = null;
            } else if (deltaX < -50) {
                handleNext();
                touchStartX.current = null;
            }
        }
    };

    return (
        <div className="relative flex h-[400px] w-screen items-center justify-center min-[500px]:h-[500px] sm:h-[550px] md:h-[600px]">
            {/* TITLE */}
            <div className="glow-pink absolute left-1/2 top-[50px] z-[1] select-none bg-gradient-to-br from-ppif-pink to-transparent bg-clip-text text-3xl font-black uppercase italic tracking-tighter text-transparent backdrop-blur-sm [transform:translate(-50%,0)] min-[340px]:text-5xl min-[440px]:text-6xl min-[500px]:top-[20px] sm:text-7xl md:top-0">
                Archives
            </div>

            <div className="mask-ends flex w-[1200px] max-w-full rounded-2xl bg-black/40 py-12 backdrop-blur-md">
                {/* CAROUSEL */}
                <div
                    className="items flex h-full w-full items-center justify-center overflow-hidden"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div
                        ref={carouselRef}
                        className={`carousel m-auto flex h-full max-h-[443px] w-[65%] flex-nowrap ${
                            isTransitioning ? "smooth" : ""
                        }`}
                        style={{ transform: `translateX(${translateX}px)` }}
                    >
                        {items.map(
                            ({ imageSrc, key, cipher, explanation }, index) => (
                                <div
                                    className="flex h-full w-full shrink-0 px-2 md:px-8"
                                    key={index}
                                >
                                    <div className="relative flex h-full max-h-[442px] w-full max-w-[663px] items-center overflow-hidden rounded-xl py-12 lg:rounded-2xl">
                                        <LazyLoadImage
                                            src={imageSrc}
                                            className="aspect-[3/2] select-none object-fill brightness-75 sm:rounded-lg md:h-full md:w-full"
                                            fetchpriority="low"
                                            effect="opacity"
                                            wrapperProps={{
                                                style: {
                                                    transitionDelay: "1s",
                                                },
                                            }}
                                        />
                                        <span className="absolute inset-0 flex items-center justify-center overflow-hidden p-2 text-center text-[0.6rem] text-white sm:p-10 sm:text-[1rem] sm:text-lg md:text-[1.3rem] lg:text-[1.6rem]">
                                            <div>
                                                <div className="glow-white mb-3 flex items-center justify-center space-x-4">
                                                    <KeyIcon className="w-10 [&>path]:stroke-[1]" />
                                                    <div className="font-mono">
                                                        {key}
                                                    </div>
                                                </div>
                                                <pre className="glow-white text-start font-light leading-tight md:leading-snug">
                                                    {cipher}
                                                </pre>
                                                {explanation && (
                                                    <pre className="font-black">
                                                        {explanation}
                                                    </pre>
                                                )}
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </div>

            {/* CONTROLS */}
            <div className="absolute top-1/2 z-[2] flex w-[1200px] max-w-full justify-between text-white [transform:translate(0,-50%)]">
                <ChevronLeftIcon
                    className="controlPrev hover:glow-white w-full max-w-8 cursor-pointer opacity-50 transition-all duration-150 hover:scale-110 hover:opacity-100 sm:max-w-16"
                    onClick={handlePrevious}
                />
                <ChevronRightIcon
                    className="controlNext hover:glow-white w-full max-w-8 cursor-pointer opacity-50 transition-all duration-150 hover:scale-110 hover:opacity-100 sm:max-w-16"
                    onClick={handleNext}
                />
            </div>

            {/* PAGINATION */}
            <div className="absolute bottom-[30px] flex justify-center space-x-4 bg-transparent min-[500px]:bottom-0 sm:space-x-10 md:bottom-[20px]">
                {[0, 1, 2, 3].map((index) => (
                    <div
                        key={index}
                        className={`smooth aspect-square h-6 w-6 rounded-full backdrop-blur-sm min-[500px]:h-8 min-[500px]:w-8 ${
                            currentIndex === index
                                ? "glow-white bg-white"
                                : "bg-white/20"
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};
export default Carousel;
