import React from 'react';
import s from './ProfileInfo.module.css';
import Ava from './../../../img/ava.gif';


function ProfileInfo(props) {
    return (
        <div>
            {/* <div className={s.img}></div> */}
            <div className={s.bio}>
                <img src={Ava} alt='' />
                <div>
                    <div className={s.nick}>NuNeNaaado</div>
                    <div className={s.info}>
                        <ul>
                            <li>Date of Birth: {props.userInfo.birthDate}</li>
                            <li>City: {props.userInfo.city}</li>
                            <li>Education: {props.userInfo.education}</li>
                            <li>Web Site: <a href={props.userInfo.site}>{props.userInfo.site}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default ProfileInfo;