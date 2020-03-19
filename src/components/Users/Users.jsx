import React from 'react';
import User from './User/User';
import s from './Users.module.css';
import Preloder from '../common/Preloder/Preloder.jsx';
import LoadMoreBtn from '../common/LoadMoreBtn/LoadMoreBtn.jsx';

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
               : <LoadMoreBtn loadMore={props.loadMore}/>}
         </div>
      </div>
   );
}


export default Users;