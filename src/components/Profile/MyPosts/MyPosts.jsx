import React from 'react';
import s from './MyPosts.module.css';
//import Ava from './../../img/ava.gif';
import Post from './Post/Post.jsx';

function MyPosts(props) {
    return (
        <div className={s.myPosts}>
            <div className={s.postsInp}>
                <textarea
                    placeholder='Поделитесь мыслями...'
                    onChange={props.onTextareaValueChange}
                    value={props.state.textareaValue} />
                <button onClick={props.onAddPostBtnClick}>Add post</button>
            </div>
            {props.state.postData.map(post => <Post text={post.text} img={post.img} time={post.time} key={post.id} />)}
        </div>
    );
}



export default MyPosts;