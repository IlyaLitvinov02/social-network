import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';


function Profile(props) {
    return (
        <div>
            <ProfileInfoContainer />
            <MyPostsContainer />
        </div>
    );
}



export default Profile;