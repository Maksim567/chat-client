import React from 'react';
import Message from "../Message/Message";
import ScrollToBottom from "react-scroll-to-bottom";
import {useStyles} from "./style";


function MessagesContainer({message, setMessage, setMessages, messages}) {

    const classes = useStyles();
    return (
        <ScrollToBottom className={classes.MessagesContainer}>
            {messages.map((message, index) => (
                <>
                    <Message message={message}/>
                </>
            ))}
        </ScrollToBottom>
    );
}

export default MessagesContainer;