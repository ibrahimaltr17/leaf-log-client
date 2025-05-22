import React from 'react';
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CardMyPlant = ({plantsData}) => {
    const {photo,plant,category,health,careLevel}=plantsData
    return (
        <div className='flex justify-between items-center flex-col md:flex-row space-y-3 rounded-3xl bg-white p-4'>
            <div>
                <img className='max-w-[200px] rounded-xl' src={photo} alt="" />
            </div>
            <div className='space-y-2'>
                <h4 className='text-2xl font-bold'>{plant}</h4>
                <p><span className='font-semibold'>Category: </span>{category}</p>
                <p><span className='font-semibold'>Care Level: </span>{careLevel}</p>
                <p><span className='font-semibold'>Health Status: </span>{health}</p>
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