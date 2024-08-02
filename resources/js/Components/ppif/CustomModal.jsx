import React from "react";

const Modal = ({
    title,
    children: content,
    isOpen,
    setIsOpen,
    setResponse,
}) => {
    const handleClick = () => {
        setIsOpen(false);
        setResponse(false);
    };

    return (
        <div
            id="modal-container"
            className={`absolute z-10 flex h-screen w-screen items-center justify-center backdrop-blur-md ${isOpen === false ? "hidden" : ""}`}
        >
            <button
                className="absolute right-5 top-5 lg:right-10 lg:top-10"
                onClick={handleClick}
            >
                <div className="relative h-12 w-12 rounded-full border-2 border-white/75 drop-shadow-[0px_0px_4px_rgba(255,255,255,0.75)] transition-all duration-500 hover:rotate-180">
                    <div className="absolute left-3 top-[21px] w-5 rotate-45 border"></div>
                    <div className="absolute left-3 top-[21px] w-5 -rotate-45 border"></div>
                </div>
            </button>
            <div
                className={`modal-box h-[333px] max-h-[665px] w-[350px] max-w-[770px] rounded-md bg-[#383838]/75 md:p-16 p-6 antialiased shadow-[0px_4px_4px_rgba(255,255,255,0.3)] backdrop-blur-sm transition-all duration-500 md:h-full md:w-full md:rounded-2xl ${isOpen === false ? "hidden" : ""}`}
            >
                <h1 className="text-center text-3xl font-semibold tracking-wide text-white md:text-6xl">
                    {title}
                </h1>
                {content}
            </div>
        </div>
    );
};

export default Modal;
