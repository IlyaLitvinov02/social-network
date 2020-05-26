import React, { useState } from 'react';
import { Button } from '../../../common/Styled/Styled';
import Form from './ProfileAboutForm/ProfileAboutForm';
import s from '../ProfileInfo.module.css';


const ProfileAbout = ({
    updateProfile,
    isOwner,
    userProfile: {
        aboutMe,
        contacts,
        lookingForAJob,
        lookingForAJobDescription,
        fullName
    }
}) => {

    const [editMode, setEditMode] = useState(false);

    const submit = values => {
        updateProfile(values).then(() => {
            setEditMode(false);
        });
    }

    const contactsKeys = Object.keys(contacts);

    return <>
        {!editMode
            ? <div>
                <div className={s.infoRow}>
                    <span>About me:</span><span>{aboutMe || 'No information'}</span>
                </div>
                {lookingForAJob
                    && <div className={s.infoRow}>
                        <span>About a job:</span><span>{lookingForAJobDescription || 'No information'}</span>
                    </div>}
                {contactsKeys.some(key => !!contacts[key])
                    && <div className={s.contactsWrap}>
                        <div className={s.contactsHeader}>Contacts </div>
                        {contactsKeys.map(key =>
                            contacts[key]
                            && <div className={s.infoRow} key={key}>
                                <span>{key}:</span>
                                <span>
                                    <a href={`http://${contacts[key]}`}
                                        rel="noopener noreferrer"
                                        target='_blank'>
                                        {contacts[key]}
                                    </a>
                                </span>
                            </div>
                        )}
                    </div>}
                {isOwner
                    && <Button className={s.editButton}
                        onClick={() => setEditMode(true)}>Edit profile</Button>}
            </div>
            : <div>
                <Form
                    onSubmit={submit}
                    aboutMe={aboutMe}
                    contacts={contacts}
                    lookingForAJob={lookingForAJob}
                    lookingForAJobDescription={lookingForAJobDescription}
                    fullName={fullName} />
                <Button
                    padding='1px 7px'
                    backgroundColor='red'
                    onClick={() => setEditMode(false)}>Cancel</Button>
            </div>
        }
    </>
}

export default ProfileAbout;