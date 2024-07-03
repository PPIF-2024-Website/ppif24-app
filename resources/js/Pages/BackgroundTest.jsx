import React from "react";
import Background from "@/Components/ppif/background/Background";

function BackgroundTest() {
    return (
        <>
            <Background />
            <div className="z-1 border-1 relative flex h-screen items-center justify-center border-white text-white">
                Landing
            </div>
            <div className="z-1 relative flex h-screen items-center justify-center text-white">
                Home Section
            </div>
            <div className="z-1 relative flex h-screen items-center justify-center text-white">
                About PPIF
            </div>
            <div className="z-1 relative flex h-screen items-center justify-center text-white">
                Time Line
            </div>
            <div className="z-1 relative flex h-screen items-center justify-center text-white">
                Contact Us
            </div>
        </>
    );
}

export default BackgroundTest;
