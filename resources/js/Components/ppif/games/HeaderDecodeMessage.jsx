import React from "react";

function HeaderDecodeMessage({ image, text }) {
    return (
        <div className="glow-white flex flex-col items-center justify-center rounded-lg bg-white/20 p-2 backdrop-blur-lg">
            <div className="py-4 md:h-[500px] md:w-[1000px] md:rounded-[25px]">
                <div className="relative flex items-center justify-center md:w-[1000px]">
                    <img src={image} className="md:w-[800px]" />
                    <div className="absolute text-6xl leading-snug text-white antialiased">
                        <pre>{text}</pre>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderDecodeMessage;
