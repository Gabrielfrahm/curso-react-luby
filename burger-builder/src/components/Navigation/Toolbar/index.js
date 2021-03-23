import React from 'react';
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle';
import {Header,Nav} from './styles';

const Toolbar = (props) => {
    return (
        <Header>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <Logo height='80%' />
            <Nav>
                <NavigationItems />
            </Nav>
        </Header>
    ) 

}

export default Toolbar;