import React, { useCallback, useState } from 'react';
import Burger from '../components/Burger';
import BuildControls from '../components/Burger/BuildControls';
import Aux from '../hoc/Auxi';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.1,
}

const BurgerBuilder = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const state = {
        ingredients : {
            salad : 0,
            bacon :0,
            cheese : 0,
            meat : 0,
        },
        totalPrice: 4,
    }

    const [ingredient, setIngredients] = useState(state.ingredients);

    const handleAddIngredients = useCallback((type)=> {
        const oldCount = ingredient[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {
            ...ingredient
        };
        updateIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        state.totalPrice = newPrice ;
        state.ingredients = updateIngredients;
    },[ingredient, state])   

    return (
        <Aux>
            <Burger ingredients={ingredient} />
            <BuildControls ingredientAdded={handleAddIngredients} />
        </Aux>
    );
}

export default BurgerBuilder;   