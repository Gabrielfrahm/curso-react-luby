import React, { useCallback, useState } from 'react';
import Button from '../../components/UI/Button';
import api from '../../axios-orders';
import {useHistory} from 'react-router-dom';
import {Container, Input} from './styles';
import Spinner from '../../components/UI/Spinner';

const ContactData = (props) => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [address, setAddress] = useState({
    //     street: '',
    //     postalCode: '',
    // });
    const [loading, setLoading] = useState();
    const history = useHistory();

    const handleOrder = useCallback ((event) => {
        event.preventDefault();
        console.log(props.ingredients);
         const order = {
            ingredient: props.ingredients,
            price: props.price,
            customer: {
                name: 'Gabriel Marques',
                address: {
                    street: 'TestStreet',
                    zipCode: '43156',
                    country: 'Brazil'
                },
                email: 'teste@teste.com',
            },
            deliveryMethod: 'fastest',
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

    

    return (
        <Container>
            <h4>Enter your Contact Data</h4>
            {loading ? (
                <Spinner />
            ): (
                <form action="">
                <Input type="text" name="name" placeholder="your name"/>
                <Input type="email" name="email" placeholder="your email"/>
                <Input type="text" name="street" placeholder="street"/>
                <Input type="text" name="postal" placeholder="postal code"/>
                <Button
                    clicked={handleOrder}
                >Order</Button>
            </form>
            )}
            
        </Container>
    );

}


export default ContactData;