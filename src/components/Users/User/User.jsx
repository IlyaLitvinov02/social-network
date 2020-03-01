import React from 'react';
import { Link } from "react-router-dom";
import s from './User.module.css';
import avatar from '../../../img/ava.png';

const User = (props) => {
   return (
      <div className={s.userItem}>
         <div>
            <img src={props.ava.small != null ? props.ava.small : avatar} alt="ava" className={s.ava} />
            {(props.followed)
               ? <button
                  className={s.followBtn}
                  onClick={props.unfollow}
                  disabled={props.followingInProgress.some(id => id === props.id)}>Unfollow</button>
               : <button
                  className={s.followBtn}
                  onClick={props.follow}
                  disabled={props.followingInProgress.some(id => id == props.id)}>Follow</button>}
         </div>
         <div>
            <Link to={'/profile/' + props.id}>{props.name}</Link>
         </div>
      </div>
   );
}

export default User;