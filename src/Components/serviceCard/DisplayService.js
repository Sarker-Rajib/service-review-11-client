import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DisplayService = () => {
    const service = useLoaderData();
    const { img, serviceName, description, price, _id } = service;

    return (
        <div className='py-4'>
            <div className="lg:max-w-screen-lg px-2 mx-auto py-4 bg-cyan-100 rounded-lg">
                <div className="card flex lg:flex-row overflow-hidden border border-lime-600 bg-base-100 shadow-xl">
                    <div className='shrink-0 lg:w-2/4'>
                        <img src={img} alt="c-imag" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">{serviceName}</h2>
                        <p>{description}</p>
                        <p>Price : {price}$</p>
                    </div>
                </div>
            </div>
            <div className="lg:max-w-screen-lg mt-2 px-2 mx-auto py-4 bg-cyan-100 rounded-lg">
                <h2>Reviews</h2>
            </div>
        </div>
    );
};

export default DisplayService;