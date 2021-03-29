import React from 'react';
import { Li } from './styles';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => {
    return (
        <Li>
            <NavLink
                to={props.link}
                exact={props.exact}
                activeStyle={{
                    backgroundColor: '#8f5c2c',
                    borderBottom: '4px solid #40a4c8',
                    color: '#fff',
                }}
            // style={props.active
            //     ? {
            //         backgroundColor: '#8f5c2c',
            //         borderBottom: '4px solid #40a4c8',
            //         color: '#fff',
            //     }
            //     : null
            // }
            >
                {props.children}
            </NavLink>
        </Li>
    )
}

export default NavigationItem;