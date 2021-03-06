import React, { useEffect } from 'react';
import Order from '../../components/Order';
import WithErrorHandler from '../../hoc/WithErrorHendler';
import * as actions from '../../store/actions/index';
import api from '../../axios-orders';
import Spinner from '../../components/UI/Spinner';
import { connect } from 'react-redux';

const Orders = (props) => {

    useEffect(()=> {
        props.onFetchOrders(props.token, props.userId);
    },[]);

    return (
        <div>
           {!props.loading  ?
                 props.orders.map(order => (
                    <Order key={order.id} 
                        ingredients={order.ingredients}
                        price={+order.price}
                    />
                )) :
                <Spinner />
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.UserId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (WithErrorHandler(Orders, api));