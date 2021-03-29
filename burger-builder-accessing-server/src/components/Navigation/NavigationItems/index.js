import React from 'react';
import NavigationItem from './NavigationItem';
import {Ul} from './styles';


const NavigationItems = () => {
    return (
        <Ul>
            <NavigationItem link='/' exact >Burger Builder</NavigationItem>
            <NavigationItem link='/Orders'>Orders</NavigationItem>
        </Ul>
    );
}

export default NavigationItems;