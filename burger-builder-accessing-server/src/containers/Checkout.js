import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';
import CheckoutSummary from '../components/Order/CheckoutSummary';
import ContactData from './ContactData';
const Checkout = (props) => {

    const [, setIngredients] = useState({});
    const [, setPrice] = useState();


    useEffect(() => {
        const query = new URLSearchParams(props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        setIngredients(ingredients);
        setPrice(price);

    }, [props.location.search])

    const handleCanceled = useCallback(() => {
        props.history.goBack();
    }, [props.history])

    const handleContinued = useCallback(() => {
        props.history.replace('/checkout/contact-data' + props.location.search);
    }, [props.history, props.location.search])

    return (
        <div>
            {props.ings ? 
            <>
                <CheckoutSummary 
                    ingredients={props.ings}
                    checkoutCancelled={handleCanceled}
                    checkoutContinued={handleContinued} 
                />
                <Route path={props.match.path + '/contact-data'} component={ContactData} />
            </>
                : <Redirect to="/" />}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout);