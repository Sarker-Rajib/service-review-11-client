import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Components/serviceCard/ServiceCard';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/UseTitle/UseTitle';

const Services = () => {
    useTitle('Fx || Services');

    const {setLoading} = useContext(AuthContext);
    const allServices = useLoaderData();

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