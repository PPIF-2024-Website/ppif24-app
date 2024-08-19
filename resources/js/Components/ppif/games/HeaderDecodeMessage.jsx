import React from "react";

function HeaderDecodeMessage({ image, text }) {
    return (
        <div className="relative flex w-full max-w-[1000px] flex-col items-center justify-center overflow-hidden rounded-xl p-4">
            <img
                src={image}
                className="h-auto w-full max-w-[800px] object-cover"
                role="presentation"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <pre className="glow-white bg-gradient-to-tr from-white to-white/40 bg-clip-text text-2xl text-transparent sm:text-3xl md:text-5xl lg:text-6xl">
                    {text}
                </pre>
            </div>
        </div>
    );
}

export default HeaderDecodeMessage;
