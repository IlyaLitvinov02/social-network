
const
    ADD_POST = 'profileReducer/ADD_POST',
    DELETE_POST = 'profileReducer/DELETE_POST';


let initialState = {
    postData: [
        // { id: 1, text: 'I am Batman', time: '21:03' },
        // { id: 2, text: 'I am Batman', time: '21:02' },
        // { id: 3, text: 'I am Batman', time: '21:01' }
    ],
};



const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let date = new Date(),
                postObject = {
                    id: state.postData.length + 1,
                    text: action.value,
                    time: `${date.getHours()}:${date.getMinutes()}`
                };
            return {
                ...state,
                postData: [postObject, ...state.postData],
            };
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(post => post.id !== action.postId)
            }
        default:
            return state;
    }
}

export const addPost = value => ({ type: ADD_POST, value });
export const deletePost = postId => ({ type: DELETE_POST, postId });


export default postsReducer;