import React from "react";

const ContactCard = ({ imageSrc, altText, title, buttonText, buttonLink }) => {
    return (
        <div className="flex h-[400px] w-full flex-col items-center justify-center rounded-lg bg-white/10">
            {/* IMAGE */}
            <div className="flex h-[200px] items-center justify-center">
                <img src={imageSrc} alt={altText} className="glow-white" />
            </div>

            <div className="flex flex-col space-y-2 text-center">
                {/* TITLE */}
                <h2 className="text-subheading">{title}</h2>

                {/* LINK */}
                <a
                    className="text-footer smooth rounded-lg bg-white bg-opacity-10 px-4 py-1 uppercase tracking-widest hover:bg-black hover:bg-opacity-35"
                    href={buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {buttonText}
                </a>
            </div>
        </div>
    );
};

export default ContactCard;
