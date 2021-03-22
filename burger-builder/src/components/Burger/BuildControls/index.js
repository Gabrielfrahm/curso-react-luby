import React from 'react';
import BuildControl from './buildControl';
import {Container} from './style';

const controls = [
    {label: 'Salad', types: 'salad'},
    {label: 'Bacon', types: 'bacon'},
    {label: 'Cheese', types: 'cheese'},
    {label: 'Meat', types: 'meat'},
]

const BuildControls = (props) => {
    return (
        <Container>
            {controls.map(ctrl => (
                <BuildControl 
                    added={() => props.ingredientAdded(ctrl.types)} 
                    key={ctrl.label} 
                    label={ctrl.label} 
                    
                />
            ))}
        </Container>
    )
}

export default BuildControls;