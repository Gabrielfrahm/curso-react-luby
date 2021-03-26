import React, { useCallback, useState } from 'react';
import {useHistory} from 'react-router';
import api from '../axios-orders';
import Burger from '../components/Burger';
import BuildControls from '../components/Burger/BuildControls';
import OrderSummary from '../components/Burger/OrderSummary';
import Modal from '../components/UI/Modal';
import Spinner from '../components/UI/Spinner';
import Aux from '../hoc/Auxi';
import WithErrorHandler from '../hoc/WithErrorHendler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 1.0,
    tomate: 0.5,
}

const state = {
    ingredients: {
        salad: 0,
        tomate: 0,
        bacon: 0,
        cheese: 0,
        meat: 0, 
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
    loading: false,
}

const BurgerBuilder = () => {

    const [ingredient, setIngredients] = useState(state.ingredients);
    const [price, setPrice] = useState(state.totalPrice);
    const [purchaseable, setPurchaseable] = useState(state.purchaseable);
    const [purchasing, setPurchasing] = useState(state.purchasing);
    const [loading, setLoading] = useState(state.loading);

    const history = useHistory();


    const updatePurchaseState = useCallback((ingredients) => {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);

        setPurchaseable(state.purchaseable = sum > 0)
    }, []);



    // add to ingredients
    const handleAddIngredients = useCallback((type) => {
        const oldCount = ingredient[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {
            ...ingredient
        };
        updateIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        setPrice(state.totalPrice = newPrice);
        setIngredients(state.ingredients = updateIngredients);
        updatePurchaseState(updateIngredients);
    }, [ingredient, updatePurchaseState]);

    // remove to ingredients
    const handleRemoveIngredients = useCallback((type) => {
        const oldCount = ingredient[type];
        if (oldCount <= 0) {
            return;
        }
        const updateCount = oldCount - 1;
        const updateIngredients = {
            ...ingredient
        };
        updateIngredients[type] = updateCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        setPrice(state.totalPrice = newPrice);
        setIngredients(state.ingredients = updateIngredients);
        updatePurchaseState(updateIngredients);
    }, [ingredient, updatePurchaseState]);


    const handlePurchase = useCallback(() => {
        setPurchasing(state.purchasing = true);
    }, []);

    const handlePurchaseCancel = useCallback(() => {
        setPurchasing(state.purchasing = false);
    }, []);

    const handlePurchaseContinue = () => {
        // alert('You continue');
        setLoading(true);
        // const order = {
        //     ingredient: ingredient,
        //     price: price,
        //     customer: {
        //         name: 'Gabriel Marques',
        //         address: {
        //             street: 'TestStreet',
        //             zipCode: '43156',
        //             country: 'Brazil'
        //         },
        //         email: 'teste@teste.com',
        //     },
        //     deliveryMethod: 'fastest',
        // }
        // api.post(`/orders.json`, order).then(
        //     response => {
        //         setLoading(false);
        //         setPurchasing(false)
        //     }
        // )
        // .catch(error => {
        //     setLoading(false);
        //     setPurchasing(false);  
        // });
        history.push('/checkout')
    }

    // copy the ingredients for check
    const disabledInfo = {
        ...ingredient
    };

    // check the ingredients 
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = <OrderSummary
        ingredients={ingredient}
        purchaseCanceled={handlePurchaseCancel}
        purchaseContinued={handlePurchaseContinue}
        price={price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
    />

    if(loading){
        orderSummary = <Spinner />
    }

    return (
        <Aux>
            <Modal show={purchasing} modalClose={handlePurchaseCancel}>
                {orderSummary}
            </Modal>
            <Burger ingredients={ingredient} price={price} />
            <BuildControls
                ingredientAdded={handleAddIngredients}
                ingredientRemoved={handleRemoveIngredients}
                disabled={disabledInfo}
                ordered={handlePurchase}
                purchaseable={purchaseable}
                price={price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            />
        </Aux>
    );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => WithErrorHandler(BurgerBuilder, api)();