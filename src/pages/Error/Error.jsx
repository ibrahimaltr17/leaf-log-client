import React from 'react';
import { Link } from 'react-router';
import Lottie from 'lottie-react';
import Animation from '../../Animation/Animation - 1750354613310.json'

const Error = () => {
    return (
        <div className='flex flex-col gap-3 items-center my-6 bg-white min-h-screen'>
            <div className='w-[400px] mx-auto'>
                <Lottie animationData={Animation} loop={true}></Lottie>
            </div>

            <Link to='/'>
                <button className='btn w-fit bg-green-900 text-white'>Back to Home</button>
            </Link>
        </div>
    );
};

export default Error;