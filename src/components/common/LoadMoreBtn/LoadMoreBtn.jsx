import React from 'react';
import s from './LoadMoreBtn.module.css';


const LoadMoreBtn = ({ loadMore }) => {
    return (
        <div className={s.wrapper}>
            <button onClick={loadMore} className={s.ldsEllipsis}>
                <div></div>
                <div></div>
                <div></div>
            </button>
        </div>
    );
}


export default LoadMoreBtn;