import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import { Container } from '../common/Styled/Styled';

const Navbar = () => {
    const icon = `${s.icon} `;
    return (
        <nav className={s.nav}>
            <Container className={s.navWrap}>
                <NavLink
                    exact
                    to='/profile'
                    activeClassName={s.active}>
                    <div className={icon + s.profileIcon}></div>
                    Profile
                </NavLink>
                <NavLink
                    to='/dialogs'
                    activeClassName={s.active}>
                    <div className={icon + s.dialogsIcon}></div>
                    Dialogs
                </NavLink>
                <NavLink
                    to='/users'
                    activeClassName={s.active}>
                    <div className={icon + s.usersIcon}></div>
                    Users
                </NavLink>
                <NavLink
                    to='/news'
                    activeClassName={s.active}>
                    <div className={icon + s.newsIcon}></div>
                    News
                </NavLink>
                <NavLink
                    to='/music'
                    activeClassName={s.active}>
                    <div className={icon + s.musicIcon}></div>
                    Music
                </NavLink>
            </Container>
        </nav>
    );
}



export default Navbar;