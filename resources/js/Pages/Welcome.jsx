import { Head } from "@inertiajs/react";
import Navbar from "@/Components/ppif/navbar-footer/Navbar";
import Landing from "@/Components/ppif/landing/Landing";
import Background from "@/Components/ppif/background/Background";
import AboutPPIF from "@/Components/ppif/about-ppif/AboutPPIF";
import AnimatedBackground from "@/Components/ppif/background/AnimatedBackground";

export default function Welcome() {
    return (
        <>
            <Head title="Home" />
            <AnimatedBackground />
            <Navbar />
            <Landing id={"Home"} />
            <Landing id={"AboutIF"} />
            <AboutPPIF id={"AboutPPIF"} />
            <Landing id={"Timeline"} />
            <Landing id={"Contact"} />
        </>
    );
}
