import TodayPlant from '../TodayPlat/TodayPlant';
import "cally";

const TaskToday = ({ plants }) => {
  const today = new Date().toISOString().split('T')[0];

  const todaysPlants = plants.filter(plant => plant.nextWateringDate === today);

  return (
    <section className='space-y-10'>
      <div className='p-3 border-l-8 border-green-800'>
        <h3 className='text-3xl font-bold text-green-800'>Today's Task</h3>
      </div>
      <div className='flex flex-col md:flex-row gap-8 md:gap-20 lg:gap-40 justify-center items-center md:items-start'>
        <div>
          <calendar-date class="cally bg-base-100 border border-base-300 shadow-lg rounded-box" disabled>
            <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
            <svg aria-label="Next" className="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
            <calendar-month></calendar-month>
          </calendar-date>
        </div>
        <div className='space-y-4'>
          <div className='space-y-4'>
            <h2 className='font-bold text-center mb-10'>Tasks for Today ({today})</h2>
            {todaysPlants.length > 0 ? (
              todaysPlants.map(plant => (
                <TodayPlant
                  key={plant._id}
                  name={plant.plant}
                  image={plant.photo}
                />
              ))
            ) : (
              <p className='text-center'>No plants need watering today.</p>
            )}
            <p className='text-red-600 text-xs text-center'>Please Update the watering date after complete the task</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskToday;
