import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='mb-8'>
            <div className='text-center mb-4'>
                <p className='text-2xl  font-bold text-orange-500'>Popular Products</p>
                <h1 className='text-5xl font-semibold my-4'>Browse Our Products</h1>
                <p className='text-xl'>the majority have suffered alteration in some form, by injected humour, or randomised
                    <br />
                    words which don't look even slightly believable.  </p>
            </div>
            <div className='grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-6 mb-10'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-outline btn-error">More Products</button>
            </div>
        </div>
    );
};

export default Products;