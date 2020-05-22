import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloder from '../common/Preloder/Preloder.jsx';
import DocumentTitle from '../common/DocumentTitle/DocumentTitle.jsx';


const Profile = props => {
    if (!props.state.userProfile || props.state.isLoading) return <Preloder />;
    return (
        <DocumentTitle title={props.state.userProfile.fullName}>
            <div>
                <ProfileInfo
                    state={props.state}
                    isOwner={props.isOwner}
                    updateStatus={props.updateStatus}
                    uploadPhoto={props.uploadPhoto}
                    updateProfile={props.updateProfile} />
                <MyPostsContainer isOwner={props.isOwner} />
            </div>
        </DocumentTitle>
    );
}



export default Profile;