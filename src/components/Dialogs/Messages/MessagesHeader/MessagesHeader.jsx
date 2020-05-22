import React from 'react';
import { Container } from '../../../common/Styled/Styled';
import { Link } from 'react-router-dom';
import avatar from './../../../../img/ava.png';
import s from './MessagesHeader.module.css';


const MessagesHeader = ({ currentDialog: { id, userName, photos } }) => {
    const path = `/profile/${id}`

    return (
        <Container className={s.wrapper}>
            <div>
                <Link to={path}>
                    <img src={photos.small || avatar} alt="" className={s.avatarImg} />
                </Link>
            </div>
            <div className={s.userNameWrap}>
                <Link to={path}>
                    <span className={s.userName}>{userName}</span>
                </Link>
            </div>
        </Container>
    )
};

export default MessagesHeader;