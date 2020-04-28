import React, { useEffect, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import './App.css';
import { initialize } from './redux/appReducer';
import { getAuthedUserId } from './redux/selectors/auth-selectors';
import Navbar from './components/Navbar/Navbar.jsx';
import HeaderContainer from './components/Header/HeaderContainer';
import Preloder from './components/common/Preloder/Preloder';
import DocumentTitle from './components/common/DocumentTitle/DocumentTitle';
import ProfileContainer from './components/Profile/ProfileContainer';
const
    UsersContainer = React.lazy(() => import('./components/Users/UsersContainer.jsx')),
    LoginPage = React.lazy(() => import('./components/Login/Login')),
    DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')),
    News = React.lazy(() => import('./components/News/News.jsx')),
    Music = React.lazy(() => import('./components/Music/Music.jsx')),
    Settings = React.lazy(() => import('./components/Settings/Settings.jsx'));





const App = ({ initialize, initialized }) => {

    useEffect(() => {
        initialize();
    }, [initialize]);

    if (!initialized) return <Preloder />

    return (
        <BrowserRouter>
            <DocumentTitle title='Samurai Network'>
                <div className='appWrapper'>
                    <HeaderContainer />
                    <Navbar />
                    <div className='contentWrapper'>
                        <Suspense fallback={<Preloder />}>
                            <Switch>
                                <Route exact path='/'>
                                    <Redirect to='/profile' />
                                </Route>
                                <Route path='/profile/:userId?'>
                                    <ProfileContainer />
                                </Route>
                                <Route path='/dialogs/:userId?'>
                                    <DocumentTitle title='Dialogs'>
                                        <DialogsContainer />
                                    </DocumentTitle>
                                </Route>
                                <Route path='/users' >
                                    <DocumentTitle title='Users'>
                                        <UsersContainer />
                                    </DocumentTitle>
                                </Route>
                                <Route path='/news'>
                                    <DocumentTitle title='News'>
                                        <News />
                                    </DocumentTitle>
                                </Route>
                                <Route path='/music'>
                                    <DocumentTitle title='Music'>
                                        <Music />
                                    </DocumentTitle>
                                </Route>
                                <Route path='/settings'>
                                    <DocumentTitle title='Settings'>
                                        <Settings />
                                    </DocumentTitle>
                                </Route>
                                <Route path='/login'>
                                    <DocumentTitle title='Login'>
                                        <LoginPage />
                                    </DocumentTitle>
                                </Route>
                            </Switch>
                        </Suspense>
                    </div>
                </div>
            </DocumentTitle>
        </BrowserRouter>
    );
}


export default connect(state => ({
    initialized: state.app.initialized,
    authorizedUserId: getAuthedUserId(state)
}), { initialize })(App);