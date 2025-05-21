import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full h-[450px]">
            <div id="slide1" className="carousel-item relative w-full">
                <div
                    className="hero h-full"
                    style={{
                        backgroundImage:
                            "url(https://i.postimg.cc/sxL6Pb9F/man-holding-house-plant-spray-bottle.jpg)",
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold">Nurture Your Greens, Effortlessly</h1>
                            <p className="mb-5 text-xs px-12 md:px-0 md:text-sm lg:px-0 lg:text-lg">
                                Track watering, fertilizing, and more — all in one place. LeafLog keeps your plants healthy and happy.
                            </p>
                            <button className="btn btn-primary bg-green-950">Explore More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div
                    className="hero h-full"
                    style={{
                        backgroundImage:
                            "url(https://i.postimg.cc/QdJzwYj7/close-up-hand-holding-spray-bottle-plants.jpg)",
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold">Smart Care for Every Leaf</h1>
                            <p className="mb-5 text-xs px-12 md:px-0 md:text-sm lg:px-0 lg:text-lg">
                                From reminders to progress logs, manage your plant routine with a touch of nature and a dash of tech.
                            </p>
                            <button className="btn btn-primary bg-green-950">Explore More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div
                    className="hero h-full"
                    style={{
                        backgroundImage:
                            "url(https://i.postimg.cc/xTrFCVCH/close-up-hands-arranging-plants.jpg)",
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold">Grow with Confidence</h1>
                            <p className="mb-5 text-xs px-12 md:px-0 md:text-sm lg:px-0 lg:text-lg">
                                Whether you’re a beginner or a plant pro, LeafLog helps you take the guesswork out of plant care.
                            </p>
                            <button className="btn btn-primary bg-green-950">Explore More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;