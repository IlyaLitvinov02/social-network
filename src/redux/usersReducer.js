const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
   usersData: [],
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
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
      case SET_USERS:
         return { ...state, usersData: [...state.usersData, ...action.u] };
      default:
         return state
   }
}

export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId });

export const setUsersAC = (u) => ({ type: SET_USERS, u });



export default usersReducer;