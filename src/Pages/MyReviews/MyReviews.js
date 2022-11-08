import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myComments, setMyComments] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setMyComments(data);
            })
    }, [user?.email])

    return (
        <div className="max-w-screen-xl px-2 mx-auto py-4">

            <div className="grid gap-2 md:grid-cols-2">
                {
                    myComments.map(review => <MyReviewCard
                        key={review._id}
                        review={review}
                    ></MyReviewCard>)
                }
            </div>

        </div>
    );
};

export default MyReviews;