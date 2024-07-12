import React from 'react'
import DecodeForm from '@/Components/ppif/games/DecodeMessage'

function TesGamePage() {
  return (
    <div className='h-screen w-screen bg-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        <div className='flex flex-col justify-center items-center h-screen'>
            <DecodeForm
                folder_image="/ppif/images/folderImage.png"
            />
        </div>
    </div>
  )
}

export default TesGamePage
