import React, {useEffect, useState} from 'react';
import {useStyles} from "./style";
import Grid from "@material-ui/core/Grid";
import User from "../User";

function Users({users, filteredUsers}) {

    const classes = useStyles();

    return (
        <Grid className={classes.MemberList}>
            {filteredUsers.map((user) => (
                    <User user={user}/>
            ))}
        </Grid>
    );
}

export default Users;
