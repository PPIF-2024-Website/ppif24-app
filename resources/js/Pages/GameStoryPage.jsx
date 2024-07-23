import { Link, Head } from "@inertiajs/react";
import React from "react";
import Game_story_card from "@/Components/ppif/games/storyboard";
import ArchivesBackground from "@/Components/ppif/background/archives-background/ArchivesBackground";

function GameStory() {
    return (
        <>
            <Head title="Story" />
            <ArchivesBackground />
            <div className="h-screen w-screen">
                <div className="flex h-screen flex-col items-center justify-center">
                    <Game_story_card image="/ppif/images/story_1.png" />
                    <Link
                        href="/game/archive"
                        className="mt-16 flex h-[76px] w-full min-w-[320px] max-w-[778px] items-center justify-center rounded-3xl bg-white/20 text-3xl text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white/50"
                    >
                        Continue
                    </Link>
                </div>
            </div>
        </>
    );
}

export default GameStory;
