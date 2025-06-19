import React from 'react';
import { MdCategory } from "react-icons/md";
import { PiSpeedometer } from "react-icons/pi";
import { GiWateringCan } from "react-icons/gi";
import { Link } from 'react-router';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const CardNewPlant = ({ plantData }) => {
    const { _id, photo, plant, category, health, waterFrequency, careLevel } = plantData;

    const careLevelDescriptions = {
        Easy: 'Low maintenance, perfect for beginners',
        Moderate: 'Requires some care, but manageable',
        Difficult: 'Needs regular attention and care'
    };

    return (
        <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-200 rounded-xl">
            <figure>
                <img
                    className="w-full h-48 object-cover rounded-t-xl"
                    src={photo}
                    alt={plant}
                />
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title justify-between items-center">
                    {plant}
                    <span
                        className="badge badge-secondary text-xs cursor-help"
                        data-tooltip-id={`care-tip-${_id}`}
                        data-tooltip-content={careLevelDescriptions[careLevel]}
                    >
                        {careLevel}
                    </span>
                </h2>

                <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <MdCategory className="text-lg" /> {category}
                    </div>
                    <div className="flex items-center gap-2">
                        <PiSpeedometer className="text-lg" /> {health}
                    </div>
                    <div className="flex items-center gap-2">
                        <GiWateringCan className="text-lg" /> {waterFrequency}
                    </div>
                </div>

                <Link to={`/plants/${_id}`}>
                    <button className="btn btn-sm w-full bg-green-800 hover:bg-green-900 text-white rounded-xl">
                        Plant Details
                    </button>
                </Link>
                <Tooltip id={`care-tip-${_id}`} place="top" />
            </div>
        </div>
    );
};

export default CardNewPlant;
