import React from "react";
import ImageCarousel from "./ImageCarousel";
import "./AboutPPIF.css";

export default function AboutPPIF({ id }) {
    const TextContent = () => (
        <span>
            <strong className="font-bold">Perkenalan Prodi Informatika</strong>{" "}
            merupakan bagian dari kegiatan Orientasi Mahasiswa Baru Universitas
            Multimedia Nusantara yang diselenggarakan oleh Himpunan Mahasiswa
            Informatika setiap tahunnya pada awal tahun ajar perkuliahan. Pada
            tahun ini, Perkenalan Prodi Informatika 2024 mengusung tema{" "}
            <i>Express Yourself with Technology</i> yang menggambarkan mahasiswa
            Informatika sebagai peserta Perkenalan Prodi Informatika 2024 dapat
            mengeksplorasi dan mengekspresikan kemampuan diri di dalam Program
            Studi Informatika, serta mengeksekusi hal tersebut agar menjadi
            pribadi yang aktif, kreatif, dan inovatif.
        </span>
    );

    return (
        <section
            id={id}
            className="flex h-screen w-full flex-col items-center justify-center p-8 text-white md:p-12"
        >
            {/* TEXT CONTENT */}
            <div className="mb-14 flex flex-col items-center justify-center text-center">
                {/* TITLE */}
                <h1 className="text-heading mb-6">
                    <span className="glow-white">About</span>{" "}
                    <span className="glow-pink font-extrabold italic text-[var(--ppif-pink)]">
                        PPIF
                    </span>
                </h1>

                {/* BODY */}
                <div className="text-body z-[1] text-justify font-light !leading-relaxed sm:w-[70%] lg:text-center">
                    <TextContent />
                </div>
            </div>

            {/* CAROUSEL */}
            <ImageCarousel
                imageUrls={Array.from({ length: 10 }, (_, i) => ({
                    src: `/ppif/images/about-ppif/${i + 1}.webp`,
                    placeholderSrc: `/ppif/images/about-ppif/${i + 1}-placeholder.webp`,
                }))}
            />
        </section>
    );
}
