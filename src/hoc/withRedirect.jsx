import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export default WrappedComponent => connect(state => ({
    isAuth: state.auth.isAuth
}))(props => !props.isAuth ? <Redirect to='/login' /> : <WrappedComponent {...props} />);