import React from 'react';
import s from './Post.module.css';
import Container from '../../../common/StyledContainer/Container';



function Post(props) {
    return (
        <Container className={s.post}>
            {props.text}
            <div className={s.date}>{props.time}</div>
        </Container>
    );
}



export default Post;