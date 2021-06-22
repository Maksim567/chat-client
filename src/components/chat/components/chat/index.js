import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usersRequested} from "../../../../redux/slices/users";
import {useStyles} from "./style";
import Main from "../Main";
import Grid from "@material-ui/core/Grid";


const ChatComponent = () => {

    const classes = useStyles();

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.collection);
    const isLoading = useSelector((state) => state.users.loading);

    useEffect(() => {
        dispatch(usersRequested({status: 'admin'}))
    }, [dispatch]);

    return (
        <>
            <h1 className={classes.MainTitle}>Message</h1>
            <Grid container>
                <Main users={users}/>
            </Grid>
        </>
    )
        ;
}

export default ChatComponent;