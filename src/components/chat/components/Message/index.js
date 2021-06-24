import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Avatar} from "@material-ui/core";
import {useStyles} from "./style";


function Message({message}) {

    const classes = useStyles();

    return (
        <Grid container className={classes.Message}>
            <Grid className={classes.MessageBlock}>
                <span>{message.senderName}</span>
                <div>{message.messageText}</div>
            </Grid>
            <Grid className={classes.MessageImg}>
                <Avatar alt="Remy Sharp" src="../images/avatar.jpeg"/>
                <span>{message.createAt}</span>
            </Grid>
        </Grid>
    );
}

export default Message;
