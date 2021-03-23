import React from 'react';
import {ButtonElement} from './styles';

const Button = (props) => {
    return (
        <ButtonElement 
            onClick={props.clicked} 
            style={props.btnType === 'Danger' ? {color: '#944317' } : {color : '#5C9210'} }
        >
            {props.children}
        </ButtonElement>
    );
}

export default Button;