import React from 'react';
import useTitle from '../../Hooks/UseTitle/UseTitle';

const AddService = () => {
    useTitle('Fx || Add Service');

    const handleServiceAdding = (e) => {
        e.preventDefault();
        const form = e.target;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const img = form.img.value;
        const serviceId = form.serviceId.value;
        const description = form.description.value;

        const newService = {
            serviceName,
            price,
            img,
            serviceId,
            description
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged === true) {
                alert('Data saved successfully')
                form.reset()
            }
        })

    };

    return (
        <div className="max-w-screen-xl p-4 my-4 mx-2 xl:mx-auto bg-zinc-500 rounded-xl">
            <h2 className="text-3xl text-white font-bold text-center">Add Service</h2>
            <form onSubmit={handleServiceAdding}>
                <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 ">
                    <div className="form-control ">
                        <label className="label ">
                            <span className="label-text text-white">Service Name</span>
                        </label>
                        <input name="serviceName" type="text" placeholder="enter the service name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Image link</span>
                        </label>
                        <input name="img" type="text" placeholder="Image link (url)" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Price ($)</span>
                        </label>
                        <input name="price" type="text" placeholder="Price $" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Service Id</span>
                        </label>
                        <input name="serviceId" type="text" placeholder="service id" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Description</span>
                    </label>
                    <textarea name="description" style={{ height: '160px' }} className='input input-bordered'></textarea>
                </div>
                <div className='text-center py-3'>
                    <input type="submit" className='btn bg-yellow-500 px-12' />
                </div>
            </form>
        </div>
    );
};

export default AddService;