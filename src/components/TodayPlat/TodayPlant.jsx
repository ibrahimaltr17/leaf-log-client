import React, { useState } from 'react';

const TodayPlant = ({ name , image}) => {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleComplete = () => {
        setIsCompleted(true);
    };

    return (
        <div className='flex justify-between items-center w-[350px]'>
            <div className="avatar">
                <div className="w-16 rounded-full">
                    <img src={image} alt={name} />
                </div>
            </div>
            <p className='font-medium'>{name}</p>
            <button 
                className='btn bg-green-900 text-white disabled:opacity-50' 
                onClick={handleComplete} 
                disabled={isCompleted}
            >
                {isCompleted ? 'Completed' : 'Complete'}
            </button>
        </div>
    );
};

export default TodayPlant;
