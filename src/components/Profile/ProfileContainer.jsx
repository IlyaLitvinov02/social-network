import React, { useEffect } from 'react';
import Profile from './Profile.jsx';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, uploadPhoto, updateProfile } from '../../redux/profileReducer.js';
import { withRouter } from "react-router-dom";
import { compose } from 'redux';
import withRedirect from '../../hoc/withRedirect.jsx';
import { getAuthedUserId } from '../../redux/selectors/auth-selectors.js';


const ProfileContainer = props => {
   const { getUserProfile, getStatus, updateProfile, myId } = props;
   const userId = props.match.params.userId
      ? props.match.params.userId
      : myId;


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
         myProfile={parseInt(userId, 10) === myId}
         updateStatus={props.updateStatus}
         uploadPhoto={props.uploadPhoto}
         updateProfile={updateProfile} />
   );
}


const mapStateToProps = state => ({
   state: state.profilePage,
   myId: getAuthedUserId(state)
});



export default compose(
   connect(mapStateToProps, {
      getUserProfile,
      getStatus,
      updateStatus,
      uploadPhoto,
      updateProfile
   }),
   withRouter,
   withRedirect
)(ProfileContainer);

