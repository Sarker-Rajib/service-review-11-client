import React from 'react';

const MyReviewCard = ({ review, handleReviwDelete }) => {
    const { name, photoURL, comment, serviceId, serviceName, _id } = review;

    return (
        <div className='bg-slate-400 p-3 rounded-md text-white'>
            <div style={{ alignItems: "end" }} className='flex align-middle border-b-2 pb-2'>
                <div className="image shrink-0 mr-2">
                    <img className='h-12 rounded-xl' src={photoURL} alt="avatar" />
                </div>
                <div className="name">
                    <h2 className='text-2xl text-pink-100'>{name}</h2>
                </div>
            </div>
            <div className="comment">
                <h3 className='text-2xl'>Service : {serviceName}</h3>
                <p>{comment}</p>
            </div>
            <div className='flex justify-between'>
                <p className='pt-2'>Rating : 5/5</p>
                <p>Service Id : {serviceId}</p>
            </div>
            <div className='flex justify-end'>
                <button className='btn px-4'>Edit Review</button>
                <span className='mx-2'></span>
                <button onClick={() => handleReviwDelete(_id)} className='btn px-4'>Delete</button>
            </div>
        </div>
    );
};

export default MyReviewCard;