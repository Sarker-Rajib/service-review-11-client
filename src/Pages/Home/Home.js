import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import addImage from '../../../src/assets/Images/addImage.png';
import ServiceCard from '../../Components/serviceCard/ServiceCard';
import useTitles from '../../Hooks/UseTitle/UseTitle';
import AboutUs from './AboutUs';


const Home = () => {
    const services3 = useLoaderData();
    useTitles('Fx || Home')

    return (
        <div className="max-w-screen-xl px-2 mx-auto py-4">
            <div className='gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4'>
                {
                    services3.map((service) => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className="text-center pt-4 pb-8">
                <Link to='/services'>
                    <button className='btn px-12'>View All</button>
                </Link>
            </div>
            
            <AboutUs></AboutUs>

            <div className="addImage">
                <img className='rounded' src={addImage} alt="addImage" />
            </div>
        </div>
    );
};

export default Home;