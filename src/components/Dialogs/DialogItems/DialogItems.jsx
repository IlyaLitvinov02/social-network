import React from 'react';
import s from './../Dialogs.module.css';
import Item from './Item/Item.jsx';
import { Container } from '../../common/Styled/Styled';



const DialogItems = ({ dialogs }) => {
    return (
        <div className={s.dialogItems}>
            <Container className={s.itemsWrap}>
                {dialogs.map(dialog =>
                    <Item
                        photo={dialog.photos.small}
                        name={dialog.userName}
                        id={dialog.id}
                        key={dialog.id} />)}
            </Container>
        </div>
    );
}



export default DialogItems;