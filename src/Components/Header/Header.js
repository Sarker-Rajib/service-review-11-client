import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../src/assets/Images/full-logo.png';

const Header = () => {
    const menuItems = <>
        <li className='font-semibold text-white lg:mr-2'><Link to='/'>Home</Link></li>
        <li className='font-semibold text-white'><Link to='/blog'>Blog</Link></li>
        {
            <li className='font-semibold text-white'><Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="bg-purple-500">
            <div className="max-w-screen-xl mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div>
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end lg:hidden">
                            <label tabIndex={0} className="btn btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-orange-400 rounded-box w-52 mt-4">
                                {menuItems}
                            </ul>
                        </div>
                        <div className='hidden lg:flex'>
                            <ul className="menu menu-horizontal p-0">
                                {menuItems}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;