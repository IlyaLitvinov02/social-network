import React, { useEffect, useState } from 'react';
import Header from './Header.jsx';
import { setAuthUserData, getAuthUserData, logOut } from '../../redux/authReducer.js';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profileReducer.js';



// class HeaderContainer extends React.Component {
//     componentDidMount() {
//         this.props.getAuthUserData();
//     }

//     componentDidUpdate(prevProps) {
//         if (this.props.state.isLogged !== prevProps.state.isLogged) {
//             this.props.getAuthUserData();
//         }
//     }

//     render() {
//         return <Header state={this.props.state} />
//     }
// }


const HeaderContainerWithHooks = props => {
    useEffect(props.getAuthUserData, [props.state.isLogged]);

    const [isDeployed, setIsDeployed] = useState(false);

    const toggleIsDeployed = () => {
        setIsDeployed(!isDeployed);
    }

    return <Header state={props.state} isDeployed={isDeployed} toggleIsDeployed={toggleIsDeployed} logOut={props.logOut} />
}


const mapStateToProps = state => ({
    state: state.auth
});



export default connect(mapStateToProps, {
    setAuthUserData, getAuthUserData, getUserProfile, logOut
})(HeaderContainerWithHooks);