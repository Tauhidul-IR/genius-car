import React from 'react';
import { FaStar } from "react-icons/fa";

const Product = ({ product }) => {
    console.log(product)
    const { _id, title, img, price } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className=''>
                <div className='bg-slate-200 m-4 rounded'>
                    <figure><img className='h-72 ' src={img} alt="" /></figure>
                </div>
            </div>
            <div className="card-body items-center">
                <div className='flex text-yellow-500'>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
                <h2 className="card-title text-3xl">{title}</h2>
                <p className='text-xl text-orange-500 font-bold'>Price : ${price}</p>

            </div>
        </div>
    );
};

export default Product;