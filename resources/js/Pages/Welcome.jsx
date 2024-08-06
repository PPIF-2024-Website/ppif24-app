import { Head } from "@inertiajs/react";
import Navbar from "@/Components/ppif/navbar-footer/Navbar";
import Landing from "@/Components/ppif/landing/Landing";
import AboutPPIF from "@/Components/ppif/about-ppif/AboutPPIF";
import AnimatedBackground from "@/Components/ppif/background/AnimatedBackground";
import Timeline from "@/Components/ppif/timeline/Timeline";
import Contact from "@/Components/ppif/contact/Contact";
import Home from "@/Components/ppif/home/Home";
import Background from "@/Components/ppif/background/Background";

export default function Welcome() {
    return (
        <>
            <Head title="Home" />
            <AnimatedBackground />
            {/* <Background /> */}
            <Navbar />
            <Landing id={"Home"} />
            <Home id={"AboutIF"} />
            <AboutPPIF id={"AboutPPIF"} />
            <Timeline id={"Timeline"} />
            <Contact id={"Contact"} />
        </>
    );
}
