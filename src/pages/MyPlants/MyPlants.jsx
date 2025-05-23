import React, { useState } from 'react';
import CardMyPlant from '../../components/CardMyPlant/CardMyPlant';
import { useLoaderData } from 'react-router';

const MyPlants = () => {
    const InitialPlants=useLoaderData();
    const [plants, setPlants]=useState(InitialPlants)

    return (
        <div className='w-11/12 mx-auto space-y-10 pt-20'>
            <div>
                <h3 className='text-2xl font-bold text-green-950'>All Plants</h3>
            </div>
            <div className='grid lg:grid-cols-2 gap-5'>
                {
                    plants.map(plant=> <CardMyPlant key={plant._id} plantsData={plant} plants={plants} setPlants={setPlants}></CardMyPlant>)
                }
            </div>
        </div>
    );
};

export default MyPlants;