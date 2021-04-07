import React from 'react';
import NavigationItem from './NavigationItem';
import {Ul} from './styles';


const NavigationItems = (props) => {
    return (
        <Ul>
            <NavigationItem link='/' exact >Burger Builder</NavigationItem>
            <NavigationItem link='/Orders'>Orders</NavigationItem>
            {!props.isAuthenticated 
                ? <NavigationItem link='/auth'>Authenticate</NavigationItem>
                : <NavigationItem link='/logout'>logout</NavigationItem>
            }
        </Ul>
    );
}

export default NavigationItems;