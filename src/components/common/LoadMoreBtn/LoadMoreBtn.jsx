import React from 'react';
import s from './LoadMoreBtn.module.css';


const LoadMoreBtn = (props) => {
    return (
        <button onClick={props.loadMore} className={s.ldsEllipsis}><div></div><div></div><div></div></button>
    );
}


export default LoadMoreBtn;