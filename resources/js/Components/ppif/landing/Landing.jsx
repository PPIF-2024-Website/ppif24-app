import { useGlitch } from "react-powerglitch";

export default function Landing({ id }) {
    const glitch = useGlitch();
    return (
        <div
            id={id}
            className="flex h-screen w-full items-end justify-center bg-black"
        >
            <div className="absolute flex h-screen w-full items-center justify-center">
                <img
                    ref={glitch.ref}
                    className="max-w-32 lg:w-full"
                    src="/ppif/images/logo-ppif.png"
                    alt="ppif"
                />
            </div>
            <a
                href="#AboutIF"
                className="absolute mb-12 flex cursor-pointer flex-col items-center space-y-6 text-white"
            >
                <p className="hidden xl:block">click to scroll down</p>
                <p className="xl:hidden">touch to scroll down</p>
                <img
                    className="animate-bounce"
                    src="/ppif/icons/arrow-down.svg"
                    alt="arrow-down"
                />
            </a>
        </div>
    );
}
