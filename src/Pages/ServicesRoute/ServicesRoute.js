import React from 'react';
import './ServiceRoute.css'
import bannerImg from '../../assets/images/banner/4.jpg'
import ServiceDetails from './ServiceDetails/ServiceDetails';
import RightSideNav from './RightSideNav/RightSideNav';

const ServicesRoute = () => {
    return (
        <div>
            <div className='relative mb-16'>
                <div className='banner-img'>
                    <img className='h-80 mb-10 rounded w-full' src={bannerImg} alt="" />
                </div>
                <div className="absolute flex justify-start  transform -translate-y-1/2 left-24  top-1/2">
                    <h1 className='text-6xl text-white font-bold' >
                        Service Details
                    </h1>

                </div>
            </div>
            <div class="grid grid-cols-3 gap-4">
                <div class="col-span-2">
                    <ServiceDetails></ServiceDetails>
                </div>
                <div class="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default ServicesRoute;