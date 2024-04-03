import React from 'react';
import png1 from "../../assets/1.png"
import png2 from "../../assets/2.png"

const Card = () => {
    return (
        <div>
            <h1 className="text-2xl text-gray-600 font-medium py-7">What can I do as a Team?</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='flex flex-col md:flex-row items-center md:items-start gap-3 px-6 py-5 border-2 border-[#EEEEEE] bg-white'>
                    <img className='h-36' src={png1} alt="" />
                    <div className='space-y-5'>
                        <h4 className="text-xl font-bold">Round Robin Scheduling</h4>
                        <p className='text-lg'>Automatically assign meetings based on what makes the most for your team's goal - wheather by availability, priority or equity.</p>
                        <button className='font-medium text-blue-600'>Watch Video</button>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center md:items-start gap-3 px-6 py-5 border-2 border-[#EEEEEE] bg-white'>
                    <img className='h-36' src={png2} alt="" />
                    <div className='space-y-5'>
                        <h4 className="text-xl font-bold">Access Powerful Management Tools</h4>
                        <p className='text-lg'>Get new and existing userts up to speed and engaged with event type templates to make sure everyone's set up for efficient scheduling,all managed through one centralized builling solution</p>
                        <button className='font-medium text-blue-600'>Watch Video</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;