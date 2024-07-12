import { Link, Head } from "@inertiajs/react";
import React from 'react'
import Game_story_card from '@/Components/ppif/games/storyboard'

function GameLanding() {
  return (
    <div className="h-screen w-screen bg-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="flex flex-col justify-center items-center h-screen">
            <Game_story_card image = "/ppif/images/story_1.png" />
            <Link href="/" className="bg-white/20 flex justify-center items-center backdrop-blur-lg text-center text-white mt-4 w-[389px] md:w-[778px] md:h-[76px] rounded-[15px] text-[15px] md:text-[30px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-ppif-orange duration-300">Continue</Link>
        </div>
    </div>
  )
}

export default GameLanding
