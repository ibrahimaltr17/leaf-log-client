import React from 'react';
import CardMyPlant from '../../components/CardMyPlant/CardMyPlant';

const MyPlants = () => {
    return (
        <div className='w-11/12 mx-auto space-y-10 pt-20'>
            <div>
                <h3 className='text-2xl font-bold text-green-950'>All Plants</h3>
            </div>
            <div className='grid lg:grid-cols-2 gap-5'>
                <CardMyPlant></CardMyPlant>
                <CardMyPlant></CardMyPlant>
                <CardMyPlant></CardMyPlant>
                <CardMyPlant></CardMyPlant>
            </div>
        </div>
    );
};

export default MyPlants;