import React, { useCallback, useState } from 'react';
import Button from '../../components/UI/Button';
import api from '../../axios-orders';
import WithErrorHandler from '../../hoc/WithErrorHendler'
import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import Spinner from '../../components/UI/Spinner';
import Input from '../../components/UI/Input';
import { connect } from 'react-redux';
import * as action from '../../store/actions/index'


let orderForm = {
    name: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your name'
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
    },

    email: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your email'
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
    },

    street: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Street'
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
    },

    zipCode: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'ZIP code'
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
    },

    country: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your country',
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
    },
    deliveryMethod: {
        elementType: 'select',
        elementConfig: {
            options: [
                { value: 'fastest', displayValue: 'Fastest' },
                { value: 'cheapest', displayValue: 'Cheapest' },

            ]
        },
        value: 'fastest',
        validation: {
            required: false,
        },
        valid: false
    },
}


const ContactData = (props) => {
    const [, setOrder] = useState(orderForm);
    // const [loading, setLoading] = useState();
    const history = useHistory();


    const checkValidity = (value, rules)=>{
        let isValid = true;
        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }
        return isValid;
    };

    const handleOrder = useCallback((event) => {
        event.preventDefault();
        
        const formData = {};
        for(let formElementIdentifier in  orderForm){
            formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredients: props.ings,
            orderData: formData,
            price: props.price,
            userId: props.userId,
        }

        props.onOrderBurger(order, props.token);
        history.push('/');

    }, [props, history]);
    

    const handlerInput = useCallback((event, inputIdentifier)=>{
        const updateOrderForm = {
            ...orderForm
        }
        const updateFormElement = {
            ...updateOrderForm[inputIdentifier]
        };
        updateFormElement.value = event.target.value;
        updateFormElement.valid = checkValidity(updateFormElement.value,updateFormElement.validation)
        updateOrderForm[inputIdentifier] = updateFormElement;
        setOrder(orderForm = updateOrderForm);
        console.log(updateFormElement)
    }, []);

    const formElementsArray = [];
    for(let key in orderForm){
        formElementsArray.push({
            id: key,
            config: orderForm[key]
        })
    }
    

    return (
        <Container>
            <h4>Enter your Contact Data</h4>
            {props.loading ? (
                <Spinner />
            ) : (
                <form onSubmit={handleOrder}>
                    {formElementsArray.map(fe => (
                        <Input
                            key={fe.id}
                            elementType={fe.config.elementType}
                            elementConfig={fe.config.elementConfig}
                            value={fe.config.value}
                            invalid={!fe.config.valid}
                            shouldValidate={fe.config.validation}
                            changed={(event) => handlerInput(event,fe.id)}
                        />
                    ))}
                    <Button>Order</Button>
                </form>
            )}

        </Container>
    );

}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (orderData, token) => dispatch(action.purchaseBurger(orderData,token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (WithErrorHandler(ContactData, api));