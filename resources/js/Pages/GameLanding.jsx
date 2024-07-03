import { Link, Head } from "@inertiajs/react";
import React from 'react'
import Game_story_card from '@/Components/ppif/games/storyboard'

function GameLanding() {
  return (
    <div className="pt-4 md:pt-0 h-screen bg-black">
        <div className="flex flex-col justify-center items-center">
            <Game_story_card image = "/ppif/images/story_1.png" />
            <Link href="/" className="bg-white/20 backdrop-blur-lg mt-6 w-[389px] md:w-[778px] md:h-[76px] rounded-[15px] text-[15px] md:text-[30px] h-[38px] text-white text-center p-2 md:p-4">Continue</Link>
        </div>
    </div>
  )
}

export default GameLanding