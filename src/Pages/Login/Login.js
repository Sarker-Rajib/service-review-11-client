import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/UseTitle/UseTitle';

const Login = () => {
    useTitle('Fx || Login');
    const { providerLogin, logIn, setLoading } = useContext(AuthContext);
    const [error, setError] = useState();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from.pathname || '/';

    // google login
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
                alert('login successful')
            })
            .catch(error => {
                console.log(error);
            });
    }

    // login with email and password
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                alert('Login Successful');
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.error(err)
                setError(err.message)
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <div className='py-4'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bordered rounded-lg bg-base-100 px-3 mx-auto py-4">
                <h2 className="text-4xl text-center pb-4">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className='pb-2'>
                        <label>Email</label>
                        <input name='email' type="text" placeholder="enter email" className="input w-full input-bordered" />
                    </div>
                    <div className='pb-8'>
                        <label>Password</label>
                        <input name='password' type="password" placeholder="enter password" className="input w-full input-bordered" />
                        <p className='text-red-600'>{error}</p>
                    </div>
                    <input className='btn w-full' type="Submit" />
                </form>
                <p className='pt-4'>New in this site ? <Link to='/register' className='text-cyan-600'>Please Register</Link></p>
                <div className='pt-4'>
                    <button onClick={handleGoogleLogin} className='btn'>Login With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;