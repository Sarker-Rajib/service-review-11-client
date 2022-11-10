import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EditReview = () => {
    const thisReview = useLoaderData();
    const { name, photoURL, comment, serviceId, serviceName, _id } = thisReview;

    const handleUpdateReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedComment = form.comment.value;
        // console.log(comment);
        const comment = {
            comment: updatedComment
        }

        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
        .then(res => res.json())
        .then((data) => {
            if (data.modifiedCount > 0) {
                alert('Succefully updated');
            }
        })
    }

    return (
        <div className="max-w-screen-xl px-2 mx-auto py-4">
            <div className="flex pb-3" style={{ alignItems: 'end' }}>
                <img src={photoURL} alt="avatar" className='h-14' />
                <h2 className='text-2xl pl-2 text-green-600'>{name}</h2>
            </div>
            <div className="text-black">
                <div className="">
                    <form onSubmit={handleUpdateReview}>
                        <p className='text-2xl'>{serviceName} <span className='text-xl'>{serviceId}</span></p>
                        <p className='pb-2'>Please edit your comment :</p>
                        <textarea name="comment" defaultValue={comment} style={{ minHeight: '150px' }} type="text" className='w-full input input-bordered' />
                        <button type='submit' className='btn px-8 mt-2'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditReview;