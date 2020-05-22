import React, { useEffect } from 'react';
import Profile from './Profile.jsx';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, uploadPhoto, updateProfile } from '../../redux/profileReducer.js';
import { useParams } from "react-router-dom";
import { compose } from 'redux';
import withRedirect from '../../hoc/withRedirect.jsx';
import { getAuthedUserId } from '../../redux/selectors/auth-selectors.js';


const ProfileContainer = props => {
   const { getUserProfile, getStatus, updateProfile, authedUserId } = props;
   const params = useParams();

   const userId = params.userId
      ? params.userId
      : authedUserId;

   useEffect(() => {
      getUserProfile(userId);
      getStatus(userId);
   },
      [
         userId,
         getUserProfile,
         getStatus
      ]
   );

   return (
      <Profile
         state={props.state}
         isOwner={Number(userId) === authedUserId}
         updateStatus={props.updateStatus}
         uploadPhoto={props.uploadPhoto}
         updateProfile={updateProfile} />
   );
}


const mapStateToProps = state => ({
   state: state.profile,
   authedUserId: getAuthedUserId(state)
});



export default compose(
   connect(mapStateToProps, {
      getUserProfile,
      getStatus,
      updateStatus,
      uploadPhoto,
      updateProfile
   }),
   withRedirect
)(ProfileContainer);

