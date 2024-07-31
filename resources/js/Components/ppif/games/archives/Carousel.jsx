import React, { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Carousel = ({ slides, currentIndex, setCurrentIndex }) => {
    const [slideWidth, setSlideWidth] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [items, setItems] = useState(slides);
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
        setItems([...slides.slice(-2), ...slides.slice(0, -2)]);
        setTranslateX((prevPosition) => (prevPosition - slideWidth) * 2);
    }, [slideWidth]);

    const handleNext = () => {
        if (isButtonDisabled) return;

        setIsButtonDisabled(true);
        setIsTransitioning(true);
        setTranslateX((prevPosition) => prevPosition - slideWidth);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);

        setTimeout(() => {
            setIsTransitioning(false);
            setItems((prev) => prev.slice(1).concat(prev[0]));
            setTranslateX((prevPosition) => prevPosition + slideWidth);
            setIsButtonDisabled(false);
        }, 300);
    };

    const handlePrevious = () => {
        if (isButtonDisabled) return;

        setIsButtonDisabled(true);
        setIsTransitioning(true);
        setTranslateX((prevPosition) => prevPosition + slideWidth);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 4) % 4);

        setTimeout(() => {
            setIsTransitioning(false);
            setItems((prev) => [
                prev[prev.length - 1],
                ...prev.slice(0, prev.length - 1),
            ]);
            setTranslateX((prevPosition) => prevPosition - slideWidth);
            setIsButtonDisabled(false);
        }, 300);
    };

    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX;
    };

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
        <div
            className="items relative flex h-full max-h-[442.4px] w-full max-w-[1133px] items-center justify-center overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <div className="absolute z-[2] flex w-full justify-between text-white">
                <ChevronLeftIcon
                    className="controlPrev hover:glow-white w-full max-w-16 cursor-pointer transition-all duration-150 hover:scale-110 opacity-50 hover:opacity-100"
                    onClick={handlePrevious}
                >
                    Previous
                </ChevronLeftIcon>
                <ChevronRightIcon
                    className="controlNext hover:glow-white w-full max-w-16 cursor-pointer transition-all duration-150 hover:scale-110 opacity-50 hover:opacity-100"
                    onClick={handleNext}
                >
                    Next
                </ChevronRightIcon>
            </div>
            <div
                ref={carouselRef}
                className={`carousel m-auto flex h-[443px] flex-nowrap md:w-[65%] ${isTransitioning ? "transition-all duration-300" : ""}`}
                style={{ transform: `translateX(${translateX}px)` }}
            >
                {items.map((slides) => (
                    <div
                        className="flex h-full w-full shrink-0 px-8"
                        key={slides}
                    >
                        <div className="relative h-full max-h-[442px] w-full max-w-[663px]">
                            <LazyLoadImage
                                src={slides}
                                className="h-full w-full select-none rounded-2xl object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div
                className={`pointer-events-none absolute left-0 top-0 z-[1] h-full w-full max-w-32 rounded-lg bg-gradient-to-r from-black/70 to-black/10 blur-lg transition-all duration-150 ${isButtonDisabled ? "opacity-5" : ""}`}
            ></div>
            <div
                className={`pointer-events-none absolute right-0 top-0 z-[1] h-full w-full max-w-32 rounded-lg bg-gradient-to-l from-black/70 to-black/10 blur-lg transition-all duration-150 ${isButtonDisabled ? "opacity-5" : ""}`}
            ></div>            
        </div>
    );
};
export default Carousel;
