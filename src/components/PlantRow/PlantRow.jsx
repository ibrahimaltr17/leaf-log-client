import React from 'react';
import { Link } from 'react-router';

const PlantRow = ({ plant }) => {
    return (
        <tr>
            <td className=''>
                <div className='flex gap-4'>
                    <img src={plant.photo} alt="" className='w-[52px] h-[52px] rounded-sm' />
                    <p className='text-left'>{plant.plant}</p>
                </div>
            </td>
            <td><p>{plant.category}</p></td>
            <td><p>{plant.waterFrequency}</p></td>
            <td className='text-center'>
                <Link to={`/plants/${plant._id}`}><button className='px-3 py-2 cursor-pointer bg-green-950 text-white rounded-3xl'>
                    View Details
                </button></Link>

            </td>
        </tr>
    );
};

export default PlantRow;