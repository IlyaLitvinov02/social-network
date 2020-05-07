import React from 'react';
import s from './MyPosts.module.css';
//import Ava from './../../img/ava.gif';
import Post from './Post/Post.jsx';
import Form from '../../common/Form/Form.jsx';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Container from '../../common/StyledContainer/StyledContainer';



const PostForm = compose(
    reduxForm({ form: 'post' }),
    connect(state => ({ formState: state.form.post }))
)(Form);




const MyPosts = props => {
    return (
        <div className={s.myPosts}>
            {(props.myProfile)
                && <Container className={s.postsInp}>
                    <PostForm onResetClick={() => {console.log('reset')} } submitHandler={props.onAddPost} name='postInp' label='Поделитесь мыслями...' button='Add post'/>
                </Container>}
            {props.state.postData.map(post => <Post text={post.text} img={post.img} time={post.time} key={post.id} />)}
        </div>
    );
}



export default MyPosts;