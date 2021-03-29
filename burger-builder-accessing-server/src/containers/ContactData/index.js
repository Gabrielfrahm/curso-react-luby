import React, { useCallback, useState } from 'react';
import Button from '../../components/UI/Button';
import api from '../../axios-orders';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import Spinner from '../../components/UI/Spinner';
import Input from '../../components/UI/Input';

const orderForm = {
    name: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your name'
        },
        value: '',
    },

    email: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your email'
        },
        value: '',
    },

    street: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Street'
        },
        value: '',
    },

    zipCode: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'ZIP code'
        },
        value: '',
    },

    country: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your country',
        },
        value: '',
    },

    deliveryMethod: {
        elementType: 'select',
        elementConfig: {
            options: [
                { value: 'fastest', displayValue: 'Fastest' },
                { value: 'cheapest', displayValue: 'Cheapest' },

            ]
        },
        value: '',
    },
}


const ContactData = (props) => {
    const [,setOrder] = useState(orderForm);
    // const [name, setName] = useState({

    // });
    // const [email, setEmail] = useState({

    // });
    // const [street, setStreet] = useState({

    // });

    // const [zipCode, setZipCode] = useState({

    // });

    // const [country, setCountry] = useState({

    // });

    // const [deliveryMethod, setDeliveryMethod] = useState({

    // })
    const [loading, setLoading] = useState();
    const history = useHistory();

    const handleOrder = useCallback((event) => {
        event.preventDefault();
        console.log(props.ingredients);
        const order = {
            ingredients: props.ingredients,
            price: props.price
        }
        api.post(`/orders.json`, order).then(
            response => {
                setLoading(false);
                history.push('/');
            }
        )
            .catch(error => {
                setLoading(false);

            });
    }, [props.ingredients, props.price, history]);

    const formElementsArray = [];
    for(let key in orderForm){
        formElementsArray.push({
            id: key,
            config: orderForm[key]
        })
    }

    const handlerInput = useCallback((event, inputIdentifier)=>{
        const updateOrderForm = {
            ...orderForm
        }

        const updateFormElement = {...updateOrderForm[inputIdentifier]};
        updateFormElement.value = event.target.value;
        updateOrderForm[inputIdentifier] = updateFormElement;
        setOrder(updateOrderForm);
        console.log(orderForm);
    }, [])

    return (
        <Container>
            <h4>Enter your Contact Data</h4>
            {loading ? (
                <Spinner />
            ) : (
                <form action="">
                    {formElementsArray.map(fe => (
                        <Input
                            key={fe.id}
                            elementType={fe.config.elementType}
                            elementConfig={fe.config.elementConfig}
                            value={fe.config.value}
                            changed={(event) => handlerInput(event,fe.id)}
                        />
                    ))}
                    <Button
                        clicked={handleOrder}
                    >Order</Button>
                </form>
            )}

        </Container>
    );

}


export default ContactData;