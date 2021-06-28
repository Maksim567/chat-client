import React from 'react';
import ScrollToBottom from "react-scroll-to-bottom";
import {useStyles} from "./style";
import {map} from "lodash";
import {useSelector} from "react-redux";

function Messages() {

    const classes = useStyles();
    const messages = useSelector((state) => state.messages.collection);

    return (
        <ScrollToBottom className={classes.MessagesContainer}>

            <>
                {map(messages, (message, index) => <p key={index}>{message.room}:{message.text}</p>)}
            </>

        </ScrollToBottom>
    );
}

export default Messages;