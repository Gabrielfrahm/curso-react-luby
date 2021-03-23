import React, { useEffect } from 'react';
import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button';

const OrderSummary = (props) => {
    useEffect(()=> {
        console.log('[OrderSummary] WillUpdate')
    },[]);
    const ingredientSummary = Object.keys(props.ingredients).map(igKey =>{
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        );
    })
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <p><strong>Total Price: {props.price}</strong></p>
            <Button clicked={props.purchaseCanceled} btnType='Danger' >Cancel</Button>
            <Button clicked={props.purchaseContinued} >Continue</Button>
        </Aux>
    );
}

export default OrderSummary;