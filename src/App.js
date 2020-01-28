import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';




function App() {
   return (
      <BrowserRouter>
         <div className='appWrapper'>
            <Header />
            <Navbar />
            <div className='contentWrapper'>
               <Switch>
                  <Route exact path='/'
                     render={() => <Profile />} />
                  <Route path='/profile'
                     render={() => <Profile />} />

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


//  addPost={props.addPost} changeTextareaValue={props.changeTextareaValue} 

// Поставить auto import extension в VS Code