import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, photoURL, email, serviceId, comment } = review;
    return (
        <div className='bg-amber-600 p-3 rounded-md text-white'>
            <div className='flex align-middle'>
                <div className="image shrink-0 mr-4">
                    <img className='h-12 rounded-xl' src={photoURL} alt="avatar" />
                </div>
                <div className="name">
                    <h2>{name}</h2>
                </div>
            </div>
            <div className="comment">
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default ReviewCard;