import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' activeClassName={s.active}>Dialogs</NavLink>
            </div>
            <div>
                <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
            </div>
            <div>
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.settings}>
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;