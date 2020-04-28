import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloder from '../common/Preloder/Preloder.jsx';
import DocumentTitle from '../common/DocumentTitle/DocumentTitle.jsx';


const Profile = props => {
    if (!props.state.profileState.userProfile || props.state.isLoading) return <Preloder />;
    return (
        <DocumentTitle title={props.state.profileState.userProfile.fullName}>
            <div>
                <ProfileInfo
                    state={props.state.profileState}
                    myProfile={props.myProfile}
                    updateStatus={props.updateStatus}
                    uploadPhoto={props.uploadPhoto} />
                <MyPostsContainer myProfile={props.myProfile} />
            </div>
        </DocumentTitle>
    );
}



export default Profile;