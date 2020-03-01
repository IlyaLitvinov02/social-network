import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';





function App() {
   return (
      <BrowserRouter>
         <div className='appWrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='contentWrapper'>
               <Switch>
                  <Route path='/profile/:userId?'
                     render={() => <ProfileContainer />} />

                  <Route path='/dialogs'
                     render={() => <Dialogs />} />

                  <Route path='/users'
                     render={() => <UsersContainer />} />

                  <Route path='/news' render={() => <News />} />
                  <Route path='/music' render={() => <Music />} />
                  <Route path='/settings' render={() => <Settings />} />
               </Switch>
            </div>
         </div>
      </BrowserRouter>
   );
}


export default App;



// Поставить auto import extension в VS Code