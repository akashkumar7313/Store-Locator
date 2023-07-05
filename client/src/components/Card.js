import React from 'react';
import { BiPhone } from "react-icons/bi";
import { BiTimeFive } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";

const Card = ({ title, imageSrc, description, time, contact,}) => {
  return (
    <div className="card">
        <div className='flex flex-col realative h-[460px] rounded-[10px] shadow-lg w-[380px] md:w-[400px] bg-white'>
            <div className='w-100%'>
                <img src={imageSrc}  alt='StoreImage' className='rounded-tl-[10px] rounded-tr-[10px] bg-cover bg-center' />
            </div>

            <div className='card-content text-start mx-2 md:mx-6 mt-2'>
                <h1 className='text-[28px] font-semibold'>{title}</h1>
                <div className=' text-gray-600 text-[14px] mt-3'>
                    <p className='flex gap-[2px]'><MdOutlineLocationOn className='pb-[10px] w-[35px] h-[35px]' />{description}
                    </p>
                    <div className='leading-9 text-gray-600 mt-2'>
                        <p className='flex gap-1'> <BiTimeFive className=' mt-[10px] w-[16px] h-[16px]' /> {time}</p>
                        <p className='flex gap-1'><BiPhone className=' mt-[11px]' />{contact}</p>
                    </div>
                </div>
                <button className=' mt-2 md:mt-1 px-6 pt-[7px] pb-[9px] text-[12px] bg-gray-900 hover:bg-gray-700 text-white rounded-md'>Directions</button>
            </div>
        </div>
     
      </div>
      

  );
};

export default Card;
