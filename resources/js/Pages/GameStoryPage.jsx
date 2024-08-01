import { Link, Head } from "@inertiajs/react";
import React from "react";
import Storyboard from "@/Components/ppif/games/storyboard";
import ArchivesBackground from "@/Components/ppif/background/archives-background/ArchivesBackground";

function GameStory() {
    return (
        <>
            <Head title="Story" />
            <ArchivesBackground />
            <div className="h-screen w-screen">
                <div className="flex h-screen flex-col items-center justify-center sm:px-8">
                    <Storyboard image="/ppif/images/story_1.png" />
                    <Link
                        href="/game/archive"
                        className="box-glow-white mt-16 flex h-[76px] min-w-[320px] max-w-[778px] items-center justify-center rounded-3xl bg-white/20 text-3xl text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/50 sm:w-full"
                    >
                        Continue
                    </Link>
                </div>
            </div>
        </>
    );
}

export default GameStory;
