import React from 'react';
import s from './Header.module.css';
import Ava from '../../img/ava.png';
import { Link } from 'react-router-dom';

function Header(props) {
   return (
      <header className={s.header}>
         {/* <div className='logo'></div> */}
         <div className={s.loginBlock}>
            {(props.state.isAuth)
               ? <img src={Ava} alt="" onClick={props.toggleIsDeployed} />
               : <Link to='/login/'>Log in</Link>}
            {props.isDeployed
               && <div>
                  <div>
                     <Link to={`/profile/${props.state.userId}`}>My profile</Link>
                  </div>
                  <div>
                     <button onClick={() => {
                        props.logOut();
                        props.toggleIsDeployed();
                     }}>Log out</button>
                  </div>
               </div>}
         </div>
      </header>
   );
}

export default Header;