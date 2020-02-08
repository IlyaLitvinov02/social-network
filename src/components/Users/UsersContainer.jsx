import React from 'react';
import { connect } from "react-redux";
import Users from "./Users";
import { toggleFollow, setUsers, loadMore, setTotalUsersCount, setLoading, appendUsers, setDefaultPage } from "../../redux/usersReducer";
import * as axios from "axios";


class UsersContainer extends React.Component {
    componentDidMount() {
        if (this.props.state.usersData.length === 0) {
            this.props.setLoading();
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`)
                .then(response => {
                    this.props.setLoading();
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });
        }
    }

    loadMore = () => {
        this.props.setLoading();
        this.props.loadMore();
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage + 1}&count=${this.props.state.pageSize}`)
            .then(response => {
                this.props.setLoading();
                this.props.appendUsers(response.data.items);
            });
    }


    render() {
        return (
            <Users onBtnClick={this.loadMore} toggleFollow={this.props.toggleFollow} state={this.props.state} />
        );
    }
}


let mapStateToProps = (state) => {
    return {
        state: state.usersPage
    };
}



export default connect(mapStateToProps, {
    toggleFollow, setUsers, loadMore, setTotalUsersCount, setLoading, appendUsers, setDefaultPage
})(UsersContainer);





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