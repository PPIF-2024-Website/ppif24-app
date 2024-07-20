import Home from "@/Components/ppif/home/Home";
import ScrollbarStyles from "@/Components/ppif/scrollbar/ScrollbarStyles";
import { Link, Head } from "@inertiajs/react";
import React from "react";

function HomeSection() {
    return (
        <>
            <Head title="Home Section" />
            <ScrollbarStyles />
            <Home />
        </>
    );
}

export default HomeSection;
