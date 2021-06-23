import React from 'react';
import SendMessageForm from "../SendMessageForm/SendMessageForm";
import ChatBar from "../ChatBar";
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./style";
import Messages from "../Messages";


function ChatField({users}) {

    const classes = useStyles();

    return (
        <Grid xs={9}>
                <ChatBar users={users}/>
                <Messages users={users}/>
                <SendMessageForm users={users}/>
        </Grid>
    );
}

export default ChatField;