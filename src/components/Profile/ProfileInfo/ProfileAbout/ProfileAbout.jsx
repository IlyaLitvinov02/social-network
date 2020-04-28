import React, { useState } from 'react';
import Container, { StyledWriteBox as Box } from '../../../common/StyledContainer/StyledContainer';
import Form from './ProfileAboutForm/ProfileAboutForm';

const ProfileAbout = ({
    updateProfile,
    myProfile,
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

    return <>
        {!editMode
            ? <div>
                <ul>
                    <li>{aboutMe}</li>
                    {lookingForAJob
                        && <li>{lookingForAJobDescription}</li>}
                    <li>Contacts:</li>
                    <ul>
                        <li>{contacts.facebook}</li>
                        <li>{contacts.vk}</li>
                        <li>{contacts.youtube}</li>
                    </ul>
                    {/* <li>>{contacts}</li> */}
                </ul>

                {myProfile && <span onClick={() => setEditMode(true)}>Edit profile</span>}
            </div>
            : <Box>
                <Container>
                    <Form
                        onSubmit={submit}
                        aboutMe={aboutMe}
                        contacts={contacts}
                        lookingForAJob={lookingForAJob}
                        lookingForAJobDescription={lookingForAJobDescription}
                        fullName={fullName} />
                    <button onClick={() => setEditMode(false)}>Cancel</button>
                </Container>
            </Box>
        }
    </>
}

export default ProfileAbout;