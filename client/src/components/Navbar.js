import React from 'react'
import { BsSearch, BsPersonCircle, BsFillGeoAltFill, BsFillCartFill } from "react-icons/bs";


export default function Navbar() {
    return (
        <div>
            {/* Frist Nav */}
            <div className='h-7 w-[100%] bg-green-700'>
                <h1 className='text-white font-bold pt-1 text-[12px]'>BENGALURU'S GRANDEST APPLE EXPERIENCE - COMING SOON...</h1>
            </div>

            {/* Second Nav */}
            <div className='h-20 md:h-10 md:w-[100%] bg-[#191919] md:flex items-center font-semibold' >

                <p className='text-white md:ml-[300px]'>080 46999888</p>

                <div className='flex gap-2 md:ml-[450px]'>
                    <BsSearch className='text-white h-6 w-5' />
                    <input type="text" placeholder='Search' className='h-7 w-[230px]  rounded-sm pl-1 bg-[#7a7a7a]' />
                    <div className='flex ml-3 gap-3'>
                        <BsPersonCircle className='text-white h-6 w-[16px]  ' />
                        <BsFillGeoAltFill className='text-white h-6 w-[16px] ' />
                        <BsFillCartFill className='text-white h-6 w-[16px]' />
                    </div>

                </div>
                <p className='text-orange-600 ml-[50px] text-[16px] '>WHY IMAGINE</p>
            </div>

            {/* third Nav */}
            <div className='h-12 w-[100%] bg-black flex items-center font-semibold'>
                    <ul className='flex text-white text-[12px] md:text-[14px] gap-4 md:gap-12 md:ml-[750px]'>
                        <li>Mac</li>
                        <li>iPhone</li>
                        <li>iPad</li>
                        <li>AirPods</li>
                        <li>Watch</li>
                        <li>TV</li>
                        <li>Accessories</li>
                        <li>OFFERS</li>
                    </ul>
                </div>
        </div>
    )
}
