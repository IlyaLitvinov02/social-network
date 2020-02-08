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
                  toggleFollow={() => { props.toggleFollow(el.id) }}
                  ava={el.photos} key={el.id} />)}
         </div>
         <div className={s.buttons}>

            {/* <button onClick={() => { props.onBtnClick(props.state.currentPage - 1, 'pre') }}>pre</button>
            <span>{props.state.currentPage}</span>
            <button onClick={() => { props.onBtnClick(props.state.currentPage + 1, 'next') }}>next</button> */}

            {(props.state.isLoading) ? <Preloder /> : <button onClick={props.onBtnClick}>Load more</button>}

         {/* Кнопку нужно вынести в отдельный файл для использования в других компонентах */}

         </div>
      </div>
   );
}


export default Users;