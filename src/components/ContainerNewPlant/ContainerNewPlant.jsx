import React, { useEffect, useState } from 'react';
import CardNewPlant from '../CardNewPlant/CardNewPlant';

const ContainerNewPlant = () => {
  const [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    fetch('https://server-leaf-log.vercel.app/plants')
      .then(res => res.json())
      .then(data => setAllPlants(data));
  }, []);

  const latestPlants = [...allPlants]
    .filter(plant => plant.createdAt)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 6);

  return (
    <section className='space-y-10'>
      <div className='p-3 border-l-8 border-green-800'>
        <h3 className='text-3xl font-bold text-green-800'>New Plants</h3>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {latestPlants.length > 0 ? (
          latestPlants.map(plant => (
            <CardNewPlant key={plant._id} plantData={plant} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">No plants found.</p>
        )}
      </div>
    </section>
  );
};

export default ContainerNewPlant;
