import React from 'react';
import { MdCategory } from "react-icons/md";
import { PiSpeedometer } from "react-icons/pi";
import { GiWateringCan } from "react-icons/gi";
import { Link } from 'react-router';

const CardNewPlant = ({ plantData }) => {
    console.log(plantData)
    //   const { photo, plant, category, health, waterFrequency, careLevel } = plantData;

    return (
        <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-200 rounded-xl">
            <figure>
                <img
                    className="w-full h-48 object-cover rounded-t-xl"
                    src={plantData.photo}
                    alt=""
                />
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title justify-between items-center">
                    {plantData.plant}
                    <span className="badge badge-secondary text-xs">{plantData.careLevel}</span>
                </h2>

                <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <MdCategory className="text-lg" /> {plantData.category}
                    </div>
                    <div className="flex items-center gap-2">
                        <PiSpeedometer className="text-lg" /> {plantData.health}
                    </div>
                    <div className="flex items-center gap-2">
                        <GiWateringCan className="text-lg" /> {plantData.waterFrequency}
                    </div>
                </div>

                <Link to={`/plants/${plantData._id}`}><button className="btn btn-sm w-full bg-green-800 hover:bg-green-900 text-white rounded-xl">
                    Plant Details
                </button></Link>

            </div>
        </div>
    );
};

export default CardNewPlant;
