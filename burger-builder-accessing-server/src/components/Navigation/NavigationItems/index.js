import React from 'react';
import NavigationItem from './NavigationItem';
import {Ul} from './styles';


const NavigationItems = () => {
    return (
        <Ul>
            <NavigationItem link='/' active>Burger Builder</NavigationItem>
            <NavigationItem link='/'>Checkout</NavigationItem>
        </Ul>
    );
}

export default NavigationItems;