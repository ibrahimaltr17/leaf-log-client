import React from 'react';
import plant from '../../assets/plant.jpg'
import './AllPlant.css'

const AllPlants = () => {
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
                    <tr>
                        <td className=''>
                            <div className='flex gap-4'>
                                <img src={plant} alt="" className='w-[52px] h-[52px] rounded-sm' />
                                <p className='text-left'>Very good plant</p>
                            </div>
                        </td>
                        <td><p>Showpiece</p></td>
                        <td><p>3 time</p></td>
                        <td className='text-center'>
                            <button className='px-3 py-2 bg-green-950 text-white rounded-3xl'>
                                View Details
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AllPlants;