import React from 'react';

const Error = () => {
    return (
        <div className="min-h-screen flex justify-center" style={{alignItems: 'center'}}>
            <div className="border rounded-lg border-red-600 p-6">
                <h2 className='text-4xl text-red-800'>Error 404</h2>
                <p className='text-warning text-2xl'>The page you are looking for is not avaiable</p>
                <p className='text-success text-2xl'>Thank You</p>
            </div>
        </div>
    );
};

export default Error;