import React from 'react';
import Header from './Header.jsx';
import { setAuthUserData, getAuthUserData } from '../../redux/authReducer.js';
import { connect } from 'react-redux';



class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header state={this.props.state} />
    }
}


const mapStateToProps = state => ({
    state: state.auth
});



export default connect(mapStateToProps, { setAuthUserData, getAuthUserData })(HeaderContainer);