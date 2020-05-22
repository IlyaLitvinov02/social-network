import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../redux/selectors/auth-selectors';

export default WrappedComponent => props => {
    const isAuth = useSelector(state => getIsAuth(state));
    // redirect to login page if user is not authorized
    return !isAuth
        ? <Redirect to={{
            pathname: '/login',
            state: { referrer: useLocation().pathname }
        }} />
        : <WrappedComponent {...props} />
}