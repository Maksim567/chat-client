import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {Avatar} from "@material-ui/core";
import {map} from "lodash";
import {useStyles} from "./style";
import {TimelineItem} from "@material-ui/lab";

const Message = ({message, users}) => {

    const classes = useStyles();

    const user = users[0].name;

    let isSentByCurrentUser = false;
    const trimmedName = 'Oleg';

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    const time = new Date().toLocaleTimeString();

    return (
        isSentByCurrentUser
            ? (<Grid container className={classes.root}>
                <Grid container direction="row">
                    <Grid xs={9} className={classes.MessageBlock}>
                        <span>You</span>
                        <div>{message}</div>
                    </Grid>
                    <Grid xs={2} className={classes.MessageImg}>
                        <Avatar alt="Remy Sharp" src="public/images/avatar.jpeg"/>
                        <span>{time}</span>
                    </Grid>
                </Grid>
            </Grid>)
            : (<Grid container className={classes.root}>
                <Grid container direction="row">
                    <Grid xs={9} className={classes.MessageBlock}>
                        <span>You 1</span>
                        <div>{message}</div>
                    </Grid>
                    <Grid xs={2} className={classes.MessageImg}>
                        <Avatar alt="Remy Sharp" src="public/images/avatar.jpeg"/>
                        <span>{time}</span>
                    </Grid>
                </Grid>
            </Grid>)
    );
};

export default Message;