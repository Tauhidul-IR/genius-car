import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    //-------------
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    //---------


    //-------------------------
    return (
        <div className='mb-10'>
            {/* ---------------------- */}
            <div className='text-center mb-4'>
                <p className='text-2xl  font-bold text-orange-500'>Services</p>
                <h1 className='text-5xl font-semibold my-4'>Our Service Area</h1>
                <p className='text-xl'>the majority have suffered alteration in some form, by injected humour, or randomised <br />
                    words which don't look even slightly believable. </p>
            </div>
            {/* -------------------------- */}

            {/* ******************************* */}
            <div className='grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-6 mb-10'>
                {
                    services.map(service => <ServiceCard
                        key={service._id} service={service}
                    ></ServiceCard>)
                }
            </div>
            {/* ******************************* */}
            <div className='text-center'>
                <button className="btn btn-outline btn-error">More Services</button>
            </div>
        </div>
    );
};

export default Services;