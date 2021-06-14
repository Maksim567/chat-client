import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {Avatar} from "@material-ui/core";
import {useStyles} from ".//style";
import {useDispatch, useSelector} from "react-redux";
import {usersRequested} from "../../../../redux/slices/users";
import Users from "../../../users";
import map from "lodash/map";

function Message() {

    const classes = useStyles();

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.collection);
    const isLoading = useSelector((state) => state.users.loading);

    useEffect(() => {
        dispatch(usersRequested({status: 'admin'}))
    }, [Users]);

    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');

    return (
        <>
            {map(users, (user, index) =>
                <Grid container className={classes.root} key={index}>
                    <Grid container direction="row">
                        <Grid className={classes.MessageBlock} xs={9}>
                            <span>You</span>
                            <div>{user.messages}
                            </div>
                        </Grid>
                        <Grid className={classes.MessageImg} xs={2}>
                            <Avatar alt="Remy Sharp" src={user.src}/>
                            <span>2:37 am</span>
                        </Grid>
                    </Grid>
                </Grid>
            )}


            {todos.map((todo, index) => (
                <>
                    <h1>{todo}</h1>
                </>
            ))}
        </>
    )
}

export default Message;
