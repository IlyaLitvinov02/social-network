import React from 'react';
import User from './User/User';
import Axios from 'axios';

class Users extends React.Component {
    componentDidMount() {
        Axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.state.usersData.map(el =>
                        <User
                            name={el.name}
                            id={el.id}
                            followed={el.followed}
                            toggleFollow={() => { this.props.toggleFollow(el.id) }}
                            ava={el.photos} key={el.id} />)}
                </div>
            </div>
        );
    }
}

export default Users;