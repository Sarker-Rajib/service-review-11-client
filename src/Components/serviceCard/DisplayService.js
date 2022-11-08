import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import ReviewCard from '../ReviewCard/ReviewCard';

const DisplayService = () => {
    const service = useLoaderData();
    const { img, serviceName, description, price } = service;

    const handleCommentSubmit = () => {
        
    };

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
                <ReviewCard></ReviewCard>
            </div>
            <div className="lg:max-w-screen-lg mt-2 px-2 mx-auto py-4 bg-cyan-100 rounded-lg">
                <h2 className='text-2xl text-slate-600 pb-2'>Give Your review</h2>
                <form onSubmit={handleCommentSubmit}>
                    <label>Write Your Comment below</label>
                    <textarea name="comment" rows="6" className='w-full p-4 rounded-lg bg-slate-500 text-white'></textarea>
                    <div className="text-end">
                        <input type="Submit" className='btn px-8'/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DisplayService;