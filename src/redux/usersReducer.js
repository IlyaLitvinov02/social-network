const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
// const GET_PREVIOUS_PAGE = 'GET_PREVIOUS_PAGE';
// const GET_NEXT_PAGE = 'GET_PREVIOUS_PAGE';

let initialState = {
   usersData: [],
   totalUsersCount: 0,
   pageSize: 4,
   currentPage: 1
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
      case CHANGE_CURRENT_PAGE:
         return {
            ...state,
            currentPage: (action.btnType === 'pre' & state.currentPage !== 1) ? action.page : action.page 
         }
      // case GET_PREVIOUS_PAGE: 
      //    return {
      //       ...state,

      //    }
      default:
         return state
   }
}

export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsersAC = (u) => ({ type: SET_USERS, u });
export const changeCurrentPageAC = (page, btnType) => ({ type: CHANGE_CURRENT_PAGE, page, btnType });
export const setTotalUsersCountAC = (count) => ({ type: SET_TOTAL_USER_COUNT, count });



export default usersReducer;