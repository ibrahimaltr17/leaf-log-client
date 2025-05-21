import React from 'react';
import './AddPlant.css'

const AddPlant = () => {

  return (
    <div className='max-w-10/12 mx-auto py-16 space-y-10'>
      <div>
        <form>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <fieldset className="fieldset rounded-box px-4">
              <label className="label">User Name</label>
              <input type="text" name='name' className="input w-full" placeholder="User Name" />
            </fieldset>
            <fieldset className="fieldset rounded-box px-4">
              <label className="label">User Email</label>
              <input type="email" name='email' className="input w-full" placeholder="Email" />
            </fieldset>
            <fieldset className="fieldset rounded-box px-4">
              <label className="label">Care Level</label>
              <select defaultValue="Pick a browser" className="select w-full">
                <option disabled={true}>Care Level</option>
                <option>Easy</option>
                <option>Moderate</option>
                <option>Difficult</option>
              </select>
            </fieldset>
            <fieldset className="fieldset rounded-box px-4">
              <label className="label">Category</label>
              <select defaultValue="Pick a browser" className="select w-full">
                <option disabled={true}>Category</option>
                <option>Succulent</option>
                <option>Fern</option>
                <option>Flowering Plant</option>
                <option>Herb</option>
                <option>Indoor Plant</option>
                <option>Outdoor Plant</option>
                <option>Cactus</option>
                <option>Tropical Plant</option>
              </select>
            </fieldset>

            <fieldset className="fieldset rounded-box px-4">
              <label className="label">Last Watered Date</label>
              <input type="date" name='lastWateredDate' className="input w-full" placeholder="Price per Cup" />
            </fieldset>
            <fieldset className="fieldset rounded-box px-4">
              <label className="label">Next Watering Date</label>
              <input type="date" name='details' className="input w-full" placeholder="Details Name" />
            </fieldset>
          </div>
          <fieldset className="fieldset rounded-box px-4 mt-4">
            <label className="label">Watering Frequency</label>
            <input type="text" name='taste' className="input w-full" placeholder="Watering Frequency" />
          </fieldset>
          <fieldset className="fieldset rounded-box my-6 px-4">
            <label className="label">Health Status</label>
            <input type="text" name='photo' className="input w-full" placeholder="Health Status" />
          </fieldset>
          <fieldset className="fieldset rounded-box my-6 px-4">
            <label className="label">Photo</label>
            <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />
          </fieldset>
          <fieldset className="fieldset rounded-box my-6 px-4">
            <label className="label">Description</label>
            <textarea className="textarea h-24 w-full" placeholder="Description"></textarea>
          </fieldset>
          <div className='px-4'>
            <input type="submit" className='btn w-full  bg-green-950 text-white' value="Add Coffee" />
          </div>
        </form>
      </div>
    </div>


  );
};

export default AddPlant;