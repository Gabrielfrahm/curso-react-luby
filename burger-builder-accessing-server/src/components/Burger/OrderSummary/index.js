import React from 'react';
import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button';
import {Div} from './styles';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey =>{
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        );
    })
    return(
        <Aux>
            <Div>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Continue to checkout?</p>
                <p><strong>Total Price: {props.price}</strong></p>
                <Button clicked={props.purchaseCanceled} btnType='Danger' >Cancel</Button>
                <Button clicked={props.purchaseContinued} >Continue</Button>
            </Div>
        </Aux>
    );
}

export default OrderSummary;