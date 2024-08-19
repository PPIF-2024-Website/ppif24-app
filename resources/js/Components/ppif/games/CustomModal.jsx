import React from "react";
import { CSSTransition } from "react-transition-group";
import "@/Components/ppif/games/games.css";

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
            className={`smooth fixed z-10 flex h-screen w-screen items-center justify-center ${isOpen ? "bg-black/10 opacity-100 backdrop-blur-md" : "pointer-events-none opacity-0"}`}
        >
            <CSSTransition
                in={isOpen}
                classNames="continue"
                timeout={300}
                unmountOnExit
            >
                <div className="smooth flex h-[60%] w-[90%] flex-col items-center justify-center rounded-3xl bg-black/70 px-10 py-16 min-[500px]:p-16 sm:w-[80%] xl:w-[60%]">
                    <h1 className="glow-white text-heading text-center font-semibold tracking-wide text-white">
                        {title}
                    </h1>
                    {content}
                </div>
            </CSSTransition>

            <button
                className="absolute right-5 top-5 lg:right-10 lg:top-10"
                onClick={handleClick}
            >
                <div className="relative h-12 w-12 rounded-full border-2 border-white/75 drop-shadow-[0px_0px_4px_rgba(255,255,255,0.75)] transition-all duration-500 hover:rotate-180">
                    <div className="absolute left-3 top-[21px] w-5 rotate-45 border"></div>
                    <div className="absolute left-3 top-[21px] w-5 -rotate-45 border"></div>
                </div>
            </button>
        </div>
    );
};

export default Modal;
