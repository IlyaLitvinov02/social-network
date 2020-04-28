import React, { useState, useEffect } from 'react';
import StyledContainer, { StyledWriteBox } from '../../../common/StyledContainer/StyledContainer';
//import s from './ProfileStatus.module.css';



const ProfileStatus = props => {

   const [editMode, setEditMode] = useState(false);
   const [status, setStatus] = useState(props.status);

   useEffect(() => {
      setStatus(props.status)
   }, [props.status]);

   const toggleEditMode = isActive => {
      if (props.myProfile) { setEditMode(isActive) }
   }

   const saveStatus = event => {
      if (event.key === 'Enter') {
         props.updateStatus(status).then(() => {
            toggleEditMode(false);
         });
      }
   }

   return (
      <>
         {!editMode
            ? <div>
               <span onClick={() => { toggleEditMode(true) }}>
                  {props.status ? props.status : props.myProfile && 'Change status'}
               </span>
            </div>
            : <StyledWriteBox>
               <StyledContainer>
                  <input
                     type="text"
                     value={status || ''}
                     onChange={(event) => { setStatus(event.target.value); }}
                     onKeyUp={saveStatus}
                     onBlur={() => { toggleEditMode(false) }}
                     autoFocus={true} />
               </StyledContainer>
            </StyledWriteBox>}
      </>
   );
}



export default ProfileStatus;