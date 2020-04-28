import React, { useState } from 'react';
import Container, { StyledWriteBox as Box } from '../../../common/StyledContainer/StyledContainer';
import Form from './ProfileAboutForm/ProfileAboutForm';

const ProfileAbout = ({
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
    

    return <>
        {!editMode
            ? <div>
                <ul>
                    <li>{aboutMe}</li>
                    {lookingForAJob
                        && <li>{lookingForAJobDescription}</li>}
                    {/* <li>>{contacts}</li> */}
                </ul>

                {myProfile && <span onClick={() => setEditMode(true)}>Edit profile</span>}
            </div>
            : <Box>
                <Container>
                    <Form
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