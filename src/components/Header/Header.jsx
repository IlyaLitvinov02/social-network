import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header(props) {
   return (
      <header className={s.header}>
         {/* <div className='logo'></div> */}
         <div className={s.loginBlock}>
            {(props.state.isAuth) ? <NavLink to={`/profile/${props.state.userId}`}>{props.state.login}</NavLink> : <NavLink to='/login/'>Log in</NavLink>}
         </div>
      </header>
   );
}

export default Header;