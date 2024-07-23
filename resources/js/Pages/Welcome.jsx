import Navbar from "@/Components/ppif/navbar-footer/Navbar";
import Landing from "@/Components/ppif/landing/Landing";
import Background from "@/Components/ppif/background/Background";
import { Link, Head } from "@inertiajs/react";
import { useGlitch } from "react-powerglitch";
import Contact from "@/Components/ppif/contact/Contact";
import React from "react";
import ContactNew from "@/Components/ppif/contact/ContactNew";

export default function Welcome() {
    return (
        <>
            <Head title="Home" />
            <Background />
            <Navbar />
            <Landing id={"Home"} />
            <Landing id={"AboutIF"} />
            <Landing id={"AboutPPIF"} />
            <Landing id={"Timeline"} />
            <ContactNew id={"Contact"} />
        </>
    );
}
