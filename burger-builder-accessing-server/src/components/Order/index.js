import React from 'react';
import {Container} from './styles';

const Order = (props) => {
    const ingredients = [];
    for(let ingredientName in props.ingredients){
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }

    return(
        <Container>
            <p>Ingredients: {ingredients.map(ig => {
                return <span style={{
                    textTransform: 'capitalize',
                    display: 'inline-block',
                    margin: '0 8px',
                    border: '1px solid #ccc',
                    padding: '5px'
                }} 
                key={ig.name}>{ig.name} ({ig.amount}) </span>
            })}</p>
            <p>Price: <strong>{props.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong></p>
        </Container>
    );
}

export default Order;