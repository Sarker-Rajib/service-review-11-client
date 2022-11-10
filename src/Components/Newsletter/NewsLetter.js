import React from 'react';

const NewsLetter = () => {
    return (
        <div className="hero bg-base-200 my-4 rounded-lg">
            <div className="hero-content text-center">
                <div className="py-8 max-w-lg">
                    <h1 className="text-5xl font-bold">Join Our Newsletter</h1>
                    <p className="py-6">Get monthly newletter and exclusive discount offer</p>
                    <input className='p-2 lg:mr-4 rounded-md w-full' type="email" placeholder='Enter email' />
                    <button className="btn px-8 mt-4 btn-primary">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;