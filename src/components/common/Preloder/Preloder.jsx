import React from 'react';
import s from './Preloder.module.css';
import loaderGif from '../../../img/loader.gif';

const Preloder = (props) => {
   return (
         <img src={loaderGif} className={s.loaderGif} alt='Loading...'/>
   );
}


export default Preloder;