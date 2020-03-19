import React from 'react';
//import s from './ProfileStatus.module.css';



class ProfileStatus extends React.Component {
   state = {
      editMode: false,
      status: this.props.status
   }

   componentDidUpdate(prevProps) {
      if (this.props.status !== prevProps.status) { this.setState({ status: this.props.status }) };
   }

   toggleEditMode = isActive => {
      if (this.props.myProfile) { this.setState({ editMode: isActive }) };
   }

   saveStatus = (event) => {
      if (event.key === 'Enter') {
         this.props.updateStatus(this.state.status);
         this.toggleEditMode(false)
      }
   }

   render() {
      return (
         <>
            {(!this.state.editMode)
               ? <div>
                  <span onClick={() => { this.toggleEditMode(true) }}>
                     {this.props.status ? this.props.status : this.props.myProfile && 'Change status'}
                  </span>
               </div>
               : <div>
                  <input
                     type="text"
                     value={this.state.status || ''}
                     onChange={(event) => { this.setState({ status: event.target.value }); }}
                     onKeyUp={this.saveStatus}
                     onBlur={() => { this.toggleEditMode(false) }}
                     autoFocus={true} />
               </div>}
         </>
      );
   }
}



export default ProfileStatus;