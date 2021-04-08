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
import * as actions from '../store/actions/index';


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
        if(props.isAuthenticated){
            setPurchasing(true);
        }else{
            props.onSetAuthRedirectPath('/checkout');
            history.push('/auth')
        }
    }, [history, props]);

    const handlePurchaseCancel = useCallback(() => {
        setPurchasing(false);
    }, []);

    const handlePurchaseContinue = () => {
        // alert('You continue');
        setLoading(true);
        props.onInitPurchase();
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
                isAuth={props.isAuthenticated}
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
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        purchased: state.order.purchased,
        isAuthenticated: state.auth.token !== null,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded : (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath : (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder,api));