import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleService from './SingleService';
import logo from '../../../assets/logo.svg'

const RightSideNav = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://genius-car-server-pi.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            {/* Service part */}
            <div className=' bg-slate-100 rounded'>
                <div className='mx-10 py-10'>
                    <h1 className='text-2xl font-bold mb-4'>Services</h1>
                    {
                        services.map(service => <SingleService key={service._id} service={service}></SingleService>)
                    }

                </div>
            </div>

            {/* Download part */}
            <div className=' bg-black my-8 rounded'>
                <div className='mx-10 py-10'>
                    <h1 className='text-2xl font-bold mb-4 text-white'>Downloads</h1>

                    <div className=' bg-white py-2 px-2 rounded mb-5'>
                        <div className='flex justify-between'>
                            <div>
                                <div>

                                </div>
                                <div>
                                    <h3 className='text-lg font-bold'>Our Brochure</h3>
                                    <p>download</p>
                                </div>
                            </div>
                            <Link className='bg-orange-500 text-white p-3 rounded'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-while">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </Link>
                        </div>

                    </div>
                    <div className=' bg-white py-2 px-2 rounded mb-5'>
                        <div className='flex justify-between'>
                            <div>
                                <div>

                                </div>
                                <div>
                                    <h3 className='text-lg font-bold'>Company Details</h3>
                                    <p>download</p>
                                </div>
                            </div>
                            <Link className='bg-orange-500 text-white p-3 rounded'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-while">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* offer part */}
            <div className=' bg-black my-8 rounded'>
                <div className='mx-10 py-10'>
                    <div className='flex flex-col '>
                        <img className='text-white' src={logo} alt="" />
                        <h3 className='text-white text-center text-2xl font-semibold my-2'>Need Help? We Are Here <br />
                            To Help You</h3>
                        <div className=' bg-white py-2 px-2 rounded mb-5 text-center'>
                            <div className=''>
                                <div className='text-center py-5'>
                                    <h4 className='text-2xl font-bold'> <span className='text-orange-500'>Car Doctor</span> Special</h4>
                                    <p className='text-xl font-bold'>Save up to <span className='text-orange-500'>60% off</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className='text-5xl font-bold'>Price : $ 24000</h1>
        </div>
    );
};

export default RightSideNav;