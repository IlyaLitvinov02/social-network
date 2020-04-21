import React from 'react';
import s from './../Dialogs.module.css';
import Item from './Item/Item.jsx';
//import Ava from './../../img/ava.gif';



const DialogItems = (props) => {

    let dialogElements = props.state.map(dialog => <Item name={dialog.userName} id={dialog.id} key={dialog.id} />);

    return (
        <div className={s.dialogItems}>
            {dialogElements}
        </div>
    );
}



export default DialogItems;