import React from 'react';
import ProfileInfo from './ProfileInfo';


function ProfileInfoContainer(props) {

    let userInfo = {
        birthDate: '24 april, 2002',
        city: 'Bishkek',
        education: 'none',
        site: 'nunenaaado.net'
    }

    return (
        <ProfileInfo userInfo={userInfo} />
    );
}



export default ProfileInfoContainer;