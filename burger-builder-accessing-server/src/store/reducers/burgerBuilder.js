import * as actionsType from '../actions/actionTypes';

const initialState = {
    ingredients: {
        salad: 0,
        tomate: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
    },
    totalPrice: 4,
    error: false,
    building: false,
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 1.0,
    tomate: 0.5,
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionsType.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1, 
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                building: true,
            }
        case actionsType.REMOVE_INGREDIENT: 
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1, 
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
                building: true,
            }
        case actionsType.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.ingredients,
                erro: false,
                totalPrice: 4,
            }
        case actionsType.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true,
                building: false,
            }
        default :
            return state;
    }
}

export default reducer;