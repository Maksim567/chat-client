import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import map from 'lodash/map';
import {usersRequested} from "../../redux/slices/users";

function Users() {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.collection);
    const isLoading = useSelector((state) => state.users.loading);

    const loadUsers = () => dispatch(usersRequested({status: 'admin'}))

    return(
        <>
            <h4>Users:</h4>
            <button onClick={loadUsers}>load users</button>
            {map(users, (user, index) => <p key={index}>{user.name}</p>)}
        </>
    )
}

export default Users;
