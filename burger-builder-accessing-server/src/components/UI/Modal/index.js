import React from 'react';
import Aux from '../../../hoc/Auxi';
import Backdrop from '../Backdrop';
import { Container } from './styles';

const componentUpdate = (nextProps, nextState) => {
    return nextProps.show === nextState.show ;
}

const Modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClose}/>
            <Container style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0',
            }}>
                {props.children}
            </Container>
        </Aux>
    );
}

export default React.memo(Modal, componentUpdate);