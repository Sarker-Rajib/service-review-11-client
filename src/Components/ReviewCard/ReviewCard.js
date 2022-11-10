import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, photoURL, comment, commentedAt } = review;
    // console.log(review);
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
            <p>{commentedAt}</p>
            <div className="comment">
                <p>{comment}</p>
                <p className='pt-2'>Rating : 5/5</p>
            </div>
        </div>
    );
};

export default ReviewCard;