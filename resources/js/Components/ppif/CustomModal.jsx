import React, { useState } from "react";

const Modal = ({ title, children: content, isOpen }) => {
    return (
        <div
            className={`absolute z-10 flex h-screen w-screen items-center justify-center backdrop-blur-md ${isOpen === false ? "hidden" : ""}`}
        >
            <div className={`modal-box z-50 h-full max-h-[665px] w-full max-w-[770px] rounded-2xl bg-[#383838]/75 p-16 antialiased shadow-[0px_4px_4px_rgba(255,255,255,0.3)] backdrop-blur-sm transition-all duration-500 ${isOpen === false ? "hidden" : ""}`}>
                <h1 className="tracking-wide text-center text-6xl text-white font-semibold">{title}</h1>
                {content}
            </div>
        </div>
    );
};

export default Modal;
