import React from "react";
import DecodeForm from "@/Components/ppif/games/DecodeMessage";
import HeaderDecodeMessage from "@/Components/ppif/games/HeaderDecodeMessage";

function TesGamePage() {
    return (
        <div className="h-screen w-screen bg-black">
            <div className="flex h-screen flex-col items-center justify-center">
                <h1 className="py-4 text-center text-[36px] font-bold italic text-white md:text-[30px]">
                    DECODE THE MESSAGE
                </h1>
                <HeaderDecodeMessage image="/ppif/images/decodeBackgroundDummy.png" />

                <DecodeForm
                    token="ozk9gbT824"
                    folder_image="/ppif/images/folderImage.png"
                />
            </div>
        </div>
    );
}

export default TesGamePage;
