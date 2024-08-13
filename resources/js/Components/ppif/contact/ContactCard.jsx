import React from "react";

const ContactCard = ({ LogoComponent, title, buttonText, buttonLink }) => {
    return (
        <div className="flex w-full items-center space-x-8 rounded-lg bg-white/10 p-8 md:h-[400px] md:flex-col md:justify-center md:space-x-0 md:space-y-8">
            {/* LOGO */}
            <div className="md:h-[150px]">
                <LogoComponent className="glow-white w-[75px] shrink-0 sm:w-[100px] lg:w-[125px] xl:w-[150px]" />
            </div>

            <div className="flex flex-col space-y-3 md:text-center">
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
