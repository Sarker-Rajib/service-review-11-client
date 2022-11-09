import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/UseTitle/UseTitle';

const Register = () => {
    useTitle('Fx || Register')
    const { createUser, setLoading, updateUserProfile } = useContext(AuthContext);

    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(err => console.error(err))
    };

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
                // const user = result.user;
                form.reset();
                handleUpdateProfile(name, photoURL)
            })
            .catch(err => console.error(err))
            .finally(() => {
                setLoading(false);
             })
    };

    return (
        <div className='py-4'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bordered rounded-lg bg-base-100 px-3 mx-auto py-4">
                <h2 className="text-4xl text-center  pb-4">Register</h2>
                <form onSubmit={handleRegister}>
                    <div className='pb-2'>
                        <label>Full Name</label>
                        <input name='name' type="text" placeholder="enter your name" className="input w-full input-bordered" />
                    </div>
                    <div className='pb-2'>
                        <label>Photo URL</label>
                        <input name='photoURL' type="text" placeholder="enter photoURL" className="input w-full input-bordered" />
                    </div>
                    <div className='pb-2'>
                        <label>Email</label>
                        <input name='email' type="text" placeholder="enter email" className="input w-full input-bordered" />
                    </div>
                    <div className='pb-8'>
                        <label>Password</label>
                        <input name='password' type="password" placeholder="enter password" className="input w-full input-bordered" />
                    </div>
                    <input className='btn w-full' type="Submit" />
                </form>
                <p className='pt-4 '>Already Registered ? <Link to='/login' className='text-purple-600'>Please Login</Link></p>
            </div>
        </div>
    );
};

export default Register;