import React from 'react';
import ChatField from "../ChatField";
import Grid from "@material-ui/core/Grid";
import UsersContainer from "../UsersContainer";
import {useStyles} from "./style";

function Main() {

    const classes = useStyles();

    return (
        <Grid xs={12} md={10} xl={7} container className={classes.Main}>
            <UsersContainer/>
            <ChatField/>
        </Grid>
    );
}

export default Main;