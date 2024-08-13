import React from "react";
import "./ArchiveBg.css";
import "@/Components/ppif/background/AnimatedBackground.css";

export default function ArchivesBackground() {
    return (
        <div className="bg-container1 -z-10">
            <div className="bg-container2">
                <div className="bg-color1 origin-bottom"></div>
                <div className="bg-color2 origin-right"></div>
                <div className="bg-color3 origin-top"></div>
                <div className="bg-color1 origin-bottom"></div>
                <div className="bg-color2 origin-right"></div>
                <div className="bg-color3 origin-top"></div>
            </div>
        </div>
    );
}
