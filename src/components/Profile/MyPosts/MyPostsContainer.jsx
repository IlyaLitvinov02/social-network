import { addPostActionCreator } from "../../../redux/profileReducer";
import MyPosts from './MyPosts';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        state: state.profilePage.myPostsState
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: values => {
            dispatch(addPostActionCreator(values.postInp));
        }
    };
}




export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);