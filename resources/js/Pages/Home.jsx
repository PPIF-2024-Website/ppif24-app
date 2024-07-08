import { Head } from "@inertiajs/react";
import Navbar from "@/Components/ppif/navbar-footer/Navbar";
import Landing from "@/Components/ppif/home/Landing";

export default function Home() {
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
