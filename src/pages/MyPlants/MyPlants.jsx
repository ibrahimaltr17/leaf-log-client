import React, { useContext, useState, useEffect } from 'react';
import CardMyPlant from '../../components/CardMyPlant/CardMyPlant';
import { useLoaderData, useNavigation } from 'react-router';
import { AuthContext } from '../../context/AuthContext'; 
import Loading from '../Loading/Loading';

const MyPlants = () => {
  const allPlants = useLoaderData(); 
  const { user, loading } = useContext(AuthContext);
  const navigation = useNavigation();

  const [plants, setPlants] = useState([]);

  useEffect(() => {
    if (user) {
      const filtered = allPlants.filter(plant => plant.email === user.email);
      setPlants(filtered);
    }
  }, [user, allPlants]);

  if (loading || navigation.state === 'loading') {
    return <Loading />;
  }

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
            <p className='text-gray-500 text-2xl col-span-full text-center'>
              You haven’t added any plants yet.
            </p>
          )
        }
      </div>
    </div>
  );
};

export default MyPlants;
