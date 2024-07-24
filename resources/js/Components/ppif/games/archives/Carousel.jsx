import React, { useState, useRef, useEffect } from "react";

export default function Carousel({ children: slides }) {
    const [currentSlide, setCurrentSlide] = useState(2);
    const length = slides.length;

    const prev = () => {
        setCurrentSlide((currentSlide) =>
            (currentSlide - 1 + length) % length
        );
    };

    const next = () => {
        setCurrentSlide((currentSlide) =>
            (currentSlide + 1) % length
        );
    };

    return (
        <div className="carousel-container overflow-hidden relative rounded-xl w-full max-w-[1133px]">
            <div
                className="flex transition-transform ease-in-out duration-300 max-w-[662px] max-h-[445px] space-x-8 justify-start"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4 text-white">
                <button onClick={prev}>
                    <img src="/ppif/icons/Arrow.svg" width={30} alt="Previous" />
                </button>
                <button onClick={next}>
                    <img className="rotate-180" src="/ppif/icons/Arrow.svg" width={30} alt="Next" />
                </button>
            </div>
            <div className="absolute bottom-4 left-0 right-0">
                <div className="flex items-center justify-center gap-3">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`
                                transition-all w-full max-w-5 min-w-3 aspect-square rounded-full ${
                                    currentSlide === index ? "bg-white/100" : "bg-white/30 backdrop-blur-sm"
                                }`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
