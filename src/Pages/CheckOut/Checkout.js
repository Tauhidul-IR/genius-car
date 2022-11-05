import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import bannerImg from '../../assets/images/banner/4.jpg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Checkout = () => {
    const service = useLoaderData()
    const { user } = useContext(AuthContext);
    const { _id, title, price } = service;


    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const name = `${firstName} ${lastName}`
        const phone = form.phone.value;
        const message = form.message.value;
        const email = user?.email || "Unregistered";


        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message,
        }
        // if (phone.length > 11 && phone.length < 11) {
        //     alert('Phone number should be 11 characters')
        // }

        fetch('https://genius-car-server-pi.vercel.app/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset()
                    alert('Order Placed Successfully')
                }

            })
            .catch(error => console.error(error))

    }






    return (
        <div>
            <div className='relative mb-16'>
                <div className='banner-img'>
                    <img className='h-80 mb-10 rounded w-full' src={bannerImg} alt="" />
                </div>
                <div className="absolute flex justify-start  transform -translate-y-1/2 left-24  top-1/2">
                    <h1 className='text-6xl text-white font-bold' >
                        Check Out
                    </h1>

                </div>
            </div>

            <div className='text-center font-bold'>
                <h2 className='text-2xl'>You are Order to :</h2>
                <h2 className='text-4xl'>{title}</h2>
                <h5 className='text-xl'>Price : $ {price}</h5>
            </div>

            <div className='bg-slate-200 p-20 my-24'>
                <form onSubmit={handlePlaceOrder}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input type="text" name='firstName' placeholder="First Name" className="input input-bordered    w-full " />
                        <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered   w-full " />
                        <input type="text" name='phone' placeholder="Your Phone" className="input input-bordered   w-full " required />
                        <input type="email" name='email' placeholder="Your Email" defaultValue={user?.email} className="input input-bordered    w-full " readOnly />
                    </div>
                    <textarea name='message' className="textarea w-full my-4 h-60" placeholder="Your Message"></textarea>
                    {/* <textarea name='message' className="textarea textarea-bordered" placeholder="Your Message"></textarea> */}
                    {/* button */}
                    <input className="btn btn-error w-full" type="submit" value="Place Your Order" />
                </form>

            </div>
        </div>
    );
};

export default Checkout;