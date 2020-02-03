import React from 'react';
import User from './User/User';
import s from './Users.module.css';


const Users = (props) => {

   // let pagesCount = Math.ceil(props.state.totalUsersCount / props.state.pageSize);

   // let pages = [];

   // for (let i = 1; i <= pagesCount; i++) {
   //    pages.push(i)
   // }

   return (
      <div>
         <div>
            {props.state.usersData.map(el =>
               <User
                  name={el.name}
                  id={el.id}
                  followed={el.followed}
                  toggleFollow={() => { props.toggleFollow(el.id) }}
                  ava={el.photos} key={el.id} />)}
         </div>
         <div className={s.buttons}>
            {/* {pages.map(page =>
                  <button onClick={() => { onBtnClick(page) }} key={page}>{page}</button>
               )} */}

            <button onClick={() => { props.onBtnClick(props.state.currentPage - 1, 'pre') }}>pre</button>
            <span>{props.state.currentPage}</span>
            <button onClick={() => { props.onBtnClick(props.state.currentPage + 1, 'next') }}>next</button>

         </div>
      </div>
   );
}


export default Users;