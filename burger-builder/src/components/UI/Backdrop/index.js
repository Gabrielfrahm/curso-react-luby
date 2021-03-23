import React from 'react';
import {BackdropDiv} from './styles';

const Backdrop = (props) => {
    return (
        props.show ? <BackdropDiv onClick={props.clicked}></BackdropDiv> : null
    )
}

export default Backdrop;