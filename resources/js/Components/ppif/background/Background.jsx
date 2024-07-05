import React from "react";

function Background() {
    return (
        <div className="absolute w-full overflow-x-hidden bg-black">
            <div className="h-screen"></div>
            <div className="h-screen"></div>
            <div className="h-screen"></div>
            <div className="h-screen"></div>
            <div className="h-screen">
                <img
                    className="absolute bottom-0 right-0 h-screen w-full"
                    src="/ppif/images/background/Vector-14.svg"
                />
            </div>
        </div>
    );
}

export default Background;
