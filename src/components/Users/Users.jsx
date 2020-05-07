import React from 'react';
import s from './Users.module.css';
import Preloder from '../common/Preloder/Preloder.jsx';
import LoadMoreBtn from '../common/LoadMoreBtn/LoadMoreBtn.jsx';
import UserContainer from './User/UserContainer';
import Form from '../common/Form/Form';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Container from '../common/StyledContainer/StyledContainer';
import deleteIcon from '../../img/deleteImg.png';


const Search = compose(
   reduxForm({ form: 'search' }),
   connect(state => ({ formState: state.form.search }))
)(Form);



const Users = ({ totalUsersCount, reset, term, ...props }) => {
   const LoadMoreCond = Math.ceil(props.state.totalUsersCount / props.state.pageSize) > props.state.currentPage;

   return (
      <div>
         <div className={s.searchBlock}>
            <Container>
               <Search
                  submitHandler={props.submitHandler}
                  name='searchInp'
                  label='Search user by name'
                  button='Search'
                  fieldType='input' />
            </Container>
            {(props.state.usersData.length !== 0 || !props.state.isLoading)
               && <div>
                  <span className={s.resultMsg}>
                     Total {totalUsersCount} users
                  {term && <span> found by query:
                     <span className={s.term}>
                           {term}
                           <button
                              onClick={reset}
                              className={s.resetButton}>
                              <img src={deleteIcon} alt='reset' />
                           </button>
                        </span>
                     </span>}
                  </span>
               </div>}
         </div>
         <div>
            {props.state.usersData.map(el =>
               <UserContainer
                  name={el.name}
                  id={el.id}
                  followed={el.followed}
                  follow={() => { props.follow(el.id) }}
                  unfollow={() => { props.unfollow(el.id) }}
                  followingInProgress={props.state.followingInProgress}
                  ava={el.photos} key={el.id} />)}
         </div>
         {
            (props.state.isLoading)
               ? <Preloder />
               : (LoadMoreCond) && <LoadMoreBtn loadMore={props.loadMore} />
         }
      </div >
   );
}


export default Users;