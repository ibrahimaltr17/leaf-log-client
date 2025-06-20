import React from 'react';

const Feedback = () => {
    return (
        <section className='space-y-10'>
            <div className='p-3 border-l-8 border-green-800'>
                <h3 className='text-3xl font-bold text-green-800'>Feedback</h3>
            </div>
            <ul className="list bg-base-100 rounded-box shadow-md">

                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Top feedback from our clients</li>

                <li className="list-row">
                    <div><img className="size-10 rounded-box" src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?ga=GA1.1.881306707.1740128025&semt=ais_hybrid&w=740" /></div>
                    <div>
                        <div>Robert Henry</div>
                        <div className="text-xs uppercase font-semibold opacity-60">Indoor Plant Enthusiast</div>
                    </div>
                    <p className="list-col-wrap text-xs">
                        "I used to forget when to water or fertilize my plants, but now everything is organized in one place. The reminders are super helpful, and the interface is clean and easy to use. Highly recommended for every plant lover!
                    </p>
                    
                    <button className="btn btn-square btn-ghost">
                        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                    </button>
                </li>

                <li className="list-row">
                    <div><img className="size-10 rounded-box" src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?ga=GA1.1.881306707.1740128025&semt=ais_hybrid&w=740" /></div>
                    <div>
                        <div>Ellie Sera</div>
                        <div className="text-xs uppercase font-semibold opacity-60">New Plant Parent</div>
                    </div>
                    <p className="list-col-wrap text-xs">
                        "As a beginner gardener, I struggled to keep my plants alive. LeafLog made it fun and easy to track plant care. I especially love the dashboard and the light/dark mode option. It feels personal and well-thought-out.
                    </p>
                    
                    <button className="btn btn-square btn-ghost">
                        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                    </button>
                </li>

                <li className="list-row">
                    <div><img className="size-10 rounded-box" src="https://img.freepik.com/free-photo/headshot-attractive-red-haired-european-woman-with-freckled-skin-looks-seriously-camera-has-minimal-make-up-wears-red-sweater-isolated-white-natural-beauty-concept_176532-8382.jpg?ga=GA1.1.881306707.1740128025&semt=ais_hybrid&w=740" /></div>
                    <div>
                        <div>Lisa Potts</div>
                        <div className="text-xs uppercase font-semibold opacity-60">Home Gardener</div>
                    </div>
                    <p className="list-col-wrap text-xs">
                        "I’ve tried a few plant apps, but LeafLog stands out because it’s not bloated and works great even on my phone. The ability to add custom plants and see all my care tasks in one place makes my plant routine stress-free.
                    </p>
                    <button className="btn btn-square btn-ghost">
                        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                    </button>
                </li>

            </ul>
        </section>
    );
};

export default Feedback;