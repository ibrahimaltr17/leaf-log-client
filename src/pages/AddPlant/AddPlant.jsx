import React from 'react';
import './AddPlant.css'
import Swal from 'sweetalert2';

const AddPlant = () => {

  const handleAddPlant = (e) => {
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form);
    const newPlant = Object.fromEntries(formData.entries())
    console.log(newPlant);

    fetch('http://localhost:3000/plants', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          console.log('added successfully.')

          Swal.fire({
            title: "Plant added successfully!",
            icon: "success",
            draggable: true
          });
        }
      })
  }

  return (
    <div className='max-w-10/12 mx-auto py-16 space-y-10'>
      <div className='text-center space-y-5 px-10'>
        <h3 className='text-2xl font-bold text-green-950'>Add Plant</h3>
        <p className=''>Fill out the form below to start tracking your plant's care. Make sure to include as many details as possible to get personalized care reminders.</p>
      </div>
      <div>
        <form onSubmit={handleAddPlant}>
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
              <label className="label">Plant Name</label>
              <input type="text" name='plant' className="input w-full" placeholder="Plant Name" />
            </fieldset>
            <fieldset className="fieldset rounded-box px-4">
              <label className="label">Category</label>
              <select name="category" defaultValue="Category" className="select w-full">
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
              <label className="label">Care Level</label>
              <select name="careLevel" defaultValue="Care Level" className="select w-full">
                <option disabled={true}>Care Level</option>
                <option>Easy</option>
                <option>Moderate</option>
                <option>Difficult</option>
              </select>
            </fieldset>
            <fieldset className="fieldset rounded-box px-4">
              <label className="label">Health Status</label>
              <input type="text" name='health' className="input w-full" placeholder="Health Status" />
            </fieldset>


            <fieldset className="fieldset rounded-box px-4">
              <label className="label">Last Watered Date</label>
              <input type="date" name='lastWateredDate' className="input w-full" placeholder="Price per Cup" />
            </fieldset>
            <fieldset className="fieldset rounded-box px-4">
              <label className="label">Next Watering Date</label>
              <input type="date" name='nextWaterDate' className="input w-full" placeholder="Details Name" />
            </fieldset>
          </div>
          <fieldset className="fieldset rounded-box px-4 mt-4">
            <label className="label">Watering Frequency</label>
            <input type="text" name='waterFrequency' className="input w-full" placeholder="Watering Frequency" />
          </fieldset>
          <fieldset className="fieldset rounded-box my-6 px-4">
            <label className="label">Photo</label>
            <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />
          </fieldset>
          <fieldset className="fieldset rounded-box my-6 px-4">
            <label className="label">Description</label>
            <textarea className="textarea h-24 w-full" placeholder="description" name='description'></textarea>
          </fieldset>
          <div className='px-4'>
            <input type="submit" className='btn w-full  bg-green-950 text-white' value="Add Plant" />
          </div>
        </form>
      </div>
    </div>


  );
};

export default AddPlant;