import React from 'react';
import useTitle from '../../Hooks/UseTitle/UseTitle';

const AddService = () => {
    useTitle('Fx || Add Service');

    return (
        <div className="max-w-screen-xl p-4 my-4  mx-auto bg-zinc-500 rounded-xl">
            <h2 className="text-3xl text-white font-bold text-center">Add Service</h2>
            <form>
                <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 ">
                    <div className="form-control ">
                        <label className="label ">
                            <span className="label-text text-white">Service Name</span>
                        </label>
                        <input type="text" placeholder="enter the service name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Image link</span>
                        </label>
                        <input type="text" placeholder="Image link (url)" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Price ($)</span>
                        </label>
                        <input type="text" placeholder="Price $" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Service Id</span>
                        </label>
                        <input type="text" placeholder="service id" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Description</span>
                    </label>
                    <textarea name="de" style={{ height: '160px' }} className='input input-bordered'></textarea>
                </div>
                <div className='text-center py-3'>
                    <input type="submit" className='btn px-12'/>
                </div>
            </form>
        </div>
    );
};

export default AddService;