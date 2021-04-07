import React, { useCallback, useState } from "react";
import Aux from '../Auxi';
import SideDrawer from "../../components/Navigation/SideDrawer";
import Toolbar from '../../components/Navigation/Toolbar';
import {Content} from './styles';
import { connect } from "react-redux";

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
            <Toolbar isAuth={props.isAuthenticate} drawerToggleClicked={handleSideToggle} />
            <SideDrawer 
                isAuth={props.isAuthenticate}
                open={showSide} 
                closed={handleSideDrawerClosed} 
            />
            <Content>
                {props.children}
            </Content>
        </Aux>
    )
}
const mapStateToProps = state => {
    return {
        isAuthenticate: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);