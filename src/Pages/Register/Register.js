import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='py-4'>
            <div className="lg:max-w-screen-sm px-2 mx-auto py-4 bg-pink-400 rounded">
                <h2 className="text-4xl text-center text-white pb-4">Register</h2>
                <form>
                    <div className='pb-2'>
                        <label className='text-white'>Full Name</label>
                        <input name='name' type="text" placeholder="enter your name" className="input w-full" />
                    </div>
                    <div className='pb-2'>
                        <label className='text-white'>Email</label>
                        <input name='email' type="text" placeholder="enter email" className="input w-full" />
                    </div>
                    <div className='pb-8'>
                        <label className='text-white'>Password</label>
                        <input name='password' type="password" placeholder="enter password" className="input w-full" />
                    </div>
                    <input className='btn w-full' type="Submit" />
                </form>
                <p className='pt-4 text-white'>Already Registered ? <Link to='/login' className='text-cyan-200'>Please Login</Link></p>
            </div>
        </div>
    );
};

export default Register;