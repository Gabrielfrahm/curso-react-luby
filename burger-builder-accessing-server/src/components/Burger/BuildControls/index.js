import React from 'react';
import BuildControl from './buildControl';
import {Container, ButtonOrder} from './style';

const controls = [
    {label: 'Salad', types: 'salad'},
    {label: 'Tomate', types: 'tomate'},
    {label: 'Bacon', types: 'bacon'},
    {label: 'Cheese', types: 'cheese'},
    {label: 'Meat', types: 'meat'},
]

const BuildControls = (props) => {
    return (
        <Container>
            <p>Current Price: <strong>{props.price}</strong> </p>
            {controls.map(ctrl => (
                <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label} 
                    added={() => props.ingredientAdded(ctrl.types)} 
                    removed={() => props.ingredientRemoved(ctrl.types)} 
                    disabled={props.disabled[ctrl.types]}
                />
            ))}
            <ButtonOrder
                disabled={!props.purchaseable}
                onClick={props.ordered}
            >{props.isAuth? 'ORDER NOW' : 'SIGN UP TO ORDER'}</ButtonOrder>
        </Container>
    )
}

export default BuildControls;