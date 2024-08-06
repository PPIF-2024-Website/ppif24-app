import React from "react";

function HeaderDecodeMessage({ image, text }) {
    return (
        <div className="glow-white flex flex-col items-center justify-center rounded-lg p-4 backdrop-blur-lg">
            <div className="w-full max-w-[1000px] md:rounded-[25px]">
                <div className="relative flex items-center justify-center">
                    <img
                        src={image}
                        className="h-auto w-full max-w-[800px] object-cover"
                        alt="Header image"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <pre className="text-2xl text-white sm:text-3xl md:text-5xl lg:text-6xl">
                            {text}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderDecodeMessage;
