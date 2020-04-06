import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

const Navbar = (props) => {
    let icon = `${s.icon} `
    return (
        <nav className={s.nav}>
            <div className={s.navWrap}>
                <NavLink
                    to={`/profile/${props.myId}`}
                    //isActive={(match, location) => location.pathname === `/profile/${props.myId}`}
                    activeClassName={s.active}>
                    <div className={icon + s.profileIcon}></div>
                    Profile
                </NavLink>
                <NavLink
                    to='/dialogs'
                    //isActive={(match, location) => location.pathname === '/dialogs'}
                    activeClassName={s.active}>
                    <div className={icon + s.dialogsIcon}></div>
                    Dialogs
                </NavLink>
                <NavLink
                    to='/users'
                    //isActive={(match, location) => location.pathname === '/users'}
                    activeClassName={s.active}>
                    <div className={icon + s.usersIcon}></div>
                    Users
                </NavLink>
                <NavLink
                    to='/news'
                    //isActive={(match, location) => location.pathname === '/news'}
                    activeClassName={s.active}>
                    <div className={icon + s.newsIcon}></div>
                    News
                </NavLink>
                <NavLink
                    to='/music'
                    //isActive={(match, location) => location.pathname === '/music'}
                    activeClassName={s.active}>
                    <div className={icon + s.musicIcon}></div>
                    Music
                </NavLink>
            </div>
        </nav>
    );
}



export default connect(state => ({ myId: state.auth.userId }))(Navbar);