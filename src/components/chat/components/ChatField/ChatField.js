import React from 'react';
import SendMessageForm from "../SendMessageForm/SendMessageForm";
import ChatBar from "../ChatBar/ChatBar";
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./style";
import MessagesContainer from "../MessageContainer/MessageContainer";

function ChatField({message, setMessage, setMessages, messages, users}) {

    const classes = useStyles();

    return (
        <Grid xs={9}>
            <ChatBar/>
            <MessagesContainer messages={messages} message={message} setMessages={setMessages} setMessage={setMessage} users={users}/>
            <SendMessageForm messages={messages} message={message} setMessages={setMessages} setMessage={setMessage} users={users}/>
        </Grid>
    );
}

export default ChatField;