import React from "react";
import Aux from '../../hoc/Auxi';
import {Content} from './styles';

const Layout = (props) => {
    return (
        <Aux>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <Content>
                {props.children}
            </Content>
        </Aux>
    )
}

export default Layout;