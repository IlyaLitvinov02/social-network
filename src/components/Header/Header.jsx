import React from 'react';
import s from './Header.module.css';
import { Link } from 'react-router-dom';

function Header(props) {
   return (
      <header className={s.header}>
         {/* <div className='logo'></div> */}
         <div className={s.loginBlock}>
            {(props.state.isAuth)
               ? <Link to={`/profile/${props.state.userId}`}>{props.state.login}</Link>
               : <Link to='/login/'>Log in</Link>}
         </div>
      </header>
   );
}

export default Header;