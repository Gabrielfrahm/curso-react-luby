import React from 'react';

import {Container,Inputs,TextArea,Label, Select} from './styles';

const Input = (props) => {
    let inputElement = null;
    switch(props.elementType) {
        case ('input'): 
            inputElement = <Inputs {...props.elementConfig} defaultValue={props.value} onChange={props.changed}/>;
        break;
        case ('textarea') :
            inputElement = <TextArea {...props.elementConfig} defaultValue={props.value} onChange={props.changed} />
        break;
        case ('select') :
            inputElement = <Select {...props.elementConfig} defaultValue={props.value} onChange={props.changed}>
                {props.elementConfig.options.map(op => (
                    <option key={op.value} value={op.value}>{op.displayValue}</option>
                ))}
            </Select>
        break;
        default :
            <input {...props.elementConfig} defaultValue={props.value} />
    }

    return (
        <Container>
            <Label>{props.label}</Label>
            {inputElement}
        </Container>
    );
}

export default Input;