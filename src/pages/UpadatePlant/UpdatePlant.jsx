import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdatePlant = () => {
    const { _id, photo, plant, category, health, careLevel, name, email, lastWateredDate, nextWaterDate, waterFrequency, description } = useLoaderData()

    const handleUpdatePlant = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const updatedPlant = Object.fromEntries(formData.entries())
        console.log(updatedPlant);

        fetch(`https://server-leaf-log.vercel.app/plants/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedPlant)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Plant updated successfully.",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            })
    }

    return (
        <div className='max-w-10/12 mx-auto py-16 space-y-10'>
            <div className='text-center space-y-5 px-10'>
                <h3 className='text-2xl font-bold text-green-950'>Update Plant</h3>
            </div>
            <div>
                <form onSubmit={handleUpdatePlant}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <fieldset className="fieldset rounded-box px-4">
                            <label className="label">User Name</label>
                            <input type="text" name='name' className="input w-full" placeholder="User Name" defaultValue={name} readOnly/>
                        </fieldset>
                        <fieldset className="fieldset rounded-box px-4">
                            <label className="label">User Email</label>
                            <input type="email" name='email' className="input w-full" placeholder="Email" defaultValue={email} readOnly/>
                        </fieldset>
                        <fieldset className="fieldset rounded-box px-4">
                            <label className="label">Plant Name</label>
                            <input type="text" name='plant' className="input w-full" placeholder="Plant Name" defaultValue={plant} />
                        </fieldset>
                        <fieldset className="fieldset rounded-box px-4">
                            <label className="label">Category</label>
                            <select name="category" defaultValue={category} className="select w-full">
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
                            <select name="careLevel" defaultValue={careLevel} className="select w-full">
                                <option>Easy</option>
                                <option>Moderate</option>
                                <option>Difficult</option>
                            </select>
                        </fieldset>
                        <fieldset className="fieldset rounded-box px-4">
                            <label className="label">Health Status</label>
                            <input type="text" name='health' className="input w-full" placeholder="Health Status" defaultValue={health} />
                        </fieldset>


                        <fieldset className="fieldset rounded-box px-4">
                            <label className="label">Last Watered Date</label>
                            <input type="date" name='lastWateredDate' className="input w-full" placeholder="Price per Cup" defaultValue={lastWateredDate} />
                        </fieldset>
                        <fieldset className="fieldset rounded-box px-4">
                            <label className="label">Next Watering Date</label>
                            <input type="date" name='nextWaterDate' className="input w-full" placeholder="Details Name" defaultValue={nextWaterDate} />
                        </fieldset>
                    </div>
                    <fieldset className="fieldset rounded-box px-4 mt-4">
                        <label className="label">Watering Frequency</label>
                        <input type="text" name='waterFrequency' className="input w-full" placeholder="Watering Frequency" defaultValue={waterFrequency} />
                    </fieldset>
                    <fieldset className="fieldset rounded-box my-6 px-4">
                        <label className="label">Photo</label>
                        <input type="text" name='photo' className="input w-full" placeholder="Photo URL" defaultValue={photo} />
                    </fieldset>
                    <fieldset className="fieldset rounded-box my-6 px-4">
                        <label className="label">Description</label>
                        <textarea className="textarea h-24 w-full" placeholder="description" name='description' defaultValue={description}></textarea>
                    </fieldset>
                    <div className='px-4'>
                        <input type="submit" className='btn w-full  bg-green-950 text-white' value="Add Plant" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdatePlant;