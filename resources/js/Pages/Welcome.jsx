import { Head } from "@inertiajs/react";
import AnimatedBackground from "@/Components/ppif/background/AnimatedBackground";
import Navbar from "@/Components/ppif/navbar-footer/Navbar";
import Landing from "@/Components/ppif/landing/Landing";
import AboutIF from "@/Components/ppif/about-if/AboutIF";
import AboutPPIF from "@/Components/ppif/about-ppif/AboutPPIF";
import Timeline from "@/Components/ppif/timeline/Timeline";
import Contact from "@/Components/ppif/contact/Contact";
import TransitionedPage from "@/Components/ppif/TransitionedPage";
import Background from "@/Components/ppif/background/Background";
import Footer from "@/Components/ppif/navbar-footer/Footer";

function Page() {
    return (
        <>
            <div className="relative h-fit w-screen overflow-clip">
                <Head title="Home" />
                <AnimatedBackground />
                {/* <Background /> */}
                <Navbar />
                <Landing id={"home"} />
                <AboutIF id={"about-if"} />
                <AboutPPIF id={"about-ppif"} />
                <Timeline id={"timeline"} />
                <Contact id={"contact"} />
                <Footer />
                <div className="absolute bottom-0 -z-10 w-screen">
                    <div className="bg-ball absolute -bottom-[70vh] left-1/2 h-[900px] w-[900px] animate-none bg-[var(--ppif-blue)] opacity-90 [transform:translate(-50%,0)] md:h-[1000px] md:w-[1000px]"></div>
                </div>
            </div>
        </>
    );
}

export default function Welcome() {
    return <TransitionedPage Page={Page} />;
}
