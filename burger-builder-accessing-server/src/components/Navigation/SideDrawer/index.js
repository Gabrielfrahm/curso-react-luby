import React from 'react';
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import Aux from '../../../hoc/Auxi';
// import Modal from '../../UI/Modal';
import Backdrop from '../../UI/Backdrop';
import { SideDrawerDiv } from './styles';


const SideDrawer = (props) => {
    let toggleStyled = 'translateX(-100%)';
    if(props.open){
        toggleStyled = 'translateX(0)'
    }
    return (
        <Aux>
            <Backdrop 
                show={props.open} 
                clicked={props.closed} 
            />
            <SideDrawerDiv
                style={{transform: toggleStyled}} 
            >
                <Logo height='11%' margin='32px'/>
                <nav>
                    <NavigationItems  isAuthenticated={props.isAuth}/>
                </nav>
            </SideDrawerDiv>
        </Aux>
    );
}

export default SideDrawer;