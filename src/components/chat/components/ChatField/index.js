import React from 'react';
import SendMessageForm from "../SendMessageForm/SendMessageForm";
import ChatBar from "../ChatBar";
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./style";
import Messages from "../Messages";
import {useRouter} from "next/router";

function ChatField({users}) {

    const classes = useStyles();
    const router = useRouter();

    return (
        <Grid xs={9} id={router.query.id}>
                <ChatBar users={users} id={router.query.id}/>
                <Messages users={users}/>
                <SendMessageForm users={users}/>
        </Grid>
    );
}

export default ChatField;