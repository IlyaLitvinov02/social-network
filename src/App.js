import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { connect } from 'react-redux';
import Preloder from './components/common/Preloder/Preloder';
import { initialize } from './redux/appReducer';
import { getAuthedUserId } from './redux/selectors/auth-selectors';
import DocumentTitle from './components/common/DocumentTitle/DocumentTitle';





const App = ({
    initialize,
    initialized
 }) => {

    useEffect(() => {
        console.log('useEffect');
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
                            <Route path='/users'>
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



// Поставить auto import extension в VS Code