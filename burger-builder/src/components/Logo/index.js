import React from 'react';
import logoImg from '../../assets/images/burger-logo.png'
import {LogoDiv,Img} from './styles';

const Logo = (props) => {
    return (
        <LogoDiv style={{height: props.height, marginBottom: props.margin }}>
            <Img src={logoImg} />
        </LogoDiv>
    )
}

export default Logo;