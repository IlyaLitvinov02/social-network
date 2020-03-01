import React from 'react';
import User from './User/User';
import s from './Users.module.css';
import Preloder from '../common/Preloder/Preloder';

const Users = (props) => {
   return (
      <div>
         <div>
            {props.state.usersData.map(el =>
               <User
                  name={el.name}
                  id={el.id}
                  followed={el.followed}
                  follow={() => { props.follow(el.id) }}
                  unfollow={() => { props.unfollow(el.id) }}
                  followingInProgress={props.state.followingInProgress}
                  ava={el.photos} key={el.id} />)}
         </div>
         <div className={s.buttons}>

            {(props.state.isLoading)
               ? <Preloder />
               : <button onClick={props.loadMore}>Load more</button>}
         </div>
      </div>
   );
}


export default Users;