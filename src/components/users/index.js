import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import map from 'lodash/map';
import {usersRequested} from "../../redux/slices/users";

function Users() {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.collection);
    const isLoading = useSelector((state) => state.users.loading);

    const loadUsers = () => dispatch(usersRequested({status: 'admin'}))

    useEffect(()=> {
        dispatch(usersRequested({status: 'admin'}))
    })

    const [todos, setTodos] = useState(['']);
    const [todo, setTodo] = useState('');


    return(
        <>
            <h4>Users:</h4>
            <button onClick={loadUsers}>load users</button>
            {map(users, (user, index) => <p key={index}>{user.name}</p>
            )}
            <>
                <input value={todo} onChange={e => setTodo(e.target.value)} />
                <button onClick={() => setTodos([todos, todo])}>Add</button>
                {todos.map((todo, index) => (
                    <div>
                        <h1>{todo}</h1>
                    </div>
                ))}
            </>
        </>
    )
}

export default Users;
