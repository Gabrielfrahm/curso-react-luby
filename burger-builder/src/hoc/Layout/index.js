import React, { useCallback, useState } from "react";
import Aux from '../Auxi';
import SideDrawer from "../../components/Navigation/SideDrawer";
import Toolbar from '../../components/Navigation/Toolbar';
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