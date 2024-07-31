import React from "react";
import ContactCard from "./ContactCard";

function Contact({ id }) {
    return (
        <div
            id={id}
            className="flex h-screen w-full flex-col items-center justify-center p-6 text-white md:p-12"
        >
            <div className="text-heading mb-8 text-center">
                <span className="glow-blue font-extrabold italic text-ppif-blue">
                    CONTACT
                </span>{" "}
                <span className="glow-white font-light">Us</span>
            </div>

            <div className="flex h-[500px] w-full items-center space-x-12 rounded-xl bg-white/15 p-12 md:w-3/4">
                <ContactCard
                    imageSrc="/ppif/images/ig.svg"
                    altText="Instagram"
                    title="PPIF UMN"
                    buttonText="Follow Our Instagram"
                    buttonLink="https://www.instagram.com/ppif.umn/"
                />
                <ContactCard
                    imageSrc="/ppif/images/line.svg"
                    altText="LINE"
                    title="PPIF UMN 2024"
                    buttonText="Join LINE GROUP"
                    buttonLink="https://line.me/ti/g2/..."
                />
                <ContactCard
                    imageSrc="/ppif/images/discord.svg"
                    altText="Discord"
                    title="Informatika UMN"
                    buttonText="Join Discord Server"
                    buttonLink="https://discord.gg/......"
                />
            </div>
        </div>
    );
}

export default Contact;
