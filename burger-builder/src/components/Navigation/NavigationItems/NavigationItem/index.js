import React from 'react';
import { Li, A } from './styles';

const NavigationItem = (props) => {
    return (
        <Li>
            <A
                href={props.link}
                style={props.active
                    ? {
                        backgroundColor: '#8f5c2c',
                        borderBottom: '4px solid #40a4c8',
                        color: '#fff',
                    }
                    : null
                }
            >
                {props.children}
            </A>
        </Li>
    )
}

export default NavigationItem;