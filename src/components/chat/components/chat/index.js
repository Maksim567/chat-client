import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usersRequested} from "../../../../redux/slices/users";
import {useStyles} from "./style";
import Grid from "@material-ui/core/Grid";
import {map} from "lodash";
import {messagesRequested} from "../../../../redux/slices/messages";

const ChatComponent = () => {

    const classes = useStyles();

    let id = 3;

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.collection);
    const messages = useSelector((state) => state.messages.collection);
    const isLoading = useSelector((state) => state.users.loading);

    useEffect(() => {
        dispatch(usersRequested({status: 'admin'}))
    }, [dispatch]);

    const message = () => dispatch(messagesRequested({status: 'admin'}));

    return (
        <>
            <h1 className={classes.MainTitle}>Message</h1>
            <Grid container>
                <Grid xs={4}>
                    <h4>Users:</h4>{map(users, (user, index) => <p key={index}><a style={{color: "red"}}
                                                                                  onClick={message}>{user.title}</a>
                </p>)}
                </Grid>
                <Grid xs={8}>
                    <h4>Message:</h4>{map(messages, (message, index) =><p key={index}>3</p>)}
                </Grid>
            </Grid>
        </>
    )
        ;
}

export default ChatComponent;