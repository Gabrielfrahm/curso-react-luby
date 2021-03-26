import React, { useCallback } from 'react';
import CheckoutSummary from '../components/Order/CheckoutSummary';
const Checkout = (props) => {
    const state ={
        ingredients: {
            salad: 1,
            tomate: 1,
            bacon: 1,
            cheese: 1,
            meat: 1, 
        },
    }

    const handleCanceled = useCallback(() => {
        props.history.goBack();
    },[props.history])
    
    const handleContinued = useCallback(() => {
        props.history.replace('/checkout/contact-data');
    },[props.history])

    return (
        <div>
            <CheckoutSummary 
                ingredients={state.ingredients}
                checkoutCancelled={handleCanceled}
                checkoutContinued={handleContinued} 
            />
        </div>
    );
}

export default Checkout;