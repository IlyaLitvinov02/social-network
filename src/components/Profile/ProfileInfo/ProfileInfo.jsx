import React from 'react';
import s from './ProfileInfo.module.css';
import Ava from './../../../img/ava.png';


function ProfileInfo(props) {
    return (
        <div className={s.bio}>
            <div>
                <img src={(props.state.userProfile.photos.large) ? props.state.userProfile.photos.large : Ava} alt='' />
            </div>
            <div>
                <div className={s.nick}>{props.state.userProfile.fullName}</div>
                <div className={s.info}>
                    <ul>
                        <li>{(props.state.userProfile.lookingForAJob) ? 'Looking for a job right now' : 'I am a couch potato'}</li>
                        <li>{props.state.userProfile.lookingForAJobDescription}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}



export default ProfileInfo;