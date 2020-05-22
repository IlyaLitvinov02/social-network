import React, { useState, useEffect } from 'react';
import s from './ProfileStatus.module.css';
import { Button } from '../../../common/Styled/Styled';
import preloader from '../../../../img/snakePreloader.gif';


const ProfileStatus = ({ isOwner, updateStatus, ...props }) => {

   const [editMode, setEditMode] = useState(false);
   const [status, setStatus] = useState(props.status);
   const [uploading, setUploading] = useState(false);


   useEffect(() => {
      setStatus(props.status);
   }, [props.status]);

   const toggleEditMode = isActive => {
      if (isOwner) setEditMode(isActive);
   }

   const saveStatus = async () => {
      setUploading(true);
      await updateStatus(status);
      toggleEditMode(false);
      setUploading(false);
   }

   return (
      <>
         <div
            onClick={() => { toggleEditMode(true) }}
            className={`${s.statusWrapper} ${isOwner && s.owner}`}>
            <span>
               {props.status ? props.status : isOwner && 'edit status'}
            </span>
            {(props.status && isOwner)
               && <span className={s.editStatus}>edit status</span>}
         </div>
         {editMode
            && <div className={s.editorWrap}>
               <div className={s.inputWrap}>
                  <input
                     type="text"
                     value={status || ''}
                     onChange={event => { setStatus(event.target.value) }}
                     onKeyUp={event => { if (event.key === 'Enter') saveStatus() }}
                     autoFocus={true} />
               </div>
               <div className={s.buttonWrap}>
                  <Button
                     padding='1px 7px'
                     onClick={saveStatus}
                     className={s.saveButton}>Save</Button>
                  <Button
                     padding='1px 7px'
                     backgroundColor='red'
                     onClick={() => { toggleEditMode(false) }}
                     className={s.cancelButton}>Cancel</Button>
                  {uploading
                     && <img src={preloader} className={s.preloader} alt="" />}
               </div>
            </div>}
      </>
   );
}



export default ProfileStatus;