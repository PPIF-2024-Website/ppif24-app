import React from "react";

function HeaderDecodeMessage({ image, text }) {
    return (
        <div className="glow-white flex flex-col items-center justify-center rounded-lg backdrop-blur-lg">
            <div className="h-max-[500px] w-max-[1000px] md:rounded-[25px]">
                <div className="relative flex items-center justify-center md:w-[1000px]">
                    <img src={image} className="w-max-[800px]" />
                    <div className="absolute text-4xl leading-snug text-white antialiased md:text-6xl">
                        <pre>{text}</pre>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderDecodeMessage;
