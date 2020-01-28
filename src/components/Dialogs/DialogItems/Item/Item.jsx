import React from 'react';
import s from './../../Dialogs.module.css';
import { NavLink } from "react-router-dom";
//import Ava from './../../img/ava.gif';


const Item = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}


export default Item;