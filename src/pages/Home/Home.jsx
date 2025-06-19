
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router';
import ContainerNewPlant from '../../components/ContainerNewPlant/ContainerNewPlant';

const Home = () => {
  const plants = useLoaderData();
  console.log(plants);
 

  return (
    <>
      <Banner />
      <div className='max-w-11/12 mx-auto mt-20'>
        <ContainerNewPlant></ContainerNewPlant>
      </div>
    </>
  );
};

export default Home;
