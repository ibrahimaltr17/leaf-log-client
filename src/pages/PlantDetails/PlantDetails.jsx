import React from 'react';
import demo from '../../assets/snakePlant.jpg'

const PlantDetails = () => {
    return (
        <div className='p-5 w-11/12 mx-auto space-y-10 pt-20'>
            <div className='flex flex-col lg:flex-row items-center gap-10'>
                <div className='px-4'>
                    <img className='md:max-w-96 rounded-2xl' src={demo} alt="Event" />
                </div>
                <div className='space-y-4 w-full'>
                    <h2 className='md:text-3xl lg:text-5xl text-2xl font-bold'>Snake Plant</h2>
                    <div className='flex justify-between'>
                        <div className='p-2 rounded-md w-1/2'>
                            <p className='font-bold'>Category</p>
                            <p className='text-gray-600 font-semibold'>Succulent</p>
                        </div>
                        <div className='p-2 rounded-md w-1/2'>
                            <p className='font-bold'>Care Level</p>
                            <p className='text-gray-600 font-semibold'>Easy</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='p-2 rounded-md w-1/2'>
                            <p className='font-bold'>Watering Frequency</p>
                            <p className='text-gray-600 font-semibold'>Every 10 days</p>
                        </div>
                        <div className='p-2 rounded-md w-1/2'>
                            <p className='font-bold'>Health Status</p>
                            <p className='text-gray-600 font-semibold'>Healthy</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='p-2 rounded-md w-1/2'>
                            <p className='font-bold'>Last Watered Date</p>
                            <p className='text-gray-600 font-semibold'>2025-05-15</p>
                        </div>
                        <div className='p-2 rounded-md w-1/2'>
                            <p className='font-bold'>Next Watering Date</p>
                            <p className='text-gray-600 font-semibold'>2025-05-25</p>
                        </div>
                    </div>
                    <div className='p-2 rounded-md'>
                        <p className='font-bold'>Description</p>
                        <p>The Snake Plant is a hardy, low-maintenance houseplant known for its upright, sword-like leaves. It helps purify indoor air and thrives with minimal care.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantDetails;