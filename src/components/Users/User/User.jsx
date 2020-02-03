import React from 'react';
import { NavLink } from "react-router-dom";
import s from './User.module.css';
import avatar from './ava.png';

const User = (props) => {
    return (
        <div className={s.userItem}>
            <div>
                <img src={props.ava.small != null ? props.ava.small : avatar} alt="ava" className={s.ava} />
                <button className={s.followBtn} onClick={props.toggleFollow}>{(props.followed) ? 'Unfollow' : 'Follow'}</button>
            </div>
            <div>
                <NavLink to={'/users/' + props.id}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default User;