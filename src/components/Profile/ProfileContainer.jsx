import React from 'react';
import Profile from './Profile.jsx';
import { connect } from 'react-redux';
import Axios from 'axios';
import { setLoading, setUserProfile } from '../../redux/profileReducer.js';
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
   componentDidMount() {
      this.props.setLoading();
      if (this.props.match.params.userId) {
         Axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`)
            .then(response => {
               this.props.setLoading();
               this.props.setUserProfile(response.data);
            })
      }
   }

   render() {
      return (
         <Profile state={this.props.state} />
      );
   }
}


let mapStateToProps = state => ({
   state: state.profilePage
});


const ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setLoading, setUserProfile })(ProfileContainerWithRouter);