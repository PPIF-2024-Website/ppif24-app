import React from "react";

function Footer() {
    const toGamePage = () => {
        window.location.href = "/gameLanding";
    };

    return (
        <div className="relative min-h-screen">

            <div className="absolute inset-0 bg-[url('/ppif/images/bg.png')] bg-cover bg-center"></div>

            <div className="fixed bottom-0 w-full h-auto bg-white bg-opacity-[50%] lg:bg-[#898085] lg:bg-opacity-100 py-5 before:absolute before:top-0 before:left-0 before:w-full before:h-3 before:bg-gradient-to-r before:from-[#8091ce] before:via-[#8091ce] before:to-[#8091ce] before:opacity-30">
                <div className="container mx-auto flex flex-col items-center justify-between lg:flex-row">
                    <div className="mb-2 flex flex-col items-center justify-center lg:mb-0 lg:ml-6">
                        <img
                            src="/ppif/images/Logo_UMN_PPIF.png"
                            alt="logo UMN X PPIF"
                            className="lg:w-4/4 w-3/4 mb-5 mt-4 px-7 lg:scale-125 lg:transform lg:pb-4"
                        />
                        <h2 className="text-center text-[3.3vw] font-bold text-[#000000] lg:ml-6 lg:text-base">
                            © 2024 Perkenalan Prodi Informatika UMN
                        </h2>
                    </div>
                    <img
                        src="/ppif/icons/Game_icon.png"
                        alt="Navigate to Game Page"
                        onClick={toGamePage}
                        className="w-14 cursor-pointer lg:mr-8 lg:w-auto"
                    />
                </div>
            </div>
        </div>
    );
}

export default Footer;
