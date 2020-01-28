import React from 'react';
import s from './Post.module.css';



function Post(props) {
    return (
        <div className={s.post}>
            {props.text}
            <div className={s.date}>{props.time}</div>
        </div>
    );
}



export default Post;