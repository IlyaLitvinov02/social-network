import { addPost } from "../../../redux/postsReducer";
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { compose } from "redux";
import { memo } from "react";



let mapStateToProps = state => {
    return {
        state: state.posts
    };
}

let mapDispatchToProps = dispatch => {
    return {
        onAddPost: values => {
            dispatch(addPost(values.postInp));
        }
    };
}




export default compose( 
    connect(mapStateToProps, mapDispatchToProps),
    memo
)(MyPosts);