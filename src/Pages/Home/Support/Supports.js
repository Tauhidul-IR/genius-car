import React, { useEffect, useState } from 'react';
import img1 from '../../../assets/icons/team.svg'
import img2 from '../../../assets/icons/support.svg'
import img3 from '../../../assets/icons/best.svg'
import img4 from '../../../assets/icons/guranty.svg'
import img5 from '../../../assets/icons/deliveryt.svg'


const Supports = () => {


    return (
        <div className='mb-12'>
            <div className='text-center mb-4'>
                <p className='text-2xl  font-bold text-orange-500'>Core Features</p>
                <h1 className='text-5xl font-semibold my-4'>Why Choose Us</h1>
                <p className='text-xl'>the majority have suffered alteration in some form, by injected humour, or randomised
                    <br />
                    words which don't look even slightly believable.  </p>
            </div>
            <div>
                <div className='grid grid-cols-5'>
                    <div className='w-3/4 hover:bg-orange-400 hover:text-white flex flex-col justify-center items-center border-black bg-slate-100 py-6 rounded'>
                        <img className='w-20' src={img1} alt="" />
                        <h3 className='text-xl font-bold mt-4'>Expert Team</h3>
                    </div>
                    <div className='w-3/4 hover:bg-orange-400 hover:text-white flex flex-col justify-center items-center border-black bg-slate-100 py-6 rounded'>
                        <img src={img2} alt="" />
                        <h3 className='text-xl font-bold mt-4'>24/7 Support</h3>
                    </div>
                    <div className='w-3/4 hover:bg-orange-400 hover:text-white flex flex-col justify-center items-center border-black bg-slate-100 py-6 rounded'>
                        <img src={img3} alt="" />
                        <h3 className='text-xl font-bold mt-4'>Best Equipment</h3>
                    </div>
                    <div className='w-3/4 hover:bg-orange-400 hover:text-white flex flex-col justify-center items-center border-black bg-slate-100 py-6 rounded'>
                        <img src={img4} alt="" />
                        <h3 className='text-xl font-bold mt-4'>100% Guranty</h3>
                    </div>
                    <div className='w-3/4 hover:bg-orange-400 hover:text-white flex flex-col justify-center items-center border-black bg-slate-100 py-6 rounded'>
                        <img src={img5} alt="" />
                        <h3 className='text-xl font-bold mt-4'>Timely Delivery</h3>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Supports;