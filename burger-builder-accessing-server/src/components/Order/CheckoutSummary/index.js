import React from 'react';
import Burger from '../../Burger';
import Button from '../../UI/Button';

import {Container} from './styles';
const CheckoutSummary = (props) => {
    return(
        <Container>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%',  margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger" clicked={props.checkoutCancelled}>Cancel</Button>
            <Button clicked={props.checkoutContinued}>Continue</Button>
        </Container>
    )
}

export default CheckoutSummary;