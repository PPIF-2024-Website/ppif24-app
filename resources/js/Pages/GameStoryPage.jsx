import { Link, Head } from "@inertiajs/react";
import React from "react";
import Storyboard from "@/Components/ppif/games/Storyboardd";
import ArchivesBackground from "@/Components/ppif/background/archives-background/ArchivesBackground";
import TransitionedPage from "@/Components/ppif/TransitionedPage";

function Page() {
    return (
        <>
            <Head title="Story" />
            <ArchivesBackground />
            <div className="flex flex-col items-center justify-center space-y-8 px-24 py-16 text-white">
                <Storyboard image="/ppif/images/story_1.png" />
                <Link
                    href="/game/archive"
                    className="glow-white smooth text-body w-3/4 rounded-3xl bg-white/10 px-10 py-3 text-center font-light uppercase tracking-widest"
                >
                    Continue
                </Link>
            </div>
        </>
    );
}

export default function GameStory() {
    return <TransitionedPage Page={Page} />;
}
