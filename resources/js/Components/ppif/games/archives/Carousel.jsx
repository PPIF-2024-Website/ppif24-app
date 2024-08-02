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
        setItems([...slides.slice(-1), ...slides, ...slides.slice(0, 1)]);
        setTranslateX(-slideWidth);
    }, [slideWidth]);

    const handleNext = () => {
        if (isButtonDisabled) return;

        setIsButtonDisabled(true);
        setIsTransitioning(true);
        setTranslateX((prevPosition) => prevPosition - slideWidth);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);

        setTimeout(() => {
            setIsTransitioning(false);
            if (currentIndex === slides.length - 1) {
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
            (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
        );

        setTimeout(() => {
            setIsTransitioning(false);
            if (currentIndex === 0) {
                setTranslateX(-slideWidth * slides.length);
            }
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
            {/* CONTROL BUTTON */}
            <div className="absolute z-[2] flex w-full justify-between text-white">
                <ChevronLeftIcon
                    className="controlPrev hover:glow-white w-full max-w-8 cursor-pointer opacity-50 transition-all duration-150 hover:scale-110 hover:opacity-100 sm:max-w-16"
                    onClick={handlePrevious}
                >
                    Previous
                </ChevronLeftIcon>
                <ChevronRightIcon
                    className="controlNext hover:glow-white w-full max-w-8 cursor-pointer opacity-50 transition-all duration-150 hover:scale-110 hover:opacity-100 sm:max-w-16"
                    onClick={handleNext}
                >
                    Next
                </ChevronRightIcon>
            </div>

            {/* CAROUSEL */}
            <div
                ref={carouselRef}
                className={`carousel m-auto flex h-full max-h-[443px] w-[65%] flex-nowrap ${
                    isTransitioning ? "transition-all duration-300" : ""
                }`}
                style={{ transform: `translateX(${translateX}px)` }}
            >
                {items.map((slide, index) => (
                    <div
                        className="flex h-full w-full shrink-0 px-2 md:px-8"
                        key={`${slide}-${index}`}
                    >
                        <div className="relative flex h-full max-h-[442px] w-full max-w-[663px] items-center">
                            <LazyLoadImage
                                src={slide}
                                className="aspect-[3/2] select-none rounded-md object-cover sm:rounded-lg md:h-full md:w-full lg:rounded-2xl"
                            />
                            <span className="absolute inset-0 flex items-center overflow-y-auto p-2 text-center text-sm text-white sm:p-10 sm:text-lg">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illum quam voluptatem soluta
                                animi sapiente modi suscipit esse natus amet
                                cumque.
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Carousel;
