import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Components/serviceCard/ServiceCard';
import useTitle from '../../Hooks/UseTitle/UseTitle';

const Services = () => {
    const allServices = useLoaderData();
    useTitle('Fx || Services');

    console.log(allServices);

    return (
        <div className="max-w-screen-xl px-2 mx-auto py-4">
            <div className='gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4 pb-8'>


                {
                    allServices.map((service) => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;