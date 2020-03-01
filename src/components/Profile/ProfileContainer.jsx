import React from 'react';
import Profile from './Profile.jsx';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profileReducer.js';
import { withRouter } from "react-router-dom";



class ProfileContainer extends React.Component {
   componentDidMount() {
      this.props.getUserProfile(this.props.match.params.userId ? this.props.match.params.userId : this.props.myId)
   }

   render() {
      return (
         <Profile state={this.props.state} />
      );
   }
}


let mapStateToProps = state => ({
   state: state.profilePage,
   myId: state.auth.userId
});


const ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(ProfileContainerWithRouter);