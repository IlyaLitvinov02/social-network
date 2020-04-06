import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
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





const App = props => {
   useEffect(props.initialize, [props.inizialized]);

   if (!props.initialized) return <Preloder />

   return (
      <BrowserRouter>
         <div className='appWrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='contentWrapper'>
               <Switch>
                  <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                  <Route path='/dialogs' render={() => <DialogsContainer />} />
                  <Route path='/users' render={() => <UsersContainer />} />
                  <Route path='/news' render={() => <News />} />
                  <Route path='/music' render={() => <Music />} />
                  <Route path='/settings' render={() => <Settings />} />
                  <Route path='/login' render={() => <LoginPage />} />
               </Switch>
            </div>
         </div>
      </BrowserRouter>
   );
}


export default connect(state => ({ initialized: state.app.initialized }), { initialize })(App);



// Поставить auto import extension в VS Code