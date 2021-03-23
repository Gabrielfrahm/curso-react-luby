import React from 'react';
import {DrawerToggleDiv,SubDiv} from './styles';

const DrawerToggle = (props) => {
    return (
        <DrawerToggleDiv onClick={props.clicked}>
            <SubDiv />
            <SubDiv />
            <SubDiv />
        </DrawerToggleDiv>
    );
}

export default DrawerToggle;