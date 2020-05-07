import React from 'react';
import s from './Preloder.module.css';


const Preloder = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.ldsEllipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}


export default Preloder;