import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import Chat from './Chat';



export default function Footer() {
    return (
        <div>
            <div className='h-12 w-[100%] bg-[#191919] flex items-center font-semibold mt-[60px]'>
                <ul className='flex text-white gap-4 md:gap-12 text-[12px] md:text-[14px] md:ml-[250px]'>
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
            <div className='h-[650px] md:h-[350px] w-auto md:w-[100%] bg-black text-white '>
                <div className='ml-4 md:flex justify-evenly'>
                <div >
                    <ul className='text-start text-[12px] leading-6 pt-4'>
                        <li>Help Center</li>
                        <li>Store Locator</li>
                        <li>Terms & Conditions</li>
                        <li>Cancellations, Returns & Refunds</li>
                        <li>Shipping & Delivery Policy</li>
                        <li>Privacy Policy</li>
                        <li>Security Policy</li>
                        <li>EMI & CASHBACK POLICY</li>
                    </ul>
                </div>
                <div className='text-start text-[12px] leading-6 pt-4'>
                    <p>Contact</p>
                    <p>080 46999888  <br /> support@magineonline store </p>
                    <p>Ample Corporate Office <br /> 4th Floor, NCC Windsor <br /> Airport Road, <br />Bengaluru 600064</p>
                </div>
                <div className=' text-center text-[12px] leading-6 pt-4'>
                    <p>Be The First To Get The latest imagine Products Updates</p>
                    <input type="text" placeholder='enter your email address' className='h-8 w-[230px]  rounded-l-full pl-3 bg-[#7a7a7a]' />
                    <button className='h-8 w-[90px] mt-4  rounded-r-full bg-slate-700'>SUBSCRIBE</button>
                    <div className='flex items-center gap-4 mt-4 ml-8'>
                        <p>Follow Us On :</p>
                        <BsFacebook className=' h-6 w-6 bg-slate-500 rounded-full' />
                        <AiFillTwitterCircle className=' h-6  w-6  bg-slate-500 rounded-full' />
                        <AiFillInstagram className=' h-6 w-6  bg-slate-500 rounded-full' />
                        <AiFillYoutube className=' h-6 w-6  bg-slate-500 rounded-full' />
                    </div>
                </div>
                </div>
                <Chat/>
            </div>
            <div>
            </div>
        </div>
    )
}
