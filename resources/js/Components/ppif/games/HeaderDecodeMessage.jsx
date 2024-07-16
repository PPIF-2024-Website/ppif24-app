import React from 'react'

function HeaderDecodeMessage(props) {
  return (
    <div className='flex flex-col justify-center items-center bg-white/20 backdrop-blur-lg glow-white p-2 rounded-lg'>
        <div className='py-4 md:w-[1000px] md:h-[500px] md:rounded-[25px]'>
            <div className='md:w-[1000px] flex justify-center'>
              <img src={props.image} className='md:w-[800px]' />
            </div>
        </div>
    </div>
  )
}

export default HeaderDecodeMessage
