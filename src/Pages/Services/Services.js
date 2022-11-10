import React, { useEffect, useState } from 'react';
import ServiceCard from '../../Components/serviceCard/ServiceCard';
import Spinner from '../../Components/Spinner/Spinner';
import useTitle from '../../Hooks/UseTitle/UseTitle';

const Services = () => {
    useTitle('Fx || Services');

    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setAllServices(data)
            })
    }, [])

    return (
        <div className="max-w-screen-xl px-2 mx-auto py-4">

            {allServices.length <= 0 ? <Spinner></Spinner>
                :
                <>
                    <div className='gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4 pb-8'>
                        {
                            allServices.map((service) => <ServiceCard
                                key={service._id}
                                service={service}
                            ></ServiceCard>)
                        }
                    </div>
                </>
            }

        </div>
    );
};

export default Services;