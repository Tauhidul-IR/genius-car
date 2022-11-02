import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    console.log(user)


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete this??');
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = orders.filter(odr => odr._id !== id)
                        setOrders(remaining);
                    }
                })
        }
    }

    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== id);
                    const approving = orders.find(odr => odr._id === id)
                    approving.status = 'Approved';

                    const newOrder = [approving, ...remaining]
                    setOrders(newOrder)
                }
            })
    }


    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [user?.email])
    return (
        <div>
            <h2 className='text-4xl text-center my-10 font-bold'>You have {orders.length} orders</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <tbody>
                        {
                            orders.map(order => <OrderRow key={order._id} order={order} handleDelete={handleDelete} handleStatusUpdate={handleStatusUpdate}></OrderRow>)
                        }
                        <h1>hello</h1>

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default Orders;