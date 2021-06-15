import Grid from "@material-ui/core/Grid";
import {useStyles} from ".//style";
import Message from "../Message/Message";
import React, {useState} from "react";
import ScrollToBottom from 'react-scroll-to-bottom';
import {Avatar} from "@material-ui/core";
import map from "lodash/map";

const Messages = ({users}) => {

    const classes = useStyles();

    return (
        <ScrollToBottom  className={classes.root}>

            {map(users, (user, index) =>
                <Grid container key={index}>
                    <Grid container direction="row">
                        <Grid xs={9}>
                            <span>You</span>
                            <div>{user.messages}
                            </div>
                        </Grid>
                        <Grid xs={2}>
                            <Avatar alt="Remy Sharp" src={user.src}/>
                            <span>2:37 am</span>
                        </Grid>
                    </Grid>
                </Grid>
            )}

            <Message/>
        </ScrollToBottom>
    );
};

export default Messages;
