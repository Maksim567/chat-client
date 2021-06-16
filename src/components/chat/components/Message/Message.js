import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Avatar} from "@material-ui/core";

function Message({message}) {

    const time = new Date().toLocaleTimeString();

    return (
        <Grid container direction="row">
            <Grid xs={9}>
                <span>You</span>
                <div>{message}</div>
            </Grid>
            <Grid xs={2}>
                <Avatar alt="Remy Sharp" src="public/images/avatar.jpeg"/>
                <span>{time}</span>
            </Grid>
        </Grid>
    );
}

export default Message;