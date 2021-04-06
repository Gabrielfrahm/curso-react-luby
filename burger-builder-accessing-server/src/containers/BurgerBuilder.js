import React, { useCallback,  useState } from 'react';
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
import * as burgerBuilderAction from '../store/actions/index';


const BurgerBuilder = (props) => {
   
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

        history.push('/checkout');
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
        price={props.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
    />

    if (loading) {
        orderSummary = <Spinner />
    }

    return (
        <Aux>
            <Modal show={purchasing} modalClose={handlePurchaseCancel}>
                {orderSummary}
            </Modal>
            <Burger ingredients={props.ings} price={props.price} />
            <BuildControls
                ingredientAdded={props.onIngredientAdded}
                ingredientRemoved={props.onIngredientRemoved}
                disabled={disabledInfo}
                ordered={handlePurchase}
                purchaseable={updatePurchaseState(props.ings)}
                price={props.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            />
        </Aux>
    );
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice,
        error: state.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded : (ingName) => dispatch(burgerBuilderAction.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(burgerBuilderAction.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(burgerBuilderAction.initIngredients()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder,api));