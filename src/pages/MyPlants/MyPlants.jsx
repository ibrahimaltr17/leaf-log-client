import React, { useContext, useState } from 'react';
import CardMyPlant from '../../components/CardMyPlant/CardMyPlant';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../context/AuthContext'; 


const MyPlants = () => {
    const allPlants = useLoaderData(); 
    const { user } = useContext(AuthContext);

    const filteredPlants = allPlants.filter(plant => plant.email === user?.email);

    const [plants, setPlants] = useState(filteredPlants);

    return (
        <div className='w-11/12 mx-auto space-y-10 pt-20'>
            <div>
                <h3 className='text-2xl font-bold text-green-950'>My Plants</h3>
            </div>
            <div className='grid lg:grid-cols-2 gap-5'>
                {
                    plants.length > 0 ? (
                        plants.map(plant => (
                            <CardMyPlant
                                key={plant._id}
                                plantsData={plant}
                                plants={plants}
                                setPlants={setPlants}
                            />
                        ))
                    ) : (
                        <p className='text-gray-500 text-2xl col-span-full text-center'>You haven’t added any plants yet.</p>
                    )
                }
            </div>
        </div>
    );
};

export default MyPlants;
