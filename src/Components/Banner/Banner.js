import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero" style={{ minHeight:'60vh',backgroundImage: `url("https://i.pinimg.com/736x/85/ef/5c/85ef5c51d71f316cd111192a8ac98743.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-end text-neutral-content">
                <div className="max-w-5xl">
                    <h1 className="mb-5 text-3xl font-bold">Hello, This is <br /> <span className='text-5xl'>Fast Express</span> </h1>
                    <p className="mb-5">
                        We are very much glad to have you. we are just waiting for your orders.
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <p className='pb-2'>Let's have a look of our services</p>
                    <Link to='/services'><button className="btn px-8 btn-warning text-white">Let's Go</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;