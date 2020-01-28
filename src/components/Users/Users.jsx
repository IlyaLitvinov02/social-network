import React from 'react';
import User from './User/User';
import Axios from 'axios';

const Users = (props) => {

    if (props.state.usersData.length === 0) {
        Axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
            props.setUsers(response.data.items);
        })
    }

    // props.setUsers([
    //     { name: 'AntiHype', followed: false, location: { country: 'Kyrgyzstan', city: 'Kant' }, id: 1 },
    //     { name: 'Dark5665', followed: false, location: { country: 'Kyrgyzstan', city: 'Kant' }, id: 2 },
    //     { name: 'UlukUluk', followed: false, location: { country: 'Kyrgyzstan', city: 'Kant' }, id: 3 },
    //     { name: 'МЯКИШ', followed: true, location: { country: 'Kyrgyzstan', city: 'Kant' }, id: 4 }
    // ]);

    let usersElements = props.state.usersData.map(el =>
        <User name={el.name} id={el.id} followed={el.followed} toggleFollow={() => { props.toggleFollow(el.id) }} ava={el.photos} key={el.id} />);

    return (
        <div>
            <div>
                {usersElements}
            </div>
        </div>
    );
}

export default Users;