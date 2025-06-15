import React from 'react';
import './AllPlant.css'
import { useLoaderData } from 'react-router';
import PlantRow from '../../components/PlantRow/PlantRow';

const AllPlants = () => {
    const plants=useLoaderData()
    console.log(plants)

    return (
        <div className='max-w-10/12 mx-auto py-16 space-y-10'>
            <div>
                <h3 className='text-2xl font-bold text-green-950'>All Plants</h3>
            </div>
            <table className='table-auto w-full divide-y divide-gray-200 bg-white rounded-2xl'>
                <thead className='p-3'>
                    <tr className=''>
                        <th className='text-left'>PLant</th>
                        <th>Category</th>
                        <th>Watering Frequency</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 p-3'>
                    {
                        plants.map((plant, index) => (
                <PlantRow key={index} plant={plant} />
              ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllPlants;