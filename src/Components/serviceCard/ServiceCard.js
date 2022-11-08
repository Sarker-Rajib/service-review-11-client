import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { img, serviceName, description, price, _id } = service;

    return (
        <div className="card overflow-hidden border border-lime-600 bg-base-100 shadow-xl">
            <div>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="c-imag" />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>{description.length > 100 ? description.slice(0, 100) : description}</p>
                <p>Price : {price}$</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;