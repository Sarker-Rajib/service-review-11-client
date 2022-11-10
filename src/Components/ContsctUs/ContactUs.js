import React from 'react';
import addImage from '../../../src/assets/Images/addImage.png';

const ContactUs = () => {
    return (
        <div className=" p-8 bg-cyan-200 my-4 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="py-8">
                    <h1 className="text-5xl font-bold">Contact Us</h1>
                    <p className='pt-2'>Address : Maaritkulma 9732, Etelä-Patrik,Pohjanmaa,87836</p>
                    <p>Phone: +358 3 998 2241</p>
                    <p>Email : heikki.erkko@virtala.biz</p>
                    <p className="pt-6 pb-2">Send your message</p>
                    <form>
                        <input className='p-2 mb-2 lg:mr-4 rounded-md w-full' type="text" placeholder='Enter Name' />
                        <input className='p-2 lg:mr-4 rounded-md w-full' type="email" placeholder='Enter email' />
                        <textarea className='w-full mt-2' cols="30" rows="5"></textarea>
                        <button className="btn px-12 mt-2 rounded-lg btn-primary">Send</button>
                    </form>
                </div>
                <div className="addImage lg:p-8">
                    <img className='rounded' src={addImage} alt="addImage" />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;