import React from 'react';
import error from "../../assets/error.jpg"
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='flex flex-col gap-3 items-center my-6 bg-white min-h-screen'>
            <div>
                <img className='w-[400px] mx-auto' src={error} alt="" />
            </div>

            <Link to='/'>
                <button className='btn w-fit bg-green-900 text-white'>Back to Home</button>
            </Link>
        </div>
    );
};

export default Error;