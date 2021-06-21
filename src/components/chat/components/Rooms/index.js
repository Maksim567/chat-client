import React from 'react';
import ChatField from "../ChatField";
import Grid from "@material-ui/core/Grid";
import UsersContainer from "../UsersContainer";
import {useStyles} from "./style";

function RoomsComponent({users}) {

    const classes = useStyles();

    return (
        <Grid container className={classes.Main}>
            <UsersContainer users={users}/>
            <ChatField users={users}/>
        </Grid>
    );
}

export default RoomsComponent;