import React from 'react';
import Message from "../Message/Message";
import ScrollToBottom from "react-scroll-to-bottom";
import {useStyles} from "./style";


function MessagesContainer({message, setMessage, setMessages, messages, users}) {

    const classes = useStyles();
    return (
        <ScrollToBottom className={classes.MessagesContainer}>

            {messages.map((message, index) => (
                <>
                    <Message key={index} message={message} users={users}/>
                </>
            ))}
        </ScrollToBottom>
    );
}

export default MessagesContainer;