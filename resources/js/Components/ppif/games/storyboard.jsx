import React from "react";

function Storyboard(props) {
    return (
        <div className="box-glow-white flex max-h-[714px] w-full max-w-[1230px] flex-col items-center justify-center bg-white/20 p-6 backdrop-blur-sm sm:h-full sm:rounded-3xl">
            <img
                src={props.image}
                alt="story_image"
                className="max-h-[533px] w-full max-w-[948px] rounded-xl"
            />
            <p className="md:text-body mt-4 text-justify text-lg tracking-tight text-white md:tracking-normal lg:px-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
}

export default Storyboard;
