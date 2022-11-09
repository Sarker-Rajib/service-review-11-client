import React from 'react';
import about from './../../assets/Images/about.png';

const AvoutUs = () => {
    return (
        <div className=' bg-slate-200 my-3 p-2 rounded-xl'>
            <h1 className='text-4xl text-center py-2'>Abou Us</h1>

            <div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
                <div className="card text-white bg-cyan-300 rounded-box p-4">
                    <p className='text-3xl'>Welcome !</p>
                    <p className='text-xl'>We are group of transporter!</p>
                    <p className='text-xl'>We care for your needs, your product values and your emotions. so, we are here to stand beside you to save your time </p>
                    <br />
                    <p className='text-xl'>Just knock us, we promise you will get us in time.</p>
                    <p className='text-xl'>We are promised, We are dedicated.</p>
                    <p className='text-xl'>Thanks you.</p>
                </div>
                <div className="card overflow-hidden bg-cyan-300 rounded-box place-items-center">
                    <img className='w-full' src={about} alt="alt-img" />
                </div>
            </div>
        </div>
    );
};

export default AvoutUs;