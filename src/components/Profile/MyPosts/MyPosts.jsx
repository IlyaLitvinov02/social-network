import React from 'react';
import s from './MyPosts.module.css';
//import Ava from './../../img/ava.gif';
import Post from './Post/Post.jsx';
import Form from '../../common/Form/Form.jsx';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';



const PostForm = compose(
    reduxForm({ form: 'post' }),
    connect(state => ({ formState: state.form.post }))
)(Form);




function MyPosts(props) {
    return (
        <div className={s.myPosts}>
            {(props.myProfile)
                && <div className={s.postsInp}>
                    <PostForm submitMyForm={props.onAddPost} name='postInp' label='Поделитесь мыслями...' button='Add post'/>
                </div>}
            {props.state.postData.map(post => <Post text={post.text} img={post.img} time={post.time} key={post.id} />)}
        </div>
    );
}



export default MyPosts;