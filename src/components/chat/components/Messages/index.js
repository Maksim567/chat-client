import React, {useEffect, useState} from 'react';
import ScrollToBottom from "react-scroll-to-bottom";
import {useStyles} from "./style";
import Message from "../Message";
import {map} from "lodash";
import {useSelector} from "react-redux";

function Messages() {

    const classes = useStyles();
    const messages = useSelector((state) => state.messages.collection);

    return (
        <ScrollToBottom className={classes.MessagesContainer}>

            <>
                {map(messages, (message, index) => <Message key={index} message={message}/>)}
            </>

        </ScrollToBottom>
    );
}

export default Messages;