import React, { useEffect } from "react";
import "./AboutIF.css";
import {
    LazyLoadImage,
    trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImageContainer = ({ srcIndex, fullWidth }) => (
    <div className={`p-1 md:p-2 ${fullWidth ? "w-full" : "w-1/2"} select-none`}>
        <div className="block h-full w-full overflow-hidden rounded-lg bg-white/10">
            <LazyLoadImage
                src={`/ppif/images/activities/${srcIndex}.webp`}
                alt={`Foto Dokumentasi Kegiatan Informatika ${srcIndex}`}
                className="h-full w-full object-cover object-center"
                delayTime="100"
                fetchpriority="low"
                effect="blur"
                wrapperProps={{
                    style: { transitionDelay: "1s" },
                }}
            />
        </div>
    </div>
);

function AboutIF({ id }) {
    const TextContent = () => (
        <span>
            <strong className="font-bold">Informatika</strong> adalah bidang
            ilmu yang menggabungkan teknologi dan pemrograman untuk memecahkan
            masalah melalui pengolahan informasi dan data. Di jurusan ini, kamu
            akan belajar bagaimana mengembangkan perangkat lunak, memahami
            algoritma, dan merancang sistem yang inovatif untuk kebutuhan di
            berbagai sektor, mulai dari bisnis hingga kesehatan. Di era digital
            ini, Informatika menjadi semakin penting karena hampir setiap aspek
            kehidupan kita terhubung dengan teknologi. Di Universitas Multimedia
            Nusantara, kamu akan mendapatkan banyak dukungan untuk belajar
            informatika, termasuk fasilitas modern dan acara seperti codeXpo,
            yang memberikan pengalaman langsung dan memperluas wawasan dalam
            dunia teknologi. Bagi kamu yang tertarik dengan dunia teknologi,
            kreativitas, dan ingin menjadi bagian dari revolusi digital, jurusan
            informatika di UMN adalah pilihan yang tepat.
        </span>
    );

    useEffect(() => {
        const updateViewBox = () => {
            const mySVG = document.getElementById("svg");
            if (mySVG) {
                if (window.innerWidth >= 1536) {
                    mySVG.setAttribute("viewBox", "0 0 1500 620");
                } else if (window.innerWidth >= 1280) {
                    mySVG.setAttribute("viewBox", "0 0 1500 800");
                } else if (window.innerWidth >= 1024) {
                    mySVG.setAttribute("viewBox", "0 0 1500 1250");
                }
            }
        };

        updateViewBox();
        window.addEventListener("resize", updateViewBox);

        return () => {
            window.removeEventListener("resize", updateViewBox);
        };
    }, []);

    return (
        <>
            <div
                className="relative mx-auto flex min-h-screen items-center justify-center overflow-hidden py-12 sm:w-[460px] md:w-[640px] lg:w-[844px] xl:w-[1100px] 2xl:w-[1400px]"
                id={id}
            >
                <div id="main">
                    <div className="absolute hidden w-11/12 lg:block lg:w-2/5">
                        <img
                            className="glow-orange w-full"
                            src="/ppif/images/orangebackground.png"
                        />

                        <div className="absolute inset-0 flex w-11/12 items-center justify-center">
                            <h1
                                id="informatika"
                                className="text-center text-4xl font-semibold text-white md:text-6xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
                            >
                                INFORMATIKA
                            </h1>
                        </div>
                    </div>

                    <div
                        className="relative block w-full lg:hidden"
                        id="parentofsquare2"
                    >
                        <div
                            className="glow-orange relative inset-0 flex w-full items-center justify-center rounded-lg"
                            id="square2"
                        >
                            <h1
                                id="informatika"
                                className="text-center text-xl font-semibold text-white md:text-6xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
                            >
                                INFORMATIKA
                            </h1>
                        </div>
                    </div>

                    <div
                        className="container mx-auto hidden h-[550px] rounded-sm p-8 lg:block"
                        id="polygon"
                    >
                        <div className="relative m-0 flex items-center justify-center p-0">
                            <svg
                                className="absolute inset-0 -z-10 hidden backdrop-blur-md lg:flex"
                                viewBox="0 0 1500 750"
                                preserveAspectRatio="none"
                                id="svg"
                            >
                                <defs>
                                    <mask
                                        id="mask"
                                        x="0"
                                        y="0"
                                        width="100%"
                                        height="100%"
                                    >
                                        <rect
                                            x="0"
                                            y="0"
                                            width="100%"
                                            height="100%"
                                            fill="white"
                                        />
                                        <path
                                            d="M 0 0 V 130 Q 0 115 15 115 H 510 q 10 0 25 -15 l 85 -85 q 15 -15 30 -15 Z"
                                            fill="black"
                                        />
                                    </mask>
                                </defs>

                                <rect
                                    x="0"
                                    y="0"
                                    width="100%"
                                    height="100%"
                                    mask="url(#mask)"
                                    fill="rgba(255, 255, 255, 0.1)"
                                />
                            </svg>
                        </div>
                        <div
                            className="flex flex-col lg:flex-row"
                            id="polygoncontent"
                        >
                            <div
                                className="p-4 lg:mt-0 lg:w-2/5 lg:pl-6 lg:pt-[50px] xl:pl-7 xl:pt-[70px] 2xl:pl-7 2xl:pt-[100px]"
                                id="paragraph"
                            >
                                <p
                                    className="mb-4 font-light text-white"
                                    id="text"
                                >
                                    <TextContent />
                                </p>
                            </div>
                            <div
                                className="mt-3 flex w-[60%] flex-wrap overflow-y-scroll pl-6 lg:h-[530px] xl:h-[520px] 2xl:h-[550px]"
                                id="images"
                            >
                                <div className="flex flex-wrap md:w-1/2">
                                    <ImageContainer
                                        srcIndex={7}
                                        fullWidth={false}
                                    />
                                    <ImageContainer
                                        srcIndex={13}
                                        fullWidth={false}
                                    />
                                    <ImageContainer
                                        srcIndex={9}
                                        fullWidth={true}
                                    />
                                </div>
                                <div className="flex flex-wrap md:w-1/2">
                                    <ImageContainer
                                        srcIndex={15}
                                        fullWidth={true}
                                    />
                                    <ImageContainer
                                        srcIndex={10}
                                        fullWidth={false}
                                    />
                                    <ImageContainer
                                        srcIndex={5}
                                        fullWidth={false}
                                    />
                                </div>
                                <div className="flex flex-wrap md:w-1/2">
                                    <ImageContainer
                                        srcIndex={3}
                                        fullWidth={true}
                                    />
                                    <ImageContainer
                                        srcIndex={6}
                                        fullWidth={false}
                                    />
                                    <ImageContainer
                                        srcIndex={17}
                                        fullWidth={false}
                                    />
                                </div>
                                <div className="flex flex-wrap md:w-1/2">
                                    <ImageContainer
                                        srcIndex={8}
                                        fullWidth={false}
                                    />
                                    <ImageContainer
                                        srcIndex={16}
                                        fullWidth={false}
                                    />
                                    <ImageContainer
                                        srcIndex={12}
                                        fullWidth={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="container mx-auto block rounded-lg p-8 backdrop-blur-md lg:hidden"
                        id="polygon2"
                    >
                        <div className="flex flex-col lg:flex-row">
                            <div className="px-8" id="paragraph2">
                                <p
                                    className="text-body font-light text-white"
                                    id="text"
                                >
                                    <TextContent />
                                </p>
                            </div>
                            <div
                                className="flex h-[300px] w-[60%] flex-wrap overflow-y-scroll p-1 pl-6 pt-0"
                                id="images"
                            >
                                <div className="flex flex-wrap md:w-1/2">
                                    <ImageContainer
                                        srcIndex={7}
                                        fullWidth={false}
                                    />
                                    <ImageContainer
                                        srcIndex={13}
                                        fullWidth={false}
                                    />
                                    <ImageContainer
                                        srcIndex={9}
                                        fullWidth={true}
                                    />
                                </div>
                                <div className="flex flex-wrap md:w-1/2">
                                    <ImageContainer
                                        srcIndex={15}
                                        fullWidth={true}
                                    />
                                    <ImageContainer
                                        srcIndex={10}
                                        fullWidth={false}
                                    />
                                    <ImageContainer
                                        srcIndex={5}
                                        fullWidth={false}
                                    />
                                </div>
                                <div className="flex flex-wrap md:w-1/2">
                                    <ImageContainer
                                        srcIndex={3}
                                        fullWidth={true}
                                    />
                                    <ImageContainer
                                        srcIndex={6}
                                        fullWidth={false}
                                    />
                                    <ImageContainer
                                        srcIndex={17}
                                        fullWidth={false}
                                    />
                                </div>
                                <div className="flex flex-wrap md:w-1/2">
                                    <ImageContainer
                                        srcIndex={8}
                                        fullWidth={false}
                                    />
                                    <ImageContainer
                                        srcIndex={16}
                                        fullWidth={false}
                                    />
                                    <ImageContainer
                                        srcIndex={12}
                                        fullWidth={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default trackWindowScroll(AboutIF);
