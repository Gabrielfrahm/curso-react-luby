import React from 'react';
import {BreadBottom, BreadTop, Seeds1, Seeds2, Meat, Salad, Bacon, Cheese} from './styles';

const BurgerIngredient = (props) => {
    let ingredient = null;
    switch(props.types){
        case ('bread-bottom'):
            ingredient = <BreadBottom />;
            break;
        case ('bread-top'): 
            ingredient = (
                <BreadTop>
                    <Seeds1></Seeds1>
                    <Seeds2></Seeds2>
                </BreadTop>
            );
            break;
        case ('meat'):
            ingredient = <Meat></Meat>;
            break;
        case ('cheese'):
            ingredient = <Cheese></Cheese>;
            break;
        case ('salad'):
            ingredient = <Salad></Salad>;
            break;
        case ('bacon'):
            ingredient = <Bacon></Bacon>;
            break;
        default :
            ingredient = null;
    }

    return ingredient;
}   

export default BurgerIngredient;