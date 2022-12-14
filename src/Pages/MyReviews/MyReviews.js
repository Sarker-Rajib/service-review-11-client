import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/UseTitle/UseTitle';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [myComments, setMyComments] = useState([]);
    const [hit, setHit] = useState();
    useTitle('Fx || My Reviews');

    useEffect(() => {
        fetch(`https://assignment-11-server-dusky.vercel.app/my-reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('jtoken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut();
                }
                return res.json()
            })
            .then(data => {
                setMyComments(data);
            })
    }, [user?.email, logOut, hit])

    const handleReviwDelete = (id) => {
        const proceed = window.confirm('Do you really want to delete ?');
        console.log(id);
        if (proceed) {
            fetch(`https://assignment-11-server-dusky.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        setHit(data)
                    }
                })
        }
    };

    return (
        <div className="max-w-screen-xl px-2 mx-auto py-4">

            {
                myComments.length <= 0 ?

                    <div style={{ minHeight: '400px' }} className="flex items-center justify-center w-full">
                        <div className='text-center'>
                            <p className='text-red-600'>No reviews were added</p>
                            <h2 className='text-4xl text-amber-400'>You have no review to show</h2>
                            <p className='text-green-600'>Please give a review to see</p>
                        </div>
                    </div>

                    :
                    <div className="grid gap-2 md:grid-cols-2">
                        {myComments.map(review => <MyReviewCard
                            key={review._id}
                            review={review}
                            handleReviwDelete={handleReviwDelete}
                        ></MyReviewCard>)}
                    </div>
            }
        </div>
    );
};

export default MyReviews;