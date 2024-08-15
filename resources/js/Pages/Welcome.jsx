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

function Page() {
    return (
        <>
            <Head title="Home" />
            <AnimatedBackground />
            {/* <Background /> */}
            <Navbar />
            <Landing id={"home"} />
            <AboutIF id={"about-if"} />
            <AboutPPIF id={"about-ppif"} />
            <Timeline id={"timeline"} />
            <Contact id={"contact"} />
        </>
    );
}

export default function Welcome() {
    return <TransitionedPage Page={Page} />;
}
