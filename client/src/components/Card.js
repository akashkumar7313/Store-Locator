import React from 'react';
import { BiPhone } from "react-icons/bi";
import { BiTimeFive } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
const Card = ({ name, imageSrc, address, day, time, contact, }) => {
    return (
        <div className="card">
            <div className='lg:flex-col h-auto md:h-auto lg:h-auto rounded-[10px] shadow-lg w-[390px] md:w-[600px] lg:w-[400px] bg-white overflow-hidden'>
                <div className=''>
                    <img src={imageSrc} alt='StoreImage' className=' md:bg-no-repeat md:bg-center rounded-tl-[10px] rounded-tr-[10px] lg:bg-cover lg:bg-center  transition-transform duration-300 transform hover:scale-105 ' />
                </div>
                <div className='text-start mx-2 md:mx-6 mt-2 mb-4'>
                    <h1 className='text-[28px] font-semibold'>{name}</h1>
                    <div className=' text-gray-600 text-[14px] mt-3'>
                        <p className='flex gap-[2px]'><MdOutlineLocationOn className='  mt-[2px] w-[18px] h-[18px]' />{address}
                        </p>
                        <div className='leading-9 text-gray-600 mt-2'>
                            <div>
                                <p className='flex gap-1'> <LuCalendarDays className=' mt-[10px] w-[16px] h-[16px]' /> {day}</p>
                                <p className='flex gap-1'> < BiTimeFive className=' mt-[10px] w-[16px] h-[16px]' />{time}</p>
                            </div>
                            <p className='flex gap-1'><BiPhone className=' mt-[11px]' />{contact}</p>
                        </div>
                    </div>
                    <button className=' mt-2 md:mt-1 px-6 pt-[7px] pb-[9px] text-[12px] bg-gray-900 hover:bg-gray-700 text-white font-semibold rounded-md'>Directions</button>
                </div>
            </div>
        </div>
    );
};
export default Card;