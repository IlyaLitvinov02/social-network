import React from 'react';
import s from './ProfileInfo.module.css';
import Ava from './../../../img/ava.png';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import Container from '../../common/StyledContainer/StyledContainer';
import PhotoInput from './ProfilePhotoInput/PhotoInput';
import ProfileAbout from './ProfileAbout/ProfileAbout';


const ProfileInfo = ({ myProfile, uploadPhoto, ...props }) => {
    return (
        <Container className={s.bio}>
            <div>
                <img src={(props.state.userProfile.photos.large) ? props.state.userProfile.photos.large : Ava} alt='' />
                <PhotoInput myProfile={myProfile} uploadPhoto={uploadPhoto} />
            </div>
            <div>
                <div>
                    <span className={s.nick}>{props.state.userProfile.fullName}</span>
                </div>
                <div>
                    <ProfileStatus
                        status={props.state.status}
                        myProfile={myProfile}
                        updateStatus={props.updateStatus} />
                </div>
                <div className={s.info}>
                    <ProfileAbout myProfile={myProfile} userProfile={props.state.userProfile} />
                </div>
            </div>
        </Container>
    );
}



export default ProfileInfo;