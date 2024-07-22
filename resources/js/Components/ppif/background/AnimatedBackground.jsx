import React from "react";

export default function AnimatedBackground() {
    return (
        <div className="main-background absolute w-full overflow-hidden">
            <div className="relative h-screen">
                <div className="bg-ball left-1/2 top-0 bg-[var(--ppif-orange)] [transform:translate(-50%,0)]"></div>
                <div className="bg-ball left-1/2 top-0 bg-[var(--ppif-orange)] [transform:translate(-50%,0)]"></div>
                <div className="bg-ball -bottom-[10%] left-[30%] origin-left bg-[var(--ppif-pink)] [transform:translate(-50%,0%)]"></div>
                <div className="bg-ball -bottom-[10%] left-[30%] origin-left bg-[var(--ppif-pink)] [transform:translate(-50%,0%)]"></div>
                <div className="bg-ball -bottom-[30%] left-[70%] origin-right bg-[var(--ppif-blue)] [transform:translate(-50%,0%)]"></div>
                <div className="bg-ball -bottom-[30%] left-[70%] origin-right bg-[var(--ppif-blue)] [transform:translate(-50%,0%)]"></div>
                {/* <img
                    className="min-w h-screen object-cover xl:w-full xl:object-fill"
                    src="/ppif/images/background/section1.png"
                /> */}
            </div>
            <div className="relative h-screen">
                <div className="bg-ball left-[70%] top-0 z-0 bg-[var(--ppif-orange)] [transform:translate(-50%,0)]"></div>
                <img
                    className="mask-bg absolute left-0 object-cover opacity-80 xl:object-fill"
                    src="/ppif/images/background/umn-bg.png"
                    alt="Gedung UMN"
                />
                {/* <img
                    className="min-w h-screen object-cover xl:w-full xl:object-fill"
                    src="/ppif/images/background/section2.png"
                /> */}
            </div>
            <div className="relative h-screen">
                <div className="bg-ball -top-[10%] right-0 bg-[var(--ppif-pink)]"></div>
                <div className="bg-ball -bottom-[10%] left-0 origin-bottom bg-[var(--ppif-pink)]"></div>
                {/* <img
                    className="h-screen object-cover xl:w-full xl:object-fill"
                    src="/ppif/images/background/section3.png"
                /> */}
            </div>
            <div className="relative h-screen">
                <div className="bg-ball -left-[20%] -top-[10%] origin-right bg-[var(--ppif-orange)] opacity-60"></div>
                <div className="bg-ball -top-[20%] right-[10%] origin-left bg-[var(--ppif-orange)]"></div>
                <div className="bg-ball bottom-0 right-0 origin-top-left bg-[var(--ppif-blue)] opacity-40"></div>
                {/* <img
                    className="h-screen object-cover xl:w-full xl:object-fill"
                    src="/ppif/images/background/section4.png"
                /> */}
            </div>
            {/* section 5 */}
            <div className="relative h-screen">
                <div className="bg-ball -bottom-[70%] left-1/2 h-[900px] w-[900px] animate-none bg-[var(--ppif-blue)] opacity-90 [transform:translate(-50%,0)] md:h-[1000px] md:w-[1000px]"></div>
                {/* <img
                    className="h-screen object-cover xl:w-full xl:object-fill"
                    src="/ppif/images/background/section5.png"
                /> */}
            </div>
        </div>
    );
}
