const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const LOAD_MORE = 'LOAD_MORE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const SET_LOADING = 'SET_LOADING';
const APPEND_USERS = 'APPEND_USERS';
const SET_DEFAULT_PAGE = 'SET_DEFAULT_PAGE';



let initialState = {
   usersData: [],
   totalUsersCount: 0,
   pageSize: 4,
   currentPage: 1,
   isLoading: false
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
            isLoading: !state.isLoading
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
      case SET_DEFAULT_PAGE:
         return {
            ...state,
            currentPage: 1
         }
      default:
         return state
   }
}




export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsers = (u) => ({ type: SET_USERS, u });
export const loadMore = () => ({ type: LOAD_MORE });
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USER_COUNT, count });
export const setLoading = () => ({ type: SET_LOADING });
export const appendUsers = (u) => ({ type: APPEND_USERS, u });
export const setDefaultPage = () => ({ type: SET_DEFAULT_PAGE });





export default usersReducer;