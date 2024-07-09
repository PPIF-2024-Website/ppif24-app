import { Head } from "@inertiajs/react";
import Navbar from "@/Components/ppif/navbar-footer/Navbar";
import Landing from "@/Components/ppif/landing/Landing";

export default function Welcome() {
    return (
        <>
            <Head title="Home" />
            <Navbar />
            <Landing id={"Home"} />
            <Landing id={"AboutIF"} />
            <Landing id={"AboutPPIF"} />
            <Landing id={"Timeline"} />
            <Landing id={"Contact"} />
        </>
    );
}
