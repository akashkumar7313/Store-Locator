import React from 'react'
import { BsFillChatLeftFill } from "react-icons/bs";

export default function Chat() {
    return (
        <div className=''>
            <div className=' relative float-right  m-10 h-16 w-16 bg-sky-600 rounded-full text-white '>
                <BsFillChatLeftFill className='relative float-right m-[21px] h-6 w-6' />
            </div>
        </div>
    )
}
