import { usersAPI } from '../api/api.js'



const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const LOAD_MORE = 'LOAD_MORE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const SET_LOADING = 'SET_LOADING';
const APPEND_USERS = 'APPEND_USERS';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';


let initialState = {
   usersData: [],
   totalUsersCount: 0,
   pageSize: 4,
   currentPage: 400,   ///////////////////////////////////////
   isLoading: false,
   followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USERS:
         return {
            ...state,
            usersData: [...action.u],
         };
      case SET_TOTAL_USER_COUNT:
         return {
            ...state,
            totalUsersCount: action.count
         }
      case SET_LOADING:
         return {
            ...state,
            isLoading: action.isLoading
         }
      case TOGGLE_FOLLOW:
         return {
            ...state,
            usersData: state.usersData.map(user => {
               if (user.id === action.userId) {
                  return {
                     ...user,
                     followed: !user.followed
                  }
               } else {
                  return user;
               }
            })
         }
      case LOAD_MORE:
         return {
            ...state,
            currentPage: state.currentPage + 1
         }
      case APPEND_USERS:
         return {
            ...state,
            usersData: [...state.usersData, ...action.u]
         }
      case TOGGLE_FOLLOWING_IN_PROGRESS:
         return {
            ...state,
            followingInProgress:
               (action.isFetching)
                  ? [...state.followingInProgress, action.userId]
                  : state.followingInProgress.filter(id => id !== action.userId)
         }
      default:
         return state
   }
}




export const toggleFollow = userId => ({ type: TOGGLE_FOLLOW, userId });
export const setUsers = u => ({ type: SET_USERS, u });
export const loadMore = () => ({ type: LOAD_MORE });
export const setTotalUsersCount = count => ({ type: SET_TOTAL_USER_COUNT, count });
export const setLoading = isLoading => ({ type: SET_LOADING, isLoading });
export const appendUsers = u => ({ type: APPEND_USERS, u });
export const toggleFollowingInProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId });

export const getUsers = (usersData, currentPage, pageSize) => dispatch => {
   if (usersData.length === 0) {
      dispatch(setLoading(true));
      usersAPI.getUsers(currentPage, pageSize).then(data => {
         dispatch(setUsers(data.items));
         dispatch(setTotalUsersCount(data.totalCount));
         dispatch(setLoading(false));
      });
   }
}

export const getMoreUsers = (currentPage, pageSize) => dispatch => {
   dispatch(setLoading(true));
   dispatch(loadMore());
   usersAPI.getUsers(currentPage + 1, pageSize).then(data => {
      dispatch(appendUsers(data.items));
      dispatch(setLoading(false));
   });
}

export const follow = userId => dispatch => {
   dispatch(toggleFollowingInProgress(true, userId));
   usersAPI.follow(userId).then(data => {
      if (data.resultCode === 0) {
         dispatch(toggleFollow(userId));
      } else {
         console.log(data.message);
      }
      dispatch(toggleFollowingInProgress(false, userId));
   });
}

export const unfollow = userId => dispatch => {
   dispatch(toggleFollowingInProgress(true, userId));
   usersAPI.unfollow(userId).then(data => {
      if (data.resultCode === 0) {
         dispatch(toggleFollow(userId));
      } else {
         console.log(data.message);
      }
      dispatch(toggleFollowingInProgress(false, userId));
   });
}



export default usersReducer;