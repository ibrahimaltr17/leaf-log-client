import React from 'react';
import { MdCategory } from "react-icons/md";
import { PiSpeedometer } from "react-icons/pi";
import { GiWateringCan } from "react-icons/gi";

const CardNewPlant = ({plantData}) => {
    const {photo,plant,category,health,waterFrequency,careLevel}=plantData
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img 
                    className=''
                    src={photo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {plant}
                    <div className="badge badge-secondary">{careLevel}</div>
                </h2>
                <div className=''>
                    <div className='flex gap-2 items-center'>
                        <MdCategory /> {category}
                    </div>
                    <div className='flex gap-2 items-center'>
                        <PiSpeedometer /> {health}
                    </div>
                    <div className='flex gap-2 items-center'>
                        <GiWateringCan /> {waterFrequency}
                    </div>
                </div>
                <div className="w-full">
                    <button className='btn w-full rounded-4xl bg-green-950 text-white font-medium'>Plant Details</button>
                </div>
            </div>
        </div>
    );
};

export default CardNewPlant;