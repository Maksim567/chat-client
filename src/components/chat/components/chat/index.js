import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import users, {roomsRequested} from "../../../../redux/slices/rooms";
import {useStyles} from "./style";
import Grid from "@material-ui/core/Grid";
import {map} from "lodash";
import {messagesRequested} from "../../../../redux/slices/messages";
import Main from "../Main";


const ChatComponent = () => {

    const classes = useStyles();

    const dispatch = useDispatch();
    const rooms = useSelector((state) => state.rooms.collection);
    const messages = useSelector((state) => state.messages.collection);
    const isLoading = useSelector((state) => state.rooms.loading);

    useEffect(() => {
        dispatch(roomsRequested())
        dispatch(messagesRequested())
    }, [dispatch]);

    return (
        <>
            <Grid container>
            <Grid xs={2}>
                {map(rooms, (room, index) => <p key={index}>f</p>)}
            </Grid>
            <Grid xs={8}>
                {map(messages, (message, index) => <p key={index}>dsfs</p>)}
            </Grid>
            </Grid>

            <h1 className={classes.root}>Chat</h1>
            <Grid container>
                <Main/>
            </Grid>
        </>
    )
        ;
}

export default ChatComponent;