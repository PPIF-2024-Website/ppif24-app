import React from "react";
import Background from "@/Components/ppif/background/Background";

function BackgroundTest() {
    return (
        <>
            <Background />
            <div className="z-1 relative flex h-screen items-center justify-center border-2 border-green-500 text-green-500">
                Landing
            </div>
            <div className="z-1 relative flex h-screen items-center justify-center border-2 border-green-500 text-green-500">
                Home Section
            </div>
            <div className="z-1 relative flex h-screen items-center justify-center border-2 border-green-500 text-green-500">
                About PPIF
            </div>
            <div className="z-1 relative flex h-screen items-center justify-center border-2 border-green-500 text-green-500">
                Time Line
            </div>
            <div className="z-1 relative flex h-screen items-center justify-center border-2 border-green-500 text-green-500">
                Contact Us
            </div>
        </>
    );
}

export default BackgroundTest;
