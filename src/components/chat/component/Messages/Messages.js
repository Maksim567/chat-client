import Grid from "@material-ui/core/Grid";
import {useStyles} from ".//style";
import Message from "../Message/Message";
import React, {useState} from "react";
import ScrollToBottom from 'react-scroll-to-bottom';
import {Avatar} from "@material-ui/core";

const Messages = () => {

    const classes = useStyles();

    return (
        <ScrollToBottom  className={classes.root}>
                    <Message/>
                    <Message/>
                    <Message/>
        </ScrollToBottom>
    );
};

export default Messages;