import React from 'react';
import UserSearch from "../UserSearch";
import Users from "../Users";
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./style";


function UsersContainer({users}) {

    const classes = useStyles();

    return (
        <Grid xs={3} className={classes.MemberContainer}>
           <UserSearch/>
            <Users users={users}/>
        </Grid>
    );
}

export default UsersContainer;