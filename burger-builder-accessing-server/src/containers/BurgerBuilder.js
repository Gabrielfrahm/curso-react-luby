import React, { useCallback,  useEffect,  useState } from 'react';
import {connect} from 'react-redux';
import { useHistory } from 'react-router';
import api from '../axios-orders';
import Burger from '../components/Burger';
import BuildControls from '../components/Burger/BuildControls';
import OrderSummary from '../components/Burger/OrderSummary';
import Modal from '../components/UI/Modal';
import Spinner from '../components/UI/Spinner';
import Aux from '../hoc/Auxi';
import WithErrorHandler from '../hoc/WithErrorHendler';
import * as actionsTypes from '../store/actions';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 1.0,
    tomate: 0.5,
}

const states = {
    totalPrice: 4,
}

const BurgerBuilder = (props) => {
    const [price, setPrice] = useState(states.totalPrice); 
    const [purchasing, setPurchasing] = useState(false);
    const [loading, setLoading] = useState(false);

    const history = useHistory();


    const updatePurchaseState = ingredients => {
        const sum = Object.keys(ingredients)
          .map(igKey => {
            return ingredients[igKey];
          })
          .reduce((sum, el) => {
            return sum + el;
          }, 0);
        return sum > 0;
      };

    const handlePurchase = useCallback(() => {
        setPurchasing(true);
    }, []);

    const handlePurchaseCancel = useCallback(() => {
        setPurchasing(false);
    }, []);

    const handlePurchaseContinue = () => {
        // alert('You continue');
        setLoading(true);

        const queryParams = [];
        for (let i in props.ings) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(props.ings[i]))
        }
        queryParams.push('price=' + price)
        const queryString = queryParams.join('&');
        history.push({
            pathname: '/checkout',
            search: '?' + queryString,
        })
    }

    // copy the ingredients for check
    const disabledInfo = {
        ...props.ings
    };

    // check the ingredients 
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = <OrderSummary
        ingredients={props.ings}
        purchaseCanceled={handlePurchaseCancel}
        purchaseContinued={handlePurchaseContinue}
        price={price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
    />

    if (loading) {
        orderSummary = <Spinner />
    }

    return (
        <Aux>
            <Modal show={purchasing} modalClose={handlePurchaseCancel}>
                {orderSummary}
            </Modal>
            <Burger ingredients={props.ings} price={price} />
            <BuildControls
                ingredientAdded={props.onIngredientAdded}
                ingredientRemoved={props.onIngredientRemoved}
                disabled={disabledInfo}
                ordered={handlePurchase}
                purchaseable={updatePurchaseState}
                price={price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            />
        </Aux>
    );
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded : (ingName) => dispatch({type: actionsTypes.ADD_INGREDIENT, ingredientName: ingName }),
        onIngredientRemoved: (ingName) => dispatch({type: actionsTypes.REMOVE_INGREDIENT, ingredientName: ingName }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder,api));