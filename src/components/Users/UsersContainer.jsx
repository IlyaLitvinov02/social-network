import { connect } from "react-redux";
import Users from "./Users";
import { toggleFollowAC, setUsersAC } from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        state: state.usersPage
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollowAC(userId));
        },
        
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    };
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;