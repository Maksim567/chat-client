import Grid from "@material-ui/core/Grid";
import {useStyles} from ".//style";
import Message from "../Message/Message";
import React, {useState} from "react";
import ScrollToBottom from 'react-scroll-to-bottom';
import {Avatar} from "@material-ui/core";
import map from "lodash/map";

const Messages = ({message, messages, users}) => {

    const classes = useStyles();

    return (
        <ScrollToBottom  className={classes.root}>

            {messages.map((message, index) => (
                <>
                    <Message message={message} users={users}/>
                </>
            ))}
        </ScrollToBottom>
    );
};

export default Messages;
