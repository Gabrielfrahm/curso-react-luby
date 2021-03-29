import React, { useCallback, useEffect, useState } from 'react';
import { Route } from 'react-router';
import CheckoutSummary from '../components/Order/CheckoutSummary';
import ContactData from './ContactData';
const Checkout = (props) => {

    const [ingredient, setIngredients] = useState({});
    const [price , setPrice] = useState();


    useEffect(() => {
        const query = new URLSearchParams(props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            if(param[0] === 'price'){
                price = param[1];
            }else{
                ingredients[param[0]] = +param[1];
            }
        }
        setIngredients(ingredients);
        setPrice(price);

    }, [props.location.search])

    const handleCanceled = useCallback(() => {
        props.history.goBack();
    },[props.history])
    
    const handleContinued = useCallback(() => {
        props.history.replace('/checkout/contact-data' + props.location.search);
    },[props.history, props.location.search])

    return (
        <div>
            <CheckoutSummary 
                ingredients={ingredient}
                checkoutCancelled={handleCanceled}
                checkoutContinued={handleContinued} 
            />
            <Route path={props.match.path + '/contact-data'} render={() => ( <ContactData ingredients={ingredient} price={price}/>)} />
        </div>
    );
}

export default Checkout;