import React from 'react';
import { MdCategory } from "react-icons/md";
import { PiSpeedometer } from "react-icons/pi";
import { GiWateringCan } from "react-icons/gi";
import snakePlant from '../../assets/snakePlant.jpg'

const CardNewPlant = () => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img 
                    className=''
                    src={snakePlant}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Snake Plant
                    <div className="badge badge-secondary">Easy</div>
                </h2>
                <div className=''>
                    <div className='flex gap-2 items-center'>
                        <MdCategory /> Succulent
                    </div>
                    <div className='flex gap-2 items-center'>
                        <PiSpeedometer /> Healthy
                    </div>
                    <div className='flex gap-2 items-center'>
                        <GiWateringCan /> Every 10 days
                    </div>
                </div>
                <div className="w-full">
                    <button className='btn w-full rounded-4xl bg-green-950 text-white font-medium'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default CardNewPlant;