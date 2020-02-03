import { connect } from "react-redux";
import Users from "./Users";
import { toggleFollowAC, setUsersAC, changeCurrentPageAC, setTotalUsersCountAC } from "../../redux/usersReducer";
import Axios from "axios";


class UsersContainer extends React.Component {
    componentDidMount() {
        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    changeCurrentPage = (page, btnType) => {
        this.props.changeCurrentPage(page, btnType);
        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.state.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <Users onBtnClick={this.changeCurrentPage} toggleFollow={this.props.toggleFollow} state={this.props.state} />
        );
    }
}





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
        },

        changeCurrentPage: (page, btnType) => {
            dispatch(changeCurrentPageAC(page, btnType))
        },

        setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCountAC(count));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

