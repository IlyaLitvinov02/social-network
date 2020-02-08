import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloder from '../common/Preloder/Preloder.jsx';


function Profile(props) {
    if (!props.state.profileState.userProfile) {
        return <Preloder />
    }

    return (
        <div>
            <ProfileInfo state={props.state.profileState} />
            <MyPostsContainer />
        </div>
    );
}



export default Profile;