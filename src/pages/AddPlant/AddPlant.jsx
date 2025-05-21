import React from 'react';

const AddPlant = () => {

  return (
    <div className='max-w-10/12 mx-auto py-16 space-y-10'>
      <div>
        <form>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Name</label>
              <input type="text" name='name' className="input w-full" placeholder="Coffee Name" />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Quantity</label>
              <input type="text" name='quantity' className="input w-full" placeholder="Quantity Name" />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Supplier</label>
              <input type="text" name='supplier' className="input w-full" placeholder="Supplier Name" />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Taste</label>
              <input type="text" name='taste' className="input w-full" placeholder="Taste Name" />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Price</label>
              <input type="text" name='price' className="input w-full" placeholder="Price per Cup" />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Details</label>
              <input type="text" name='details' className="input w-full" placeholder="Details Name" />
            </fieldset>
          </div>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
            <label className="label">Photo</label>
            <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />
          </fieldset>

          <input type="submit" className='btn w-full' value="Add Coffee" />
        </form>
      </div>
    </div>


  );
};

export default AddPlant;