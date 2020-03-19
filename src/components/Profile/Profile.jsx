import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloder from '../common/Preloder/Preloder.jsx';


const Profile = (props) => {
    if (!props.state.profileState.userProfile || props.state.isLoading) return <Preloder />;
    return (
        <div>
            <ProfileInfo
                state={props.state.profileState}
                myProfile={props.myProfile}
                updateStatus={props.updateStatus} />
            <MyPostsContainer myProfile={props.myProfile} />
        </div>
    );
}



export default Profile;