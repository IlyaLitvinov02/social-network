import React from 'react';
import { NavLink } from "react-router-dom";
import s from './User.module.css';
import avatar from './ava.png';

const User = (props) => {
    return (
        <div className={s.userItem}>
            <img src={props.ava.small != null ? props.ava.small : avatar} alt="ava" className={s.ava} />
            <NavLink to={'/users/' + props.id}>{props.name}</NavLink>
            {(props.followed)
                ? <button className={s.followBtn} onClick={props.toggleFollow}>Unfollow</button>
                : <button className={s.followBtn} onClick={props.toggleFollow}>Follow</button>}
        </div>
    );
}

export default User;