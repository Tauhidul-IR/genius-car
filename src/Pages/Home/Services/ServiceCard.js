import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { img, title, _id, price } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='p-4 rounded-3xl' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl">{title}</h2>
                <div className="card-actions justify-end">
                    <p className='text-2xl font-semibold text-orange-500'>Price : ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-orange-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;