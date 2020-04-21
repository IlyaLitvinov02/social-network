import React from 'react';
import { Link } from "react-router-dom";
import s from './User.module.css';
import avatar from '../../../img/ava.png';
import Container from '../../common/StyledContainer/Container';
import MessagesWriteBox from '../../Dialogs/Messages/WriteBox/MessagesWriteBox';

const User = (props) => {


   return (
      <Container className={s.userItem}>
         <div>
            <img src={props.ava.small != null ? props.ava.small : avatar} alt="ava" className={s.ava} />
         </div>
         <div className={s.userName}>
            <Link to={'/profile/' + props.id}>{props.name}</Link>
         </div>
         <div className={s.buttons}>
            <div>
               {(props.followed)
                  ? <button
                     className={s.followBtn}
                     onClick={props.unfollow}
                     disabled={props.followingInProgress.some(id => id === props.id)}>Unfollow</button>
                  : <button
                     className={s.followBtn}
                     onClick={props.follow}
                     disabled={props.followingInProgress.some(id => id === props.id)}>Follow</button>}
            </div>
            <div>
               <button onClick={props.openWriteBox}>Write message</button>
            </div>
         </div>
         {props.writeMode
            && <MessagesWriteBox
               userName={props.name}
               userId={props.id}
               closeWriteBox={props.cancelWriting}
               submitHandler={values => console.log(values)}/> }
      </Container>
   );
}

export default User;