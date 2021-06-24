import React, {useEffect, useState} from 'react';
import {useStyles} from "./style";
import Grid from "@material-ui/core/Grid";
import User from "../User";
import {map} from "lodash";
import {messagesRequested} from "../../../../redux/slices/messages";
import rooms from "../../../../redux/slices/rooms";

function Users() {

    const classes = useStyles();

    return (
        <Grid className={classes.MemberList}>
            {map(rooms, (user, index) => <p key={index}>ff
            </p>)}
        </Grid>
    );
}

export default Users;

// <a id={user.id}
//    onClick={e => message(index)}>
//     <User user={user}/>
// </a>
