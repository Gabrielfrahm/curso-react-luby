import React, { useEffect, useState } from 'react';
import Order from '../../components/Order';
import WithErrorHandler from '../../hoc/WithErrorHendler';

import api from '../../axios-orders';

const Orders = (props) => {
    const [orders, setOrders] = useState([]);
    const [, setLoading] = useState(true);

    useEffect(()=> {
        setLoading(true);
        api.get('/orders.json').then(
            response => {
                const orderList = [];
                for(let key in response.data){
                    orderList.push({
                        ...response.data[key],
                        id: key,
                    });
                   
                }
                setOrders(orderList);
                setLoading(false);
            }
        ).catch(err => {
            setLoading(false);
        })
    }, []);

    return (
        <div>
            {orders.map(order => (
                <Order key={order.id} 
                    ingredients={order.ingredients}
                    price={+order.price}
                />
            ))}
        </div>
    );
}
// eslint-disable-next-line import/no-anonymous-default-export
export default () => WithErrorHandler(Orders, api)();