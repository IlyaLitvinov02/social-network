import React from 'react';
import Profile from './Profile.jsx';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profileReducer.js';
import { withRouter } from "react-router-dom";
import { compose } from 'redux';
import withRedirect from '../../hoc/withRedirect.jsx';


class ProfileContainer extends React.Component {
   getUserData = () => {
      const userId = this.props.match.params.userId;
      this.props.getUserProfile(userId);
      this.props.getStatus(userId);
   }

   componentDidMount() {
      this.getUserData();
   }

   componentDidUpdate(prevProps) {
      if (this.props.match.params.userId !== prevProps.match.params.userId) {
         this.getUserData();
      }
   }

   render() {
      return (
         <Profile
            state={this.props.state}
            myProfile={parseInt(this.props.match.params.userId, 10) === this.props.myId}
            updateStatus={this.props.updateStatus} />
      );
   }
}


let mapStateToProps = state => ({
   state: state.profilePage,
   myId: state.auth.userId
});



export default compose(
   connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
   withRouter,
   withRedirect
)(ProfileContainer)

