import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Users from "./Users";
import { getUsers, getMoreUsers, follow, unfollow, setGetUsersTerm, resetUsers } from "../../redux/usersReducer";




const UsersContainer = ({ state, getUsers, ...props }) => {
    const { currentPage, pageSize, term, usersData, totalUsersCount } = state;
    const usersDataLength = usersData.length;

    useEffect(() => {
        if (usersDataLength === 0) {
            getUsers(currentPage, pageSize, term);
        }
    }, [usersDataLength, currentPage, pageSize, term, getUsers]);


    const setTerm = ({ searchInp }) => {
        props.resetUsers();
        props.setGetUsersTerm(searchInp);
    }

    const reset = () => {
        props.setGetUsersTerm(null);
        props.resetUsers();
    }

    return (
        <Users
            follow={props.follow}
            unfollow={props.unfollow}
            loadMore={() => { props.getMoreUsers(currentPage, pageSize, term) }}
            state={state}
            setTerm={props.setGetUsersTerm}
            submitHandler={setTerm}
            resetUsers={props.resetUsers}
            term={term}
            reset={reset}
            totalUsersCount={totalUsersCount} />
    );
}



const mapStateToProps = state => {
    return {
        state: state.users
    };
}



export default connect(mapStateToProps, {
    getUsers,
    getMoreUsers,
    follow, unfollow,
    setGetUsersTerm,
    resetUsers
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