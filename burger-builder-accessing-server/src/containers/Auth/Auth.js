import React, {useCallback, useState} from 'react';
import { connect } from 'react-redux';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import Spinner from '../../components/UI/Spinner';

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
    const [signUp, setSignUp] = useState(true);
   
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

    let form = formElementsArray.map(formElement => (
        <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            changed={(event) => handlerInput(event, formElement.id)}
        />
        
    ));

    if(props.loading){
        form = <Spinner />
    }

    let errorMessage = null;

    if(props.error) {
        errorMessage = <p>{props.error.message}</p>
        
    }

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        props.onAuth(controls.email.value,controls.password.value, signUp)
    },[props,signUp]);


    const handleSwitchAuthMode = useCallback(()=>{
        setSignUp(!signUp);
    }, [signUp]);

    return (
        <Container>
            {errorMessage}
            <form onSubmit={handleSubmit}>
                {form}
            <Button>SUBMIT</Button>
            </form>
            <Button clicked={handleSwitchAuthMode} btnType="Danger">SWITCH TO {signUp ? 'SIGN IN' : 'SIGN UP'}</Button>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email,password, signUp) => dispatch(action.auth(email,password, signUp)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth);