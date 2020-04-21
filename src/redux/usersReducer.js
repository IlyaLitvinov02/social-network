import { usersAPI } from '../api/api.js'



const TOGGLE_FOLLOW = 'usersReducer/TOGGLE_FOLLOW';
const SET_USERS = 'usersReducer/SET_USERS';
const LOAD_MORE = 'usersReducer/LOAD_MORE';
const SET_TOTAL_USER_COUNT = 'usersReducer/SET_TOTAL_USER_COUNT';
const SET_LOADING = 'usersReducer/SET_LOADING';
const APPEND_USERS = 'usersReducer/APPEND_USERS';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'usersReducer/TOGGLE_FOLLOWING_IN_PROGRESS';


let initialState = {
   usersData: [],
   totalUsersCount: 0,
   pageSize: 4,
   currentPage: 828,   ///////////////////////////////////////
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
            usersData: state.usersData.map(user =>
               (user.id === action.userId)
                  ? {
                     ...user,
                     followed: !user.followed
                  }
                  : user
            )
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

export const getUsers = (usersData, currentPage, pageSize) => async dispatch => {
   if (usersData.length === 0) {
      dispatch(setLoading(true));
      const data = await usersAPI.getUsers(currentPage, pageSize);
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(setLoading(false));
   }
}

export const getMoreUsers = (currentPage, pageSize) => async dispatch => {
   dispatch(setLoading(true));
   dispatch(loadMore());
   const data = await usersAPI.getUsers(currentPage + 1, pageSize)
   dispatch(appendUsers(data.items));
   dispatch(setLoading(false));
}

const followUnfollowFlow = async (userId, dispatch, apiMethod) => {
   dispatch(toggleFollowingInProgress(true, userId));
   const data = await apiMethod(userId);

   if (data.resultCode === 0) {
      dispatch(toggleFollow(userId));
   }
   dispatch(toggleFollowingInProgress(false, userId));
}

export const follow = userId => dispatch => {
   followUnfollowFlow(userId, dispatch, usersAPI.follow.bind(usersAPI));
}

export const unfollow = userId => dispatch => {
   followUnfollowFlow(userId, dispatch, usersAPI.unfollow.bind(usersAPI));
}



export default usersReducer;