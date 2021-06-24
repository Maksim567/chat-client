import React, {useEffect, useState} from 'react';
import UserSearch from "../UserSearch";
import Users from "../Users";
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./style";
import ScrollToBottom from "react-scroll-to-bottom";


function UsersContainer() {

    const classes = useStyles();

    return (
        <Grid xs={3} className={classes.MemberContainer}>
            <UserSearch />
            <ScrollToBottom className={classes.MemberScroll}>
                <Users/>
            </ScrollToBottom>
        </Grid>
    );
}

export default UsersContainer;
