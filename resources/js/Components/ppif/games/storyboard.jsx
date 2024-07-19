import React from 'react'

function storyboard(props) {
  return (
    <div className='flex flex-col justify-center items-center bg-white/20 backdrop-blur-lg py-4 md:w-[1000px] md:h-[500px] md:rounded-[25px]'>
        <img src={props.image} alt="story_image" className='md:w-[600px] md:rounded-xl w-[360px] rounded-lg antialiased'/>
        <p className="text-center text-[8px] md:text-[16px] mt-4 text-white px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
    </div>
  )
}

export default storyboard
