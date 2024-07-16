import React from 'react'
import DecodeForm from '@/Components/ppif/games/DecodeMessage'
import HeaderDecodeMessage from '@/Components/ppif/games/HeaderDecodeMessage'

function TesGamePage() {
  return (
    <div className='h-screen w-screen bg-black '>
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='text-white text-center py-4 md:text-[30px] font-bold italic text-[36px]'>DECODE THE MESSAGE</h1>
            <HeaderDecodeMessage 
                image="/ppif/images/decodeBackgroundDummy.png"
            />

            <DecodeForm
                token="ozk9gbT824"
                folder_image="/ppif/images/folderImage.png"
            />
        </div>
    </div>
  )
}

export default TesGamePage
