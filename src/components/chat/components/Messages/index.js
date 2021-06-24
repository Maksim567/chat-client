import React, {useEffect, useState} from 'react';
import ScrollToBottom from "react-scroll-to-bottom";
import {useStyles} from "./style";
import Message from "../Message";
import {map} from "lodash";
import messages from "../../../../redux/slices/messages";

function Messages() {

    const classes = useStyles();

    return (
        <ScrollToBottom className={classes.MessagesContainer}>

            <>
                {map(messages, (message, index) => <Message key={index} message={message}/>)}
            </>

        </ScrollToBottom>
    );
}

export default Messages;