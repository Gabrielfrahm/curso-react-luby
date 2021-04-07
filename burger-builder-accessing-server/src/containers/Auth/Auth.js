import React, {useCallback, useState} from 'react';
import { connect } from 'react-redux';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';

import * as action from '../../store/actions/index';

import {Container} from './styles';

   let controls = {
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your email'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true,
            },
            valid: false,
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Your password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6,
            },
            valid: false,
        },
    }


const Auth = (props) => {
    const [,setState] = useState(controls);
   
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


    const handlerInput = useCallback((event, controlName)=>{
        const updatedControls = {
            ...controls,
            [controlName]: {
                ...controls[controlName],
                value: event.target.value,
                valid: checkValidity(event.target.value, controls[controlName].validation)
            }
        };
        setState(controls = updatedControls);
        
    }, []);

    const formElementsArray = [];
    for (let key in controls) {
        formElementsArray.push({
            id: key,
            config: controls[key]
        })
    }

    const form = formElementsArray.map(formElement => (
        <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            changed={(event) => handlerInput(event, formElement.id)}
        />
        
    ))

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        props.onAuth(controls.email.value,controls.password.value)
    },[props])

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                {form}
            <Button>SUBMIT</Button>
            </form>
        </Container>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email,password) => dispatch(action.auth(email,password)),
    }
}


export default connect(null, mapDispatchToProps)(Auth);