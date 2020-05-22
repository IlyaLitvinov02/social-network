import React, { useState } from 'react';
import Header from './Header.jsx';
import { getAuthUserData, logOut } from '../../redux/authReducer.js';
import { connect } from 'react-redux';



const HeaderContainer = props => {
    const [isDeployed, setIsDeployed] = useState(false);

    const toggleIsDeployed = () => {
        setIsDeployed(!isDeployed);
    }

    return <Header state={props.state} isDeployed={isDeployed} toggleIsDeployed={toggleIsDeployed} logOut={props.logOut} />
}


const mapStateToProps = state => ({ state: state.auth });



export default connect(mapStateToProps, { getAuthUserData, logOut })(HeaderContainer);