import React from 'react';
import Header from './Header.jsx';
import { setAuthUserData } from '../../redux/authReducer.js';
import Axios from 'axios';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
    componentDidMount() {
        Axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
                withCredentials: true
            })
            .then(response => {
                debugger;
                if (response.data.resultCode === 0) {
                    let { id, login, email} = response.data.data;
                    this.props.setAuthUserData( id, login, email);
                }
            });
    }

    render() {
        return <Header state={this.props.state} />
    }
}


const mapStateToProps = state => ({
    state: state.auth
});



export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);