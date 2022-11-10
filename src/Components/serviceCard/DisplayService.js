import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import ReviewCard from '../ReviewCard/ReviewCard';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/UseTitle/UseTitle';
import { toast } from 'react-toastify';

const DisplayService = () => {
    useTitle('Fx || Service Details');
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [viewDependency, setviewDependency] = useState([]);
    const service = useLoaderData();
    const { img, serviceName, description, price, serviceId } = service;

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const comment = form.comment.value;
        if(user){

        }

        const AReview = {
            serviceName: serviceName,
            name: user?.displayName,
            photoURL: user?.photoURL,
            email: user?.email,
            serviceId: serviceId,
            comment
        }

        console.log(AReview);

        fetch('https://assignment-11-server-dusky.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(AReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    setviewDependency(data)
                    alert('Comment Added Successfully')
                    form.reset();
                }
            })
    };

    // orders?email=${uEmail}

    useEffect(() => {
        fetch(`https://assignment-11-server-dusky.vercel.app/reviews?serviceId=${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [viewDependency, serviceId])

    return (
        <div className='py-4'>
            <div className="lg:max-w-screen-lg px-2 mx-auto py-4 bg-cyan-100 rounded-lg">
                <div className="card flex lg:flex-row overflow-hidden border border-lime-600 bg-base-100 shadow-xl">
                    <div className='shrink-0 lg:w-2/4'>
                        <PhotoProvider>
                            <PhotoView src={img}>
                                <img src={img} alt="c-imag" />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">{serviceName}</h2>
                        <p>{description}</p>
                        <p>Price : {price}$</p>
                    </div>
                </div>
            </div>
            <div className="lg:max-w-screen-lg mt-2 px-2 mx-auto py-4 bg-cyan-100 rounded-lg">
                <h2 className='pb-2 text-center text-3xl text-slate-600'>Reviews</h2>
                <div className="grid gap-2 md:grid-cols-2">
                    {
                        reviews.map(review => <ReviewCard
                            key={review._id}
                            review={review}
                        ></ReviewCard>)
                    }
                </div>
            </div>
            <div className="lg:max-w-screen-lg mt-2 px-2 mx-auto py-4 bg-cyan-100 rounded-lg">
                <h2 className='text-2xl text-slate-600 pb-2'>Give Your review</h2>
                {
                    user ?
                        <form onSubmit={handleCommentSubmit}>
                            <div className='grid grid-cols-1 lg:grid-cols-2'>
                                <div className='p-1'>
                                    <h1>Name : <span>{user?.displayName}</span></h1>
                                </div>
                                <div className='p-1'>
                                    <h2>Email : <span>{user?.email}</span></h2>
                                </div>
                                <div className='p-1'>
                                    <p>Service id: {serviceId}</p>
                                </div>
                            </div>
                            <label>Write Your Comment below</label>
                            <textarea name="comment" rows="6" className='w-full p-4 rounded-lg bg-slate-500 text-white'></textarea>
                            <div className="text-end">
                                <input type="Submit" className='btn px-8' />
                            </div>
                        </form>
                        :
                        <div className="text-center">
                            <h3 className='text-amber-600'>Please <Link className='text-green-800 border p-2 bg-slate-100 rounded-md' to='/login'>Login</Link> to give your review</h3>
                        </div>
                }
            </div>
        </div>
    );
};

export default DisplayService;