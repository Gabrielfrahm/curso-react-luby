import * as actionTypes from './actionTypes';
import api from '../../axios-orders';


export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData,
    }
}


export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData, token ) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        api.post(`/orders.json?auth=${token}`, orderData).then(
            response => {
                console.log(response.data)
                dispatch(purchaseBurgerSuccess(response.data, orderData ))
            }
        )
            .catch(error => {
               dispatch(purchaseBurgerFail(error))
            });
    }
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        error: error
    }
}

export const fetchOrderStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const fetchOrders = (token, userId) => {
    return dispatch => {
        const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`
        api.get(`/orders.json${queryParams}`).then(
            response => {
                const orderList = [];
                for(let key in response.data){
                    orderList.push({
                        ...response.data[key],
                        id: key,
                    });
                   
                }
                dispatch(fetchOrdersSuccess(orderList))
                
            }
        ).catch(err => {
            
            dispatch(fetchOrdersFail(err))
        })
    }
}