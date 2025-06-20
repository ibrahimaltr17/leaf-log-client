
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router';
import ContainerNewPlant from '../../components/ContainerNewPlant/ContainerNewPlant';
import Feedback from '../../components/Feedback/Feedback';
import TaskToday from '../../components/TaskToday/TaskToday';

const Home = () => {
  const plants = useLoaderData();
 
  return (
    <>
      <Banner />
      <div className='max-w-11/12 mx-auto mt-20 space-y-20'>
        <ContainerNewPlant></ContainerNewPlant>
        <Feedback></Feedback>
        <TaskToday plants={plants}></TaskToday>
      </div>
    </>
  );
};

export default Home;
