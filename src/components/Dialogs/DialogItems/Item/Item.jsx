import React from 'react';
import s from './Item.module.css';
import { NavLink } from "react-router-dom";
import Ava from './../../../../img/ava.png';



const Item = ({ photo, id, name }) => {
    return (
        <div className={s.item}>
            <NavLink activeClassName={s.active} to={'/dialogs/' + id}>
                <div className={s.img}>
                    <img src={photo ? photo : Ava} alt='' />
                </div>
                {name}
            </NavLink>
        </div>
    );
}


export default Item;