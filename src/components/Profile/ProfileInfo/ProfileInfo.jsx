import React from 'react';
import s from './ProfileInfo.module.css';
import Ava from './../../../img/ava.png';
import ProfileStatus from './ProfileStatus/ProfileStatus';


const ProfileInfo = props => {
    return (
        <div className={s.bio}>
            <div>
                <img src={(props.state.userProfile.photos.large) ? props.state.userProfile.photos.large : Ava} alt='' />
            </div>
            <div>
                <div>
                    <span className={s.nick}>{props.state.userProfile.fullName}</span>
                </div>
                <div>
                    <ProfileStatus
                        status={props.state.status}
                        myProfile={props.myProfile}
                        updateStatus={props.updateStatus} />
                </div>
                <div className={s.info}>
                    {/* <span>{props.state.userProfile.lookingForAJob ? 'Looking for a job right now' : 'I don\'t need a job'}</span> */}
                    <span>{props.state.userProfile.lookingForAJobDescription}</span>
                </div>
            </div>
        </div>
    );
}



export default ProfileInfo;