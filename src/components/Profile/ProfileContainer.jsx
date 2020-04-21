import React, { useEffect } from 'react';
import Profile from './Profile.jsx';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profileReducer.js';
import { withRouter } from "react-router-dom";
import { compose } from 'redux';
import withRedirect from '../../hoc/withRedirect.jsx';
import { getAuthedUserId } from '../../redux/selectors/auth-selectors.js';


const ProfileContainer = props => {
   const { getUserProfile, getStatus, myId } = props;

   useEffect(() => {
      const userId = props.match.params.userId
         ? props.match.params.userId
         : myId;
      getUserProfile(userId);
      getStatus(userId);
   },
      [
         props.match.params.userId,
         myId,
         getUserProfile,
         getStatus
      ]
   );


   return (
      <Profile
         state={props.state}
         myProfile={parseInt(props.match.params.userId, 10) === myId}
         updateStatus={props.updateStatus} />
   );
}


const mapStateToProps = state => ({
   state: state.profilePage,
   myId: getAuthedUserId(state)
});



export default compose(
   connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
   withRouter,
   withRedirect
)(ProfileContainer);

