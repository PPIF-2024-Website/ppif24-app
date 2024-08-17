import React from "react";
import { Link, Head } from "@inertiajs/react";
import ArchivesBackground from "@/Components/ppif/background/archives-background/ArchivesBackground";
import TransitionedPage from "@/Components/ppif/TransitionedPage";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import "@/Components/ppif/games/games.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

function Page() {
    const story = `
        Oblivion telah mengambil alih peran manusia di Cyber City akibat kecerdasan buatan yang melebihi kecerdasan manusia. Oblivion merupakan AI yang dibuat oleh salah satu ilmuan di Cyber City. Namun, ketergantungan manusia terhadap Oblivion membuat Oblivion menyalahgunakan kecerdasannya sehingga Oblivion memberontak terhadap manusia dan mulai mengacaukan Cyber City.
        Kalian, sebagai tim penerus Cyber City, diberi tugas untuk menghentikan Oblivion. Banyak tim yang sudah diutus oleh pemerintah Cyber City, namun hanya sedikit yang berhasil melewati semua tantangan. Oleh karena itu, kalian harus menyelesaikan misi pertama kalian dengan memecahkan teka-teki yang nantinya akan menjadi nama kelompok kalian.
        Selamat berjuang, Cyber Team!
    `;

    return (
        <>
            <Head title="Story" />
            <ArchivesBackground />

            <main className="flex h-screen w-screen flex-col items-center justify-center space-y-8 overflow-hidden px-8 text-white sm:px-12 md:px-24">
                <div className="relative flex flex-col items-center justify-center space-y-6 rounded-3xl">
                    {/* TITLE */}
                    <div className="glow-pink absolute left-1/2 top-0 -z-[2] select-none bg-gradient-to-tr from-ppif-pink to-transparent bg-clip-text text-3xl font-black italic tracking-tighter text-transparent [transform:translate(-50%,0)] min-[340px]:-top-[12px] min-[340px]:text-5xl min-[440px]:-top-[30px] min-[440px]:text-7xl sm:-top-[50px] sm:text-8xl">
                        STORY
                    </div>

                    {/* IMAGE */}
                    <div className="glowing-border relative w-full select-none md:w-[650px]">
                        <LazyLoadImage
                            src="/ppif/images/games/story.png"
                            alt="Story Image"
                            className="mask-ends h-full w-full animate-[image-pulse_5s_ease-in-out_infinite]"
                            effect="opacity"
                            wrapperProps={{
                                style: { transitionDelay: "0.5s" },
                            }}
                        />

                        {/* CONTINUE BUTTON */}
                        <Link
                            as="button"
                            href="/game/archives"
                            className="glow-white group absolute right-0 top-1/2 flex cursor-pointer items-center space-x-2 rounded-l-2xl bg-gradient-to-r from-white/10 to-transparent px-2 py-1 backdrop-blur-md [transform:translate(0,-50%)] sm:px-4 sm:py-2"
                        >
                            <ArrowRightCircleIcon className="smooth w-6 opacity-60 group-hover:-rotate-90 group-hover:opacity-100 min-[400px]:w-8 sm:w-12 [&>path]:stroke-[0.8]" />
                            <div className="smooth text-body uppercase tracking-wide opacity-60 group-hover:tracking-[0.25em] group-hover:opacity-100">
                                Continue
                            </div>
                        </Link>
                    </div>

                    {/* STORY TEXT */}
                    <div className="text-body glow-white w-full bg-gradient-to-bl from-white to-white/40 bg-clip-text text-justify font-bold text-transparent md:text-center lg:w-3/4 xl:w-1/2">
                        {story}
                    </div>
                </div>
            </main>
        </>
    );
}

export default function GameStory() {
    return <TransitionedPage Page={Page} />;
}
