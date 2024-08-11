import { Head } from "@inertiajs/react";
import Navbar from "@/Components/ppif/navbar-footer/Navbar";
import Landing from "@/Components/ppif/landing/Landing";
import AboutPPIF from "@/Components/ppif/about-ppif/AboutPPIF";
import AnimatedBackground from "@/Components/ppif/background/AnimatedBackground";
import Timeline from "@/Components/ppif/timeline/Timeline";
import Timelinee from "@/Components/ppif/timeline/Timelinee";
import Contact from "@/Components/ppif/contact/Contact";
import Home from "@/Components/ppif/home/Home";

export default function Welcome() {
    return (
        <>
            <Head title="Home" />
            <AnimatedBackground />
            <Navbar />
            <Landing id={"home"} />
            <Home id={"about-if"} />
            <AboutPPIF id={"about-ppif"} />
            <Timelinee id={"timeline"} />
            <Contact id={"contact"} />
        </>
    );
}
