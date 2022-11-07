import React from 'react';
import addImage from '../../../src/assets/Images/addImage.png';


const Home = () => {
    return (
        <div className="max-w-screen-xl px-2 mx-auto py-4">
            <h1>This is Home</h1>

            <div className="addImage">
                <img className='rounded' src={addImage} alt="addImage" />
            </div>
        </div>
    );
};

export default Home;