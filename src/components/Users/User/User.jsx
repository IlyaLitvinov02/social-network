import React from 'react';
import { Link } from "react-router-dom";
import s from './User.module.css';
import avatar from '../../../img/ava.png';
import { Container, Button } from '../../common/Styled/Styled';


const User = (props) => (
   <Container className={s.userItem}>
      <div>
         <img src={props.ava.small != null ? props.ava.small : avatar} alt="ava" className={s.ava} />
      </div>
      <div className={s.userName}>
         <Link to={'/profile/' + props.id}>{props.name}</Link>
      </div>
      <div>
         <div className={s.buttons}>
            <div>
               {(props.followed)
                  ? <Button
                     backgroundColor='red'
                     onClick={props.unfollow}
                     disabled={props.followingInProgress.some(id => id === props.id)}>Unfollow</Button>
                  : <Button
                     onClick={props.follow}
                     disabled={props.followingInProgress.some(id => id === props.id)}>Follow</Button>}
            </div>
         </div>
      </div>
   </Container>
);


export default User;