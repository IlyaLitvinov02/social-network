import postsReducer from "./postsReducer";
import { deletePost } from './postsReducer';


it('after deleting new postData array length should be decrement', () => {
    const state = {
        postData: [
            { id: 1, text: 'I am Batman', time: '21:03' },
            { id: 2, text: 'I am Batman', time: '21:02' },
            { id: 3, text: 'I am Batman', time: '21:01' }
        ],
    };
    const action = deletePost(1);

    const newState = postsReducer(state, action);

    expect(newState.postData.length).toBe(2);
});