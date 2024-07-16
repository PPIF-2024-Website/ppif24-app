import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from '@inertiajs/react';

function DecodeMessage(props) {

    const [decrypted_message, set_decrypted_message] = useState('');
    const [response, set_response] = useState(null);

    const token = props.token;

    const handle_submit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.get('/api/group', {
                params: {
                    token: token,
                    decode_message: decrypted_message
                }
            });
            set_response(res.data);
            console.log('Response from /api/group: ', res.data);
        } catch(error) {
            set_response("Message Salah");
        }
    };


  return (
    <div className='flex flex-wrap gap-4 justify-between py-4'>
        <form className="flex gap-4 md:w-[600px] w-full md:pt-2" onSubmit={handle_submit}>
            <div className="relative z-0 mb-5 group md:w-1/2 w-full">
                <input id="decode_message" type='text' value={decrypted_message} onChange={(e) => set_decrypted_message(e.target.value)} className="w-full  placeholder-white px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Type the Decrypted Message..." required />
            </div>
            <button type="submit" className="text-white bg-white/20 backdrop-blur-lg font-medium rounded-[15px] md:text-lg w-[100px] text-center md:h-[40px] md:w-[150px] h-[40px] hover:glow-white drop-shadow-[0_0_10px_rgba(255,255,255,0.75)]">Try</button>
        </form>
        <div className='flex md:justify-end md:w-auto w-full justify-center'>
            <Link href="/">
                <img src={props.folder_image} className='w-[43px] flex justify-center object-contain md:pt-2'/>
            </Link>
        </div>
        {/* {response && (
            <div>
                <h1 className='text-white'>{response}</h1>
            </div>
        )} */}
    </div>
  )
}

export default DecodeMessage
