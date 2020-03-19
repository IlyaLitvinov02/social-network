import React from 'react';
import { connect } from "react-redux";
import Users from "./Users";
import { getUsers, getMoreUsers, follow, unfollow } from "../../redux/usersReducer";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.state.usersData, this.props.state.currentPage, this.props.state.pageSize);
    }

    render() {
        return (
            <Users
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                loadMore={() => { this.props.getMoreUsers(this.props.state.currentPage, this.props.state.pageSize) }}
                state={this.props.state} />
        );
    }
}


let mapStateToProps = (state) => {
    return {
        state: state.usersPage
    };
}

export default connect(mapStateToProps, { getUsers, getMoreUsers, follow, unfollow })(UsersContainer);





/*
let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollowAC(userId));
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },

        loadMore: (page, btnType) => {
            dispatch(loadMoreAC(page, btnType))
        },

        setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCountAC(count));
        },

        setLoading: () => {
            dispatch(setLoadingAC());
        },

        appendUsers: (users) => {
            dispatch(appendUsersAC(users));
        },

        setDefaultPage: () => {
            dispatch(setDefaultPageAC());
        }
    };
}
*/