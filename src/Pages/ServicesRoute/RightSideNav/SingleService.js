import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
    console.log(service)
    return (
        <div className=' bg-white py-2 px-2 rounded mb-5'>
            <div className='flex justify-between'>
                <h3 className='text-lg font-bold'>{service.title}</h3>
                <Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-orange-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default SingleService;