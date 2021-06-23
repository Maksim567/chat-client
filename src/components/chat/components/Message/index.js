import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Avatar} from "@material-ui/core";
import {useStyles} from "./style";
import {useRouter} from "next/router";


function Message({name, user, message}) {

    const classes = useStyles();

    let isSentByCurrentUser = false;
    const trimmedName = name;

    console.log(name);

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
            ? (
        <Grid container className={classes.Message}>
            <Grid className={classes.MessageBlock}>
                <span>You</span>
                <div>{message}</div>
            </Grid>
            <Grid className={classes.MessageImg}>
                <Avatar alt="Remy Sharp" src="../images/avatar.jpeg"/>
                <span>12:00</span>
            </Grid>
        </Grid>)
            : (
                <Grid container className={classes.MessageView}>
                    <Grid className={classes.MessageBlock}>
                        <span>Maksim</span>
                        <div>{message}</div>
                    </Grid>
                    <Grid className={classes.MessageImg}>
                        <Avatar alt="Remy Sharp" src="../images/avatar.jpeg"/>
                        <span>12:00</span>
                    </Grid>
                </Grid>

            )
    );
}

export default Message;
