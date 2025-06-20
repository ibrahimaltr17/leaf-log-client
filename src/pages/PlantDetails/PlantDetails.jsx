import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

const PlantDetails = () => {
    const plantData = useLoaderData();
    const [plant, setPlant] = useState({});

    useEffect(() => {
        setPlant(plantData)
    }, [plantData])

    return (
        <div className='p-5 w-11/12 mx-auto space-y-10 pt-20'>
            <div className='flex flex-col lg:flex-row items-center gap-10'>
                <div className='px-4'>
                    <img className='md:max-w-96 rounded-2xl' src={plantData.photo} alt="Event" />
                </div>
                <div className='space-y-4 w-full'>
                    <h2 className='md:text-3xl lg:text-5xl text-2xl font-bold'>{plantData.plant}</h2>
                    <div className='flex justify-between'>
                        <div className='p-2 rounded-md w-1/2'>
                            <p className='font-bold'>Category</p>
                            <p className='text-gray-600 font-semibold'>{plantData.category}</p>
                        </div>
                        <div className='p-2 rounded-md w-1/2'>
                            <p className='font-bold'>Care Level</p>
                            <p className='text-gray-600 font-semibold'>{plantData.careLevel}</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='p-2 rounded-md w-1/2'>
                            <p className='font-bold'>Watering Frequency</p>
                            <p className='text-gray-600 font-semibold'>{plantData.waterFrequency}</p>
                        </div>
                        <div className='p-2 rounded-md w-1/2'>
                            <p className='font-bold'>Health Status</p>
                            <p className='text-gray-600 font-semibold'>{plantData.health}</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='p-2 rounded-md w-1/2'>
                            <p className='font-bold'>Last Watered Date</p>
                            <p className='text-gray-600 font-semibold'>{plantData.lastWateredDate}</p>
                        </div>
                        <div className='p-2 rounded-md w-1/2'>
                            <p className='font-bold'>Next Watering Date</p>
                            <p className='text-gray-600 font-semibold'>{plantData.nextWateringDate}</p>
                        </div>
                    </div>
                    <div className='p-2 rounded-md'>
                        <p className='font-bold'>Description</p>
                        <p>{plantData.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantDetails;