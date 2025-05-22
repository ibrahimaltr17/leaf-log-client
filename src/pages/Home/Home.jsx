import React from 'react';
import Banner from '../../components/Banner/Banner';
import CardNewPlant from '../../components/CardNewPlant/CardNewPlant';

const Home = () => {
    return (
        <>
        <Banner></Banner>
        <div className='max-w-11/12 mx-auto mt-20'>
            <section className='space-y-10'>
                <div className='p-3 border-l-8 border-green-800'>
                    <h3 className='text-3xl font-bold text-green-800'>New Plants</h3>
                </div>
                {/* New Plant Container */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <CardNewPlant></CardNewPlant>
                    <CardNewPlant></CardNewPlant>
                    <CardNewPlant></CardNewPlant>
                    <CardNewPlant></CardNewPlant>
                    <CardNewPlant></CardNewPlant>
                    <CardNewPlant></CardNewPlant>
                </div>
            </section>
        </div>
        </>
    );
};

export default Home;