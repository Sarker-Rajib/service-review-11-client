import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import ContactUs from '../../Components/ContsctUs/ContactUs';
import NewsLetter from '../../Components/Newsletter/NewsLetter';
import ServiceCard from '../../Components/serviceCard/ServiceCard';
import Spinner from '../../Components/Spinner/Spinner';
import useTitles from '../../Hooks/UseTitle/UseTitle';
import AboutUs from './AboutUs';


const Home = () => {
    const services3 = useLoaderData();
    useTitles('Fx || Home')

    return (
        <div className="max-w-screen-xl px-2 mx-auto py-4">

            {services3.length <= 0 ? <Spinner></Spinner>
                :
                <>
                    <div className='gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4 pb-8'>
                        {
                            services3.map((service) => <ServiceCard
                                key={service._id}
                                service={service}
                            ></ServiceCard>)
                        }
                    </div>
                </>
            }

            <div className="text-center pt-4 pb-8">
                <Link to='/services'>
                    <button className='btn px-12'>View All</button>
                </Link>
            </div>

            <Banner></Banner>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
            <NewsLetter></NewsLetter>

        </div>
    );
};

export default Home;