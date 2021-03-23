import React, { useCallback, useState } from "react";
import Aux from '../../hoc/Auxi';
import SideDrawer from "../Navigation/SideDrawer";
import Toolbar from '../Navigation/Toolbar';
import {Content} from './styles';

const Layout = (props) => {
    const [showSide, setShowSide] = useState(false);

    const handleSideDrawerClosed = useCallback(() => {
        setShowSide(false);
    }, []);

    const handleSideToggle = useCallback(()=> {
        setShowSide(!showSide);
    }, [showSide])

    return (
        <Aux>
            <Toolbar drawerToggleClicked={handleSideToggle} />
            <SideDrawer 
                open={showSide} 
                closed={handleSideDrawerClosed} 
            />
            <Content>
                {props.children}
            </Content>
        </Aux>
    )
}

export default Layout;