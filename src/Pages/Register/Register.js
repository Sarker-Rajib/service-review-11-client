import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, photoURL, email, password);
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    };

    return (
        <div className='py-4'>
            <div className="lg:max-w-screen-sm px-2 mx-auto py-4 bg-pink-400 rounded">
                <h2 className="text-4xl text-center text-white pb-4">Register</h2>
                <form onSubmit={handleRegister}>
                    <div className='pb-2'>
                        <label className='text-white'>Full Name</label>
                        <input name='name' type="text" placeholder="enter your name" className="input w-full" />
                    </div>
                    <div className='pb-2'>
                        <label className='text-white'>Photo URL</label>
                        <input name='photoURL' type="text" placeholder="enter photoURL" className="input w-full" />
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