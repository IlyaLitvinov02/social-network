import { changeTextareaValueActionCreator, addPostActionCreator } from "../../../redux/profileReducer";
import MyPosts from './MyPosts';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        state: state.profilePage.myPostsState
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        onTextareaValueChange: (event) => {
            let action = changeTextareaValueActionCreator(event.target.value);
            dispatch(action);
        },
        onAddPostBtnClick: () => {
            let action = addPostActionCreator();
            dispatch(action);
        }
    };
}




export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);