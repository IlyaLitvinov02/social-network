import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAuth } from '../redux/selectors/auth-selectors';

export default WrappedComponent => connect(state => ({
    isAuth: getIsAuth(state)
}))(props => !props.isAuth 
    ? <Redirect to={{
    pathname: '/login',
    state: { referrer: useLocation().pathname }
}} /> : <WrappedComponent {...props} />);