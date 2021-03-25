import React from 'react';
import BurgerIngredient from './BurgerIngredient';
import {BurgerDiv} from './styles';


const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                   return <BurgerIngredient key={igKey + i } types = {igKey} />
                });
        }).reduce((arr, el) => {
            return arr.concat(el)
        },[]);

        if(transformedIngredients.length === 0 ){
            transformedIngredients = <p>Please start adding ingredients</p>
        }
        
    return (
        <BurgerDiv>
            <BurgerIngredient types="bread-top" />
            {transformedIngredients}
            <BurgerIngredient types="bread-bottom" />
        </BurgerDiv>
    );
}

export default Burger;