import React from 'react';

const ReviewCard = () => {
    return (
        <div className='bg-amber-600 p-3 rounded-md text-white'>
            <div className='flex'>
                <div className="image shrink-0">Image</div>
                <div className="name">Name</div>
            </div>
            <div className="comment">
                <p>Here goes comment</p>
            </div>
        </div>
    );
};

export default ReviewCard;