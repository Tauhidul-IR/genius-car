import React from 'react';
import brushImg from '../../../assets/images/banner/3.jpg'
import img2 from '../../../assets/images/banner/2.jpg'

const ServiceDetails = () => {
    return (
        <div>
            {/* Banner <img src="" alt="" /> */}
            <div>
                <img className='h-96 w-full rounded-2xl' src={brushImg} alt="" />
            </div>

            {/* Normal text */}
            <h1 className='text-5xl mt-10 font-bold'>Unique Car Engine Service</h1>

            <p className='text-xl mt-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>

            {/* 4 topic part */}
            <div className='grid grid-cols-2 grid-rows-2 gap-4 my-12'>
                <div className='bg-slate-200 rounded-xl h-48 p-8 border-4 border-t-red-500'>
                    <div>
                        <h1 className='text-2xl font-bold'>Instant Car Services</h1>
                        <p className='text-lg font-semibold'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                    </div>
                </div>
                <div className='bg-slate-200 rounded-xl h-48 p-8 border-4 border-t-red-500'>
                    <div>
                        <h1 className='text-2xl font-bold'>24/7 Quality Service</h1>
                        <p className='text-lg font-semibold'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                    </div>
                </div>
                <div className='bg-slate-200 rounded-xl h-48 p-8 border-4 border-t-red-500'>
                    <div>
                        <h1 className='text-2xl font-bold'>Easy Customer Service</h1>
                        <p className='text-lg font-semibold'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                    </div>
                </div>
                <div className='bg-slate-200 rounded-xl h-48 p-8 border-4 border-t-red-500'>
                    <div>
                        <h1 className='text-2xl font-bold'>Quality Cost Service</h1>
                        <p className='text-lg font-semibold'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                    </div>
                </div>

            </div>
            <p className='text-xl mb-10'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>



            {/* Simple step Process */}
            <h1 className='text-5xl mt-10 font-bold mb-6'>3 Simple Steps to Process</h1>
            <p className='text-xl mb-10'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>

            <div className='mb-14'>
                <div className='grid grid-cols-3 gap-4' >
                    <div className='text-center bg-slate-100 h-72 flex flex-col items-center justify-center rounded border-2 border-slate-600'>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='bg-orange-200 w-20 h-20 rounded-full flex items-center justify-center'>
                                <div className='bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center'>
                                    <h1 className='text-white font-bold'>01</h1>
                                </div>
                            </div>
                            <h1 className='text-xl font-bold'>Step One</h1>
                            <p className='text-lg'>It uses a dictionary <br /> of over 200 .</p>
                        </div>
                    </div>
                    <div className='text-center bg-slate-100 h-72 flex flex-col items-center justify-center rounded border-2 border-slate-600'>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='bg-orange-200 w-20 h-20 rounded-full flex items-center justify-center'>
                                <div className='bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center'>
                                    <h1 className='text-white font-bold'>02</h1>
                                </div>
                            </div>
                            <h1 className='text-xl font-bold'>Step Two</h1>
                            <p className='text-lg'>It uses a dictionary <br /> of over 200 .</p>
                        </div>
                    </div>
                    <div className='text-center bg-slate-100 h-72 flex flex-col items-center justify-center rounded border-2 border-slate-600'>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='bg-orange-200 w-20 h-20 rounded-full flex items-center justify-center'>
                                <div className='bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center'>
                                    <h1 className='text-white font-bold'>03</h1>
                                </div>
                            </div>
                            <h1 className='text-xl font-bold'>Step Three</h1>
                            <p className='text-lg'>It uses a dictionary <br /> of over 200 .</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Video part */}
            <div className='relative mb-16'>
                <div className=''>
                    <img className='h-80 mb-10 rounded w-full' src={img2} alt="" />
                </div>
                <div className="absolute flex justify-start  transform -translate-y-1/2 left-24  top-1/2">
                    <h1 className='text-6xl text-white font-bold' >
                        video
                    </h1>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;