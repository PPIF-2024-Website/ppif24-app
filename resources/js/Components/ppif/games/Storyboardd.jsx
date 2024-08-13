import React from "react";

function Storyboard({ image }) {
    const story = ` 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
    `;

    return (
        <div className="flex flex-col items-center justify-center space-y-6 rounded-3xl bg-white/10 py-16">
            <img
                src={image}
                alt="Story Image"
                className="w-[450px] rounded-2xl"
            />
            <div className="text-body glow-white w-3/4 bg-gradient-to-bl from-white to-white/30 bg-clip-text text-center font-semibold text-transparent">
                {story}
            </div>
        </div>
    );
}

export default Storyboard;
