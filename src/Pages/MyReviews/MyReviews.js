import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/UseTitle/UseTitle';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myComments, setMyComments] = useState([]);
    const [hit, setHit] = useState();
    useTitle('Fx || My Reviews');

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyComments(data);
            })
    }, [user?.email, hit])

    const handleReviwDelete = (id) => {
        const proceed = window.confirm('Do you really want to delete ?');
        console.log(id);
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
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

            <div className="grid gap-2 md:grid-cols-2">

                {
                    myComments.map(review => <MyReviewCard
                        key={review._id}
                        review={review}
                        handleReviwDelete={handleReviwDelete}
                    ></MyReviewCard>)
                }

            </div>

        </div>
    );
};

export default MyReviews;