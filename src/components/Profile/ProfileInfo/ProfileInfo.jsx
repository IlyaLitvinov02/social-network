import React from 'react';
import s from './ProfileInfo.module.css';
import avatar from './../../../img/ava.png';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import { Container } from '../../common/Styled/Styled';
import PhotoInput from './ProfilePhotoInput/PhotoInput';
import ProfileAbout from './ProfileAbout/ProfileAbout';


const ProfileInfo = ({ isOwner, updateProfile, uploadPhoto, ...props }) => {
    return (
        <div className={s.bio}>
            <div>
                <Container className={s.photoWrap}>
                    <img src={(props.state.userProfile.photos.large) ? props.state.userProfile.photos.large : avatar} alt='' />
                    <PhotoInput isOwner={isOwner} uploadPhoto={uploadPhoto} />
                </Container>
            </div>
            <Container className={s.infoWrap}>
                <div>
                    <span className={s.nick}>{props.state.userProfile.fullName}</span>
                </div>
                <div className={s.profileStatus}>
                    <ProfileStatus
                        status={props.state.status}
                        isOwner={isOwner}
                        updateStatus={props.updateStatus} />
                </div>
                <div className={s.profileAbout}>
                    <ProfileAbout
                        isOwner={isOwner}
                        userProfile={props.state.userProfile}
                        updateProfile={updateProfile} />
                </div>
            </Container>
        </div>
    );
}



export default ProfileInfo;