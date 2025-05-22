import React from 'react';
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import demo from '../../assets/snakePlant.jpg'

const CardMyPlant = () => {
    return (
        <div className='flex justify-between items-center flex-col md:flex-row space-y-3 rounded-3xl bg-white p-4'>
            <div>
                <img className='max-w-[200px] rounded-xl' src={demo} alt="" />
            </div>
            <div className='space-y-2'>
                <h4 className='text-2xl font-bold'>Snake Plant</h4>
                <p><span className='font-semibold'>Category: </span>Succulent</p>
                <p><span className='font-semibold'>Care Level: </span>Easy</p>
                <p><span className='font-semibold'>Health Status: </span>Healthy</p>
            </div>
            <div className='flex md:flex-col px-2 gap-2'>
                <button className='btn bg-green-800 text-white'><FaEye /></button>
                <button className='btn bg-gray-800 text-white'><FaEdit /></button>
                <button className='btn bg-red-600 text-white'><MdDelete /></button>
            </div>
        </div>
    );
};

export default CardMyPlant;