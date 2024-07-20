// ContactCard.jsx

import React from "react";

const ContactCard = ({ imageSrc, altText, title, buttonText, buttonLink }) => {
    return (
        <div className="flex flex-col items-center justify-center rounded-lg bg-white bg-opacity-10 p-2 pb-6 pt-6 shadow-lg lg:flex-col lg:p-6">
            <div className="grid w-full grid-cols-2 items-center lg:grid-cols-1">
                <div className="flex items-center justify-center">
                    <img
                        src={imageSrc}
                        alt={altText}
                        className="lg:h-[120px] h-[80px] w-auto object-cover drop-shadow-[0_10px_10px_rgba(255,255,255,0.5)]"
                    />
                </div>
                <div className="flex flex-col items-start justify-center lg:items-center">
                    <h2 className="text-[18px] lg:mt-[3vw] lg:text-2xl lg:text-[22px]">
                        {title}
                    </h2>
                    <button
                        className="mt-2 rounded-lg bg-white bg-opacity-10 px-4 py-1 text-[12px] shadow-lg transition-opacity duration-300 hover:bg-black hover:bg-opacity-35 hover:shadow-md hover:shadow-white lg:mt-4 lg:text-[15px] lg:text-lg"
                        onClick={() => (window.location.href = buttonLink)}
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
